/* ==========================================================================
   OM ENTERPRISES — CORE APPLICATION SCRIPT
   ========================================================================== */

var IMG = {
  hero: "img/hero.webp",
  sai_nakshatra: "img/sai_nakshatra.webp",
  delta_crest: "img/delta_crest.webp",
  kharkopar_gateway: "img/kharkopar_gateway.webp",
  boulevard: "img/boulevard.webp",
  rivera: "img/rivera.webp",
  greenfield: "img/greenfield.webp",
  aeropolis: "img/aeropolis.webp",
  rental_residency: "img/rental_residency.webp",
  interior_living: "img/interior_living.webp",
  interior_kitchen: "img/interior_kitchen.webp",
  interior_bedroom: "img/interior_bedroom.webp",
  interior_balcony: "img/interior_balcony.webp",
  floorplan_2d: "img/floorplan_2d.webp",
  floorplan_3d: "img/floorplan_3d.webp",
  ulwe_aerial: "img/ulwe_aerial.webp",
  office_advisory: "img/office_advisory.webp",
  consultation: "img/consultation.webp"
};

var PROJECTS = [
  {
    slug: "sai-nakshatra-heights",
    name: "Sai Nakshatra Heights",
    location: "Sector 18, Ulwe",
    coord: "18.9742° N · 73.0238° E",
    status: "Ready to Move",
    type: "Residential & High-Street Retail",
    typeKey: "residential",
    tagline: "The flagship address of Sector 18 — high-street retail below, serene residences above.",
    desc: "Sai Nakshatra Heights is an established G+14 residential and commercial landmark in the heart of Sector 18, Ulwe. Home to the Om Enterprises flagship office, this development features well-proportioned 1, 2 & 3 BHK residences over high-visibility ground-floor showrooms. Clear CIDCO title, full Occupancy Certificate (OC) received, and approved by all major nationalized and private banks. Ready for immediate handover.",
    highlights: [
      "Home to Om Enterprises head office (Shop No. 2)",
      "Full Occupancy Certificate (OC) received · Ready for possession",
      "Prime 30-meter wide road frontage in Sector 18",
      "4 minutes to Kharkopar Railway Station",
      "Approved for home loans with SBI, HDFC, ICICI & Bank of Baroda"
    ],
    configs: [
      "1 BHK Luxury: 440 – 480 sq.ft carpet",
      "2 BHK Premium: 680 – 745 sq.ft carpet",
      "3 BHK Royal: 1,020 – 1,120 sq.ft carpet",
      "Ground Floor High-Street Commercial Shops"
    ],
    img: "sai_nakshatra",
    gallery: ["sai_nakshatra", "interior_living", "interior_kitchen", "interior_balcony"],
    config: "1, 2, 3 BHK & Retail Shops",
    price: "₹62 L – ₹1.45 Cr",
    tag: "Flagship Landmark",
    floorplan: ["floorplan_2d", "floorplan_3d"],
    amenities: [
      "High-Speed Automatic Elevators",
      "24×7 Gated Security & CCTV",
      "Covered Stilt & Ground Parking",
      "100% Power Backup for Lifts & Common Areas",
      "Rainwater Harvesting System",
      "Fire Fighting & Sprinkler Systems",
      "Branded Vitrified Flooring",
      "Granite Kitchen Platform with SS Sink"
    ],
    commute: [
      { name: "Kharkopar Railway Station", time: "4 mins", dist: "1.1 km" },
      { name: "Atal Setu (MTHL) Interchange", time: "10 mins", dist: "4.8 km" },
      { name: "Navi Mumbai Int'l Airport (NMIA)", time: "14 mins", dist: "7.5 km" },
      { name: "Ramsheth Thakur Sports Complex", time: "5 mins", dist: "1.9 km" }
    ]
  },
  {
    slug: "delta-palm-crest",
    name: "Delta Palm Crest",
    location: "Sector 19, Ulwe",
    coord: "18.9680° N · 73.0195° E",
    status: "Ready to Move",
    type: "Luxury Waterfront Residences",
    typeKey: "luxury",
    tagline: "Unobstructed creek views, expansive sundecks, and refined finishes in Sector 19.",
    desc: "Delta Palm Crest is designed for discerning families seeking space, cross-ventilation, and natural light. Situated in Sector 19 near the scenic Ulwe waterfront stretch, each residence opens onto deep glass-railed balconies with scenic views toward the horizon. Premium fittings, podium recreation, and minutes from the Ramsheth Thakur Sports Complex.",
    highlights: [
      "Panoramic creek & green mangrove views from higher floors",
      "Generous sundeck balconies in every master bedroom",
      "Walking distance to international sports complex & jogging tracks",
      "Pure residential sanctuary with zero commercial disturbance",
      "MahaRERA compliant with clear title"
    ],
    configs: [
      "2 BHK Sea-Breeze: 760 – 810 sq.ft carpet",
      "3 BHK Signature: 1,180 – 1,280 sq.ft carpet"
    ],
    img: "delta_crest",
    gallery: ["delta_crest", "interior_living", "interior_bedroom"],
    config: "2 & 3 BHK Luxury Residences",
    price: "₹1.10 Cr – ₹1.95 Cr",
    tag: "Waterfront View",
    floorplan: ["floorplan_2d", "floorplan_3d"],
    amenities: [
      "Landscaped Podium Garden",
      "Well-Equipped Fitness Gymnasium",
      "Kids Play Turf & Sandpit",
      "Covered Reserved Car Parking",
      "Grand Air-Conditioned Entrance Lobby",
      "Intercom Facility to All Apartments",
      "Designer False Ceiling in Living Room"
    ],
    commute: [
      { name: "Ramsheth Thakur Sports Complex", time: "3 mins", dist: "850 m" },
      { name: "Kharkopar Railway Station", time: "6 mins", dist: "2.2 km" },
      { name: "Atal Setu (MTHL)", time: "11 mins", dist: "5.2 km" },
      { name: "Apollo Hospital CBD Belapur", time: "16 mins", dist: "9.0 km" }
    ]
  },
  {
    slug: "kharkopar-gateway-towers",
    name: "Kharkopar Gateway Towers",
    location: "Sector 17, Ulwe",
    coord: "18.9715° N · 73.0280° E",
    status: "Ready to Move",
    type: "Transit-Oriented Lifestyle Homes",
    typeKey: "residential",
    tagline: "Literally 3 minutes walk to Kharkopar Station — ultimate daily transit ease.",
    desc: "Built specifically for modern professionals and families who value their commute time, Kharkopar Gateway Towers sits within walking distance of the railway platform. Smart layout planning ensures zero wasted passage space, giving maximum usable carpet area. Excellent rental yields for investors and peace of mind for daily Mumbai commuters.",
    highlights: [
      "300 meters from Kharkopar Railway Station platform",
      "Direct regular local trains on Uran–Nerul/Belapur line",
      "Vibrant high street with supermarkets, banks & pharmacies around",
      "Low maintenance society with high rental demand",
      "Ready for immediate registration"
    ],
    configs: [
      "1 BHK Smart: 420 – 460 sq.ft carpet",
      "2 BHK Comfort: 650 – 690 sq.ft carpet"
    ],
    img: "kharkopar_gateway",
    gallery: ["kharkopar_gateway", "interior_kitchen", "interior_living"],
    config: "1 & 2 BHK Smart Homes",
    price: "₹54 L – ₹88 L",
    tag: "Station-Touch",
    floorplan: ["floorplan_2d"],
    amenities: [
      "24×7 Security with CCTV Monitoring",
      "Dual High-Speed Passenger Elevators",
      "Ample Two-Wheeler & Four-Wheeler Parking",
      "Modern Modular Kitchen Provisions",
      "Anti-Skid Ceramic Tiles in Bathrooms",
      "Concealed Copper Wiring with Modular Switches"
    ],
    commute: [
      { name: "Kharkopar Railway Station", time: "2 mins", dist: "300 m" },
      { name: "Sector 17 Daily Market", time: "1 min", dist: "100 m" },
      { name: "Atal Setu (MTHL)", time: "9 mins", dist: "4.2 km" },
      { name: "Navi Mumbai Int'l Airport", time: "12 mins", dist: "6.8 km" }
    ]
  },
  {
    slug: "the-boulevard-commercial",
    name: "The Boulevard Commercial Suites",
    location: "Sector 18, Ulwe",
    coord: "18.9750° N · 73.0220° E",
    status: "Ready to Move",
    type: "High-Street Retail & Corporate Offices",
    typeKey: "commercial",
    tagline: "Double-height retail frontage along Sector 18’s busiest 30-meter arterial road.",
    desc: "The Boulevard offers prime commercial visibility for retail brands, banking institutions, medical diagnostic centers, and corporate offices. Boasting double-height ground floor ceilings with mezzanine potential and dedicated customer parking. Position your business in Ulwe's highest-density residential neighborhood.",
    highlights: [
      "Clear 14 ft floor-to-ceiling height on ground floor units",
      "30-meter main road frontage with uninterrupted visibility",
      "Ideal for Nationalized Banks, Branded Clinics, Cafes & Retail",
      "Individual washroom provisions in every unit",
      "High capital appreciation potential"
    ],
    configs: [
      "Ground Floor Retail Shops: 180 – 650 sq.ft carpet",
      "First Floor Commercial Office Suites: 450 – 1,450 sq.ft carpet"
    ],
    img: "boulevard",
    gallery: ["boulevard", "office_advisory", "consultation"],
    config: "Retail Shops & Office Spaces",
    price: "₹45 L – ₹2.20 Cr",
    tag: "High Footfall",
    floorplan: ["floorplan_2d"],
    amenities: [
      "Dedicated Customer & Staff Parking Zone",
      "Heavy Power Load Connection Provisions",
      "Separate Commercial Passenger & Service Lifts",
      "Fire Alarm, Hydrant & Hose Reel System",
      "Full Glass Glazing Facade",
      "24×7 Security Guards with CCTV Coverage"
    ],
    commute: [
      { name: "Sector 18 Bus Stop", time: "1 min", dist: "50 m" },
      { name: "Kharkopar Railway Station", time: "4 mins", dist: "1.2 km" },
      { name: "Atal Setu Connector", time: "9 mins", dist: "4.5 km" },
      { name: "JNPT Port Node", time: "18 mins", dist: "12.0 km" }
    ]
  },
  {
    slug: "rivera-seawoods-view",
    name: "Rivera Seawoods View",
    location: "Sector 16, Ulwe",
    coord: "18.9790° N · 73.0180° E",
    status: "Ready to Move",
    type: "Panoramic Penthouses & Duplexes",
    typeKey: "luxury",
    tagline: "Private sky terraces overlooking the Seawoods creek, mangroves, and sunset horizon.",
    desc: "Rivera Seawoods View represents the pinnacle of residential luxury in Sector 16. Located at the northern gateway of Ulwe with rapid connectivity to Palm Beach Road and Seawoods Grand Central. These exclusive top-tier 3 BHK penthouses feature open sky decks, imported marble living rooms, and private multi-level layouts.",
    highlights: [
      "Unmatched creek-side vistas facing Seawoods & Nerul skyline",
      "Private sky terrace with provision for rooftop lounge or garden",
      "Only 2 residences per floor for utmost privacy",
      "10 minutes drive to Seawoods Grand Central Mall",
      "Double covered reserved parking included"
    ],
    configs: [
      "3 BHK Duplex Penthouse: 1,450 sq.ft carpet",
      "3 BHK Sky Villa: 1,850 sq.ft carpet (with 400 sq.ft terrace)"
    ],
    img: "rivera",
    gallery: ["rivera", "interior_living", "interior_bedroom", "interior_balcony"],
    config: "3 BHK Penthouses & Duplexes",
    price: "₹1.45 Cr – ₹2.75 Cr",
    tag: "Exclusive Penthouses",
    floorplan: ["floorplan_2d", "floorplan_3d"],
    amenities: [
      "Private Sky Terrace Garden",
      "Imported Marble Flooring",
      "Rooftop Infinity Edge Plunge Pool",
      "Automated Smart Home Provisions",
      "Video Door Phone & Biometric Door Lock",
      "Air-Conditioned Society Lounge"
    ],
    commute: [
      { name: "Palm Beach Road (via Belapur)", time: "10 mins", dist: "6.5 km" },
      { name: "Seawoods Grand Central", time: "12 mins", dist: "7.8 km" },
      { name: "Atal Setu (MTHL)", time: "10 mins", dist: "4.9 km" },
      { name: "Kharkopar Railway Station", time: "5 mins", dist: "1.8 km" }
    ]
  },
  {
    slug: "greenfield-oasis",
    name: "Greenfield Oasis",
    location: "Sector 23, Ulwe",
    coord: "18.9610° N · 73.0290° E",
    status: "Under Construction",
    type: "Peaceful Family Community",
    typeKey: "residential",
    tagline: "Serene neighborhood wrapped by community parks and wide tree-lined avenues.",
    desc: "Greenfield Oasis in Sector 23 is crafted for homeowners seeking tranquility and green surroundings. Away from highway congestion yet easily connected to Kharkopar and Bamandongri, this development offers smart 1 & 2 BHK configurations with thoughtful ventilation, child-safe open areas, and flexible construction-linked milestones.",
    highlights: [
      "Lush sector garden and walking park right across the road",
      "MahaRERA certified project with guaranteed delivery timeline",
      "Attractive construction-linked payment structure",
      "Close to upcoming international school and health clinic",
      "Zero compromise on build quality and earthquake-resistant RCC"
    ],
    configs: [
      "1 BHK Garden-Facing: 395 – 435 sq.ft carpet",
      "2 BHK Cross-Ventilated: 610 – 660 sq.ft carpet"
    ],
    img: "greenfield",
    gallery: ["greenfield", "interior_living", "interior_kitchen"],
    config: "1 & 2 BHK Family Homes",
    price: "₹48 L – ₹78 L",
    tag: "Green Enclave",
    floorplan: ["floorplan_2d"],
    amenities: [
      "Children's Play Zone with Rubberized Turf",
      "Senior Citizen Gazebo & Seating Pavilion",
      "Rooftop Yoga & Meditation Deck",
      "Decorative Main Entrance Gate with Security Cabin",
      "Solar Water Heating System",
      "Power Backup for All Common Facilities"
    ],
    commute: [
      { name: "Sector 23 Garden & Playground", time: "1 min", dist: "50 m" },
      { name: "Bamandongri Railway Station", time: "6 mins", dist: "2.4 km" },
      { name: "Kharkopar Railway Station", time: "7 mins", dist: "2.8 km" },
      { name: "Navi Mumbai Int'l Airport", time: "12 mins", dist: "6.2 km" }
    ]
  },
  {
    slug: "aeropolis-prime-plaza",
    name: "Aeropolis Prime Plaza",
    location: "Sector 20, Ulwe",
    coord: "18.9650° N · 73.0350° E",
    status: "Under Construction",
    type: "Airport Corridor Commercial Hub",
    typeKey: "commercial",
    tagline: "Positioned directly on the primary airport connectivity arterial corridor.",
    desc: "Aeropolis Prime Plaza is designed to cater to the upcoming wave of commerce generated by the Navi Mumbai International Airport (NMIA). High-yield commercial showrooms and smart corporate suites with central air-conditioning provisions, high-speed fiber connectivity, and dedicated multi-level basement parking.",
    highlights: [
      "Only 12 minutes straight drive to the NMIA Terminal",
      "High capital growth and rental yield potential",
      "Contemporary glass facade with striking evening lighting",
      "Flexible office floor plates from 280 to 2,100 sq.ft",
      "Pre-leasing support by Om Enterprises commercial desk"
    ],
    configs: [
      "Boutique Corporate Suites: 280 – 620 sq.ft carpet",
      "Front-Facing Showrooms: 750 – 2,100 sq.ft carpet"
    ],
    img: "aeropolis",
    gallery: ["aeropolis", "boulevard", "office_advisory"],
    config: "Corporate Suites & Showrooms",
    price: "₹58 L – ₹3.10 Cr",
    tag: "Airport Hub",
    floorplan: ["floorplan_2d"],
    amenities: [
      "Grand Double-Height Entrance Lobby",
      "High-Speed Smart Access Elevators",
      "Centralized CCTV & 3-Tier Security",
      "Multi-Level Basement Car Parking",
      "EV Charging Stations on Site",
      "100% DG Power Backup for All Offices"
    ],
    commute: [
      { name: "Navi Mumbai Int'l Airport (NMIA)", time: "12 mins", dist: "6.0 km" },
      { name: "Atal Setu (MTHL) Expressway", time: "10 mins", dist: "5.0 km" },
      { name: "Kharkopar Railway Station", time: "6 mins", dist: "2.3 km" },
      { name: "JNPT SEZ Commercial Node", time: "15 mins", dist: "9.5 km" }
    ]
  },
  {
    slug: "sai-nakshatra-leasing",
    name: "Sai Nakshatra Residency — Rental & Leasing",
    location: "Sector 18, Ulwe",
    coord: "18.9742° N · 73.0238° E",
    status: "For Lease",
    type: "Verified Rental & Room Leasing",
    typeKey: "rental",
    tagline: "Hassle-free residential leasing with vetted tenants, clean paperwork, and instant handover.",
    desc: "Our dedicated leasing division at Om Enterprises manages a curated portfolio of 1 BHK & 2 BHK rental homes in Sai Nakshatra and nearby Sector 18 towers. We take care of tenant background screening, registered leave-and-license agreements, police verification, and society NOCs. Whether you are an NRI owner or a family relocating to Navi Mumbai, enjoy a smooth, transparent leasing experience.",
    highlights: [
      "Complete tenant verification & registered agreement support",
      "Both semi-furnished and fully-furnished options available",
      "Walking distance to supermarkets, daily markets, and banks",
      "Family-friendly cooperative housing society",
      "Dedicated maintenance and handover support by Manoj Sir"
    ],
    configs: [
      "1 BHK Semi-Furnished: ₹12,000 – ₹16,000 / month",
      "2 BHK Premium Living: ₹20,000 – ₹28,000 / month",
      "2 BHK Fully Furnished: ₹28,000 – ₹34,000 / month"
    ],
    img: "rental_residency",
    gallery: ["rental_residency", "interior_living", "interior_kitchen", "interior_bedroom"],
    config: "1 & 2 BHK Rentals",
    price: "₹12K – ₹34K / mo",
    tag: "Verified Leasing",
    floorplan: ["floorplan_2d"],
    amenities: [
      "24×7 Society Security with CCTV",
      "Dedicated Stilt Parking",
      "Continuous CIDCO Water Supply with Overhead Storage",
      "Branded Fittings and Wardrobe Provisions",
      "Lifts with Battery Inverter Backup",
      "Society Children Play Area"
    ],
    commute: [
      { name: "Kharkopar Railway Station", time: "4 mins", dist: "1.1 km" },
      { name: "Sector 18 Commercial Market", time: "1 min", dist: "100 m" },
      { name: "Atal Setu (MTHL)", time: "10 mins", dist: "4.8 km" },
      { name: "Ramsheth Thakur Sports Complex", time: "5 mins", dist: "1.9 km" }
    ]
  }
];

