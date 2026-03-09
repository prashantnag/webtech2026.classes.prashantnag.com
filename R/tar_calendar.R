suppressPackageStartupMessages(library(lubridate))
library(glue)
library(calendar)
library(readr)
library(dplyr)
library(purrr)

save_ical <- function(df, path) {
  calendar::ic_write(df, path)
  path
}

build_schedule_for_page <- function(schedule_file) {
  schedule <- read_csv(schedule_file, show_col_types = FALSE) |>
    mutate(
      date = as.Date(date),
      end_date = as.Date(end_date),
      date_range = case_when(
        is.na(end_date) ~ format(date, "%B %e"),
        TRUE ~ glue('{format(date, "%B %e")}–{format(end_date, "%B %e")}')
      ),
      deadline_actual = if_else(
        is.na(deadline),
        as.POSIXct(NA),
        update(date, hour = hour(deadline), minute = minute(deadline))
      ),
      deadline_nice = format(deadline_actual, "%I:%M %p")
    ) |>
    mutate(
      group = if_else(is.na(group), "Schedule", group),
      session = if_else(is.na(session), "", session),
      title = if_else(is.na(title), "", title),
      content = if_else(is.na(content), "", content),
      assignment = if_else(is.na(assignment), "", assignment),
      note = if_else(is.na(note), "", note)
    )

  schedule |>
    mutate(
      col_date = glue('<span class="content-date">{date_range}</span>'),
      col_title = glue('{session} {title}'),
      col_content = if_else(content == "", "", glue('<a href="{content}.qmd"><i class="fa-solid fa-book-open-reader fa-lg"></i></a>')),
      col_assignment = if_else(assignment == "", "", glue('<a href="{assignment}.qmd"><i class="fa-solid fa-pen-ruler fa-lg"></i></a>'))
    ) |>
    select(
      group,
      ` ` = col_date,
      Title = col_title,
      Content = col_content,
      Assignment = col_assignment,
      Note = note
    ) |>
    group_by(group) |>
    nest()
}

build_ical <- function(schedule_file, base_url, page_suffix, course_number) {
  dtstamp <- ic_char_datetime(now("UTC"), zulu = TRUE)

  schedule <- read_csv(schedule_file, show_col_types = FALSE) |>
    mutate(
      date = as.Date(date),
      session = if_else(is.na(session), "", session),
      title = if_else(is.na(title), "", title),
      content = if_else(is.na(content), "", content),
      assignment = if_else(is.na(assignment), "", assignment),
      summary = glue("{course_number}: {session} {title}"),
      url = coalesce(na_if(content, ""), na_if(assignment, "")),
      url = if_else(is.na(url), "", glue("{base_url}{url}{page_suffix}"))
    )

  schedule |>
    mutate(id = row_number()) |>
    group_by(id) |>
    nest() |>
    mutate(
      ical = map(data, ~ic_event(
        start = as.POSIXct(.x$date[[1]], format = "%Y-%m-%d"),
        end = as.POSIXct(.x$date[[1]], format = "%Y-%m-%d") + 24 * 60 * 60,
        summary = .x$summary[[1]],
        more_properties = TRUE,
        event_properties = c(
          "DESCRIPTION" = .x$url[[1]],
          "DTSTAMP" = dtstamp
        )
      ))
    ) |>
    ungroup() |>
    select(-id, -data) |>
    unnest(ical) |>
    ical() |>
    rename(
      `DTSTART;VALUE=DATE` = DTSTART,
      `DTEND;VALUE=DATE` = DTEND
    )
}
