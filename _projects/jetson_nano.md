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
ongoing : true

project_date: 2025-06

# chart:
#   chartjs: true

# toc:
#   sidebar: left
---

> 진행중 로그 기록중

[Get Started with Jetson Nano Developer Kit](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-devkit#intro)

<hr>

### Install OS to jetson Nano

as my device(jetson nano) has no sd card slot, i need to install with the SDK.
Jetson as internal eMMC 16GB for installing the os
[VMware Fusion](https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion)

<hr>

### 1. Jetson Nano SDK manager

OS booting with Jetpack 4.x

There exist specific ubuntu version (16 or 18) to install jetpack 4.6.

And wifi ac9260 card is not suit for Jetpack 4.x.


<hr>

### 2. VNC server setting

https://developer.nvidia.com/embedded/learn/tutorials/vnc-setup

Not similar with rasberrypi which deals vnc server with GUI.

Nvidia official provides the site to figure out vnc server setting.

<hr>

### 3. Following "Hello AI World" course

https://github.com/dusty-nv/jetson-inference/blob/master/docs/aux-docker.md

cloning and downloading docker file


<hr>

### 4. object detection and image classification

In Object detection, you could use temporal base column filtering in real world application.

Detection Dataset : [OpenImagesDataset](https://storage.googleapis.com/openimages/web/visualizer/index.html?set=train&type=detection&c=%2Fm%2F0fp6w)


<hr>

### 5. Using Pre-defined jetson.inference package

After building the c++ and binding it with python, we can use c++ code in python function.

Which means we can inference with TensorRT optimized model computation.

So we need to make build with following guide [Building the Project from Source](https://github.com/dusty-nv/jetson-inference/blob/master/docs/building-repo.md)

(samsung notebook)

<hr>

### 1. What does build do?

내가 코드및시스템최적화 수업에서 build를 한적이 있다.

c++코드의 loop tiling, simd, urolling 등 기법을 적용하고 torch build를 했었다.

역할은 C++ 라이브러리를 컴파일하고, 컴파일된 오브젝트 파일을 TensorRT나 CUDA 라이브러리와 링크해 가속 추론이 가능한 실행 파일과 라이브러리를 생성하며, C++ 코드를 Python에서 사용할 수 있도록 바인딩 파일을 만들고, 필요한 의존성을 자동으로 점검한다.


https://github.com/jugfk/installVSCode

https://code.visualstudio.com/updates/v1_85

https://binl.tistory.com/entry/SK-Telecom-%EA%B3%B5%EC%9C%A0%EA%B8%B0-%ED%8F%AC%ED%8A%B8%ED%8F%AC%EC%9B%8C%EB%94%A9-%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-2023%EB%85%84-5%EC%9B%94

할루시네이션 ufw port에 22를 넣어야하는데 서비스포트넣으라고 해서 한참 또 해멤.....


{% include figure.liquid loading="eager" path="assets/img/jetson1.png" class="img-fluid rounded z-depth-1" zoomable=true %}

> Mission CLEAR!

<hr>

### 2. Labeling detection for 뚱땅이

My projects' two main goal is to track 뚱땅이 loaction and sound.

Since when our family get out of home, 뚱땅이 starts to bark and it's a now big problem for my family.

So firstly, designing the monitoring tool with jetson nano, and adding functional actinos to stabilize 뚱땅이.

Using open source tool [LabelImg](https://github.com/HumanSignal/labelImg?tab=readme-ov-file) to annotate my own dataset.

```
pip3 install labelImg
labelImg
labelImg [IMAGE_PATH] [PRE-DEFINED CLASS FILE]
```

https://github.com/HumanSignal/awesome-data-labeling

