import os

cities = [
  "Bilaspur", "Korba", "Rajnandgaon", "Jagdalpur", "Kolhapur", "Solapur", "Amravati", 
  "Navi Mumbai", "Thane", "Bikaner", "Alwar", "Bharatpur", "Sikar", "Jhunjhunu", 
  "Tonk", "Sawai Madhopur", "Chittorgarh", "Pushkar", "Jaisalmer", "Roorkee", 
  "Rudrapur", "Kashipur", "Solan", "Mandi", "Dalhousie", "Kasol", "Baddi", 
  "Gorakhpur", "Meerut", "Ghaziabad", "Aligarh", "Bareilly", "Moradabad", "Ayodhya", 
  "Jhansi", "Saharanpur", "Faizabad", "Shahjahanpur", "Siliguri", "Durgapur", 
  "Asansol", "Darjeeling", "Haldia", "Rajkot", "Bhavnagar", "Jamnagar", "Gandhinagar", 
  "Anand", "Gandhidham", "Mysore", "Hubli", "Mangalore", "Belgaum", "Davangere", 
  "Tumkur", "Shivamogga", "Udupi", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", 
  "Vellore", "Tiruppur", "Erode", "Ooty", "Puducherry", "Kanchipuram", "Nagercoil", 
  "Warangal", "Karimnagar", "Nizamabad", "Nalgonda", "Khammam", "Vijayawada", 
  "Tirupati", "Nellore", "Guntur", "Kakinada", "Rajahmundry", "Kurnool", 
  "Thiruvananthapuram", "Kozhikode", "Thrissur", "Kannur", "Jamshedpur", "Dhanbad", 
  "Bokaro", "Cuttack", "Rourkela", "Sambalpur", "Berhampur", "Dibrugarh", "Silchar", 
  "Jorhat", "Patiala", "Bathinda", "Pathankot", "Hoshiarpur", "Ambala", "Panipat", 
  "Karnal", "Hisar", "Rohtak", "Faridabad", "Jabalpur", "Ujjain", "Ratlam", "Satna", 
  "Sagar", "Patna", "Bhilwara", "Pali", "Barmer", "Sri Ganganagar", "Churu", 
  "Nagaur", "Dungarpur", "Banswara", "Baran", "Bundi", "Dausa", "Dholpur", 
  "Hanumangarh", "Jalore", "Jhalawar", "Karauli", "Rajsamand", "Sirohi", "Pratapgarh", 
  "Firozabad", "Etawah", "Mainpuri", "Muzaffarnagar", "Rampur", "Bijnor", "Amroha", 
  "Sambhal", "Budaun", "Pilibhit", "Lakhimpur Kheri", "Sitapur", "Hardoi", "Unnao", 
  "Rae Bareli", "Sultanpur", "Amethi", "Barabanki", "Basti", "Sant Kabir Nagar", 
  "Siddharthnagar", "Balrampur", "Bahraich", "Shrawasti", "Gonda", "Deoria", 
  "Kushinagar", "Maharajganj", "Azamgarh", "Mau", "Ballia", "Ghazipur", "Chandauli", 
  "Mirzapur", "Sonbhadra", "Bhadohi", "Jaunpur", "Fatehpur", "Banda", "Chitrakoot", 
  "Hamirpur", "Mahoba", "Lalitpur", "Auraiya", "Kannauj", "Farrukhabad", "Etah", 
  "Kasganj", "Hathras", "Baghpat", "Bulandshahr", "Hapur", "Shamli", "Samastipur", 
  "Khagaria", "Lakhisarai", "Sheikhpura", "Supaul", "Madhepura", "Sheohar", "Latur", 
  "Osmanabad", "Beed", "Jalna", "Parbhani", "Hingoli", "Nanded", "Yavatmal", "Wardha", 
  "Chandrapur", "Gadchiroli", "Gondia", "Bhandara", "Buldhana", "Akola", "Washim", 
  "Jalgaon", "Dhule", "Nandurbar", "Ahmednagar", "Satara", "Sangli", "Ratnagiri", 
  "Sindhudurg", "Raigad", "Palghar", "Junagadh", "Porbandar", "Bharuch", "Valsad", 
  "Navsari", "Vapi", "Morbi", "Patan", "Mehsana", "Palanpur", "Godhra", "Dahod", 
  "Botad", "Amreli", "Veraval", "Bellary", "Bidar", "Bijapur", "Gulbarga", "Raichur", 
  "Koppal", "Chitradurga", "Chikmagalur", "Kodagu", "Kolar", "Chikkaballapur", 
  "Ramanagara", "Mandya", "Bagalkot", "Haveri", "Gadag", "Dharwad", "Uttara Kannada", 
  "Yadgir", "Thanjavur", "Thoothukudi", "Dindigul", "Karur", "Namakkal", "Cuddalore", 
  "Villupuram", "Kanyakumari", "Sivaganga", "Hassan", "Digha", "Koramangala", 
  "Indiranagar", "Whitefield", "Marathahalli", "Jayanagar", "JP Nagar", "HSR Layout",
  "Electronic City", "Bellandur", "Hebbal", "Yelahanka", "Majestic"
]

def update_sitemap():
    sitemap_path = 'public/sitemap.xml'
    
    with open(sitemap_path, 'r') as f:
        content = f.read()
        
    new_nodes = ""
    for city in cities:
        url_formatted = city.lower().replace(" ", "-") + "-escorts"
        full_url = f"https://bookescortservice.in/locations/{url_formatted}"
        
        if f"<loc>{full_url}</loc>" not in content:
            new_nodes += f"""  <url>
    <loc>{full_url}</loc>
    <lastmod>2026-07-24</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
"""

    if new_nodes:
        content = content.replace("</urlset>", new_nodes + "</urlset>")
        with open(sitemap_path, 'w') as f:
            f.write(content)
        print(f"Sitemap updated with all cities.")
    else:
        print("City URLs already exist in sitemap.")

if __name__ == "__main__":
    update_sitemap()