/* ==========================================================================
   INTERSECTION OBSERVERS & REVEALS
   ========================================================================== */
var io = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("in");
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: "-20px" });

function observeReveals(root) {
  (root || document).querySelectorAll(".reveal:not(.in)").forEach(function(el) {
    io.observe(el);
  });
}

/* Number counter */
function countUp(el) {
  var target = parseFloat(el.getAttribute("data-target") || el.textContent);
  if (isNaN(target) || el._done) return;
  el._done = true;
  var isDecimal = String(target).indexOf(".") >= 0;
  var dur = 1400;
  var start = null;
  el.textContent = "0";

  function step(t) {
    if (!start) start = t;
    var p = Math.min((t - start) / dur, 1);
    var eased = 1 - Math.pow(1 - p, 3);
    var cur = eased * target;
    el.textContent = isDecimal ? cur.toFixed(1) : String(Math.round(cur));
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = isDecimal ? target.toFixed(1) : String(target);
  }
  requestAnimationFrame(step);
}

var statObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll(".stat b").forEach(countUp);
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

/* ==========================================================================
   NAVIGATION & PAGE ROUTING
   ========================================================================== */
var nav = document.getElementById("nav");
var hamburger = document.getElementById("hamburger");

function toggleMenu() {
  var open = nav.classList.toggle("menu-open");
  if (hamburger) hamburger.setAttribute("aria-expanded", open ? "true" : "false");
}

