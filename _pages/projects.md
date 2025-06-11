---
layout: page
title: projects
permalink: /projects/
description: collections for my personal projects.
nav: true
nav_order: 3
display_categories: [work, life]
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects" style="margin-top: -1rem;">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
    <a id="{{ category }}" href=".#{{ category }}">
      <h2 class="category" style="margin-top: 1rem;">{{ category }}</h2>
    </a>
    {% assign categorized_projects = site.projects | where: "category", category %}
    {%- comment -%}
      importance(오름차순, 낮을수록 먼저) → project_date(내림차순, 최신이 먼저)
    {%- endcomment -%}
    {% assign sorted_projects = categorized_projects
      | sort: "project_date" | reverse
      | sort: "importance" %}
    <!-- Generate cards for each project -->
    {% if page.horizontal %}
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2">
        {% for project in sorted_projects %}
          {% include projects_horizontal.liquid %}
        {% endfor %}
        </div>
      </div>
    {% else %}
      <div class="row row-cols-1 row-cols-md-3">
        {% for project in sorted_projects %}
          {% include projects.liquid %}
        {% endfor %}
      </div>
    {% endif %}
  {% endfor %}

{% else %}
  <!-- Display projects without categories -->
  {%- comment -%}
    importance(오름차순, 낮을수록 먼저) → project_date(내림차순, 최신이 먼저)
  {%- endcomment -%}
  {% assign sorted_projects = site.projects
    | sort: "project_date" | reverse
    | sort: "importance" %}

  <!-- Generate cards for each project -->
  {% if page.horizontal %}
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2">
      {% for project in sorted_projects %}
        {% include projects_horizontal.liquid %}
      {% endfor %}
      </div>
    </div>
  {% else %}
    <div class="row row-cols-1 row-cols-md-3">
      {% for project in sorted_projects %}
        {% include projects.liquid %}
      {% endfor %}
    </div>
  {% endif %}
{% endif %}
</div>