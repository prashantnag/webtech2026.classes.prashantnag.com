# Web Technology - BMC201

Course website for BMC201 Web Technology at Galgotias College of Engineering & Technology.

## About This Site

This is a Quarto-based course website for the Web Technology course (BMC201), MCA Semester 2, 2025-26, following AKTU MCA Model Curriculum.

**Instructor**: Prashant Kumar Nag  
**Institution**: Galgotias College of Engineering & Technology  
**Curriculum**: AKTU MCA 2020-21 Model Curriculum  
**Credits**: 4 (3-1-0)

## Course Content

The course covers:

- HTML5 and semantic markup
- CSS3 styling and responsive design
- JavaScript programming
- Client-server architecture
- Web servers and deployment

## Building the Site

This website is built using [Quarto](https://quarto.org/). To build it:

### Prerequisites

1. Install [Quarto](https://quarto.org/docs/get-started/)
2. Install [R](https://www.r-project.org/) (optional, if using R code)

### Build Commands

```bash
# Preview the site locally
quarto preview

# Render the entire site
quarto render

# Render and publish
quarto publish
```

The rendered site will be in the `_site/` directory.

## Reproducible R Workflow (targets + renv + calendar)

This project now includes an R-based reproducible workflow inspired by the reference repository:

- `_targets.R`: pipeline definition for site + calendar artifacts
- `R/tar_calendar.R`: calendar table and `.ics` generation helpers
- `data/schedule.csv`: source schedule data for calendar generation
- `.Rprofile` + `renv/settings.json`: environment bootstrap configuration

### One-time setup in R

```r
install.packages("renv")
renv::activate()
renv::install(c("targets", "tarchetypes", "calendar", "readr", "dplyr", "purrr", "lubridate", "glue", "fs", "here", "quarto"))
renv::snapshot()
```

### Build with targets

```r
targets::tar_make()
```

This creates/updates `files/schedule.ics` and renders the site.

## Project Structure

```
webtech2025/
├── _quarto.yml           # Main configuration file
├── index.qmd             # Home page
├── syllabus.qmd          # Course syllabus
├── schedule.qmd          # Lecture schedule (40 lectures across 12 weeks)
│
├── content/              # Lecture materials (12 weeks)
│   ├── index.qmd
│   ├── week-01.qmd       # Week 1-2: HTML & Introduction (Lectures 1-4)
│   ├── week-02.qmd       # Week 2-3: HTML Elements & CSS (Lectures 5-8)
│   ├── week-03.qmd       # Week 3-5: CSS Styling & JavaScript (Lectures 9-12)
│   ├── week-04.qmd       # Week 4: JavaScript Functions & Events (Lectures 13-16)
│   ├── week-05.qmd       # Week 5: DOM & ES6+ (Lectures 17-20)
│   ├── week-06.qmd       # Week 6: Revision & Mid-Semester Exam
│   ├── week-08.qmd       # Week 8-9: Servlets, JSP & MVC (Lectures 21-28)
│   ├── week-09.qmd       # Week 9: JSP Advanced & MVC
│   ├── week-10.qmd       # Week 10: Spring Framework (Lectures 29-32)
│   ├── week-11.qmd       # Week 11: Spring Boot & Spring Data (Lectures 33-36)
│   └── week-12.qmd       # Week 12: REST APIs & Deployment (Lectures 37-40)
│
├── assignment/           # Assignments (aligned with weeks)
│   ├── index.qmd
│   ├── 01-assignment.qmd # Due Feb 11, 2026
│   ├── 02-assignment.qmd # Due Feb 25, 2026
│   ├── 03-assignment.qmd # Due Mar 18, 2026
│   └── 04-assignment.qmd # Due Apr 8, 2026
│
├── labs/                 # Lab manuals (9 sessions)
│   ├── index.qmd
│   ├── lab-01.qmd        # Environment Setup
│   ├── lab-02.qmd        # HTML Basics
│   └── lab-03.qmd        # CSS & Forms
│
├── resource/             # Additional resources
│   ├── index.qmd
│   ├── tools.qmd         # Development tools
│   └── web-servers.qmd   # Web server setup
│
├── html/                 # Custom styles
│   ├── custom.scss
│   └── styles.css
│
└── files/                # Static files (images, PDFs, etc.)
```

## Customization

### Update Site Information

Edit `_quarto.yml` to update:

- Course information
- Instructor details
- Navigation structure
- Site URL

### Add Content

1. Create new `.qmd` files in appropriate folders
2. Update navigation in `_quarto.yml`
3. Render the site

### Modify Styling

Edit `html/custom.scss` for custom styles.

## Publishing

### GitHub Pages

```bash
quarto publish gh-pages
```

### Netlify

```bash
quarto publish netlify
```

### Quarto Pub

```bash
quarto publish quarto-pub
```

## Template Credit

This site structure is inspired by [Andrew Heiss's course websites](https://github.com/andrewheiss/datavizf25.classes.andrewheiss.com).

## License

Course content © 2025 Prashant Kumar Nag

Website template and structure are available under the MIT License.

## Contact

For questions about the course:

- Email: prashant.nag@gcet.edu
- Course Website: https://webtech2025.classes.prashantnag.com

---

Built with [Quarto](https://quarto.org/)