function closeMenu() {
  if (nav && nav.classList.contains("menu-open")) {
    nav.classList.remove("menu-open");
    if (hamburger) hamburger.setAttribute("aria-expanded", "false");
  }
}

document.addEventListener("click", function(e) {
  if (nav && nav.classList.contains("menu-open") && !e.target.closest("#nav")) {
    closeMenu();
  }
});

window.addEventListener("resize", function() {
  if (window.innerWidth > 992) closeMenu();
});

function handleNavScroll() {
  var homePage = document.getElementById("page-home");
  if (!homePage || !homePage.classList.contains("active")) {
    nav.classList.add("solid");
    return;
  }
  if (window.scrollY > 60) {
    nav.classList.add("solid");
  } else {
    nav.classList.remove("solid");
  }
}
window.addEventListener("scroll", handleNavScroll, { passive: true });

function showPage(name) {
  document.querySelectorAll(".page").forEach(function(p) {
    p.classList.remove("active");
  });
  var targetPage = document.getElementById("page-" + name);
  if (targetPage) {
    targetPage.classList.add("active");
  }
  document.querySelectorAll("nav.links a").forEach(function(a) {
    a.classList.toggle("on", a.getAttribute("data-nav") === name);
  });
  window.scrollTo(0, 0);
  handleNavScroll();
  observeReveals(targetPage);
  closeMenu();
}

