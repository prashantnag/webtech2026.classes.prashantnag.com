# renv setup

This project includes `renv` configuration scaffolding.

## First-time setup

Run these commands in R:

```r
install.packages("renv")
renv::activate()
renv::install(c("targets", "tarchetypes", "calendar", "readr", "dplyr", "purrr", "lubridate", "glue", "fs", "here", "quarto"))
renv::snapshot()
```

This will generate `renv.lock` and `renv/activate.R` for reproducible builds.
