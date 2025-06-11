---
layout: page
title: UEGAN mps Implementation
description: focusing on changes for Apple Silicon (mps) support.
img: assets/img/mps.jpg
importance: 1
category: work

pdf_path:
ppt_path:

pretty_table: true

project_date: 2025-02-27

math: true

github: https://github.com/dudududukim/UEGAN-mps

# chart:
#   chartjs: true

# toc:
#   sidebar: left
---


### UEGAN Codebase `Modifications` for Apple MPS Support

<hr>

#### **TensorBoard Logger System Changes**

The TensorFlow-based logging system was completely removed and replaced with PyTorch's native TensorBoard implementation:

```python
from torch.utils.tensorboard import SummaryWriter

class Logger(object):
    """Create a tensorboard logger to log_dir."""
    def __init__(self, log_dir):
        """Initialize summary writer."""
        self.writer = SummaryWriter(log_dir=log_dir)

    def scalar_summary(self, tag, value, step):
        """Add scalar summary."""
        self.writer.add_scalar(tag, value, step)

    def images_summary(self, tag, images, step):
        """Log a list of images."""
        self.writer.add_images(tag, images, step)

    def histo_summary(self, tag, values, step, bins='tensorflow', walltime=None, max_bins=None):
        """Log a histogram of the tensor of values."""
        self.writer.add_histogram(
            tag, values, global_step=step, bins=bins, walltime=walltime, max_bins=max_bins
        )
        self.writer.flush()  # Explicit flush to ensure data is written
```

*This eliminates all TensorFlow dependencies, making the codebase more consistent with PyTorch and Apple Silicon compatibility.*

<hr>

#### **Memory Management for MPS**

On MPS devices, memory is now managed with:

```python
torch.mps.empty_cache()
time.sleep(2)  # Added sleep to ensure memory is properly released
```

*Within logging methods, dictionaries and image lists are also cleared to optimize memory usage.*

<hr>

#### **Device Detection Modernization**

Device detection logic is modernized as follows:

```python
self.device = torch.accelerator.current_accelerator().type if torch.accelerator.is_available() else "cpu"
```

<hr>

#### **Orthogonal Initialization for MPS**

Because MPS does not support QR decomposition, orthogonal initialization was updated:

```python
elif init_type == 'orthogonal':
    if torch.backends.mps.is_available():
        weight = m.weight.to("cpu")
        torch.nn.init.orthogonal_(weight, gain=gain)
        m.weight.data.copy_(weight.to(self.device))
    else:
        torch.nn.init.orthogonal_(m.weight, gain=gain)
```

<hr>

#### **VGG Model Modifications**

VGG19 model usage was adapted for MPS constraints:

```python
cnn = models.vgg19(weights='IMAGENET1K_V1').features
```

<hr>

#### **InstanceNorm2d Dynamic Allocation**

InstanceNorm2d layers are now dynamically allocated with correct channel counts:

```python
self.IN_layers = {
    'relu1_1': nn.InstanceNorm2d(64, affine=False, track_running_stats=False),
    'relu2_1': nn.InstanceNorm2d(128, affine=False, track_running_stats=False),
    'relu3_1': nn.InstanceNorm2d(256, affine=False, track_running_stats=False),
    'relu4_1': nn.InstanceNorm2d(512, affine=False, track_running_stats=False),
    'relu5_1': nn.InstanceNorm2d(512, affine=False, track_running_stats=False),
}
```

<hr>

#### **Modern PyTorch Module Usage**

Custom modules were replaced with PyTorch built-ins:

```python
elif act_fun_type == 'Swish':
    return nn.SiLU()  # torch.nn.SiLU supported now

elif norm_fun_type == 'none':
    norm_fun = nn.Identity
```

<hr>

#### **Tensor API Modernization**

`.data` attribute access was replaced with `.detach()` for modern PyTorch compatibility:

```python
x.detach()
```

<hr>

#### **Learning Rate Scheduler Updates**

Learning rate scheduler calls were simplified:

```python
self.lr_scheduler_g.step()
self.lr_scheduler_d.step()
```

<hr>

#### **Model Saving Improvements**

Model saving now includes robust error handling and path management:

```python
save_path = Path(self.model_save_path)
save_path.mkdir(parents=True, exist_ok=True)
model_filename = f"{self.args.version}_{self.args.adv_loss_type}_{current_epoch}.pth"
model_filepath = save_path / model_filename

try:
    torch.save(checkpoint, model_filepath)
    pbar.write(f"✅ Model checkpoint saved: {model_filepath}")
except Exception as e:
    pbar.write(f"❌ Error saving model checkpoint: {e}")
```

<hr>

#### **DataLoader Optimizations**

Device detection and iterator initialization were improved in the data loader:

```python
self.device = torch.accelerator.current_accelerator().type if torch.accelerator.is_available() else "cpu"
self.iter = iter(self.loader)
```

<hr>

#### **Batch Dimension Handling**

Batch dimension handling was clarified for NIMA calculation:

```python
image = image.unsqueeze(0)
```

<hr>

#### **Warning Handling Changes**

Warning suppression was removed for better debugging:

```python
# import warnings
# warnings.simplefilter("error")
```

<hr>

#### **Progress Reporting Enhancement**

Progress is now reported more clearly using tqdm's `write` method:

```python
pbar.write((
    "Elapse:{:&gt;.12s}, D_Step:{:&gt;6d}/{}, G_Step:{:&gt;6d}/{}, "
    "D_loss:{:&gt;.4f}, G_loss:{:&gt;.4f}, G_percep_loss:{:&gt;.4f}, "
    "G_adv_loss:{:&gt;.4f}, G_idt_loss:{:&gt;.4f}"
).format(
    elapsed, step + 1, total_steps, (step + 1), total_steps,
    self.d_loss, self.g_loss, self.g_percep_loss,
    self.g_adv_loss, self.g_idt_loss
))
```

<hr>

#### **Random Pair Generation Improvement**

Random pair generation for unsupervised learning was improved:

```python
random.shuffle(fnames)
random.shuffle(fnames2)
```

<hr>

> These changes make the UEGAN codebase fully compatible with Apple MPS, remove TensorFlow dependencies, and modernize the implementation to align with current PyTorch best practices.

<div id="github-button"></div>
<script>
  document.getElementById('github-button').innerHTML = `
    <a href="https://github.com/dudududukim/UEGAN-mps" target="_blank"
       style="display:inline-flex;align-items:center;padding:8px 16px;background:#24292f;color:#fff;border-radius:6px;font-weight:bold;text-decoration:none;">
      <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor" style="margin-right:8px;">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.11 0 0 .67-.21 2.2.82a7.6 7.6 0 012-.27c.68.003 1.36.092 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.11.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
      </svg>
      View on GitHub
    </a>
  `;
</script>


<div align="right">
<sub>Summarized using <i>Perplexity (Claude 3.7 Sonnet)</i> · Retouched by <i>Duhyeon Kim</i></sub>
<br>
<br>
</div>

<hr>

### Original Source
This implementation is based on:
- **Paper**: [Unsupervised Image Enhancement Using GANs](https://arxiv.org/abs/2012.15020) *(Replace with the correct arXiv link if available)*  
- **Code**: [eezkni/UEGAN](https://github.com/eezkni/UEGAN)  
We acknowledge the original authors for their foundational work.

<hr>