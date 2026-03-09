import os
os.chdir(r'C:\Users\prash\Documents\ResearchInfuser\Projects\GCET2025\BMC205')

try:
    import PyPDF2
    
    # Read MCA Ordinance 2020-21.pdf
    print("=" * 80)
    print("MCA ORDINANCE 2020-21")
    print("=" * 80)
    with open('MCA Ordinance 2020-21.pdf', 'rb') as f:
        pdf_reader = PyPDF2.PdfReader(f)
        print(f"Total pages: {len(pdf_reader.pages)}\n")
        # Extract first 5 pages
        for i in range(min(5, len(pdf_reader.pages))):
            page = pdf_reader.pages[i]
            text = page.extract_text()
            print(f"--- Page {i+1} ---")
            print(text[:2000])  # First 2000 chars
            print()
    
    # Read MCA 2nd Year Syllabus
    print("\n" + "=" * 80)
    print("MCA 2ND YEAR SYLLABUS 2025-26")
    print("=" * 80)
    with open('MCA 2nd Year Syllabus 2025-26.pdf', 'rb') as f:
        pdf_reader = PyPDF2.PdfReader(f)
        print(f"Total pages: {len(pdf_reader.pages)}\n")
        # Extract first 5 pages
        for i in range(min(5, len(pdf_reader.pages))):
            page = pdf_reader.pages[i]
            text = page.extract_text()
            print(f"--- Page {i+1} ---")
            print(text[:2000])
            print()
            
except ImportError:
    print("PyPDF2 not installed. Installing...")
    import subprocess
    subprocess.check_call(['pip', 'install', 'PyPDF2', '--quiet'])
    print("Please run the script again.")
