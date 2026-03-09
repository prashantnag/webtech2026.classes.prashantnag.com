# Presentations Setup Guide

## What Has Been Done

### 1. Custom SCSS Styling

Created [course-slides-styles.scss](../course-slides-styles.scss) based on the UCSB-MEDS presentation template with:

- Custom fonts (Nunito, Sanchez, Roboto Mono)
- Professional color scheme (baby-blue, teal, dark-blue, etc.)
- Pre-defined text classes for easy styling
- RevealJS-optimized layouts

### 2. Presentation Structure

Created a [presentations/](../presentations/) folder containing:

- **4 complete sample presentations** (Lectures 1-4)
- **index.qmd** - Directory of all presentations
- **README.md** - Template and styling reference

### 3. Schedule Integration

Updated [schedule.qmd](../schedule.qmd) to:

- Add "Presentations" section in the introduction
- Add "Slides" column to all weekly tables
- Link Week 1 lectures to their presentations
- Include presentation icon ({{< fa desktop >}})

### 4. Navigation Updates

Modified [\_quarto.yml](../_quarto.yml) to:

- Add "Presentations" to navbar menu
- Create "Lecture Presentations" sidebar
- List Week 1 presentations individually

---

## How to Create More Presentations

### Step 1: Copy the Template

Use the template from [presentations/README.md](../presentations/README.md) or copy an existing presentation:

```bash
cp presentations/lecture-01.qmd presentations/lecture-05.qmd
```

### Step 2: Update the YAML Front Matter

```yaml
---
title: "Lecture 5: HTML Lists & Images"
subtitle: "BMC201 - Web Technology"
author: "Your Name"
date: "February 2, 2026"
format:
  revealjs:
    slide-number: true
    code-link: true
    highlight-style: a11y
    chalkboard: true
    theme:
      - ../course-slides-styles.scss
---
```

### Step 3: Update the Title Slide

```markdown
## {#title-slide data-menu-title="Title Slide" background="#053660"}

<div class="custom-title">
[Lecture 5]{.baby-blue-text}
</div>

<div class="custom-subtitle">
[HTML Lists & Images]{.white-text}
</div>

<div class="custom-subtitle3">
Week 2 | Unit I: Web Page Designing<br>
BMC201 - Web Technology
</div>
```

### Step 4: Add Content Slides

Use the available style classes (see Style Classes section below).

### Step 5: Update the Schedule

Edit [schedule.qmd](../schedule.qmd) and replace the placeholder:

```markdown
| _Lecture 5_ | HTML Lists & Images | [{{< fa desktop >}}](/presentations/) | ... |
```

With the actual link:

```markdown
| _Lecture 5_ | HTML Lists & Images | [{{< fa desktop >}}](/presentations/lecture-05.qmd) | ... |
```

---

## Available Style Classes

### Text Sizes

- `.body-text-xl` - Extra large text (2em)
- `.body-text-l` - Large text (1.5em)
- `.body-text-m` - Medium text (1.3em)
- `.body-text-s` - Small text (20px)
- `.body-text-xs` - Extra small text (0.5em)

### Title Styles

- `.slide-title-xl` - Extra large title (3em)
- `.slide-title` - Large title (2em) - **Most Common**
- `.slide-title2` - Medium title (1.7em)
- `.slide-title3` - Small title (1.5em)
- `.custom-title` - Cover slide title
- `.custom-subtitle` - Cover slide subtitle (large)
- `.custom-subtitle2` - Cover slide subtitle (medium)
- `.custom-subtitle3` - Cover slide subtitle (small)

### Text Colors

- `.baby-blue-text` - Light blue
- `.dark-blue-text` - Navy blue
- `.white-text` - White
- `.teal-text` - Teal/cyan
- `.gray-text` - Gray
- `.magenta-text` - Magenta
- `.orange-text` - Orange
- `.red-text` - Red

### Alignment

- `.center-text` - Center align
- `.right-align-text` - Right align
- `.left-align-text` - Left align

### Spacing

- `.topbr` - Extra space above line
- `.bottombr` - Extra space below line