/* ==========================================================================
   INTERACTIVE PORTFOLIO PREVIEW (Home Section)
   ========================================================================== */
function setupHomePortfolio() {
  var pimg = document.getElementById("pimg");
  var pco = document.getElementById("pco");
  var pnm = document.getElementById("pnm");
  var ptg = document.getElementById("ptg");
  var pprice = document.getElementById("pprice");
  var previewBox = document.getElementById("portfolio-preview");
  var list = document.getElementById("plist");
  if (!list) return;

  var rows = list.querySelectorAll(".prow");
  rows.forEach(function(row) {
    row.addEventListener("mouseenter", function() {
      var slug = row.getAttribute("data-slug");
      activateRow(slug);
    });
    row.addEventListener("click", function() {
      var slug = row.getAttribute("data-slug");
      openProject(slug);
    });
  });

  function activateRow(slug) {
    var p = PROJECTS.find(function(x) { return x.slug === slug; });
    if (!p) return;
    rows.forEach(function(r) { r.classList.remove("active"); });
    var activeRow = list.querySelector('.prow[data-slug="' + slug + '"]');
    if (activeRow) activeRow.classList.add("active");

    if (pimg) {
      pimg.style.opacity = "0.4";
      setTimeout(function() {
        pimg.style.backgroundImage = "url('" + (IMG[p.img] || p.img) + "')";
        pimg.style.opacity = "1";
      }, 150);
    }
    if (pco) pco.textContent = p.coord + " · " + p.location.toUpperCase();
    if (pnm) pnm.textContent = p.name;
    if (ptg) ptg.textContent = p.tagline;
    if (pprice) pprice.textContent = p.price;
    if (previewBox) {
      previewBox.onclick = function() { openProject(slug); };
    }
  }

  // Set initial
  if (PROJECTS.length > 0) {
    activateRow(PROJECTS[0].slug);
  }
}

