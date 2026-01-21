---
title: "All about LLM and AI"
date: 2026-01-19
section: "tech-bites"
categories: ["AI", "Notes"]
tags: ["LLM", "", ""]
description: "for the terms that you might curious, stiching them with intution"
reading_time: 10
published: false
---

# 1. Transformer

encoder / decoder

# 2. Mamba

state?

# 3. LoRA

Low Rank Adaption : 걍 바꿀거긴 한데 rank 줘서 효율적으로 공간을 뒤틀어보자 / 잘 맞춰져 있는 공간을 너무 크게 뒤틀일도 없잖아?

# 4. Attention Mechanism

Query, Key, Value : 현재 나오는 단어가 지금까지 나온 단어들로 봤을때 어떤 맥락을 가지는 3가지로 정리해두는거 / 그거 기준으로 다음거 token prediction
⬆️
틀림

Decoder가 Encoder의 출력을 참조하는 메커니즘


# 5. Prefill

prompt 주잖아요? 그거는 next token prediction 할 필요가 없죠, 그냥 바로 KV cache 병렬로 만듬 / 이거 가속화 하는거 루빈 cpx (엔비디아는 신이다.)

# 6. Cross-Attention

Encoder에서 단어들을 직전 단어들만 보지 않고, 모든 배열을 보고 맥락을 정확하게 학습할 수 있게하는거, 현재 문장에 대한 정답 지도 같은거
