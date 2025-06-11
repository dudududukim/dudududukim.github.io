---
layout: post
title: Me ver.2025.04
date: 2025-04-28 11:22:20 +09:00
last_updated: 2025-06-12 07:07:36 +09:00
description: Thoughts on My Future
tags: dream think
categories: me

citation: false
tabs: true
pretty_table: true
# toc:
#   sidebar: left

featured: false
thumbnail: assets/img/me_confuse.png
related_posts: false

published : False
---

## 🏁 Conclusion

Facing a decision between specialization in software applications and low-level hardware systems,  
I carefully evaluated my academic orientation and career aspirations.

Given my interdisciplinary interest in both machine learning and system design,  
and my preference for environments where efficacy is directly measurable,  
I have decided to pursue the path of an `Edge AI System Architect`.

Leveraging a foundation in computer architecture and VLSI acquired during my undergraduate studies,  
I will focus my graduate research on **learning algorithms**, **system optimization**, and **edge intelligence**,  
aiming to develop end-to-end system-level insights.

Through this path, I seek to contribute to practical, scalable AI deployments while maintaining technical depth,  
ultimately bridging the domains of software innovation and hardware optimization.

This decision aligns with my long-term objective:  
to become an engineer capable of integrating complex systems into impactful real-world applications.

***

## 🧠 What I have in mind about the two field.

| 항목         | AI (Privacy Preserving AI)           | Lower Power SoC VLSI                |
|--------------|----------------------------------------|-------------------------------------|
| **관심도**     | 비교적 높은 편 (Mindset 적합)             | 높은 이상향 (Cool factor)            |
| **근무환경**   | 개방적, 유연함                           | 상대적으로 보수적, 정적               |
| **성장가능성** | 빠른 성장, 산업 확대 중                   | 느리지만 깊이 있는 성장, 고부가가치     |
| **자기 이미지**| "비슷한 사람들과 일할 수 있을 것 같다"      | "내가 이 분야에 있으면 멋있을 것 같다" |
| **리스크**     | 기술 트렌드 변화 빠름                     | 연구진입 장벽이 높음, 자리 적음         |

***

## 🧑‍💻 Who i am?

| **Head**      | **설명**                       |
|---------------|-------------------------------|
| Mindset       | 자유롭고 개방적                |
| Work Style    | 유연하고 창의적                |
| Feedback      | 빠르고 직접적                  |
| 커뮤니티      | 비슷한 가치관을 가진 사람들과 협업 |

***

🤔 그럼에도 Lower Power SoC는 멋있는 분야라는 생각이 들지만, 해당 분야에 대한 나의 지속적인 관심이 과연 나 자신의 열정인지, 외부적인 인정인지에 대한 확신이 없음.

***

## 📋 Things to do

| 이번 주 안에 할 것 | 내용 |
|------------------|-----|
| 진로 기준 리스트업 | "나는 이런 사람들과, 이런 환경에서, 이런 문제를 다루고 싶다"를 10문장 이내로 써보기 |
| AI 기술 미니 프로젝트 | 작은 Federated Learning 프로젝트 하나 Github에 올려보기 (ex: Flower framework 사용) |
| 심리적 회복 루틴 만들기 | 매일 산책 30분 + 마음 일기 5줄 쓰기 |

***

## ✅ TDL done

<!-- iSINGLab : https://tacc.ust.hk/#research -->

### 📝 진로 기준 리스트업

> 나는 자신(ego)을 우선시 여기는 사람들과,<br>
> 밝은 햇살과 공기와 소통이 넘치는 환경에서,<br>
> 실질적인 문제에 대해서 불가능은 없다는 생각으로 엣지 환경 AI의 다음의 혁신을 다루고 싶어.

📝 [related fields 링크](https://chatgpt.com/s/dr_680ef5583ae48191a8104530ca0982e1)

---

### 🤖 AI 기술 미니 프로젝트

> "Indoor Object Recognition(or other task) via Federated Learning on Jetson-based Edge Devices"

---

### 🧘 심리적 회복 루틴 만들기

> 8시 기상 → 학교(진로 탐색 + 가벼운 서베이 논문읽기) → 점심 → 카페 혹은 개방된 공간(미니 프로젝트 진행) → 저녁 → 유산소 운동(제발.. 좀 하자) → 12시 전에 눕기

***

## 🛠️ SW Engineer가 HW Engineer랑 자연스럽게 소통하려면?

- **Computer Architecture**: memory hierarchy, cache coherence, pipelining, superscalar, SIMD/SIMT
- **Parallel Programming**: CUDA, OpenCL, OpenMP
- **Model Optimization**: quantization, pruning, knowledge distillation
- **Low-level Programming**: C, C++, assembly 감각 (특히 memory operation 최적화)
- **OS Concepts**: scheduling, memory management, I/O optimization
- **Distributed Systems**: federated setting에선 필수 (RPC, communication compression)

***

## 🚀 Edge AI System Architecture란?

Edge device (IoT, Mobile, Wearable 등) 상에서  
제한된 자원(CPU/GPU/Memory/Power) 안에서  
AI를 효율적으로 구동시키기 위한 전체적인 System 설계 및 최적화를 의미해.

구체적으로는:

- **AI Model Compression** (Quantization, Pruning, Distillation)
- **HW-SW Co-Design** (AI model 구조를 HW-friendly하게 설계)
- **Edge Computing Optimization** (local compute / cloud offload decision)
- **Federated Learning** (분산 환경에서 학습)
- **Test Time Adaptation (TTA)** (dynamic 환경에서 모델 적응)
- **Low-level SW Optimization** (memory access pattern, parallelism 최적화)
- **System-on-Chip (SoC) 연계 이해** (VLSI와 accelerator 연결)

👉 [NVIDIA Jetson Edge AI Certification Programs](https://developer.nvidia.com/ko-kr/embedded/learn/jetson-ai-certification-programs)
👉 [Naver AI lab](https://naver-career.gitbook.io/kr/service/clova/naver-ai-lab)
---
