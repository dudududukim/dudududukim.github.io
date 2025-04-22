---
layout: page
title: Smart Shared Fridge System
description: embedded system with RPi and OpenCV
img: assets/img/smart_fridge.png
importance: 1
category: work

pdf_path: assets/pdf/smart_fridge.pdf
ppt_path: 

pretty_table: true

project_date: 2024-08-24

github: https://github.com/dudududukim/siwon_Hands

math: true

chart:
    chartjs: true

toc:
    sidebar: left
---

## 취약계층을 위한 스마트 공유 냉장고 시스템 🏠

취약계층을 위한 스마트 공유 냉장고 시스템은 음식 낭비를 줄이고 취약계층에게 도움을 제공하는 사회적 목적을 가진 프로젝트입니다. RFID를 이용한 잠금장치와 실시간 이미지 분석을 통한 음식 재고 관리를 특징으로 합니다. 🥫

<hr>

## Functions ⚙️

- **RFID 접근 제어**: 취약계층만이 접근 가능 🛡️
- **자동 재고 관리**: 내부 카메라와 이미지 분석을 통한 실시간 재고 확인 📷
- **음식물 투입 및 분배 자동화**: 3축 이동장치를 통한 자동화된 음식물 처리 🤲

<hr>

## Hardware Composition 🛠️

이 시스템을 구축하기 위해서는 다음과 같은 하드웨어가 필요합니다.

- Arduino
- RFID 리더기
- ESP32-CAM
- 솔레노이드 잠금장치
- stepping motor

<hr>

## Software Stack 💻

- C/C++ (Arduino, ESP32-CAM)
- Python (Raspberry Pi)
- OpenCV and Computer Vision Algorithms
- CATIA (3D Modeling)

<hr>

## Flowchart 🗺️

<div class="row mt-3">
        <div class="col-sm mt-3 mt-md-0">
                {% include figure.liquid loading="eager" path="https://github.com/user-attachments/assets/96653b6a-1231-47ce-984f-a5d599319720" class="img-fluid rounded z-depth-1" zoomable=true %}
        </div>
        <div class="col-sm mt-3 mt-md-0">
                {% include figure.liquid loading="eager" path="https://github.com/user-attachments/assets/ece3a685-a2ab-455b-b9b5-494ecffe55b6" class="img-fluid rounded z-depth-1" zoomable=true %}
        </div>
</div>

<hr>

## Solutions 💡

<div class="row mt-3">
        <div class="col-sm mt-3 mt-md-0">
                {% include figure.liquid loading="eager" path="https://github.com/user-attachments/assets/e9273962-866b-440a-a81b-ff30ccdd7aee" class="img-fluid rounded z-depth-1" zoomable=true %}
        </div>
        <div class="col-sm mt-3 mt-md-0">
                {% include figure.liquid loading="eager" path="https://github.com/user-attachments/assets/b5a6e8b9-c309-4035-b197-16d154208c24" class="img-fluid rounded z-depth-1" zoomable=true %}
        </div>
</div>

<hr>

## Video 🎥

{% include video.liquid path="https://www.youtube.com/embed/0dWZBx3Ez50" class="img-fluid rounded z-depth-1" width='100%' min-height='500px'%}

{% include pdf_viewer.liquid %}

{% include ppt_viewer.liquid %}