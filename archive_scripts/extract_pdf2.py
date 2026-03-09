import os
os.chdir(r'C:\Users\prash\Documents\ResearchInfuser\Projects\GCET2025\BMC205')

try:
    import PyPDF2
    
    # Read MCA _First_Year_Detailed_Syllabus_2024-25.pdf
    print("=" * 80)
    print("MCA FIRST YEAR DETAILED SYLLABUS 2024-25")
    print("=" * 80)
    with open('MCA _First_Year_Detailed_Syllabus_2024-25.pdf', 'rb') as f:
        pdf_reader = PyPDF2.PdfReader(f)
        print(f"Total pages: {len(pdf_reader.pages)}\n")
        # Look for Web Technology or BMC course codes
        full_text = ""
        for i in range(min(15, len(pdf_reader.pages))):
            page = pdf_reader.pages[i]
            text = page.extract_text()
            full_text += text
        
        # Print content looking for course structure patterns
        print(full_text[:5000])
            
except ImportError as e:
    print(f"Error: {e}")
except Exception as e:
    print(f"Error reading PDF: {e}")
