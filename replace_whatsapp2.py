import os

def replace_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remaining textual replacements
    content = content.replace('via WhatsApp. Send', 'via Telegram. Send')
    content = content.replace('savedWhatsapp', 'savedTelegram')
    content = content.replace('htmlFor="whatsapp"', 'htmlFor="telegram"')
    content = content.replace('id="whatsapp"', 'id="telegram"')
    content = content.replace('the WhatsApp and Calling', 'the Telegram and Calling')
    content = content.replace('WhatsApp at +91 74148 38654', 'Telegram at @Sonal_0101')
    content = content.replace('WhatsApp नंबर <strong>+91 74148 38654</strong>', 'Telegram हैंडल <strong>@Sonal_0101</strong>')
    content = content.replace('Call or WhatsApp us', 'Call or Telegram us')
    content = content.replace('Book Now via WhatsApp', 'Book Now via Telegram')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

base_dir = '/home/devendra/Downloads/Sejal-Relax-Spa-main (2)/src/routes'
for root, _, files in os.walk(base_dir):
    for file in files:
        if file.endswith('.tsx'):
            replace_in_file(os.path.join(root, file))

print("Second replacement complete.")