### Special Effects

- `.pink-highlight` - Highlighted background
- `.blue-underline` - Blue underlined text

---

## Slide Layout Examples

### Basic Content Slide

```markdown
## {data-menu-title="Topic Name"}

[Slide Title]{.slide-title}

<hr>

::: {.body-text-l}

- Point 1
- Point 2
- Point 3
  :::
```

### Two-Column Layout

```markdown
## {data-menu-title="Comparison"}

[Comparison Title]{.slide-title2}

<hr>

::: columns
::: {.column width="50%"}
**Left Column**

- Point A
- Point B
  :::

::: {.column width="50%"}
**Right Column**

- Point X
- Point Y
  :::
  :::
```

### Code Example Slide

```markdown
## {data-menu-title="Code Example"}

[Code Example]{.slide-title}

<hr>

\`\`\`html

<!DOCTYPE html>
<html>
<body>
    <h1>Hello World</h1>
</body>
</html>
\`\`\`

::: {.body-text-m .topbr}
Explanation of the code
:::
```

### End Slide

```markdown
## {#end-slide data-menu-title="End Slide" background="#053660"}

<div class="page-center">
<div class="custom-subtitle">
[Questions?]{.white-text}
</div>
<div class="custom-subtitle3">
Next: Lecture X - Next Topic
</div>
</div>
```

---

## RevealJS Keyboard Shortcuts

When presenting:

- **Arrow keys** or **Space**: Navigate slides
- **S**: Open speaker notes view
- **O**: Toggle overview mode
- **F**: Enter fullscreen
- **B** or **.**: Pause/blackout
- **Esc**: Exit fullscreen or overview
- **C**: Toggle chalkboard
- **Alt+Click**: Zoom in on clicked area

---

## Tips for Great Presentations

1. **Keep it simple**: Don't overcrowd slides with text
2. **Use visuals**: Add images, diagrams, code examples
3. **Consistent styling**: Use the same classes throughout
4. **Incremental reveals**: Use `::: incremental` for bullet points
5. **Speaker notes**: Add notes using `::: {.notes}`
6. **Code highlighting**: Use ` ```{.language} ` for syntax highlighting
7. **Practice**: Preview your slides before class

---

## Rendering Presentations

### Preview in VS Code

1. Open the presentation `.qmd` file
2. Click "Preview" button or press `Ctrl+Shift+K`
3. Quarto will render and open in browser

### Render from Command Line

```bash
quarto render presentations/lecture-01.qmd
```

### Render All Presentations

```bash
quarto render presentations/
```

### Publish to Website

Presentations are automatically included when you render the entire site:

```bash
quarto render
```

---

## Next Steps

### For Week 2-5, 8-12:

1. Create remaining presentation files (lectures 5-40)
2. Update links in [schedule.qmd](../schedule.qmd)
3. (Optional) Add to sidebar in [\_quarto.yml](../_quarto.yml)

### Customization Options:

- Modify color scheme in [course-slides-styles.scss](../course-slides-styles.scss)
- Change fonts by updating the `@import` URL
- Add your logo/branding to title slides
- Create custom slide transitions
- Add animations using RevealJS features

---

## Troubleshooting

**Problem**: Styles not applying  
**Solution**: Check that `theme: - ../course-slides-styles.scss` is in YAML front matter

**Problem**: Font Awesome icons not showing  
**Solution**: Ensure fontawesome extension is installed: `quarto add quarto-ext/fontawesome`

**Problem**: Slides not rendering  
**Solution**: Check YAML syntax, ensure proper indentation

**Problem**: Code blocks showing incorrectly  
**Solution**: Use proper fencing with language: ` ```html ` instead of ` ``` `

---

## Resources

- [Quarto RevealJS Documentation](https://quarto.org/docs/presentations/revealjs/)
- [RevealJS Documentation](https://revealjs.com/)
- [UCSB-MEDS Presentation Template](https://github.com/UCSB-MEDS/customizing-quarto-websites)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [Google Fonts](https://fonts.google.com/)
