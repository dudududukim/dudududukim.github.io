---
layout: post
title: Best Practices for PyTorch Training
date: 2025-04-21 09:26:47 +09:00
last_updated: 2025-04-21 10:44:58 +09:00
description: Clean, efficient PyTorch code conventions, libraries, structure, best practices.
tags: pytorch ML
categories: programming

citation : false
tabs: true

pretty_table: true

# toc:
#     sidebar: left
    
featured : true
thumbnail : assets/img/pytorch.svg
related_posts: false

---

<div align="left">
<sub> Summurized by <i>Duhyeon Kim</i> w/o LLMs</sub>
<br>
<br>
</div>

### Naming Convention

| Type | Convention | Example |
|------|------------|---------|
| `Packages & Modules` | lower_with_under | from **prefetch_generator** import BackgroundGenerator |
| `Classes` | CapWords | class **DataLoader** |
| `Constants` | CAPS_WITH_UNDER | **BATCH_SIZE=16** |
| `Instances` | lower_with_under | **dataset** = Dataset |
| `Methods & Functions` | lower_with_under() | def **visualize_tensor()** |
| `Variables` | lower_with_under | **background_color='Blue'** |


<br>👍 해당 github에서 말하는 내용을 내가 격어왔다는 점은 꽤나 흥미로웠다<br>(특히 jupyter notebook으로 다양하게 실험하고, python script로 넘어와서 train deploy 수준의 reproducibility를 높였다는 점)

---

### Commonly used libraries:

| Name | Description | Used for |
|------|-------------|----------|
| [torch](https://pytorch.org/) | Base Framework for working with neural networks | creating tensors, networks and training them using backprop |
| [torchvision](https://pytorch.org/docs/stable/torchvision) | PyTorch **computer vision** modules | image data preprocessing, augmentation, postprocessing |
| [Pillow (PIL)](https://pillow.readthedocs.io/en/stable/) | Python Imaging Library | Loading images and storing them |
| [Numpy](https://www.numpy.org/) | Package for **scientific computing** with Python | Data preprocessing & postprocessing |
| [prefetch_generator](https://pypi.org/project/prefetch_generator/) | Library for background processing | **Loading next batch** in background during computation |
| [tqdm](https://github.com/tqdm/tqdm) | **Progress bar** | Progress during training of each epoch |
| [torchinfo](https://github.com/TylerYep/torchinfo) | Print Keras-like model summary for PyTorch | **Displays network**, it's parameters and sizes at each layer |
| [torch.utils.tensorboard](https://pytorch.org/docs/stable/tensorboard.html) | **Tensorboard** within PyTorch | Logging experiments and showing them in tensorboard |

<br>🧐 prefetch_generator 빼고는 다 씀 (생산성 및 학습 안정성을 위해서), prefetch_generator를 사용해보아야 겠다.

---

### File organization

- layer, losses, ops 와 같이 분리해 두고
- Main model은 model_name.py로 파일을 설정한다.

Finally trainiing and test code imports only the final model_name.py module

---

### Building NN

Loss function도 nn.Module로 해서 computation graph에 자연스럽게 녹아들도록 설계한다.

torchviz를 활용한 computation graph visualization

<img src="{{site.url}}/assets/img/comput_graph.png" alt="설명" height="400">

Vgg perceptual loss 같은 경우에, pretrained model의 .feature 을 불러와서 각 silce nn.Sequential module에 .add_module을 이용해서 for문으로 모델을 분리한다. 또한 requires_grad=False로 model을 freeze한다.

---

### Train Code Structure

<div markdown="1" style="border: 1px solid #ccc; padding: 1em; border-radius: 4px; background-color: var(--global-theme-bg);">
**Import**  
**seed**  

**(Main)**  
&nbsp;&nbsp;&nbsp;&nbsp;ㄴ argparse  
&nbsp;&nbsp;&nbsp;&nbsp;ㄴ dataset transform  
&nbsp;&nbsp;&nbsp;&nbsp;ㄴ dataset / dataloader  
&nbsp;&nbsp;&nbsp;&nbsp;ㄴ instantiate network  
&nbsp;&nbsp;&nbsp;&nbsp;ㄴ create loss  
&nbsp;&nbsp;&nbsp;&nbsp;ㄴ device setting (cuda, mps)  
&nbsp;&nbsp;&nbsp;&nbsp;ㄴ create optimizer  
&nbsp;&nbsp;&nbsp;&nbsp;ㄴ load checkpoint if needed  
&nbsp;&nbsp;&nbsp;&nbsp;ㄴ create tensorboard writer  

**(Main Loop)**  
&nbsp;&nbsp;&nbsp;&nbsp;ㄴ Set model to train mode  
&nbsp;&nbsp;&nbsp;&nbsp;ㄴ Use prefetch_generator and tqdm to iterate through data  


&nbsp;&nbsp;&nbsp;&nbsp;ㄴ Forward / backward (zero_grad, backward, step)  
&nbsp;&nbsp;&nbsp;&nbsp;ㄴ Update writer  
&nbsp;&nbsp;&nbsp;&nbsp;ㄴ Compute computation time and **compute_efficiency**  
&nbsp;&nbsp;&nbsp;&nbsp;ㄴ Test code (optional)  
&nbsp;&nbsp;&nbsp;&nbsp;ㄴ Save checkpoint (if needed)

</div>

> **Tip:** It is very good practice to track both preparation time and computation time using tqdm to detect any issues in your dataloader.

**적용해 볼 점 :**
1. data_prefetcher
2. data loading time과 computation time을 분석해서 computation efficiency check할 것

아래는 요청하신 내용을 *가독성* 있게 **kramdown** 형식으로 재구성한 버전입니다.  
`text`와 *text*를 적극적으로 활용했고, 원래의 의미와 내용은 그대로 유지했습니다.

---

### Do's and Don't's

##### :x: Don'ts

- **Avoid using `numpy` in the `forward` method** of `nn.Module`  
  *Numpy runs on CPU only. PyTorch supports most numpy functions, so use torch equivalents for GPU compatibility!*

- **Don't log results in every step**  
  *Typically, models train for thousands of steps. Logging loss and results every `n`th step is enough to reduce overhead.*  
  *Especially, saving intermediate results as images can be costly during training.*

##### :white_check_mark: Do's

- **Use command-line arguments**  
  *You can track training arguments by using* f.write(opt.__str__()) *to save them.*

- **Use `.detach()` to free tensors from the computation graph**  
  *If you don't need gradients, detach tensors to save memory and computation.*

- **Use `.item()` when printing scalar tensors**  
  *This converts a single-value tensor to a standard Python number for easier printing.*

- **Use the `__call__` method instead of `forward` on a `nn.Module`**  
  *Calling the module directly (e.g., `model(input)`) is preferred over explicitly calling `model.forward(input)`.*

<!-- &nbsp; ㄴ <br> -->

---
### soso Tips
We can use virtual batch (accumulating grad and updating on virtual batch size)

---

### References : 

[PEP 8 – Style Guide for Python Code](https://peps.python.org/pep-0008/)<br>
[A PyTorch Tools, best practices & Styleguide](https://github.com/IgorSusmelj/pytorch-styleguide)<br>
[Pytorch .detach()](https://bnikolic.co.uk/blog/pytorch-detach.html)<br>
[Google pyguide](https://github.com/google/styleguide/blob/gh-pages/pyguide.md)