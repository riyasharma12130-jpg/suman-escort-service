import os

def update_domain():
    # Update robots.txt
    robots_path = 'public/robots.txt'
    with open(robots_path, 'r') as f:
        robots_content = f.read()
    
    robots_content = robots_content.replace('https://kavyaescortbangalore.vercel.app', 'https://bookescortservice.in')
    
    with open(robots_path, 'w') as f:
        f.write(robots_content)
    print("Updated robots.txt")

    # Update sitemap.xml
    sitemap_path = 'public/sitemap.xml'
    with open(sitemap_path, 'r') as f:
        sitemap_content = f.read()
        
    sitemap_content = sitemap_content.replace('https://kavyaescortbangalore.vercel.app', 'https://bookescortservice.in')
    
    # Add report route if not exists
    if '<loc>https://bookescortservice.in/report</loc>' not in sitemap_content:
        report_node = """  <url>
    <loc>https://bookescortservice.in/report</loc>
    <lastmod>2026-07-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>"""
        sitemap_content = sitemap_content.replace('</urlset>', report_node)
        
    with open(sitemap_path, 'w') as f:
        f.write(sitemap_content)
    print("Updated sitemap.xml")

if __name__ == "__main__":
    update_domain()