/* ==========================================================================
   PROPERTIES GRID & FILTERS (Properties Page)
   ========================================================================== */
function renderPropertiesGrid() {
  var container = document.getElementById("cards-container");
  if (!container) return;

  var html = PROJECTS.map(function(p) {
    var badgeClass = p.status === "Ready to Move" ? "st-ready" : (p.status === "Under Construction" ? "st-uc" : "st-lease");
    var specsChips = p.configs.slice(0, 2).map(function(c) {
      return '<span class="chip">' + c + '</span>';
    }).join("");

    return `
      <div class="pcard" data-slug="${p.slug}" data-status="${p.status}" data-type="${p.typeKey}" onclick="openProject('${p.slug}')">
        <div class="pcard-img" style="background-image:url('${IMG[p.img] || p.img}')">
          <span class="badge ${badgeClass}">${p.status}</span>
        </div>
        <div class="pcard-body">
          <div class="top">
            <h3 class="serif">${p.name}</h3>
            <span class="lc">${p.location.toUpperCase()}</span>
          </div>
          <p class="tg">${p.tagline}</p>
          <div class="specs">
            ${specsChips}
            <span class="chip alt">${p.tag}</span>
          </div>
          <div class="priceline">
            <span class="pl">${p.price}</span>
            <span class="enq-link">View Details &rarr;</span>
          </div>
        </div>
      </div>
    `;
  }).join("");

  container.innerHTML = html;
  updateFilterCount();
}

