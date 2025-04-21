---
layout: page
title: d2f (digital 2 film)
description: deep learning-based film grain and color synthesis
img: assets/img/dark_room.jpg
importance: 2
category: work

pdf_path: 
ppt_path: 

pretty_table: true

project_date: 2025-01-31

# chart:
#   chartjs: true

toc:
  sidebar: left
---

> 📆 25.01.31 ~ 
> Temporary suspension


#### 🛠 Tech Stack
- mlx framework
- python / pytorch
- etc...

<hr>

### 🎯 Why Start This?
Since I'm unsure about what I want to be—a businessman, a startup member, a personal developer, or something else—I've been feeling uneasy these days. However, one thing I've realized is that I have a strong desire to solve problems or fulfill my own needs by learning new skills, such as AI, circuit design, and system development. Whether intentional or not, I have a day off today, so I'm setting aside my future plans and immersing myself in this project.

**Final goal** is : 
1. making active users with my product
2. finishing with a level of completeness that makes it presentable

Praying for myself 🧯

<hr>

### 😭 Why suspension?

1. `Resource limitration` -> i can't run EfficientDet(which is purposed for efficiency, using the feature fusion tech.) or ViT
<br>

2. The max capa of my M2 air 16gb with proper batch size is UNET-512
<br>

3. The film grain and colour complexity is not that easy, i thought as i have the my own data i can make it but unlike other tasks that deals with a specific purpose, `considering 2 factors in one pipeline` is complex.
<br>

4. `Deployment is not my style`. If the product is all made, i could tried but without any motivation it was hard for me to learn the AWS tools.
<br>

5. Also, thought `data` is enough (375 pics) since it has high resolutions(2048x3089). but as we need to use it with resized data to fit in memory and make model capture the overall colour. It `was not enough`.

<hr>

### 📗 What i have learned?

