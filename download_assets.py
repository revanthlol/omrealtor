import urllib.request
import os

images = {
    "hero.webp": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&auto=format&fit=crop&q=85",
    "sai_nakshatra.webp": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&auto=format&fit=crop&q=80",
    "delta_crest.webp": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&auto=format&fit=crop&q=80",
    "kharkopar_gateway.webp": "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1200&auto=format&fit=crop&q=80",
    "boulevard.webp": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80",
    "rivera.webp": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&auto=format&fit=crop&q=80",
    "greenfield.webp": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&auto=format&fit=crop&q=80",
    "aeropolis.webp": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&auto=format&fit=crop&q=80",
    "rental_residency.webp": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&auto=format&fit=crop&q=80",
    "interior_living.webp": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&auto=format&fit=crop&q=80",
    "interior_kitchen.webp": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1200&auto=format&fit=crop&q=80",
    "interior_bedroom.webp": "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1200&auto=format&fit=crop&q=80",
    "interior_balcony.webp": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&auto=format&fit=crop&q=80",
    "floorplan_2d.webp": "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&auto=format&fit=crop&q=80",
    "floorplan_3d.webp": "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=1200&auto=format&fit=crop&q=80",
    "ulwe_aerial.webp": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1400&auto=format&fit=crop&q=80",
    "office_advisory.webp": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop&q=80",
    "consultation.webp": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&auto=format&fit=crop&q=80"
}

out_dir = "/home/rev/Documents/projects/omrealtor/img"
os.makedirs(out_dir, exist_ok=True)

for fname, url in images.items():
    dest = os.path.join(out_dir, fname)
    if not os.path.exists(dest):
        print(f"Downloading {fname}...")
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=15) as resp, open(dest, 'wb') as f:
                f.write(resp.read())
            print(f"Saved {fname}")
        except Exception as e:
            print(f"Failed {fname}: {e}")
print("All assets downloaded successfully.")
