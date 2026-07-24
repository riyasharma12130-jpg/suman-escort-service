import os

def replace_number():
    files_to_update = [
        'src/routes/contact.tsx',
        'src/routes/__root.tsx',
        'src/routes/index.tsx'
    ]
    
    old_num1 = '74148 38654'
    new_num1 = '99285 61640'
    
    old_num2 = '7414838654'
    new_num2 = '9928561640'
    
    for filepath in files_to_update:
        if os.path.exists(filepath):
            with open(filepath, 'r') as f:
                content = f.read()
                
            content = content.replace(old_num1, new_num1)
            content = content.replace(old_num2, new_num2)
            
            with open(filepath, 'w') as f:
                f.write(content)
            print(f"Updated {filepath}")
        else:
            print(f"File not found: {filepath}")

if __name__ == "__main__":
    replace_number()
