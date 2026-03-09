$excel = New-Object -ComObject Excel.Application
$excel.Visible = $false
$excel.ScreenUpdating = $false

# Read Web tech lab.xls
$workbook1 = $excel.Workbooks.Open("C:\Users\prash\Documents\ResearchInfuser\Projects\GCET2025\BMC205\Web tech lab.xls")

Write-Host "=== LAB DATES FROM Web tech lab.xls ===" -ForegroundColor Yellow

$sheet = $workbook1.Sheets(1)
$usedRange = $sheet.UsedRange
$rows = $usedRange.Rows.Count

$dates = @()

for ($row = 2; $row -le $rows; $row++) {
    $lecNo = $sheet.Cells.Item($row, 1).Value()
    $propDate = $sheet.Cells.Item($row, 3).Value()
    
    if ($lecNo -ne $null -and $propDate -ne  $null) {
        $dateString = [datetime]$propDate | Get-Date -Format "dd-MM-yyyy"
        if ($dates -notcontains $dateString) {
            $dates += $dateString
            Write-Host "Lab $lecNo - Date: $dateString"
        }
    }
}

Write-Host "`n=== UNIQUE LAB DATES (sorted) ===" -ForegroundColor Green
$dates | Sort-Object | ForEach-Object { Write-Host $_ }

$workbook1.Close()

# Now read WEB TECH session plan .xls for lecture dates
Write-Host "`n=== LECTURE DATES FROM WEB TECH session plan .xls ===" -ForegroundColor Yellow

$workbook2 = $excel.Workbooks.Open("C:\Users\prash\Documents\ResearchInfuser\Projects\GCET2025\BMC205\WEB TECH session plan .xls")

$allSheets = $workbook2.Sheets
$lectureDates = @()

for ($s = 1; $s -le $allSheets.Count; $s++) {
    $sheet = $allSheets.Item($s)
    $sheetName = $sheet.Name
    Write-Host "`nSheet: $sheetName" -ForegroundColor Cyan
    
    $usedRange = $sheet.UsedRange
    $rows = $usedRange.Rows.Count
    $cols = $usedRange.Columns.Count
    
    Write-Host "First 20 rows (Row | Columns 1-5):"
    
    for ($row = 1; $row -le [math]::Min(20, $rows); $row++) {
        $col1 = $sheet.Cells.Item($row, 1).Value()
        $col2 = $sheet.Cells.Item($row, 2).Value()
        $col3 = $sheet.Cells.Item($row, 3).Value()
        $col4 = $sheet.Cells.Item($row, 4).Value()
        $col5 = $sheet.Cells.Item($row, 5).Value()
        
        Write-Host "R$row | $col1 | $col2 | $col3 | $col4 | $col5"
    }
}

$workbook2.Close()

$excel.Quit()
[System.Runtime.InteropServices.Marshal]::ReleaseComObject($excel) | Out-Null