function updateFilterCount() {
  var activeStatusPill = document.querySelector('.fpill.on[data-f="status"]');
  var activeTypePill = document.querySelector('.fpill.on[data-f="type"]');
  var statusVal = activeStatusPill ? activeStatusPill.getAttribute("data-v") : "all";
  var typeVal = activeTypePill ? activeTypePill.getAttribute("data-v") : "all";

  var cards = document.querySelectorAll(".cards .pcard");
  var visibleCount = 0;

  cards.forEach(function(card) {
    var cStatus = card.getAttribute("data-status");
    var cType = card.getAttribute("data-type");

    var matchStatus = (statusVal === "all" || cStatus === statusVal);
    var matchType = (typeVal === "all" || cType === typeVal);

    if (matchStatus && matchType) {
      card.style.display = "block";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  var countEl = document.getElementById("fcount");
  if (countEl) countEl.textContent = visibleCount + (visibleCount === 1 ? " property" : " properties");

  var noresult = document.getElementById("noresult");
  if (noresult) {
    noresult.style.display = visibleCount === 0 ? "block" : "none";
  }
}

function setupFilters() {
  document.querySelectorAll(".fpill").forEach(function(pill) {
    pill.addEventListener("click", function() {
      var filterType = pill.getAttribute("data-f");
      document.querySelectorAll('.fpill[data-f="' + filterType + '"]').forEach(function(p) {
        p.classList.remove("on");
      });
      pill.classList.add("on");
      updateFilterCount();
    });
  });
}

/* ==========================================================================
   PROJECT DETAIL MODAL & VIEW GENERATOR
   ========================================================================== */
function detailHTML(p) {
  var others = PROJECTS.filter(function(x) { return x.slug !== p.slug; }).slice(0, 3);
  var highlightsHTML = p.highlights.map(function(h) {
    return `<div class="hl"><span class="b"></span><span>${h}</span></div>`;
  }).join("");

  var configsHTML = p.configs.map(function(c) {
    return `<div class="cfg">${c}</div>`;
  }).join("");

  // Gallery
  var galleryHTML = "";
  if (p.gallery && p.gallery.length) {
    var gItems = p.gallery.map(function(key, idx) {
      return `<div class="g ${idx === 0 ? 'wide' : ''}" style="background-image:url('${IMG[key] || key}')"></div>`;
    }).join("");
    galleryHTML = `
      <section id="gallery" class="galsec">
        <div class="wrap">
          <p class="eyebrow" style="color:var(--goldink)">Visual Gallery</p>
          <h2 class="serif sech">Spaces Crafted with Precision.</h2>
          <div class="dgal">${gItems}</div>
        </div>
      </section>
    `;
  }

  // Amenities SVG Map
  var amenitiesHTML = p.amenities.map(function(a) {
    return `
      <div class="amcard">
        <span class="amicon">${getAmenityIcon(a)}</span>
        <span class="amlabel">${a}</span>
      </div>
    `;
  }).join("");

  // Commute matrix
  var commuteRows = (p.commute || []).map(function(c) {
    return `
      <div style="display:flex;justify-content:space-between;align-items:center;padding:14px 0;border-bottom:1px solid var(--line);">
        <span style="font-size:0.95rem;color:var(--ink);">${c.name}</span>
        <div style="text-align:right;">
          <b style="font-family:var(--serif);font-size:1.15rem;color:var(--forest);">${c.time}</b>
          <span style="font-family:var(--mono);font-size:0.75rem;color:var(--moss);display:block;">${c.dist}</span>
        </div>
      </div>
    `;
  }).join("");

  // Subnav tabs
  var tabs = `
    <a onclick="scrollToSection('overview')">Overview</a>
    <a onclick="scrollToSection('gallery')">Gallery</a>
    <a onclick="scrollToSection('amenities')">Amenities</a>
    <a onclick="scrollToSection('connectivity')">Connectivity</a>
  `;

  var moreItems = others.map(function(o) {
    return `
      <a class="m" onclick="openProject('${o.slug}')">
        <div class="mi" style="background-image:url('${IMG[o.img] || o.img}')"></div>
        <h4 class="serif">${o.name}</h4>
        <div class="lc">${o.location.toUpperCase()} · ${o.price}</div>
      </a>
    `;
  }).join("");

  return `
    <!-- Detail Hero -->
    <section class="dhero">
      <div class="bg" style="background-image:url('${IMG[p.img] || p.img}')"></div>
      <div class="scrim"></div>
      <div class="wrap dhero-in">
        <p class="eyebrow">${p.status} · ${p.location.toUpperCase()}</p>
        <h1 class="serif">${p.name}</h1>
        <p class="dtg">${p.tagline}</p>
      </div>
    </section>

    <!-- Subnav -->
    <div class="dsubnav">
      <div class="wrap dsubnav-in">
        <span class="dsn-name">${p.name}</span>
        <nav class="dsn-links">${tabs}</nav>
        <button class="dsn-btn" onclick="openEnquiryModal('${p.name}')">Book Site Visit</button>
      </div>
    </div>

    <!-- Spec Strip -->
    <div class="specstrip">
      <div class="wrap">
        <div class="ss">
          <div><div class="k">Status</div><div class="v">${p.status}</div></div>
          <div><div class="k">Configuration</div><div class="v">${p.config}</div></div>
          <div><div class="k">Location</div><div class="v">${p.location}</div></div>
          <div><div class="k">Price / Value</div><div class="v">${p.price}</div></div>
        </div>
      </div>
    </div>

    <!-- Overview & Contact Card -->
    <div id="overview" class="wrap">
      <a class="back-link" onclick="showPage('properties')">&larr; Back to all properties</a>
      <div class="dbody">
        <div>
          <p class="eyebrow" style="color:var(--goldink)">${p.type} · ${p.location}</p>
          <p class="big" style="margin-top:16px;">${p.desc}</p>
          
          <div class="dsub">
            <div class="k">Available Configurations</div>
            ${configsHTML}
          </div>

          <div class="dsub">
            <div class="k">Property Highlights & Legal Standing</div>
            ${highlightsHTML}
          </div>
        </div>

        <div class="dcard-wrap">
          <div class="card">
            <p class="serif" style="font-size:1.6rem;color:var(--forest);margin-bottom:6px;">Enquire with Manoj Sir</p>
            <p style="font-size:0.92rem;color:var(--moss);margin-bottom:20px;">Direct guidance on pricing, CIDCO verification & site visits.</p>
            <form onsubmit="return handleFormSubmit(this, event, '${p.name}')">
              <label>
                <span class="lb">Your Full Name</span>
                <input name="name" required placeholder="e.g. Rajesh Sharma" autocomplete="name">
              </label>
              <label>
                <span class="lb">Mobile Number (WhatsApp Preferred)</span>
                <div class="phonewrap">
                  <span class="cc">+91</span>
                  <input name="phone" type="tel" required pattern="[6-9][0-9]{9}" placeholder="98200 00000">
                </div>
              </label>
              <label>
                <span class="lb">Your Message / Timing Preference</span>
                <textarea name="message" rows="3" placeholder="I would like to schedule a site visit this Saturday..."></textarea>
              </label>
              <button type="submit" class="submit-btn">Request Immediate Callback &rarr;</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Gallery Section -->
    ${galleryHTML}

    <!-- Amenities Section -->
    <section id="amenities" class="amsec">
      <div class="wrap">
        <p class="eyebrow" style="color:var(--goldink)">Building Specifications</p>
        <h2 class="serif sech">Features Built for Enduring Value.</h2>
        <div class="amgrid">${amenitiesHTML}</div>
      </div>
    </section>

    <!-- Connectivity Matrix -->
    <section id="connectivity" class="infra" style="border-top:1px solid var(--line);padding:72px 0;">
      <div class="wrap">
        <div style="display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,1fr);gap:60px;align-items:start;">
          <div>
            <p class="eyebrow" style="color:var(--goldink)">Transit & Location Advantage</p>
            <h2 class="serif sech" style="margin-bottom:18px;">Connected to every major Mumbai lifeline.</h2>
            <p style="color:var(--moss);font-size:1.05rem;line-height:1.65;">
              Located in ${p.location}, this project benefits directly from Ulwe's rapid infrastructure boom — including the Atal Setu (MTHL) sea bridge and the Navi Mumbai International Airport corridor.
            </p>
            <div style="margin-top:28px;">${commuteRows}</div>
          </div>
          <div class="card" style="padding:32px;background:var(--paper);">
            <div class="k" style="font-family:var(--mono);font-size:0.68rem;letter-spacing:0.14em;color:var(--clay);text-transform:uppercase;margin-bottom:8px;">Office Address & Visit</div>
            <h4 class="serif" style="font-size:1.45rem;color:var(--forest);margin-bottom:10px;">OM ENTERPRISES</h4>
            <p style="color:var(--moss);font-size:0.95rem;line-height:1.6;margin-bottom:20px;">
              Shop no. 2, Sai Nakshatra, Plot No.116, Sector 18, Ulwe, Kharkopar, Navi Mumbai, Maharashtra 410206
            </p>
            <a href="https://maps.google.com/?q=Shop+no.+2,+Sai+Nakshatra,+Plot+No.116,+Sector+18,+Ulwe,+Kharkopar,+Maharashtra+410206" target="_blank" class="btn solid" style="width:100%;text-align:center;box-sizing:border-box;">
              Open in Google Maps &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- More Projects -->
    <section class="more">
      <div class="wrap">
        <div class="lab">Explore More in Ulwe</div>
        <div class="more-grid">${moreItems}</div>
      </div>
    </section>
  `;
}

function openProject(slug) {
  var p = PROJECTS.find(function(x) { return x.slug === slug; });
  if (!p) return;
  var container = document.getElementById("page-project");
  if (!container) return;
  container.innerHTML = detailHTML(p);
  showPage("project");
  window.location.hash = "#project/" + slug;
}

function scrollToSection(id) {
  var el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ==========================================================================
   SVG AMENITIES HELPER
   ========================================================================== */
function getAmenityIcon(label) {
  var s = label.toLowerCase();
  if (s.indexOf("lift") >= 0 || s.indexOf("elevator") >= 0) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="12" y1="2" x2="12" y2="22"/><polyline points="8 10 10 8 10 14"/><polyline points="16 14 14 16 14 10"/></svg>`;
  }
  if (s.indexOf("secur") >= 0 || s.indexOf("cctv") >= 0 || s.indexOf("gate") >= 0 || s.indexOf("lock") >= 0) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`;
  }
  if (s.indexOf("park") >= 0) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="10"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></svg>`;
  }
  if (s.indexOf("power") >= 0 || s.indexOf("backup") >= 0 || s.indexOf("dg") >= 0 || s.indexOf("solar") >= 0 || s.indexOf("ev") >= 0) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`;
  }
  if (s.indexOf("garden") >= 0 || s.indexOf("turf") >= 0 || s.indexOf("park") >= 0 || s.indexOf("green") >= 0) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10S2 17.5 2 12A10 10 0 0 1 12 2z"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>`;
  }
  if (s.indexOf("water") >= 0 || s.indexOf("rain") >= 0) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`;
  }
  if (s.indexOf("gym") >= 0 || s.indexOf("fitness") >= 0 || s.indexOf("sport") >= 0) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><line x1="6" y1="5" x2="6" y2="19"/><line x1="18" y1="5" x2="18" y2="19"/><rect x="2" y="8" width="4" height="8" rx="1"/><rect x="18" y="8" width="4" height="8" rx="1"/><line x1="6" y1="12" x2="18" y2="12"/></svg>`;
  }
  if (s.indexOf("pool") >= 0) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 12c2 0 2-1.6 4-1.6s2 1.6 4 1.6 2-1.6 4-1.6 2 1.6 4 1.6 2-1.6 4-1.6"/><path d="M2 17c2 0 2-1.6 4-1.6s2 1.6 4 1.6 2-1.6 4-1.6 2 1.6 4 1.6 2-1.6 4-1.6"/></svg>`;
  }
  // Default diamond
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><polygon points="12 2 2 12 12 22 22 12 12 2"/></svg>`;
}

/* ==========================================================================
   ENQUIRY MODAL & FORM HANDLER
   ========================================================================== */
function openEnquiryModal(projectName) {
  var modal = document.getElementById("enqmodal");
  if (!modal) return;
  var sel = modal.querySelector('select[name="project"]');
  if (sel && projectName) {
    sel.value = projectName;
  }
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeEnquiryModal() {
  var modal = document.getElementById("enqmodal");
  if (modal) modal.classList.remove("open");
  document.body.style.overflow = "";
}

function handleFormSubmit(form, event, defaultProject) {
  event.preventDefault();
  var name = form.querySelector('[name="name"]').value.trim();
  var phone = form.querySelector('[name="phone"]').value.trim();
  var project = (form.querySelector('[name="project"]') ? form.querySelector('[name="project"]').value : (defaultProject || "General Consultation"));
  var message = form.querySelector('[name="message"]') ? form.querySelector('[name="message"]').value.trim() : "";

  var text = "Hello Manoj Sir, I am interested in " + project + ".\n\n" +
             "*Name:* " + name + "\n" +
             "*Phone:* +91 " + phone + "\n" +
             (message ? "*Details:* " + message : "");

  var waUrl = "https://wa.me/919820987706?text=" + encodeURIComponent(text);

  // Open WhatsApp in new tab
  window.open(waUrl, "_blank");

  // Show confirmation alert
  alert("Thank you, " + name + "! Opening WhatsApp to connect directly with Mr. Manoj at Om Enterprises (+91 98209 87706).");
  closeEnquiryModal();
  form.reset();
  return false;
}

/* ==========================================================================
   INITIALIZATION & ROUTING
   ========================================================================== */
document.addEventListener("DOMContentLoaded", function() {
  setupHomePortfolio();
  renderPropertiesGrid();
  setupFilters();
  observeReveals();

  var statsRoot = document.querySelector(".stats");
  if (statsRoot) statObserver.observe(statsRoot);

  // Link clicks with data-nav
  document.addEventListener("click", function(e) {
    var navTrigger = e.target.closest("[data-nav]");
    if (navTrigger) {
      e.preventDefault();
      var pageName = navTrigger.getAttribute("data-nav");
      showPage(pageName);
      window.location.hash = "#" + pageName;
    }
  });

  // Handle URL hash on load
  function handleHash() {
    var h = window.location.hash.replace("#", "").trim();
    if (!h) {
      showPage("home");
      return;
    }
    if (h.startsWith("project/")) {
      var slug = h.replace("project/", "");
      openProject(slug);
    } else if (["home", "properties", "about", "connectivity", "reviews", "contact"].indexOf(h) >= 0) {
      showPage(h);
    } else {
      showPage("home");
    }
  }

  window.addEventListener("hashchange", handleHash);
  handleHash();
});
