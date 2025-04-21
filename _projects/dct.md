---
layout: page
title: DCT Module <br>area optimization
description: methologys for VLSI optimizations
img: assets/img/dct.jpg
importance: 1
category: work

pdf_path: /assets/projects/dct.pdf
ppt_path: /assets/projects/dct_presen.pdf

pretty_table: true

project_date: 2024-06-14

math: true

chart:
  chartjs: true

# toc:
#   sidebar: left
---

## 🎯 Project Overview

This project aimed to aggressively optimize the *area* and *power* consumption of a Discrete Cosine Transform (DCT) forward module for image/video compression, while maintaining image quality (PSNR > 30 dB) and meeting timing constraints.

---

### 🏆 Key Numerical Results

- **Final Area:** Reduced from 6,973,098 to 1,441,982 um² (**~79% reduction**)
- **Final Power:** Reduced from 142 mW to 53 mW (**~63% reduction**)
- **PSNR:** Consistently above 30 dB throughout all optimization steps

---

### ⚡ Optimization Skills & Methods

| Step                        | Main Technique                              | Area (um²) | Power (mW) | Reduction (from previous) |
|-----------------------------|---------------------------------------------|------------|------------|--------------------------|
| Baseline                    | -                                           | 6,973,098  | 142        | -                        |
| Coefficient/Bitwidth Quant. | 8-bit coefficients, 9-bit intermediates     | 3,729,472  | 94         | -3.24M, -48              |
| Coefficient Symmetry        | Exploit 12x12 matrix symmetry               | 2,784,806  | 81         | -0.95M, -13              |
| Sub-expression Sharing      | ASU common sub-expression sharing           | 2,783,910  | 82         | (minimal)                |
| Coefficient Compression     | Fine-tune coefficients by frequency basis   | 2,301,881  | 70         | -0.48M, -12              |
| TP Memory Merging           | Merge two TP_MEMs into one                  | 1,784,102  | 50         | -0.52M, -20              |
| Glitch/Overflow Handling    | Add clamping logic                          | 1,560,684  | 60         | -0.22M, +10              |
| High-Frequency Removal      | Mask out10/out11, both DCT stages           | 1,441,982  | 53         | -0.12M, -7               |

<br>

```chartjs
{
    "type": "bar",
    "data": {
        "labels": ["Glitching solved", "Co quantization", "Symmetry", "Sharing", "tp_BW=9", "Co compressed", "TP merged", "overflow_reduced", "High frequency"],
        "datasets": [
            {
                "label": "Power (mW)",
                "data": [142000, 94000, 81000, 82000, 73000, 70000, 50000, 60000, 53000],
                "backgroundColor": "rgba(54, 162, 235, 0.7)",
                "borderColor": "rgba(54, 162, 235, 1)",
                "borderWidth": 1,
                "yAxisID": "y-power"
            },
            {
                "label": "Area (um^2)",
                "data": [6973098, 3729472, 2784806, 2783910, 2471659, 2301881, 1784102, 1560684, 1441982],
                "borderColor": "rgba(255, 99, 132, 1)",
                "backgroundColor": "rgba(255, 99, 132, 0)",
                "borderWidth": 2,
                "yAxisID": "y-area",
                "type": "line",
                "fill": false,
                "pointBackgroundColor": "rgba(255, 99, 132, 1)",
                "pointRadius": 4,
                "pointHoverRadius": 6
            }
        ]
    },
    "options": {
        "responsive": true,
        "title": {
            "display": true,
            "text": "Power and Area Comparison Across Optimization Techniques"
        },
        "tooltips": {
            "mode": "index",
            "intersect": false
        },
        "scales": {
            "yAxes": [
                {
                    "id": "y-power",
                    "type": "linear",
                    "position": "left",
                    "scaleLabel": {
                        "display": true,
                        "labelString": "Power (mW)"
                    },
                    "ticks": {
                        "beginAtZero": true
                    }
                },
                {
                    "id": "y-area",
                    "type": "linear",
                    "position": "right",
                    "scaleLabel": {
                        "display": true,
                        "labelString": "Area (um^2)"
                    },
                    "gridLines": {
                        "drawOnChartArea": false
                    },
                    "ticks": {
                        "beginAtZero": true
                    }
                }
            ]
        }
    }
}

```


---

### 📋 Optimization Techniques (Summary)

- **Bitwidth & Coefficient Quantization:** MATLAB simulations determined optimal 8/9-bit setting, ensuring PSNR > 30 dB.
- **Coefficient Symmetry:** Leveraged symmetry in the 12x12 DCT matrix to minimize unique multipliers, significantly reducing area.
- **Sub-expression Sharing:** Identified and shared common expressions in ASUs, although synthesis tools already performed similar optimizations.
- **Coefficient Compression:** Adjusted less significant frequency coefficients (e.g., C10), further reducing logic without PSNR loss.
- **TP Memory Merging:** Combined two transpose memories into one, enabling simultaneous read/write and cutting memory area by ~30%.
- **Glitch/Overflow Management:** Implemented clamping logic at 12-bit truncation to prevent overflow/underflow artifacts.
- **High-Frequency Computation Reduction:** Masked highest frequency outputs (out10, out11) in both DCT stages, preserving PSNR while reducing computations and area.

---

### 🔬 Synthesis & Quality Results

- **Area:** 79% reduction
- **Power:** 63% reduction
- **Image Quality:** PSNR always > 30 dB (e.g., windmill image PSNR ~31–34 dB after all optimizations)
- **Timing:** All timing constraints met; critical path remains in main DCT computation.

---

### 📈 Optimization Process (Log Highlights)

- **Early Trials:** Focused on overflow/glitching fixes.
- **Quantization:** Established 8/9-bit setting for coefficients/intermediates.
- **Symmetry & Sharing:** Reduced multipliers and optimized ASUs.
- **Coefficient Compression:** Fine-tuned coefficients for further reduction.
- **TP_MEM Merge:** Major area savings by merging memories.
- **High-Frequency Removal:** Zeroed high-frequency outputs with no PSNR loss.
- **Final:** Explicitly handled zeroed memory locations for further optimization.

---

> **Summary:** By systematically applying quantization, symmetry, coefficient compression, memory architecture simplification, and high-frequency output masking, the DCT forward module achieved dramatic area and power reductions while consistently meeting image quality and timing requirements.

<hr>

<div align="right">
<sub>Summarized using <i>Perplexity (Claude 3.7 Sonnet)</i> · Retouched by <i>Duhyeon Kim</i></sub>
<br>
<br>
</div>


{% include pdf_viewer.liquid %}

{% include ppt_viewer.liquid %}