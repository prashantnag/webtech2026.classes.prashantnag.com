import pandas as pd
import os

# Change to the BMC205 folder
os.chdir(r'C:\Users\prash\Documents\ResearchInfuser\Projects\GCET2025\BMC205')

print("=" * 80)
print("Reading: Web tech lab.xls")
print("=" * 80)
try:
    xls = pd.ExcelFile('Web tech lab.xls')
    print("Sheet names:", xls.sheet_names)
    for sheet in xls.sheet_names:
        print(f"\n--- Sheet: {sheet} ---")
        df = pd.read_excel('Web tech lab.xls', sheet_name=sheet)
        print(df.to_string())
except Exception as e:
    print(f"Error reading Web tech lab.xls: {e}")

print("\n" + "=" * 80)
print("Reading: WEB TECH session plan .xls")
print("=" * 80)
try:
    xls2 = pd.ExcelFile('WEB TECH session plan .xls')
    print("Sheet names:", xls2.sheet_names)
    for sheet in xls2.sheet_names:
        print(f"\n--- Sheet: {sheet} ---")
        df = pd.read_excel('WEB TECH session plan .xls', sheet_name=sheet)
        print(df.to_string())
except Exception as e:
    print(f"Error reading WEB TECH session plan .xls: {e}")
