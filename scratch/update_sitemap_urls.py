import os

def update_sitemap():
    sitemap_path = 'public/sitemap.xml'
    
    with open(sitemap_path, 'r') as f:
        content = f.read()
        
    urls_to_add = [
        "https://bookescortservice.in/help",
        "https://bookescortservice.in/privacy",
        "https://bookescortservice.in/locations/hassan-call-girls",
        "https://bookescortservice.in/locations/mysore-call-girls",
        "https://bookescortservice.in/locations/digha-call-girls"
    ]
    
    new_nodes = ""
    for url in urls_to_add:
        if f"<loc>{url}</loc>" not in content:
            new_nodes += f"""  <url>
    <loc>{url}</loc>
    <lastmod>2026-07-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
"""

    if new_nodes:
        content = content.replace("</urlset>", new_nodes + "</urlset>")
        with open(sitemap_path, 'w') as f:
            f.write(content)
        print("Sitemap updated with new URLs.")
    else:
        print("URLs already exist in sitemap.")

if __name__ == "__main__":
    update_sitemap()
