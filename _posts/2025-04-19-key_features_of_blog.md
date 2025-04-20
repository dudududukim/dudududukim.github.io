---
layout: post
title: Tips to write blog .md
date: 2025-04-19 15:47:00 +0900
last_updated: 2025-04-19 15:47:00 +0900
description: this is the page for me to write the _posts markdown
tags: tips markdown Kramdown
categories: jekyll
citation : true
tabs: true
toc:
  sidebar: left
featured : true
thumbnail : assets/img/prof_pic_color.png
---

## Introduction

This blog post highlights the key features of to write the posts markdwon.

## Tips

### <br>Tabs for something else

! You should have `tabs: true` in the YAML front matter.

{% tabs something-else %}

{% tab something-else text %}

Regular text

{% endtab %}

{% tab something-else quote %}

> A quote

{% endtab %}

{% tab something-else list %}

Hipster list

- brunch
- fixie
- raybans
- messenger bag

{% endtab %}

{% endtabs %}

### <br>post with citation

If you place `citation: true` in the YAML front matter, it displays the citation reference in the below of the post.

### <br>Image with fancy options

You can check the forms in the <a href="/blog/2024/advanced-images/">Advanced Image</a>.

You should place the key options in the YAML front matter, too!

```yml
images:
  compare: true
  slider: true
```

### <br>w jupyter notebook

There exits a [Jekyll Jupyter Notebook plugin](https://github.com/red-data-tools/jekyll-jupyter-notebook).<br>
It convets the jupyter notebook to html site.<br>
Since [Kramdown](https://jekyllrb.com/docs/configuration/markdown/) automatically renders the jekyll's markdown, we should use the [::nomarkdown](https://kramdown.gettalong.org/syntax.html#extensions) tag to process the following text without Kramdown.

```
{% raw %}
{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/blog.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/blog.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}

<p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}
{% endraw %}
```

No front matter is needed, only the nomarkdwon tag!<br>
You can see the randering results in [a post with jupyter notebook](/blog/2023/jupyter-notebook/)

### <br>Custom blockquotes

You can use pre-defined scss for the quote block.

The examples are below.

```markdown
> ##### WARNING
>
> This is a warning, and thus should
> be used when you want to warn the user
{: .block-warning }
```

> ##### WARNING
>
> This is a warning, and thus should
> be used when you want to warn the user
{: .block-warning }

The `{: .block-warning }` makes the former quote block changed to the additional scss.

More options : `{: .block-tip }`, `{: .block-danger }`


### <br>Post with table of contents

YAML front matter
```yml
toc:
  sidebar: left
```

More customization of toc can be learned through [bootstrap-toc](https://afeld.github.io/bootstrap-toc/).

### <br>Redirct post

```yml
redirect: /assets/pdf/example_pdf.pdf
```

It directly redirct to the file.<br>
Example page in [a post with redirect](/blog/2022/redirect/)

### <br>Math post

You can use expression with `$$`.<br>
You should follow the grammar of [MathJax 3](https://www.mathjax.org/) engine.

```
$$
\sum_{k=1}^\infty |\langle x, e_k \rangle|^2 \leq \|x\|^2
$$
```

$$
\sum_{k=1}^\infty |\langle x, e_k \rangle|^2 \leq \|x\|^2
$$


### <br>Code post

Basically you can write code with `\`\`\` c++`.<br>
As the number of line is false for default. You can use below argument.

```markdwon
{% raw %}
{% highlight c++ linenos %}
{% endhighlihgt %}
{% endraw %}
```

### <br>Zoomable-image

```yml
thumbnail: assets/img/9.jpg
```
Using the thumbnail yml, you can display the image in the home.

To use the `zoomable=true` see the full source code in [a post with images source code](https://github.com/alshedivat/al-folio/blob/main/_posts/2015-05-15-images.md).

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/8.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/10.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

### <br>Basic formatting

#### Check List

- [x] Brush Teeth
- [ ] Put on socks
  - [x] Put on left sock
  - [ ] Put on right sock
- [x] Go to school

You can simple apply check list with md, but i don't i will use it frequently...😕

```markdown
#### Check List

- [x] Brush Teeth
- [ ] Put on socks
  - [x] Put on left sock
  - [ ] Put on right sock
- [x] Go to school
```

<hr>





### <br>Other options

```yml
pseudocode: true
chart:
  vega_lite: true
  echarts: true
  chartjs: true
code_diff: true
map: true                   # geojson
pretty_table: true          # bootstrap table
toc:
  beginning: true
giscus_comments: true
mermaid:                    # diagram JS
  enabled: true
  zoomable: true
layout : distill            # distill form layout : check for further usage
featured : true             # pinned in the blog home
```