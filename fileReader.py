import PyPDF2

file_path = r'C:\Users\dumez\Downloads\PORTFOLIO\DevMGMT\Mock Conversation.pdf'

def read_pdf(file_path):
    with open(file_path, 'rb') as f:
        reader = PyPDF2.PdfReader(f)
        text = ''
        for page in reader.pages:
            text += page.extract_text() + '\n'
    return text

pdf_text = read_pdf(file_path)

print(pdf_text)

