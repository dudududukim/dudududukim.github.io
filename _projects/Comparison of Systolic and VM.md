---
layout: page
title: Systolic Array and Vector Multiplier
description: based on FPGA Implementation
img: assets/img/tpu.jpg
importance: 1
category: work

pdf_path: /assets/projects/ee2.pdf
ppt_path: /assets/projects/ee2.key

pretty_table: true

chart:
  chartjs: true

# toc:
#   sidebar: left
---

## Comparison between Systolic Array and Vector Multiplier based on FPGA Implementation 🛠️

This project pits **systolic arrays** against **vector multipliers** for matrix multiplication on Xilinx's `xcu250` FPGA. Let’s break it down! 🧠

---

### <br>Introduction 🎯
With AI accelerators booming, efficient *matrix multiplication units (MXUs)* are critical. We compare:
- **Systolic Arrays**: Inspired by Google’s TPUv1
- **Vector Multipliers**: GPU-style adder-tree designs

Tested on matrix sizes from `8×8` to `64×64`, we dive into *timing*, *resources*, and *scalability*. 📈

---

### <br>Architectural Highlights 🏗️
- **Systolic Array**: A grid of PEs with *built-in pipelining*. Weights stay put, data flows—simple yet powerful! 🔄
- **Vector Multiplier**: Direct vector ops with an adder tree. Needs *explicit pipelining* for big matrices. 🧮

---

### <br>Implementation Snapshot 🔧
- **FPGA**: `xcu250` UltraScale+
- **Matrix Sizes**: `8×8`, `16×16`, `32×32`, `64×64`
- **Vivado Flags**: `dont_touch`, `use_dsp`, `ram_style=block`

---

### <br>Results Roundup 📊
#### Resource Use
- **Systolic Array**: Steady rise—e.g., `4096 DSPs` at 64×64.
- **Vector Multiplier (Non-pipelined)**: Leaner but *timing flops* at scale.
- **Vector Multiplier (Pipelined)**: Timing improves, but *LUTs soar* (e.g., `36166` at 64×64).

```chartjs
{
  "type": "bar",
  "data": {
    "labels": ["N=8", "N=16", "N=32", "N=64"],
    "datasets": [
      {
        "label": "Systolic Array (LUT)",
        "data": [202, 656, 1502, 4125],
        "backgroundColor": "rgba(75, 192, 192, 0.7)",
        "borderColor": "rgba(75, 192, 192, 1)",
        "borderWidth": 1
      },
      {
        "label": "Vector Multiplier (LUT)",
        "data": [38, 87, 169, 325],
        "backgroundColor": "rgba(255, 99, 132, 0.7)",
        "borderColor": "rgba(255, 99, 132, 1)",
        "borderWidth": 1
      },
      {
        "label": "Vector Multiplier Pipelined (LUT)",
        "data": [38, 87, 9129, 36166],
        "backgroundColor": "rgba(255, 159, 64, 0.7)",
        "borderColor": "rgba(255, 159, 64, 1)",
        "borderWidth": 1
      }
    ]
  },
  "options": {
    "responsive": true,
    "plugins": {
      "title": {
        "display": true,
        "text": "LUT Utilization Comparison (Log Scale)"
      },
      "tooltip": {
        "mode": "index",
        "intersect": false
      }
    },
    "scales": {
      "y": {
        "type": "logarithmic",
        "title": {
          "display": true,
          "text": "Number of LUTs (log scale)"
        }
      },
      "x": {
        "title": {
          "display": true,
          "text": "Matrix Size"
        }
      }
    }
  }
}


```

#### Timing (Max Delay)
- **Systolic Array**: Rock-solid ~`5ns` across sizes. ⏱️
- **Vector Multiplier (Non-pipelined)**: Delay balloons to `54.936ns` at 64×64. 😬
- **Vector Multiplier (Pipelined)**: Better at `22.722ns`, but still lags.

```chartjs
{
  "type": "line",
  "data": {
    "labels": ["N=8", "N=16", "N=32", "N=64"],
    "datasets": [
      {
        "label": "Systolic Array",
        "data": [4.995, 4.904, 4.443, 6.433],
        "backgroundColor": "rgba(54, 162, 235, 0.2)",
        "borderColor": "rgba(54, 162, 235, 1)",
        "borderWidth": 2,
        "pointRadius": 5,
        "tension": 0.1
      },
      {
        "label": "Vector Multiplier (non-pipelined)",
        "data": [9.383, 13.413, 24.552, 54.936],
        "backgroundColor": "rgba(255, 99, 132, 0.2)",
        "borderColor": "rgba(255, 99, 132, 1)",
        "borderWidth": 2,
        "pointRadius": 5,
        "tension": 0.1
      },
      {
        "label": "Vector Multiplier (pipelined)",
        "data": [6.16, 8.986, 8.509, 22.722],
        "backgroundColor": "rgba(255, 159, 64, 0.2)",
        "borderColor": "rgba(255, 159, 64, 1)",
        "borderWidth": 2,
        "pointRadius": 5,
        "tension": 0.1
      },
      {
        "label": "Vector Multiplier (pipelined + DSP flag)",
        "data": [6.16, 8.986, 9.44, 25.555],
        "backgroundColor": "rgba(153, 102, 255, 0.2)",
        "borderColor": "rgba(153, 102, 255, 1)",
        "borderWidth": 2,
        "pointRadius": 5,
        "tension": 0.1
      }
    ]
  },
  "options": {
    "responsive": true,
    "plugins": {
      "title": {
        "display": true,
        "text": "Maximum Path Delay Comparison (ns)"
      },
      "tooltip": {
        "mode": "index",
        "intersect": false
      }
    },
    "scales": {
      "y": {
        "title": {
          "display": true,
          "text": "Delay (ns)"
        },
        "beginAtZero": true
      },
      "x": {
        "title": {
          "display": true,
          "text": "Matrix Size"
        }
      }
    }
  }
}

```

---

### <br>Key Takeaways 🔍
- **Scalability**: Systolic arrays win with *consistent timing* and efficient growth. 🌟
- **Trade-offs**: Vector multipliers need *heavy pipelining*, spiking resource use for big tasks.

---

### <br>Conclusion 🏁
- **Systolic Arrays**: Champs for *large-scale matrix ops*. 💪
- **Vector Multipliers**: Fit for *smaller, parallel setups* (think GPUs).

> *In a nutshell: Systolic arrays rule for big matrix crunching; vector multipliers shine in compact roles!* 🚀

<div align="right">
<sub>Summarized using <i>Perplexity (Claude 3.7 Sonnet)</i> · Retouched by <i>Duhyeon Kim</i></sub>
<br>
<br>
</div>


{% include pdf_viewer.liquid %}

{% include ppt_viewer.liquid %}