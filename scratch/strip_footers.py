import os
import re
import glob

def strip_footers():
    files = glob.glob('src/routes/**/*.tsx', recursive=True)
    
    # Regex to match <footer>...</footer>, handling newlines
    footer_pattern = re.compile(r'<footer.*?</footer>', re.DOTALL)
    
    for file in files:
        # Don't touch __root.tsx as it contains the new Footer component import/usage, wait, it uses <Footer /> not <footer>
        if '__root.tsx' in file:
            continue
            
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        new_content = footer_pattern.sub('', content)
        
        if content != new_content:
            with open(file, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Stripped footer from {file}")

if __name__ == "__main__":
    strip_footers()
