---
layout: page
title: Jetson Nano 4GB for AI
description: Utilizing Jetson Nano for my pet monitoring
img: assets/img/jetson.png
importance: 1
category: work

# pdf_path: /assets/projects/nlp_project.pdf
# ppt_path: /assets/projects/lyrics_recommandation.pptx

pretty_table: true
ongoing : false

project_date: 2025-06-30

# chart:
#   chartjs: true

toc:
    sidebar: left
---

> 2025.06.06 ~ 

<hr>

# Hardware Composition

- **`Jetson Nano 4GB Dev kit`** : Used for inference accelerating(CUDA, TensorRT)
- **`Arduino Nano`** : Used for controlling servo motor(PWM Generator)
- **`Rasberrypi CAM v2`** : CSI camera directly connected to Jetson Nano

{% include figure.liquid loading="eager" path="assets/img/jetson/jetson_hardware.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}

Jetson - Arduino : USB connection / Arudion : D9, D10

<hr>

# Overview

**Real-time object tracking system** implemented on Jetson Nano 4GB using **CenterNet** model optimized with **TensorRT** for GPU acceleration. The system performs object detection at **1280x720 resolution** and controls **2-axis servo motors** via Arduino for camera positioning.

**Core Architecture:**
- **Multi-threaded pipeline**: Video inference, center tracking, display, and control threads running concurrently
- **GPU-accelerated processing**: CUDA kernels for preprocessing and postprocessing eliminate CPU-GPU memory transfers
- **PID servo control**: Adaptive dead zone algorithm with object size-based stabilization
- **Double-buffered display**: 30fps real-time visualization with video recording capability

**Technical Stack:**
- **Detection Model**: CenterNet with 128x128 feature map output
- **Optimization**: TensorRT FP16 inference on Maxwell GPU (sm_53)
- **Communication**: USB serial protocol with ACK-based synchronization
- **Performance**: GPU-only inference pipeline with atomic operations for thread safety

**Key Features:**
- **Adaptive step control**: Variable servo movement (1-5 steps) based on PID output magnitude
- **Frame dropping strategy**: Non-blocking display updates maintain real-time performance
- **Object-aware dead zone**: Dynamic stabilization based on tracked object dimensions
- **Synchronous/asynchronous modes**: Configurable operation for different performance requirements

<hr>

# Dection Model

CenterNet Mobilenetv2 0.5x

<hr>

# Code Explaination

#### `global.h` 
centralizes global variable declarations like `g_running`, `g_object_mutex`, and `g_threshold` for use across the entire pipeline (video inference, center tracking, post-processing, and display).

It provides thread synchronization through mutexes and atomic variables, ensuring safe access to shared data between multiple threads.

**Key features:**

- **ODR compliance:** Uses `extern` declarations with definitions in `main.cpp`
- **Thread safety:** Mutexes and atomic types for concurrent access
- **Modular communication:** Single interface for inter-module data sharing

<hr>

#### `types.h`

types.h defines globally used structs `TrackedObject` and `BBox`.

**ODR(One Definition Rule)** is strictly maintained through this simple header file.

<hr>

#### `cetner_tracking.cpp`

**trackingThread** -> updating servo with some interver(10ms) / the action is taken when the tracked object timestamp is updated. (it's prevented with mutex in video inference)

_Defining Classes - PIDController / AdaptiveDeadZone / CenterTracker_

**PIDController** : We use only PI terms since derivative terms have less meaning when tracking motion is changing the frame, making real dt measurement unreliable. (kp=0.4f, ki=0.002f) Integral windup protection is constraint between [-100.0f, 100.0f].

**ServoController** : It sends char with serial communication. If you want to use synchronous mode, it offers `isWaitingForAck()`. But it does not perfectly works.

**AdaptiveDeadZone** : AdpativeDeadZone is the key stablization algorithm that maintains the blurring due to inferenced frame motion delay. We choose the max length of the tracked object width and height + ratio is same as the frame ratio(currently 1280:720)

**CenterTracker** : Based on Trackedobject send serial command ('w', 'a', 's', 'd') to arduino through usb connect. Features include adaptive step control where step count (1-5) is calculated as min(5, max(1, abs(pid_output)/8.0 + 1)), timestamp-based duplicate prevention, confidence gating below global threshold, and PID reset after 3 seconds without valid detection. The system operates in synchronous mode (waits for ACK) or asynchronous mode (continuous processing) based on g_sync_mode.


<hr>

#### `display.cpp`

It operates using **double buffering** where one buffer serves as the **front buffer** for display output while the other serves as the **back buffer** for receiving new frame data from the inference pipeline(video_inference.cpp). 

The `updateDisplay()` function writes new frames to the back buffer non-blockingly, while displayThread() reads from the front buffer at 30fps and swaps buffers atomically when new data is ready. When the back buffer is busy, frames are immediately dropped to maintain real-time performance without blocking the main inference pipeline.

<hr>

#### `main.cpp`

**Main Thread Flow**: Argument validation → Signal handler registration → Component initialization → Thread launching → Video inference execution → Cleanup

**Parallel Threads**:

- Control Thread: Handles user input ('t', 'r', 'q') for tracking/recording control

- Tracking Thread: Executes trackingThread() for servo control coordination

- Display Thread: Manages OpenCV display and video recording via startDisplayThread()

**Synchronization Points**: Global variables (g_running, g_sync_mode) coordinate thread communication and graceful shutdown across all components

<hr>

#### `video_inference.cpp`

CPU Frame → GPU Upload → GPU Resize/Normalize → GPU Inference → GPU Postprocess → CPU BBox → CPU Display

**Key Features**

- tensorRT model load or engine build
- mutex to update tracked_object
- buffer binding

<hr>

#### `cuda_kernels.cu`

It contains **two main CUDA kernels** for CenterNet inference pipeline that directly utilize TensorRT buffers: **`normalizeAndReorder`** for preprocessing (ImageNet normalization + HWC→CHW conversion) and **`postProcessKernel`** for CenterNet-specific postprocessing (heatmap→bounding box with 3x3 NMS).

**Key Architecture Benefits**
- **GPU-only pipeline**: Eliminates CPU-GPU memory transfers during inference
- **Parallel efficiency**: Each pixel processed simultaneously (total pixels for preprocessing, 128x128 feature map for postprocessing)
- **Memory optimization**: Direct TensorRT buffer integration with zero-copy operations
- **CenterNet optimizations**: Local maximum detection, coordinate transformation, and thread-safe atomic operations
- **Real-time performance**: Optimized for Jetson Nano's Maxwell architecture (sm_53)


<hr>

#### `cuda_postprocess.cu`

Contains **CenterNet-specific post-processing kernel** that converts TensorRT model outputs into bounding boxes. The **`postProcessKernel`** performs sigmoid activation on heatmap values, applies 3x3 local maximum suppression for peak detection, and transforms feature map coordinates through multiple scaling stages (feature→model→original image space) to generate final bounding boxes.

**Key Architecture Benefits**
- **CenterNet algorithm implementation**: Heatmap peak detection with confidence thresholding
- **3x3 Local NMS**: Eliminates duplicate detections in neighborhood regions  
- **Multi-stage coordinate transformation**: Feature map (128x128) → Model input → Original image scaling
- **Thread-safe atomic operations**: Uses `atomicAdd()` for concurrent bounding box storage
- **GPU-parallel processing**: Each thread handles one pixel in 128x128 feature map simultaneously


<hr>

#### `cuda_postprocess.cpp`

Contains **GPUPostProcessor class implementation** that serves as a C++ wrapper for CUDA post-processing operations. The class manages GPU memory allocation for bounding box storage, launches the `postProcessKernel` via `launchPostProcessKernel()`, and handles GPU-to-CPU memory transfers to return detection results as `std::vector<BBox>`.

**Key Architecture Benefits**
- **RAII memory management**: Automatic GPU memory allocation in constructor, cleanup in destructor
- **GPU-CPU bridge**: Seamless integration between CUDA kernels and C++ STL containers
- **Memory optimization**: Pre-allocated GPU buffers (`d_output_boxes`, `d_box_count`) with MAX_BOXES=100 limit
- **Zero-copy on GPU**: All post-processing operations remain on GPU until final result transfer
- **Thread-safe design**: Uses atomic operations from CUDA kernel for concurrent bounding box storage

<hr>

# Dev Log

[Jetson Nano Development Log](/blog/2025/jetson-nano-dev-log/)

<hr>

# Photos

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/jetson/jtop.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/jetson/IMG_8053.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/jetson/IMG_8064.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/jetson/IMG_8149.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/jetson/IMG_8150.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
