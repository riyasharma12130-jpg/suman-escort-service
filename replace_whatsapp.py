import os
import glob
import re

def replace_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Replace Icon Component
    old_icon = '''const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className || "w-5 h-5"} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 1 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
)'''
    new_icon = '''const TelegramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className || "w-5 h-5"} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.532.26l.214-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.87 4.326-2.962-.924c-.643-.204-.656-.643.136-.953l11.57-4.458c.538-.196 1.006.128.757 1.074z"/>
  </svg>
)'''
    content = content.replace(old_icon, new_icon)
    # Edge case for index.tsx with a slightly different whitespace or semicolon
    old_icon2 = old_icon + ";"
    new_icon2 = new_icon + ";"
    content = content.replace(old_icon2, new_icon2)

    # 2. Replace Variables
    # Try exact multi-line replacement first
    old_vars = '''  const whatsappNumber = "+91 74148 38654";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\s/g, "")}`;'''
    new_vars = '''  const telegramHandle = "@Sonal_0101";
  const telegramLink = "https://t.me/Sonal_0101";'''
    
    if old_vars in content:
        content = content.replace(old_vars, new_vars)
    else:
        # Fallback regex
        content = re.sub(r'const whatsappNumber = "[^"]+";', 'const telegramHandle = "@Sonal_0101";', content)
        content = re.sub(r'const whatsappLink = [^;]+;', 'const telegramLink = "https://t.me/Sonal_0101";', content)
        
    # Also for index.tsx which might have it slightly differently
    # if it's there
    content = re.sub(r'whatsappNumber', 'telegramHandle', content)
    content = re.sub(r'whatsappLink', 'telegramLink', content)
    content = re.sub(r'WhatsappIcon', 'TelegramIcon', content)

    # 3. Replace Button styles
    content = content.replace('bg-[#25D366]', 'bg-[#0088cc]')
    content = content.replace('shadow-[0_0_15px_-5px_#25D366]', 'shadow-[0_0_15px_-5px_#0088cc]')
    content = content.replace('shadow-[0_0_20px_-5px_#25D366]', 'shadow-[0_0_20px_-5px_#0088cc]')
    content = content.replace('shadow-[0_0_40px_-10px_#25D366]', 'shadow-[0_0_40px_-10px_#0088cc]')
    content = content.replace('aria-label="WhatsApp Contact"', 'aria-label="Telegram Contact"')
    content = content.replace('Contact Us on WhatsApp', 'Contact Us on Telegram')
    content = content.replace('Message Us on WhatsApp', 'Message Us on Telegram')
    content = content.replace('WhatsApp / Phone Number', 'Telegram Handle')
    
    # Text replacements in Book.tsx & Contact.tsx
    content = content.replace('WhatsApp: {telegramHandle}', 'Telegram: {telegramHandle}')
    content = content.replace('contact us directly via WhatsApp', 'contact us directly via Telegram')
    content = content.replace('Contact us via WhatsApp', 'Contact us via Telegram')
    content = content.replace('WhatsApp message', 'Telegram message')
    content = content.replace('WhatsApp inquiries', 'Telegram inquiries')
    content = content.replace('WhatsApp +91 74148 38654', 'Telegram @Sonal_0101')
    content = content.replace('WhatsApp (+91 74148 38654)', 'Telegram (@Sonal_0101)')
    content = content.replace('Phone (WhatsApp & Call)', 'Telegram')
    
    # Edge case for index.tsx specifically:
    content = content.replace('Easy, instant booking through WhatsApp', 'Easy, instant booking through Telegram')

    # Update admin.tsx specifically
    content = content.replace('const savedWhatsapp', 'const savedTelegram')
    content = content.replace('setWhatsappNumber', 'setTelegramHandle')
    content = content.replace('localStorage.getItem("whatsappNumber")', 'localStorage.getItem("telegramHandle")')
    content = content.replace('localStorage.setItem("whatsappNumber"', 'localStorage.setItem("telegramHandle"')
    content = content.replace('fallback = "+1 (555) 018 · 2240"', 'fallback = "@Sonal_0101"')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

base_dir = '/home/devendra/Downloads/Sejal-Relax-Spa-main (2)/src/routes'
for root, _, files in os.walk(base_dir):
    for file in files:
        if file.endswith('.tsx'):
            replace_in_file(os.path.join(root, file))

print("Replacement complete.")
