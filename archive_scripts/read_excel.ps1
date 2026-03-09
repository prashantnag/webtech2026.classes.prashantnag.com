$excel = New-Object -ComObject Excel.Application
$excel.Visible = $false

# Read Web tech lab.xls
$workbook1 = $excel.Workbooks.Open("C:\Users\prash\Documents\ResearchInfuser\Projects\GCET2025\BMC205\Web tech lab.xls")
Write-Host "=== Web tech lab.xls ===" -ForegroundColor Yellow
Write-Host "Sheet Count: $($workbook1.Sheets.Count)"

foreach ($sheet in $workbook1.Sheets) {
    Write-Host "`nSheet: $($sheet.Name)" -ForegroundColor Cyan
    $usedRange = $sheet.UsedRange
    $rows = $usedRange.Rows.Count
    $cols = $usedRange.Columns.Count
    
    Write-Host "Rows: $rows, Cols: $cols"
    
    for ($row = 1; $row -le $rows; $row++) {
        $rowData = @()
        for ($col = 1; $col -le $cols; $col++) {
            $cell = $sheet.Cells.Item($row, $col).Value()
            if ($cell -ne $null) {
                $rowData += $cell
            }
        }
        if ($rowData.Count -gt 0) {
            Write-Host ($rowData -join " | ")
        }
    }
}

$workbook1.Close()

# Read WEB TECH session plan .xls
$workbook2 = $excel.Workbooks.Open("C:\Users\prash\Documents\ResearchInfuser\Projects\GCET2025\BMC205\WEB TECH session plan .xls")
Write-Host "`n=== WEB TECH session plan .xls ===" -ForegroundColor Yellow
Write-Host "Sheet Count: $($workbook2.Sheets.Count)"

foreach ($sheet in $workbook2.Sheets) {
    Write-Host "`nSheet: $($sheet.Name)" -ForegroundColor Cyan
    $usedRange = $sheet.UsedRange
    $rows = $usedRange.Rows.Count
    $cols = $usedRange.Columns.Count
    
    Write-Host "Rows: $rows, Cols: $cols"
    
    for ($row = 1; $row -le $rows; $row++) {
        $rowData = @()
        for ($col = 1; $col -le $cols; $col++) {
            $cell = $sheet.Cells.Item($row, $col).Value()
            if ($cell -ne $null) {
                $rowData += $cell
            }
        }
        if ($rowData.Count -gt 0) {
            Write-Host ($rowData -join " | ")
        }
    }
}

$workbook2.Close()

$excel.Quit()
[System.Runtime.InteropServices.Marshal]::ReleaseComObject($excel)
