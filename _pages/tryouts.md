---
layout: page
title: Tryouts
permalink: /tryouts/
description: A growing collection of your cool projects.
author_profile: false
display_categories: ["2023", "2022", "2019"]
horizontal: false
---

<!-- pages/tryouts.md -->
<div class="tryouts">
{%- if site.enable_tryout_categories and page.display_categories %}
  <!-- Display categorized tryouts -->
  {%- for category in page.display_categories %}
  <h3 class="category">{{ category }}</h3>
  {%- assign categorized_tryouts = site.tryouts | where: "category", category -%}
  {%- assign sorted_tryouts = categorized_tryouts | sort: "importance" %}
  <!-- Generate cards for each tryout -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for tryout in sorted_tryouts -%}
      {% include tryout_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for tryout in sorted_tryouts -%}
      {% include tryout.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
  {% endfor %}

{%- else -%}
<!-- Display tryouts without categories -->
  {%- assign sorted_tryouts = site.tryouts | sort: "importance" -%}
  <!-- Generate cards for each tryout -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for tryout in sorted_tryouts -%}
      {% include tryout_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for tryout in sorted_tryouts -%}
      {% include tryout.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
{%- endif -%}
</div>