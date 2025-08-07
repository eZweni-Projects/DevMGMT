# import PyPDF2

# file_path = r'C:\Users\dumez\Downloads\PORTFOLIO\DevMGMT\Mock Conversation.pdf'

# def read_pdf(file_path):
#     with open(file_path, 'rb') as f:
#         reader = PyPDF2.PdfReader(f)
#         text = ''
#         for page in reader.pages:
#             text += page.extract_text() + '\n'
#     return text

# pdf_text = read_pdf(file_path)

# print(pdf_text)

import PyPDF2
import requests
import json

file_path = r'C:\Users\dumez\Downloads\PORTFOLIO\DevMGMT\Mock Conversation.pdf'

def read_pdf(file_path):
    with open(file_path, 'rb') as f:
        reader = PyPDF2.PdfReader(f)
        text = ''
        for page in reader.pages:
            text += page.extract_text() + '\n'
    return text

pdf_text = read_pdf(file_path)

print("=== Extracted PDF Text ===")
print(pdf_text)

# HTTPS POST
url = "http://localhost:3000/textExtract" 
payload = { "text": pdf_text }

try:
    print(f"\nSending data to {url} ...")
    response = requests.post(url, json=payload, verify=True)  # verify=True is default
    print("=== Server Response ===")
    print(response.status_code)
    print(response.text)
except requests.exceptions.SSLError as ssl_err:
    print("SSL Error:", ssl_err)
except requests.exceptions.RequestException as req_err:
    print("Request Error:", req_err)

