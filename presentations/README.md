# Presentations Template

This is a template for creating lecture presentations. Copy this file and modify for each lecture.

## File Naming Convention

- Use `lecture-XX.qmd` format (e.g., `lecture-05.qmd`)
- Number lectures with zero-padding for lectures 1-9

## Template Structure

```qmd
---
title: "Lecture X: Topic Title"
subtitle: "BMC201 - Web Technology"
author: "Your Name"
date: "Date"
format:
  revealjs:
    slide-number: true
    code-link: true
    highlight-style: a11y
    chalkboard: true
    theme:
      - ../course-slides-styles.scss
---

## {#title-slide data-menu-title="Title Slide" background="#053660"}

<div class="custom-title">
[Lecture X]{.baby-blue-text}
</div>

<div class="custom-subtitle">
[Topic Title]{.white-text}
</div>

<div class="custom-subtitle3">
Week X | Unit X: Unit Title<br>
BMC201 - Web Technology
</div>

---

## {data-menu-title="Learning Objectives"}

[Learning Objectives]{.slide-title}

<hr>

::: {.body-text-l}
- Objective 1
- Objective 2
- Objective 3
:::

---

## {data-menu-title="Content Slide"}

[Slide Title]{.slide-title}

<hr>

::: {.body-text-l}
Content goes here
:::

---

## {data-menu-title="Resources"}

[Resources]{.slide-title}

<hr>

::: {.body-text-l}
- Course content: [Week X](/content/week-XX.qmd)
- Additional resources
:::

---

## {#end-slide data-menu-title="End Slide" background="#053660"}

<div class="page-center">
<div class="custom-subtitle">
[Questions?]{.white-text}
</div>
<div class="custom-subtitle3">
Next: Lecture X+1 - Next Topic
</div>
</div>
```

## Available Style Classes

### Text Sizes

- `.body-text-xl` - Extra large text
- `.body-text-l` - Large text
- `.body-text-m` - Medium text
- `.body-text-s` - Small text
- `.body-text-xs` - Extra small text

### Title Styles

- `.slide-title-xl` - Extra large title
- `.slide-title` - Large title
- `.slide-title2` - Medium title
- `.slide-title3` - Small title
- `.custom-title` - Cover slide title
- `.custom-subtitle` - Cover slide subtitle

### Text Colors

- `.baby-blue-text`
- `.dark-blue-text`
- `.white-text`
- `.teal-text`
- `.gray-text`
- `.magenta-text`
- `.orange-text`
- `.red-text`

### Alignment

- `.center-text` - Center align
- `.right-align-text` - Right align
- `.left-align-text` - Left align

### Spacing

- `.topbr` - Extra space above
- `.bottombr` - Extra space below

### Other

- `.pink-highlight` - Highlighted background
- `.blue-underline` - Blue underlined text

## RevealJS Features

- **Slide Navigation**: Arrow keys or space
- **Speaker Notes**: Press 'S'
- **Overview Mode**: Press 'O'
- **Fullscreen**: Press 'F'
- **Chalkboard**: Draw on slides (enabled)
- **Code Highlighting**: Automatic syntax highlighting