1. [Unsupervised Denosier](https://github.com/zhengdihan/Unsupervised_denoising)를 읽으면서 model 자체를 하나의 이미지의 denosing을 위해서 사용한다는 점이 놀라웠다. 대부분은 모델을 학습하고 freeze된 상태에서의 결과물 추론을 기대하는데, 이 논문에서는 `모델을 하나의 재귀함수처럼` 사용하여 prior를 따라가도록 만드는 과정이 너무나 신기했고, 이러한 개념을 이해하기 위해서 `확률이 얼마나 중요한지`를 알 수 있었다. 특히 AMDD이라는 방법을 완벽하게 이해하지는 못했지만, 노이즈 이미지 만을 가지고 디노이징을 해나악는 과정에서의 퀄리티도 좋았고, 모델을 바라보는 새로운 관점을 느낄 수 있었다.
<br>

2. pytorch의 학습에 대한(vision model 중심) convention을 많이 익힐 수 있었다. 특히 UEGAN은 `IEEE T-IP` 에 개시된 논문으로 CVPR, ECCV와 같은 속도감 있는 연구와 달리 연구의 완성도를 느낄 수 있었으며, 해당 [source code](https://github.com/eezkni/UEGAN/tree/master)를 읽어보면서 pytorch 학습의 디테일한 부분들을 학습할 수 있었다. 특히 IEEE T-IP 특성인지 코드가 굉장히 깔끔하게 정리되어있었고, `깔끔한 코드가 가독성에 얼마나 도움이 많이되는지`를 알 수 있었다. 이전까지는 코드를 보면서 이부분도 중요한 역할인가에 대한 직관이 없었다면, UEGAN 뿐만 아니라 다양한 pytorch code implementation을 보면서 어떤 부분을 집중적으로 봐야하고, 어떤 부분은 convention적인지 구분하는 직관을 가지게 되었다.
<br>

3. model training에서 `메모리와 computation의 효율성`과 capacity의 중요성을 느낄 수 있었다. 특히 더 성능 좋은 모델을 위해서 가중치를 높이면 가중치 갯수가 증가하는 것도 문제지만, 해당 가중치의 grad를 추적하기 위해서 사용되는 메모리량도 늘어나기 때문에 얼마나 성능이 메모리 집약적인지를 느낄 수 있었다. 또 모델의 computation 능력에 비해서 `memory w/r 비율이 높으면 성능 비효율`이 발생하기 때문에 prefetcher와 같은 데이터 로더를 사용하거나, tqdm과 time으로 학습 초기에는 compute / read 효율을 측정하는 것도 좋은 profiling 방법이라는 점을 알게되었다.
<br>

4. 하나의 목표를 향해서 필요한 자료들과 논문들을 읽으면서 공부를 해나가는 과정은 확실히 흥미롭다는 점을 알게되었고, 진정한 전문가가 되기 위해서 읽어야할 논문들이 얼마나 많은 가를 알게되었다. 어떠한 목표를 위해서는 **그 목표로 작성된 논문 뿐만 아니라 해당 분야 자체의 다양한 논문을 읽는 것**이 훨씬 더 다양한 접근을 가능하게 할 것이라는 확신이 들었다. 비단 CV라도 NLP의 attention mechanism을 분류모델에서는 적극활용하는 점은 AI라는 분야 전반에 대한 관심이 필요함을 알 수 있다. 그리고 공부를 driving하는 force는 그 분야에 대한 관심일 수도 있지만, 내가 만들고자 하는 하나의 가치를 명확하게 하는 것이 훨씬더 중요하다고 생각하게 되었다. 그런 의미에서의 나의 분야에 대한 나의 과감한 선택이 나를 기다리고 있다고 생각한다.
<br>

5. 또 ViT를 공부하면서, deepseek의 multi-head latent attention같은 경우에도 결국 latent space 개념을 활용하는 건데, 이는 VAE에서도 나오는 개념이니 task과 관련없이 중요한 **milestone과 같은 개념들을 익히고 고정관념을 피하려고 하는 노력**이 필요할 것 같다.
<br>

6. 그리고 분명히 AI의 시대가 도래했지만, 여전히 `legacy algorithm의 중요성`과 효율성을 무시해서는 안된다는 점을 알게 되었다. ADMM을 위해서 사용된 BM3D나 grain noise detect을 위해서 사용된 Homogeniety block detection 과 같은 윈도우 기반의 방법들은 결국 내가 지금 가진 자원내에서 내가 필요한 성능을 위해서 적합한 방식을 모색할때 더 넓은 시야를 가지게 해줄 것이다.
<br>

7. `mlx`와 같은 하드웨어 최적화 프로그램이나 framework를 위해서는 결국 메모리를 직접적으로 관리하는 **low level programming language의 필요성**을 더욱 체감할 수 있었다. 내가 python을 사용하는 사람이 되더라도 필요에 따라서 source code 자체를 수정하고 build할 수 있는 사람이 되고 싶다.
<br>

8. 또한 현재의 cpu, gpu, tpu와 같은 Heterogeneous computing system에서 apple silicon과 같은 `Unified Memory`가 가지는 이점을 확실히 알 수 있었다. 특히 CUDA의 경우 pin_memory option을 사용하는데 이는 운영체제에서 swap 못하는 page-locked memory에 바로 dataloader가 data를 올림으로써 DMA가 바로 GPU로 데이터를 복사할 수 있도록 한다. pin_memory=false일시, **pageable memory에서 page-locked memory로 이동하는 추가과정**이 필요하기 때무네 GPU와 CPU간 데이터 전송에 병목이 발생할 수 있는 것이다. 이를 Unified memory의 경우는 GPU CPU가 메모리 공간을 공유하기 때문에 불필요한 데이터 이동이 없다. 하지만 이는 CPU GPU가 제한된 노트북과 같은 환경에서는 유용할 수 있지만, 대규모 서버 시스템에서는 확장성에서 GPU자체의 메모리가 존재하는게 훨씬 효율적일 것으로 생각된다. 이와 같이 결국 SW를 다루더라도 하드웨어에 대한 지식 전문성을 다르게 만든다는 확신이 든다. 그럼에도 NVIDIA의 연산성능은 정말 뛰어나다.
<br>

9. 그리고 무엇보다 내용의 전문성이 높아진다면 꼭! `공식문서를 정독하는 것이 중요`하다는 것을 느꼈다. 아무리 GPT랑 대화하더라도 결국 나의 환경에서의 변수가 있고, 공식문서를 읽게되면 gpt가 알려주지 않는 다양한 기능들을 더 알 수 있다. 초기에는 빠르게 gpt로 접근하더라도 조금 복잡하거나 모호한 개념에 대해서는 공식문서에 시간을 투자하는 과감한 선택은 필수라고 생각한다.


<br>
<hr>

## Thigns done ⬇️

<br>

### 📝 MLX framework

<hr>

*1.*
#### *mlx.data.buffer_from_vector*
**error** : dictionary로 구성된 sample = [{'image' : b'Path/'}], 

이거를 buffer_from_vector를 mlx.data로 실행하면 byte array가 넘어와야하는데, 빈배열이 넘어옴 ([] dtype=int8)

**Solution** : 

Mac 초기화 -> mlx-data를 pip로 install하지 않고 소스코드에서 python blinding으로 설치함

(환경변수와 다양한 dependency가 꼬여있던 것으로 파단됨)

<hr>

*2.*
#### *mlx framework insights*
**Buffer** : image를 필요시에 load하여 불필요하게 load되는 경우를 막는다. -> 애플이 지리긴하는듯 (결국 Apple silicon을 만든이상 그들의 framework와 protocol 개발은 불가피하고, 여기서도 만약에 두각을 드러낸다면 결국 애플 사이클 다시 온다고 봄)


**stream.prefetch(4, 4)** : CPU에서 4개의 batch를 GPU연산동안 load해두고, GPU도 4개의 batch를 한번에 불러드리도록 설정함

<hr>

*3.*
#### *binary cross entropy에서 mx.compile 문제*

해결 못함 ➡️ 그냥 num_classes=2 로 하고 mlx.nn.losses.cross_entropy로 함

binary cross entropy에서 @partial(mx.compile) 옵션에서 문제가 발생하는 듯함

<hr>

*4.*
####  *Training overfitting (resent44)*

training data가 204개에서 training이 overfitting이 발견하는 것을 확인하였다.

데이터는 (224,224) center crop되어 사용되었고, batch_size = 16, epoch=50, lr=1e-5

| Epoch | Train Loss | Train Accuracy | Test Accuracy |
|-------|-----------|---------------|--------------|
| 49    | 0.040     | 0.990         | 0.688        |

📙 이유? 아마도 data가 부족한듯 하다. image crop까지는 어떻게 하긴하는데, crop보다는 224,224 데이터를 새로 생성해서 진행해야겠다.

<hr>

*5.*
####  *224,224로 이미지 쪼개서 학습 진행*

💾 원래 데이터 : 1.02GB -> 743MB (6.13GB disk)

train length : 42111  
Test length : 4678 

🙋🏾‍♂️ 했는데도 training acc는 1에 epoch1만에 수렴하는데, test accur는 서서히 올라가긴하나 **overfitting을** 보임

사실 내가 어떤 프로젝트를 진행하거나 공부를 진행할때 항상 이러한 넘기 귀찮은 문제들에서 포기하고 그냥 학교나 사회에서 주어진 것들을 열심히 하기 위해서 돌아갔었다.
그런데 이번 한달의 목표를 이러한 나를 마주하고 그러한 허들을 침착고 조용히 꾸준하게 넘어가려고 한다.
이번에도 사실 그냥 '아 뭐야 몰라'하고 넘어갈 수 있지만 **나는 이번만큼은 끝을 봐야한다.**

{% include figure.liquid loading="eager" path="/assets/img/d2f/unbalanced_dataset.png" class="img-fluid rounded z-depth-1" zoomable=true %}

보면, buffer를 랜덤하게 shuffle하고 plot을 해보았는데, **데이터의 상당한 편향**을 발견했다. 224x224는 동일하게 crop했지만 1.7x 좋아서 croppd에서 3:1 정도로 image가 많은 것을 확인했다. 데이터의 밸런스를 맞춰서 다시 학습을 해보아야겠다.

{% include figure.liquid loading="eager" path="/assets/img/d2f/balanced_dataset.png" class="img-fluid rounded z-depth-1" zoomable=true %}


sample load하고 spilt하는 코드에 min_count로 가장 갯수가 적은 label에 대해서 1:1로 data balance를 맞출 수 있게 하였다.<br>
+optimizer를 adma에서 sgd 0.01 momentum 0.9 weight_decay=5e-4로 하고, 50step 마다 opt update하도록 수정 

📖 module.load_weights로 .npz load를 하고 unseen data에 대해서 적용해본 결과 거의 모든 경우에서 올바른 예측을 하였다.<br>
하지만, 해당 결과를 백트래킹해보니, wiener2 7x7 필터만 적용해도 Discriminator를 전부 속이는 것이 가능했다. + noise를 추가해도 안됨<br>
따라서 데이터를 조금 더 가공해서 다시 학습을 시켜야 겠다. 그리고 접근법을 여러가지의 chain으로 가져가는 것이 맞을 것 같다는 생각이든다.

<br>


### 🧹 Denoiser Appoach

<hr>

*6.*
####  *dncnn 도입*
🖋️ 현재 resnet20 기반의 d2f_D(discriminator)가 필름의 색감을 학습했다기 보다는 texture를 학습했다고 생각된다.<br>
DnCnn을 기반으로 denoising한 결과로 inference를 해본 결과가 아래와 같다. (완벽히 Discriminator를 속임)

{% include figure.liquid loading="eager" path="/assets/img/d2f/model_20_32_missed.png" class="img-fluid rounded z-depth-1" zoomable=true %}


따라서 지금 현재의 dataset을 두개로 분리<br>
☝️ DnCnn 적용된 set(동일하게 적용) -> 한쪽만 적용시 또 dncnn의 특성을 파악할것 같다는 판단<br>
💕 기존 원본 이미지

<br>↦ 그리고 지금까지의 모델이 discriminator로써 행동하는 모습을 보았을때, 학습의 안정성을 위해서는 texture와 색감을 동시에 진행하는 게 아니라 <br>
2가지 모듈의 pipeline이 필요해 보인다.

<hr>

*7.*
####  *dncnn applied dataset d2f_D 결과*

dncnnd을 통과시킨다고, grain 특성이 사라지지는 않음 ➡️ 기존의 이미지의 특성과 전혀 다른 특성으로 보여짐

{% include figure.liquid loading="eager" path="/assets/img/d2f/dncnn_img.png" class="img-fluid rounded z-depth-1" zoomable=true %}

<hr>

> #### Torch로 변경 
> 💡 MLX에서의 performance가 dramatic하지 않고, MVP를 빠르게 만드는것을 목표로 변경

<hr>

*8.*
#### *Grain Synthesis Weakness*

```
FFT High Frequency Energy Ratios:
Digital Image: 28.44%
Film Image: 83.57%
Difference (Film - Digital): 55.13%
```

해당 결과를 이용해서 torch.fft기반의 disciriminator 성분을 만들어야할 것 같다.

별다른 성과는 없음 ➡️ fft를 discriminator에만 추가하는 방식은 generator가 high frequency 성분을 학습하게 하는데 한계가 있다.<br>
또한 현재 image의 학습에서의 사이즈가 256x256인데, film 이미지의 bilinear transform에서 많은 texture 정보가 날아가는 것을 확인할 수 있다.<br>

따라서 현재 UEGAN에서는 색감을 학습시키는 방향으로 하고, 필름 이미지를 denosiing하여서 paired data로 film grain model을 추가 학습하는 방향으로 가려고 한다.

<hr>

*9.*
#### *denoising Networks*

Denoising이나 image resolution등과 같은 모델을 볼 때, 좋은 사이트를 찾음

[paperswithcode](https://paperswithcode.com/task/style-transfer)

Dataset을 검색하면 해당 데이터셋을 활용하는 task의 논문들이 정리되어 있어서 SOTA나 나와 가장 fit한 모델을 찾을 수 있었다.<br>
나는 지금 KODAK24 dataset을 활용하는 모델들 위주로 확인한다.

📝 : Restormer / SwinIR / DMID-d

DMID(diffusion based) : [Github DMID](https://github.com/li-tong-621/dmid?tab=readme-ov-file)<br>
Restormer(transformer based) : [Github Restormer](https://github.com/swz30/restormer?tab=readme-ov-file)

<hr>

*10.*
#### *Unsuperviesd Denoiser*

이게 제일 대박이라고 생각됨

Stimulating Diffusion Model for Image Denoising via Adaptive Embedding and Ensembling<br>
에서 사용되는 부분적인 gaussian noiser 였는데, 대박임

📝 (Insane) AN UNSUPERVISED DEEP LEARNING APPROACH FOR REAL-WORLD IMAGE DENOISING

내가 생각하는 AI의 방향임 / 자체적으로 학습을 이어서 하다가 ➡️ 이정도면 됐다고 할때 그만둠

Key idea
- SURE (Stein’s Unbiased Risk Estimator)
- Unet Based Enc / Dec -> learning picture by picture gaussian denoising

이미지 마다 DL을 학습해야되서 cost는 높지만, 이러한 방식이 합쳐지면 굉장히 좋은 시너지를 낼 수 있다고 생각함

{% include figure.liquid loading="eager" path="/assets/img/d2f/Unet_denoiser.png" class="img-fluid rounded z-depth-1" zoomable=true %}

‼ 결국 모든 현상은 Normal Distribution을 따르게 되니까

😉 문제는 이미지당 50분이 걸린다는거임

읽다가 포기함 / lagrangian 까지는 어떻게 이해하겠는데, ADMM이랑 augmented lagrangian method의 수식을 이해하기 어려움

최적화 이론 수업을 통해서 해결해야되는 문제

<hr>

*11.*
#### *Neural Styletrasnfer*

일단 색감 정보는 UEGAN의 구조와 loss function이 잘 지켜준다고 생각했을때, texture에 대한 내용을 어떻게 해결할지에 집중

style transfer의 근본 논문에서부터 vgg19의 usage를 확인해보려고함

👍 Gatys가 사용한 gram matrix에서 vgg19의 conv block 별 content style 정보를 가지는 layer를 구분하고 있는 사실을 발견함 ➡️ 이를 활용하여서 비슷한 content의 다른 style인 사진을 그나마 골라서 비교해보려고 함

- 초반 레이어(conv1~conv3): 너무 로우레벨(low-level) 특징 (에지, 질감) → content 정보가 충분하지 않음.
- 중간 레이어(conv4_2, conv5_2): 형태(structure)와 의미적인 정보가 잘 유지됨 → content feature로 적합.
- 깊은 레이어(conv5_4 이후): 추상적인 개념이 강해져서 세부 구조 손실 가능성 → content 정보로 부적합.

☕️ vgg layer 별 cosine 유사도(film image vs digital image)

{% include figure.liquid loading="eager" path="/assets/img/d2f/vgg_gram_matrix.png" class="img-fluid rounded z-depth-1" zoomable=true %}

☕️ vgg layer 별 cosine 유사도(digital image vs digital image with GN)

{% include figure.liquid loading="eager" path="/assets/img/d2f/vgg_AWGN.png" class="img-fluid rounded z-depth-1" zoomable=true %}

확실히 vgg의 content feature와 style feature가 존재하기는 한다고 생각함 (content loss와 style loss weight를 조절하는 것도 중요한 요소임)


<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/d2f/NST.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/d2f/kian.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

다양한 방식을 시도해본 결과, 이건 확실히 style보다는 특정 패턴, 혹은 색상을 넣는 것에 가까움 (처음 발견했을때 vgg만으로 content를 보존할 수 있다는 점은 굉장한 의미가 있는 방법이라고 생각됨)


<br>

### 👾 Model approaches

<hr>


*12.*
#### *How does UEGAN preserves content details*

UEGAN을 보면 conent는 preserving하면서 특히 colour 정보를 잘 변형하는 것을 볼 수 있다.

👹 현재까지의 Limitation

1. 색감 변환이 과도하게 되는 경향이 있음 (L_qual의 수치를 조절해야 될 듯함 0.1이상에서는 too heavy하게 변형이 일어남)
2. Grain에 해당 하는 내용은 synthesis하지 못함 (DL 특성상 2가지 task를 한번에 해결하려고 하면 더 복잡할 것으로 예상됨)

🤞 UEGAN의 이점

1. GAM(global attention Module)을 사용해서 illumination이나 colour를 더 잘 포착하고 집중하도록 설계됨
2. 3가지 loss(Quality, Fidelity, Identity)를 이용해서 각각 (enhancement, content preserve, over-enhancement preserve)

{% include figure.liquid loading="eager" path="/assets/img/d2f/uegan_test_pair.png" class="img-fluid rounded z-depth-1" zoomable=true %}

이번 task의 핵심은 완벽할 정도의 qualitive score라고 생각함ㅇㅇ

<hr>

*13.*
#### *RGB grain analysis*

확실히 차이가 많이 남 (같은 왼쪽 상단 위치여서 하늘색 단색 부분임)

👺 이게 제일 중요한 내가 봤을때는..

{% include figure.liquid loading="eager" path="/assets/img/d2f/RGB_grain.png" class="img-fluid rounded z-depth-1" zoomable=true %}

<hr>

*14.*
##### *spatial analysis*

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/d2f/3d_film_R.png" class="img-fluid rounded z-depth-1" zoomable=true %}
        <div align="center"><small>Film 3D R channel value</small></div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/d2f/3d_digi_R.png" class="img-fluid rounded z-depth-1" zoomable=true %}
        <div align="center"><small>Digital 3D R channel value</small></div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/d2f/3d_overlay.png" class="img-fluid rounded z-depth-1" zoomable=true %}
        <div align="center"><small>Overlay of two</small></div>
    </div>
</div>

<hr>

*15.*
#### *The key Points!11!!!!!!*

3x3 stride=1로 max_val이 있는 곳을 255로 채운 결과물 -> 즉 film의 silver halide가 존재함을 역으로 알 수 있다.

그리고 그 surface 특성을 가지도록 하는것이 핵심일 것으로 보임 (무조건 RGB 채널 따로하는게 맞음)

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/d2f/result_digital_mountain_R.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/d2f/result_film_mountain_R.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>


<hr>

*16.*
#### *Max value interpolation*
interpolationd에서 min value에 대한 정보가 손실되서 grain에 대한 특성을 max_val pooling이 대표할 수 있을 것으로 생각되지만,

혹여 grain한 pixel halide selection으로 GAN 학습 input으로 사용했을 때 해당 detail의 보존 및 재생 여부는 미지라고 생각함

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/d2f/bilateral_restored_film_image.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/d2f/combined_pooling.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

Combined pooling and interpolated results

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/d2f/combined_pooling_crop.png" class="img-fluid rounded z-depth-1" zoomable=true %}
        <div align="center"><small>Min pooling</small></div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/d2f/combined_minmax_pooling.png" class="img-fluid rounded z-depth-1" zoomable=true %}
        <div align="center"><small>Combined(Min/Max) pooling</small></div>
    </div>
</div>

아래 방식이 좀 더 grain하게 분포함 -> 이거를 input으로 활용할 예정

RGB mask 각각의 density

| Type            | Density of R / 1s | Density of G / 1s | Density of B / 1s |
|-----------------|-------------------|-------------------|-------------------|
| Film full size  | 0.10262           | 0.10287           | 0.17325           |
| Film crop size  | 0.10365           | 0.095427          | 0.1106            |
| Digital full    | 0.43867           | 0.4313            | 0.44063           |

일반화 가능하다고 여겨짐

{% include figure.liquid loading="eager" path="/assets/img/d2f/random_noise_recon.png" class="img-fluid rounded z-depth-1" zoomable=true %}
{% include figure.liquid loading="eager" path="/assets/img/d2f/mask_recons.png" class="img-fluid rounded z-depth-1" zoomable=true %}

💡 min pooling을 할때, 255반전에서 max pooling을 시켜서 진행하여서 masking이 정상적으로 가능하도록 함

주의해야되는게, 아애 red가 0으로 되버리는 구간도 존재하니까 그런 구간에서의 pp halide를 어떻게 설정할지에 대한 고민이 필요해 보임

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
            {% include figure.liquid loading="eager" path="/assets/img/d2f/000006960025_mask.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
    </div>
</div>

python으로 loading한 data

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/d2f/pp_dataloaded.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/d2f/pp_data_overexposued.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>


250310 : pp halide에 대해서 1차 결론을 내림 / 3x3 window에서 마루와 골에 대한 mask를 칠하면 여전히 random성을 보장해 주는 것을 확인함

pp halide에 대해서 max min pooling을 하고 해당 mask와 result png(무손실 이미지 파일)에 대해서 network를 구성하고 진행하면 reconsturction이 기대에 미치게 나올 것으로 예상

digital image에 대해서는 밝기 기반 mask pp halide를 뿌리고 해당 pixel에서의 value를 기반으로 network로 reconstruction

(why? digital image는 이미 밀어버린 image이기 때문에 min max를 해당 pixel로 설정하여도 무리가 없다고 판단)

다만 색감에 있어서 해당 pp halide의 분포를 그냥 1d vector로 representative transformation을 해도 상관없을 것으로 예상됨

왜냐하면 pixel value가 과연 렌즈와 film fixing에서 structural한 global한 정보를 반영하는지 모르겠음ㅇㅇ

이때 아애 어두운 부분에 대해서 blue mask가 굉장히 밀도가 높은 모습들이 포착됨 (여기서 원래라면 film은 max value만이 의미를 가지지만 결국 모방을 굳이 똑같이 할 필요는 없다는 생각으로 desnity가 거의 0에 가까운 부분도 pp halide로 추출하기로 결정 -> detail 및 edge 정보 유지)

어두운 부분과 밝은 부분에 대해서 pp halide random seed를 density 밀도를 다르게 해서 digital 이미지에 대해서 적용할 것이기 떄문에 별로 문제가 된다고 생각하지는 않음

{% include figure.liquid loading="eager" path="/assets/img/d2f/full_dataloaded.png" class="img-fluid rounded z-depth-1" zoomable=true %}

<hr>

*17.*
#### *Dataloader composition*

1. 256x256 Crop
2. randomhorizontal filp(0.5)
3. manual_seed for cropping same regions for 3 image input(pp halide(result, mask), og img)
4. croping 3 times random for same image for data augmentation

🤔 hmm... Attention을 사용할 수 있을 것 같은데, 어떻게 보면 maskr가 attention역할이니까
🎀 uncertain한 것은 과연 모델이 detail을 살릴 수 있을지, 그리고 rgb 채널을 독립적으로 학습시켰을때, rgb간의 harmony를 유지할 수 있는지가 강권을 것으로 예상됨

<hr>

*18.*
#### *UNET 512 channel based ouptut*

| Trial  | Model       | Configuration               |
|--------|-------------|-----------------------------|
| Trial1 | UNET128     | RGB + harmony               |
| Trial2 | UNET128     | harmony removed             |
| Trial3 | UNET128     | RGB + harmony               |
| Trial4 | UNET512     | crop size 256 / 4           |
| Trial5 | UNET512     | crop size 16 / 128          |

- epochs을 150정도를 학습시켜야 MSE loss가 0.0044 정도 나온다 (epoch 10으로는 학습X -> trail 1,2,3를 다시 시도해볼 가치가 있음)
- trail4 방법에서 다소 mask image 값이 강조되는 경향이 있어서, 일반화 영향인가 의심되어 pixel value는 16x16 만드로도 충분히 interpolate 할 수 있다고 판단하고 trail 5 수행

{% include figure.liquid loading="eager" path="/assets/img/d2f/trail5.png" class="img-fluid rounded z-depth-1" zoomable=true %}

16x16이 조금 더 선명하고 salty하지 않은 이미지를 내보내긴하다.

근데 여기서 salty는 png와 jpg의 차이라고 생각되기도 한다. (당장 홈페이지 렌더링만 봐도 smooth해졌음)

📲 확실한 점은 디테일적인 부분을 캡쳐하지(다소 이미지의 RGB 채널간 뭉게진다고 생각됨) 못하다는 점에서 UNET이 아니라 오히려 **channel방향보다 h,w 방향으로의 팽창**을 생각해보고 싶어짐ㅇㅇ

<hr>

*19.*
#### *Digital Image Application(statistic based) - Failed*

단순히 RGB channel 별 mask와 brightness의 관계를 파악해서 mask를 만들고 trail5 model로 reconstruction 해 볼 예정

Analyzing dataset: 100%|██████████| 375/375 [01:11<00:00,  5.25it/s]<br>
Average Mask R pixel density:<br>
Value 0: 0.8809 (±0.0329)<br>
Value 255: 0.1191 (±0.0329)<br>
<br>
Average Mask G pixel density:<br>
Value 0: 0.8902 (±0.0149)<br>
Value 255: 0.1098 (±0.0149)<br>
<br>
Average Mask B pixel density:<br>
Value 0: 0.8727 (±0.0418)<br>
Value 255: 0.1273 (±0.0418)<br>

실망스럽죠ㅇㅇ

{% include figure.liquid loading="eager" path="/assets/img/d2f/test_output_batch1_img1.png" class="img-fluid rounded z-depth-1" zoomable=true %}

거의 동일한 결과물을 가져옴 -> 물론 이상한 artifact도 발생함ㅇㅇ (레인보우 artifact가 존재함ㅇㅇ)

🥅 Goal 수정 -> 일단 maks와 result (pp halide)로 reconstruction이 가능하다는 것을 알았기 때문에, digital 사진에 어떻게 pp halide를 분포 시킬지에 대한 접근으로 생각하자

태초에 pp halide로 접근했던 목적이 -> grain synthesis를 더 쉽게 하고자 했던 것이기 때문에, 일단은 digital image에 대해서 grain synthesis가 가능한가에 대한 결과를 보고나서, 색감(colour)로 넘어갈 것임

따라서 일단 detail을 위해서만을 위해서 추가했던, min pooling을 빼고 max pooling만으로 구성된 datset르 가지고 UNET이 과연 reconstruction을 옳바르게 할 수 있는지를 확인할 것

<hr>

*20.*
####  *Max pooling(only) dataset training - for the grain*

와 일단 지금까지 가장 효과적인 방법 발견!

1. DIANET을 정의함 (위에서 말했던 UNET과 반대의 구조로 channel과 hw가 팽창했다가 줄어드는 구조임 -> skip connection도 존재)
2. 이때 channel의 수가 너무 커지면 model size가 굉장히 커짐
3. 32x32 patch x 64로 학습 진행함
4. *Digital image에서 pp halide 밀도를 2배로 올림ㅇㅇㅇ* (본래 min max density인 0.1에서 2배, 3배로 올리니까 artifact가 확실히 줄어들면서 grainy한 이미지가 생성됨)
5. (limitation1) size(3024x3024)가 커졌을대 UNET에선 발생하지 않았던 Memory 부족이 발생함
6. (limitation2) colour error가 심함 ➡️ film L2 loss에서 colour에 대한 내용을 집중하지 못하고 structural한 내용에 집중하다가 학습이 끝난것 같은 느낌

- Densiety * 3 (approx 0.3)

{% include figure.liquid loading="eager" path="/assets/img/d2f/dianet_digital_denx3.png" class="img-fluid rounded z-depth-1" zoomable=true %}

- Density * 1

{% include figure.liquid loading="eager" path="/assets/img/d2f/dianet_digital_denx1.png" class="img-fluid rounded z-depth-1" zoomable=true %}

물론 이때 density 뿐만 아니라 RGB pp halide간의 correlation도 통계를 내려서 분포 시킴

💭 알 수 있는 점
- UNET과 DIANET은 확실히 생각한것과 같이 fine한 부분을 생성하는데 차이를 보인다.
- enc / dec 의 학습 output을 확인하면 초반에는 structural한 영역을 잡으려고 노력하고, 왠만큰 structural한 내용이 saturation되면 그때부터 색감 정보를 파악하려고 노력함
- UNET(0.0044), DIANET(0.017) 의 L2 loss가 차이가 많이나는 모습을 보이는데, DIANET은 structural 정보를 많이 살리지 못함(why? min pooling을 삭제했기 때문에 edge나 black spot에 대한 inference에서 약한것으로 예상됨)
- parmeter 수는 DIANET이 더 적을지 몰라도 image를 transposedConv2d로 upscaling하면서 추가적으로 channel도 키워서 memory 사용량이 급증함
- 반면 UNET의 경우 channel을 늘리지만 hw도 줄어들기 때문에 memory expolde가 발생하지는 않음

*only max*

{% include figure.liquid loading="eager" path="/assets/img/d2f/UNET_max_infer.png" class="img-fluid rounded z-depth-1" zoomable=true %}

*max min pooling*

{% include figure.liquid loading="eager" path="/assets/img/d2f/UNET_maxmin_infer.png" class="img-fluid rounded z-depth-1" zoomable=true %}


**Digital applied Comparison**

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/d2f/UNET_512_minmax.png" class="img-fluid rounded z-depth-1" zoomable=true %}
        <div align="center"><small>UNET (Min-Max)</small></div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/d2f/UNET512_max.png" class="img-fluid rounded z-depth-1" zoomable=true %}
        <div align="center"><small>UNET (Max)</small></div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/d2f/DIANET_max.png" class="img-fluid rounded z-depth-1" zoomable=true %}
        <div align="center"><small>DIANET (Max) + density * 2</small></div>
    </div>
</div>


가장 deep 한 layer에서 UNET512와 DIANET(3enc)의 float32에서의 메모리 usage는

| 모델      | 출력 텐서 크기  | 총 요소 수   | 메모리 사용량       | 비고          |
|-----------|-----------------|--------------|---------------------|---------------|
| UNET      | 512x16x16      | 131,072      | 0.5 MB (524,288 B) | -             |
| DIANET    | 24x1024x1024   | 25,165,824   | 96 MB (100,663,296 B) | 192x |

<br>
💭 알 수 있는 점
- model parameter size는 UNET이 훨씬 많지만, memory usage는 DIANET이 많음 (UNET이 가진 강점을 볼 수 있음)
- trade-off (memory vs parameter size)

<br>

### 🏞️ Loss functions

<hr>


*21.*
####  *Importance of loss function*

LAB으로 하니까 contrast가 너무 쎄지는 현상 발생

dynamic loss function 사용

오늘은 기존의 단순한 RGB 기반 MSE loss만 사용하는 방식에서 벗어나서, RGB MSE, LPIPS, SSIM, Gram Matrix(texture)를 조합한 dynamic loss 방식을 도입했어. 초기엔 structural 정보(SSIM)와 perceptual 정보(LPIPS)에 집중하고, 후반엔 color(RGB)와 세부적인 grain 표현(Gram Loss)에 집중하도록 가중치를 조정하는 전략을 선택했어. 추가로 각 loss 간의 크기(scale) 불균형 문제를 해결하기 위해 normalization 또는 adaptive weighting 전략을 고민했어. TensorBoard를 이용해 loss를 실시간으로 추적하고 시각화하도록 구성했어. 🌟

- MSE 기반은 structural 정보를 capture하기는 하지만 강하지 않음
- local texture(grain) 정보 (fine details) 를 표현할 수 없음 (왜냐하면 loss를 줄이기 위해서 fine한 random성을 예측할바에는 그냥 mean으로 texture 죽이고 평탄화해서 경향성만 맞추려고 함)

오히려 이렇게 loss function을 설정하고 나니가 dianet이 detail 표현 capa에 무리가 있다고 생각됨 (너무 32x32에 fit해 져서 2048x2048에서도 다소 두탁하고 넓은 artifact로 나오는듯하다 150epoch까지 일단 보고 결정)

{% include figure.liquid loading="eager" path="/assets/img/d2f/dianet_artifact_dynamic_loss.png" class="img-fluid rounded z-depth-1" zoomable=true %}



따라서 loss를 dynamic하게 설정하고 UNET이 과연 fine detatail을 살릴 수 있을지 지켜보자.

<br>

##### 🥊 총 손실함수는 다음과 같이 구성됨:

Total Loss = α × (RGB MSE) + β × (LPIPS) + γ × (SSIM) + δ × (Gram Loss)

##### 📌 단계별 Scaling Factor (가중치 조정)

| 진행률 (Epoch %) | RGB MSE (α) | LPIPS (β) | SSIM (γ) | Gram Loss (δ) | 집중 요소                          |
|------------------|-------------|-----------|----------|----------------|-----------------------------------|
| **0 ~ 30%**      | 0.2         | 0.7       | 0.8      | 0.3            | Structure (SSIM), Perceptual (LPIPS) |
| **30 ~ 60%**     | 0.5         | 0.4       | 0.4      | 0.5            | 균형 잡힌 학습 (Balanced)             |
| **60 ~ 100%**    | 0.8         | 0.3       | 0.2      | 0.6            | Color 미세조정 (RGB), 질감 (Gram)     |

- **초기(0~30%)**: 구조적 및 perceptual 정보 학습 중심
- **중기(30~60%)**: 균형 잡힌 학습 진행
- **후기(60~100%)**: 세부 컬러와 grain 등 디테일한 부분 최적화

tensorboard로 loss 시각화를 시작하고, 동일 이미지에 대해서 gif르 구성하고 학습과정을 보는데, 일단 perceptual loss가 들어가면 색상정보를 거의 학습하지 않음

{% include figure.liquid loading="eager" path="/assets/img/d2f/training_progress_interrupted.gif" class="img-fluid rounded z-depth-1" zoomable=true avoid_scaling=true %}

그리고 loss가 학습과정 중에 감소한다고 보기 어렵고 횡보한다고 생각함.

여기서 중요한 점은 결국 이미지의 색상정보나 structual 한 정보를 단순히 pixel value별로 비교하는것은 의미가 없어보임

➡️ 왜냐하면 film image 자체가 random성을 많이 가지고 있다고 생각되는데, 이를 pixel by pixel loss로 접근하거나 structual한 loss로 접근하면 학습이 용이하지 않다고 생각됨

➡️ 또한 model의 capa에도 학계가 있다고 느껴지며, 동일한 패턴만을 학습하는 것은 의미가 없다고 생각됨 (위와 동일한 맥락). 

따라서 random feature를 eject하는 부분이 있으면 좋을 것 같다는 생각임

https://medium.com/storm-shelter/the-importance-of-film-grain-255f0246cd64

동영상에서 grain synthesis랑 film photography에서의 grain synthesis랑 햇갈릴 수 있음

상업 카메라에서 Digital Image pipeline(ISP)는 상당히 중요한 의미를 가지는 것으로 생각됨

RAW에서부터 JPG로의 1차 가공이기에 그 회사가 가지고 있는 기술력과 색감 특성을 보여줘야하는 가장 중요한 단계라고 생각됨

🧐 어, 엄청난 접근법이 생각남 -> 아애 no base로 synthesis하는게 아니라 내가 주는 dataset을 바탕으로 patch단위 혹은 ststistic을 가지고서 마치 색종이 붙이처럼 digital image에 맞는 patch를 붙이는 방법도 괜찮을 것 같음 -> 이러면 transformer를 사용해 볼 수도 있을듯 (내가 가지는 이미지의 kq로 이미지 가지고 있는 dataset와의 value를 계산해보면?)


[SCW06] STEFANO A. D., COLLIS W., WHITE P. R.: Synthesising and reducing film grain. Journal of Visual Communication and Image Representation 17, 1 (2006), 163–82.

여기서 그렇게 했다는데 나중에 읽어볼 것!


<br>

### 💨 Other Approaches

<hr>

*22.*
####  *CVAE Method pre-test*

🌈 dataloader에서 하나의 이미지에 대해서 여러개의 patch를 굳이 설정하지 않아도, dataset의 ```__len__``` property를 조절해서 하나의 이미지에서 여러개의 patch가 나오도록 조절할 수 있음

CVAE 탈락

<div markdown="1" style="border: 1px solid var(--global-theme-color-light); padding: 1em; border-radius: 4px; background-color: var(--global-theme-bg);">

교훈

- 8x8 patch로 batch size 64로 학습했는데 gpu 사용을 효율적으로 하지 못하는 것을 발견함
- 즉 8x8을 위해서 오히려 더 많은 Image RW operation이 발생해서 상대적으로 bottleneck 이 그부분에 걸림
- 그래서 이미지를 메모리에 올려놓고, 8x8 patch를 extracting하는 방식을 사용
</div>

<br>

*22.*
####  *Some technics (prefetch_generator, pin_memory)*

##### prefetch_generator(BackgroundGenerator)

<div markdown="1" style="border: 1px solid var(--global-theme-color-light); padding: 1em; border-radius: 4px; background-color: var(--global-theme-bg);">

*For 375 image data (3089 × 2048)*

- wo  BackgroundGenerator : 45.65초
- w   BackgroundGenerator : 26.78초

</div>

<br>
📋 이때, 학습 delay를 0.1ms로 주었을때 효과가 들어나지 / 그냥 dataloader만 순환시키면 효과가 들어나지 않음<br>
따라서 학습 시 num_woker를 사용할 수 없는 apple silicon device에 사용하면 효과가 있을 것으로 생각됨

##### pin_memory

Memory는 운영체제에서 사용하지 않을 시 디스크 공간으로 swap하도록 관리가능한 pageable memory와 운영체제에서 swap 못하는 page-locked memory가 존재함<br>
이때, pin_memory 설정을 false하게 되면 pageable memory에 data가 불러와지게 되고, gpu device mem공간으로 옴기기 위해서는 page-loacked memory로 복사 + DMA를 사용하여 GPU VRAM으로 전송 2단계를 거쳐야함. 여기서 overhead 발생<br>
하지만 pin_memory를 사용하게 되면 page-locked memory로 data가 불러와지기 때문에 overhead가 줄어듬

1000개의 random tensor summation에 대해서 pin_memory 유무 속도 비교

<div markdown="1" style="border: 1px solid var(--global-theme-color-light); padding: 1em; border-radius: 4px; background-color: var(--global-theme-bg);">
**사용 중인 디바이스: mps**
- 📈 증가한 Page-Locked Memory: 1078.12 MB
- 🕒 pin_memory=False 소요 시간: 0.80초

**사용 중인 디바이스: mps**
- 📈 증가한 Page-Locked Memory: 1080.55 MB
- 🕒 pin_memory=True 소요 시간: 0.81초
</div>

Unified memory를 사용하는 M2 macbook에 대해서는 적용이 안된다고 생각됨, test결과 그냥

pytorch의 소스코드를 보면<br>
1042번줄에서 mps device에서의 pin_memory option은 관리를 하지 않음. mps 자체에서 메모리를 관리를 하는듯 보인다. 이게 UM의 특성이라고 생각됨.

[pytorch dataloader.py source code](https://github.com/pytorch/pytorch/blob/e53d9590287cbf97521f96d055910394f6e9a849/torch/utils/data/dataloader.py#L1042-L1064)

[pytorch mps MPSAllocator.mm source code](https://github.com/pytorch/pytorch/blob/main/aten/src/ATen/mps/MPSAllocator.mm)

.mm file은 objective-C와 C++을 섞은 형태 ➡️ pytorch(c++ 기반), Metal API는 Object-C 기반 ➡️ 2개 연결하려면 .mm file로 연결

##### 📊 Mach Virtual Memory Statistics (Page size: 16,384 bytes)

*vm_stat* command

##### *Available Memory**
- **Pages free:** 18,064 (**≈ 281MB**)  

##### *Memory Usage**
- **Pages active:** 302,460 (**≈ 4.7GB**)  
- **Pages inactive:** 300,448 (**≈ 4.7GB**)  
- **Pages speculative:** 933 (**≈ 15MB**)  

##### *Page-Locked Memory (Pinned Memory)**
- **Pages wired down:** 113,599 (**≈ 1.8GB**)  

##### *Cached & Purgeable Memory**
- **Pages purgeable:** 7,490 (**≈ 120MB**)  
- **File-backed pages:** 139,514 (**≈ 2.2GB**)  
- **Anonymous pages:** 464,327 (**≈ 7.4GB**)  

##### *Memory Compression**
- **Pages stored in compressor:** 722,020 (**≈ 11.5GB**)  
- **Pages occupied by compressor:** 275,678 (**≈ 4.4GB**)  
- **Decompressions:** 2,864,785  
- **Compressions:** 5,081,194  

##### *Swap & Paging**
- **Pageins:** 2,560,652  
- **Pageouts:** 18,275  
- **Swapins:** 122,093  
- **Swapouts:** 661,024  

##### *Additional Info**
- **Translation faults:** 74,863,824  
- **Pages copy-on-write:** 5,963,520  
- **Pages zero filled:** 29,007,477  
- **Pages reactivated:** 2,205,490  
- **Pages purged:** 634,520  

<hr>

*23.*
####  *Model architecture visualization*

netron.start("unet.onnx")

{% include figure.liquid loading="eager" path="/assets/img/d2f/unet.onnx.png" class="img-fluid rounded z-depth-1" zoomable=true %}

DIANET visulization

{% include figure.liquid loading="eager" path="/assets/img/d2f/dianet.onnx.png" class="img-fluid rounded z-depth-1" zoomable=true %}

**ONNX (Open Neural Network Exchange)** : 다양한 framework로 학습된 모델의 IR 역할을 하여서 HW회사들은 ONNX를 타게팅으로 compiler나 sw 스택을 최적화하면 됨

NVIDIA : ONNX -> TensorRT -> CUDA kernel<br>
Intel : ONNX -> OpenVINO -> ?<br>
Qualcomm : ONNX -> SNPE -> HexagonDSP<br>
APPLE : ONNX -> CoreML -> ANE(apple neural engine)<br>

<hr>

*24.*
####  *Model architecture seeks (clean code done!)*

Vgg perceptual loss는 버리자ㅇㅇ -> 색 재현을 못할 뿐더러 MSE loss만 있던게 더 나음

Tries

1. relu -> leakyrelu
2. concat 직전에 conv한번
3. sigmoid 불가 (image input이 [-1, 1] 정규분포임) -> 큰 문제였음
4. 

DiaNet도 구조가 문제인지 학습방법이 문제인지는 모르겠는데, 잘 안되는건 확실함


<hr>

*25.*
####  *Homogeniety block detection*

실험적으로 설정한 parameter : def extract_pure_color_patches(image_path, patch_size=16, stride=8, variance_threshold=300, edge_threshold=0.01):<br>
homogeniety block detection을 위한 parameter

detection 이미당 5만장 다 저장하다가 맥북 용량 다 잡아먹고, 삭제하는데도 파일 읽는데 엄청난 시간이 걸리는 문제 발생. ssd 속도가 확실히 느리다는것을 체감하는중 (적당한 사이즈로 dataset만들거나 dataloader에서 작동하도록 해야될듯)

내가하는 taskr가 지금 low-level vision task(denoising, enhancement, SR) / high-level vision task (semantic tasks)

Style trasnfer는 둘 다 고려해야되는 mid-level vision task로 불릴 수 있다고 한다.

📃 Learning to Generate Realistic Noisy Images via Pixel-level Noise-aware Adversarial Training

여기서 noise 자체의 randomness와 irregularity를 고려해서 이거를 L1 loss로 하는건 부적절 (non convergence)<br>
따라서 noise를 Random Variable로 여기고 MLE(Irn분포를 쫒악도록)와 Dd를 이용한 clean image alignment로 Image의 생성에서의 noise를 모방하도록 설정함<br>
본 논문에서는 Realistic Discriminator를 사용한다. 지금까지 가장 성능과 안정성이 좋았던 UEGAN은 Realistic Discriminator에서 한발짝 더 나아간 Relativistic
average HingeGAN (RaHingeGAN)을 활용한다.

PNGAN에서도 해당 기법을 적용해 볼 수 있겠다.

<hr>

*26.*
####  *PNGAN denoisier + UEGAN (or others)*

UEGAN이 일단 grain이 있을때도 성능을 보여주긴 했는데, denoising이 된 경우에 어떻게 학습이 진행되는지 비교를 위해서 해보자.

Colour과 grain을 동시에 synthesis할 수 있는 방법은 따로 없어보이는데..

https://developer.apple.com/videos/play/wwdc2024/10160/

Torch 생태계 안에서 model을 fine-tunning하고 deployment하는 방법

https://www.youtube.com/watch?v=SN-BISKo2lE

<hr>

*27.*
####  *TPU hbm Max allocatoin*

PNGAN으로 film 이미지를 모두 denoising하려고 했는데, 또 메모리 부족 상태가 발생함 (그래서 colab tpu로 했는데도 32gb에서도 메모리 부족함)

RuntimeError: Bad StatusOr access: RESOURCE_EXHAUSTED: XLA:TPU compile permanent error. Ran out of memory in memory space hbm. Used 31.40G of 7.48G hbm. Exceeded hbm capacity by 23.92G.

Total hbm usage >= 31.92G:
    reserved        530.00M 
    program          31.40G 
    arguments            0B 

다시 생각해보니까, 애초에 UEGAN에서는 resize를 해서 noise 성분이 거의 영향을 안미쳤을 것이라고 생각된긴함

따라서 denoising을 활용할 가능성이 낮을 것으로 예상

<hr>

*28.*
####  *EfficientDet*

RCTNet + UEGAN + PNGAN 구현하려고 RCTNet 다시 읽다가 EfficientDet의 feature fusion을 사용했다고 해서 읽음

JAX가 요즘 뜨는듯ㅇㅇ

EfficientDet은 기존의 feature을 더 효율적으로 연산량을 효율적으로 사용하면 더 유의미한 feature를 뽑아내기 위한 시도라고 볼 수 있음

지금 흐름이
1. RCTNet
2. UEGAN
3. Stochastic film grain synthesis
4. PNGAN

을 바탕으로 해당 알고리즘, 모델, 학습방법을 fusion 하기 위해서 후속 논문이나 선행 연구 논문 읽기중

1. EfficientDet- Scalable and Efficient Object Detection (cited by RCTNet)

2. MAXIM: Multi-Axis MLP for Image Processing (citing UEGAN)
나도 어떻게 보면 low-level vision tasks에서 multi-stage networks를 사용해야 될것으로 예상됨
이런 순간이 옴ㅇㅇ 읽다보면 너무 새로운 개념이라서 한번의 글자를 읽는 것만으로는 이해가 안되는 순간이 옴 -> 굉장히 머리 아프고 자괴감이 들지만, 최대한 머리를 정리하고 다시 이해하려고 노력해서 한 step 진보한다는 마음으로 나아감

3. 

heuristic-based scaling approach : 직관이나 경험적 판단, 간단한 규칙을 이용하는 접근

Image enhancement 같은 경우에는 paper with code에서도 SOTA를 선정하는 기준이 대게 qualitivie comparision이기 때문에, 다소 주관적인 영역임

💭💭💭 따라서 엔지니어의 artistic sense가 필요한 영역이라고 생각되고, 내가 그래서 흥미가 있다고 생각하는 듯하다. (SSIM, PSNR 등과 같은 수치적인 improvement는 나에게 다소 흥미롭게 안느껴짐)


CUDA vs MPS

MPS(M2 16gb)
Average Process Time: 0.4536 sec
Average Prepare Time: 0.0005 sec
Average Compute Efficiency: 1.00

CUDA(t4 colab)
Average Process Time: 0.0309 sec
Average Prepare Time: 0.0004 sec
Average Compute Efficiency: 0.98

⊳ Different Norms

LayerNorm: Normalizes each sample over the last dimension (C), yielding B×H×W averages = 4×16×16 = 1024. 😊

BatchNorm: Normalizes each channel over the entire batch (B, H, W), resulting in C averages = 64. 🚀

InstanceNorm: Normalizes each channel per sample over spatial dimensions (H, W), giving B×C averages = 4×64 = 256. 👍

These results match the PyTorch documentation and deep learning literature (Ba et al., Ioffe & Szegedy).


<hr>

### 📌 References
🧷 https://ml-explore.github.io/mlx-data/build/html/index.html<br>
🧷 https://ml-explore.github.io/mlx/build/html/index.html<br>
🧷 https://blog.jaeyoon.io/2017/12/jekyll-image.html<br>
🧷 https://gyumpic.tistory.com/511<br>

<hr>

### 📃 Papers<br>
[An Unsupervised Deep Learning Approach for Real-World Image Denoising](https://openreview.net/forum?id=tIjRAiFmU3y)<br>
[Image Style Transfer Using Convolutional Neural Networks](https://www.cv-foundation.org/openaccess/content_cvpr_2016/papers/Gatys_Image_Style_Transfer_CVPR_2016_paper.pdf)<br>
[MAXIM: Multi-Axis MLP for Image Processing](https://openaccess.thecvf.com/content/CVPR2022/papers/Tu_MAXIM_Multi-Axis_MLP_for_Image_Processing_CVPR_2022_paper.pdf)<br>
[EfficientDet: Scalable and Efficient Object Detection](https://arxiv.org/abs/1911.09070)<br>
[Investigating properties of film grain noise for film grain management](https://ieeexplore.ieee.org/document/6698054)<br>
[Learning to Generate Realistic Noisy Images via Pixel-level Noise-aware Adversarial Training](https://arxiv.org/abs/2204.02844)<br>
[Rapid and Reliable Detection of Film Grain Noise](https://ieeexplore.ieee.org/document/4106554)<br>
[Simulating Film Grain using the Noise-Power Spectrum](https://eprints.bournemouth.ac.uk/10547/1/grain.pdf)<br>
[Texture Synthesis Using Convolutional Neural Networks](https://arxiv.org/abs/1505.07376)<br>
[Film-GAN: towards realistic analog film photo generation](https://link.springer.com/article/10.1007/s00521-023-09283-5)<br>
[Stimulating Diffusion Model for Image Denoising via Adaptive Embedding and Ensembling](https://arxiv.org/abs/2307.03992)<br>
[Computational Simulation of Alternative Photographic Processes](https://onlinelibrary.wiley.com/doi/abs/10.1111/cgf.12146)<br>
[A Stochastic Film Grain Model for Resolution-Independent Rendering](https://hal.science/hal-01520260/file/Film_grain_synthesis_computer_graphics_forum.pdf)<br>
[A Large-scale Film Style Dataset for Learning Multi-frequency Driven Film Enhancement](https://www.ijcai.org/proceedings/2023/0129.pdf)<br>
[Deep Photo Enhancer: Unpaired Learning for Image Enhancement from Photographs with GANs](https://openaccess.thecvf.com/content_cvpr_2018/papers/Chen_Deep_Photo_Enhancer_CVPR_2018_paper.pdf)<br>
[Contrastive Learning for Unpaired Image-to-Image Translation](https://arxiv.org/abs/2007.15651)<br>
[Deep-based Film Grain Removal and Synthesis](https://arxiv.org/abs/2206.07411)<br>
[Global and Local Enhancement Networks for Paired and Unpaired Image Enhancement](https://www.ecva.net/papers/eccv_2020/papers_ECCV/papers/123700341.pdf)<br>
[Representative Color Transform for Image Enhancement](https://openaccess.thecvf.com/content/ICCV2021/papers/Kim_Representative_Color_Transform_for_Image_Enhancement_ICCV_2021_paper.pdf)<br>
[Local Color Distributions Prior for Image Enhancement](https://hywang99.github.io/2022/07/09/lcdpnet/)<br>
[PieNet: Personalized Image Enhancement Network](https://www.ecva.net/papers/eccv_2020/papers_ECCV/papers/123750375.pdf)<br>
[Towards Unsupervised Deep Image Enhancement with Generative Adversarial Network](https://arxiv.org/abs/2012.15020)<br>
[U-Net: Convolutional Networks for Biomedical Image Segmentation](https://arxiv.org/abs/1505.04597)<br>
[Unpaired Image-to-Image Translation using Cycle-Consistent Adversarial Networks](https://arxiv.org/abs/1703.10593)<br>


<!-- --- -->
<!-- 
#### Contact
📞 **Phone** : +82 10-6654-9551 <br>
📧 **Email** : [kdhluck@naver.com](mailto:kdhluck@naver.com) -->
