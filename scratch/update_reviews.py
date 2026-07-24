import re

def update_reviews():
    filepath = 'src/routes/index.tsx'
    with open(filepath, 'r') as f:
        content = f.read()

    new_reviews_str = """            {[
              {
                initial: "R", bg: "bg-pink-600",
                name: "Rahul M.", date: "July 2026 - Koramangala",
                text: "Booked Priya for an evening through Kavya Escort Service Bangalore and the experience was top notch. Very professional, discreet, and punctual. Profile photos were 100% real. Will book again through Kavya Escort!",
                package: "Incall Service - Koramangala, Bangalore"
              },
              {
                initial: "A", bg: "bg-emerald-500",
                name: "Arjun K.", date: "July 2026 - Indiranagar",
                text: "Called Kavya Escorts at 11 PM, booking confirmed in 10 minutes. Ananya was fantastic — charming, educated. Best escort service in Bangalore, no question. 5 stars for Kavya!",
                package: "Outcall - Hotel Stay, Indiranagar"
              },
              {
                initial: "V", bg: "bg-amber-500",
                name: "Vikram S.", date: "June 2026 - Whitefield",
                text: "Natasha for corporate event — stunning, spoke perfect English, handled everything perfectly. Kavya VIP service is unmatched for Bangalore call girls. Highly recommended!",
                package: "VIP Corporate Package - Whitefield"
              },
              {
                initial: "S", bg: "bg-blue-500",
                name: "Suresh T.", date: "June 2026 - MG Road",
                text: "Using Kavya Escort Service 2 years now. Always reliable, always discreet. Full night ₹12,000 totally worth it. Best independent call girl service in Bangalore!",
                package: "Full Night Package - MG Road"
              },
              {
                initial: "M", bg: "bg-purple-500",
                name: "Manish B.", date: "May 2026 - Electronic City",
                text: "WhatsApp response instant on Kavya's number. Meera punctual, gorgeous, very comfortable. Total privacy maintained throughout. Kavya is the most trustworthy escort agency in Bangalore!",
                package: "2-Hour Package - Electronic City"
              },
              {
                initial: "D", bg: "bg-pink-500",
                name: "Dev R.", date: "May 2026 - HSR Layout",
                text: "First time using any escort service. Kavya Call Girls made it smooth, professional, safe. Riya exceeded all expectations. Real photos, real experience. 10/10!",
                package: "GFE Package - HSR Layout"
              },
              {
                initial: "N", bg: "bg-teal-500",
                name: "Naveen P.", date: "April 2026 - BTM Layout",
                text: "I was looking for Kannada call girls in Bangalore and Kavya Escort Service provided exactly what I asked for. The lady was very cooperative and beautiful. Thank you Kavya!",
                package: "Incall Service - BTM Layout"
              },
              {
                initial: "K", bg: "bg-orange-500",
                name: "Karthik Y.", date: "April 2026 - Marathahalli",
                text: "Outstanding outcall service by Kavya Escorts. She arrived at my 5-star hotel in Marathahalli within 45 minutes. Super discreet and exactly like the photos.",
                package: "Outcall - 5-Star Hotel, Marathahalli"
              },
              {
                initial: "P", bg: "bg-indigo-500",
                name: "Prateek J.", date: "March 2026 - Hebbal",
                text: "Tried Kavya Escort Service Bangalore for a weekend getaway. The Russian model was breathtaking. The agency is very transparent with their pricing, no hidden charges at all.",
                package: "Weekend Package - Hebbal"
              },
              {
                initial: "G", bg: "bg-rose-500",
                name: "Gaurav L.", date: "March 2026 - Jayanagar",
                text: "If you need premium VIP call girls in Bangalore, just text Kavya Escorts on Telegram. Zero advance payment and 100% genuine girls. Best experience I've had in the city.",
                package: "VIP Elite Package - Jayanagar"
              }
            ]"""

    # We need to find the block starting at `{[ \n { \n initial: "R",`
    # and ending right before `.map((review, i) => (`
    
    start_str = "            {[\n              {\n                initial: \"R\","
    end_str = "            ].map((review, i) => ("
    
    start_idx = content.find(start_str)
    end_idx = content.find(end_str)
    
    if start_idx != -1 and end_idx != -1:
        content = content[:start_idx] + new_reviews_str + "\n" + content[end_idx:]
        with open(filepath, 'w') as f:
            f.write(content)
        print("Updated reviews successfully.")
    else:
        print("Could not find the reviews array in the file.")

if __name__ == "__main__":
    update_reviews()
