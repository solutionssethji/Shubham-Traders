// ==========================================
// SHUBHAM TRADERS GARHAKOTA - MODERN WEB APP
// Bilingual i18n Engine (Hindi / English),
// Reactive Filter, Instant WhatsApp Quote,
// Live Shop Status & Toast Alerts
// ==========================================

const translations = {
  hi: {
    // Meta / General
    page_title:
      "शुभम ट्रेडर्स गढ़ाकोटा | ऑटो पार्ट्स, ट्रैक्टर स्पेयर & हार्डवेयर स्टोर",
    meta_desc:
      "शुभम ट्रेडर्स गढ़ाकोटा - टू-व्हीलर, ट्रैक्टर स्पेयर पार्ट्स, ल्यूब्रीकेंट ऑइल, बैटरियां एवं हार्डवेयर टूल्स का विश्वसनीय प्रतिष्ठान। Sagar, MP.",

    // Top Bar
    top_bar_welcome:
      "🌾 गढ़ाकोटा एवं सागर जिले के किसान भाइयों व मैकेनिकों का भरोसेमंद केंद्र",
    timing_text: "सोम - रवि: 09:00 AM - 9:00 PM",

    // Header & Nav
    shop_title: "शुभम ट्रेडर्स",
    shop_sub: "SHUBHAM TRADERS GARHAKOTA",
    nav_home: "होम",
    nav_products: "पार्ट्स कैटलॉग",
    nav_brands: "प्रमुख ब्रांड्स",
    nav_services: "सेवाएं & खासियत",
    nav_estimate: "रेट पूछताछ",
    nav_reviews: "ग्राहक समीक्षा",
    nav_contact: "संपर्क & पता",
    btn_whatsapp: "व्हाट्सएप चैट",
    btn_call: "कॉल करें",

    // Hero Section
    hero_verified: "100% ओरिजिनल पार्ट्स | थोक एवं फुटकर विक्रेता",
    hero_h1: `गाड़ियों एवं कृषि यंत्रों के <span class="highlight-gradient">असली पार्ट्स</span> और विश्वसनीय ल्यूब्रीकेंट्स`,
    hero_p:
      "ट्रैक्टर (महिंद्रा, स्वराज, सोनालिका), 2-व्हीलर बाइक, कमर्शियल लोडर के ओरिजिनल स्पेयर पार्ट्स, टॉप ब्रांड इंजन ऑइल, टिकाऊ बैटरियां और वर्कशॉप टूल्स — सब एक ही छत के नीचे सबसे उचित थोक दामों में।",
    search_placeholder:
      "जैसे: Castrol 4T, Swaraj Filter, 12V Battery, Rolon Chain...",
    search_btn: "सर्च करें",
    hero_call_now: "अभी रेट पूछें: 9340135743",
    hero_directions: "दुकान की लोकेशन देखें",

    // Hero Stats
    stat_experience: "वर्षों का गहरा भरोसा",
    stat_products: "रेडी-स्टॉक स्पेयर पार्ट्स",
    stat_genuine: "जेन्युइन और पक्का बिल",
    stat_customers: "संतुष्ट किसान व मैकेनिक",

    // Hero Showcase Card
    overlay_head: "शुभम ट्रेडर्स गढ़ाकोटा",
    overlay_sub: "मेन बस स्टैंड, नगर भवन के पास, गढ़ाकोटा",
    status_open: "दुकान अभी खुली है (Shop Open Now)",
    status_closed: "दुकान अभी बंद है (Opens at 09:00 AM)",
    status_timing: "सुबह 09:00 AM से रात 09:00 PM तक हर दिन सेवा में तत्पर",

    // Catalog Section
    cat_badge: "पार्ट्स एवं सामग्री कैटलॉग",
    cat_title: "दुकान पर उपलब्ध सभी उत्पाद श्रेणियां",
    cat_desc:
      "अपनी आवश्यकता अनुसार श्रेणी चुनें या तुरंत व्हाट्सएप पर फोटो भेजकर कन्फर्म करें।",
    tab_all: "सभी सामान (All)",
    tab_tractor: "🚜 ट्रैक्टर & कल्टीवेटर",
    tab_bike: "🏍️ बाइक व स्कूटर",
    tab_oils: "🛢️ इंजन ऑइल & ग्रीस",
    tab_battery: "🔋 बैटरियां & इलेक्ट्रिकल",
    tab_tools: "🔧 टूल्स & बेयरिंग",

    // Product Items
    p1_title: "इंजन ऑइल (2T, 4T, Heavy Duty)",
    p1_desc:
      "Castrol Activ, Servo 4T, Motul, Gulf Superfleet, Veedol - बाइक, ट्रैक्टर व लोडर के लिए उच्च ग्रेड ल्यूब्रीकेंट।",
    p1_s1: "1L, 3L, 5L, 7.5L, 10L व 20L बाल्टी उपलब्ध",
    p1_s2: "अधिक माइलेज और स्मूथ इंजन परफॉरमेंस",

    p2_title: "ट्रैक्टर फिल्टर & हाइड्रोलिक पार्ट्स",
    p2_desc:
      "Mahindra, Swaraj, Sonalika, Eicher, Powertrac - ऑइल फिल्टर, डीजल फिल्टर, हाइड्रोलिक पाइप और लिफ्ट किट।",
    p2_s1: "Bosch, Purolator, Mico कंपनी फिटेड",
    p2_s2: "भारी लोड और खेती के कठिन काम के लिए मजबूत",

    p3_title: "टू-व्हीलर क्लच, ब्रेक & चेन सेट",
    p3_desc:
      "Splendor, HF Deluxe, Pulsar, Shine, Platina - क्लच प्लेट, ब्रेक शू, रोलॉन चेन-स्प्राकेट, केबल्स और डिस्क पैड।",
    p3_s1: "Rolon, ASK, Endurance, Varroc पार्ट्स",
    p3_s2: "लंबी लाइफ और आसान फिटिंग की गारंटी",

    p4_title: "ऑटोमोटिव बैटरियां & इन्वर्टर स्पेयर",
    p4_desc:
      "Exide, Amaron, Dynex, SF Sonic - बाइक, ट्रैक्टर, पिकअप और गाड़ियों के लिए लंबे बैकअप वाली बैटरियां।",
    p4_s1: "कंपनी वारंटी कार्ड व टेस्टिंग सुविधा",
    p4_s2: "पुरानी बैटरी बदलने पर भारी डिस्काउंट",

    p5_title: "बेयरिंग, ऑयल सील & बेल्ट्स",
    p5_desc:
      "SKF, NBC, FAG, Fenner, PIX - बॉल बेयरिंग, टेपर रोलर बेयरिंग, फैन बेल्ट, अल्टरनेटर बेल्ट और हर साइज की सील।",
    p5_s1: "थ्रेशर, कल्टीवेटर और बोरवेल पंप साइज",
    p5_s2: "उच्च तापमान और धूल से सुरक्षित सील",

    p6_title: "गैरेज व मैकेनिक टूल्स & नट-बोल्ट",
    p6_desc:
      "पाना-रिंच सेट, सॉकेट सेट, हाइड्रोलिक जैक, ग्रीस गन, उच्च मजबूती वाले टेम्पर नट-बोल्ट और वाशर।",
    p6_s1: "वर्कशॉप व निजी गाड़ियों के लिए पूर्ण टूलकिट",
    p6_s2: "मजबूत स्टील, कभी स्लिप न होने वाले पाना सेट",

    // Product Card Badges & Buttons
    best_price: "वाजिब थोक भाव",
    in_stock: "तुरंत उपलब्ध",
    all_models: "सभी मॉडल",
    best_exchange: "एक्सचेंज ऑफर",
    full_range: "संपूर्ण रेंज",
    ready_stock: "स्टॉक तैयार",
    inquire: "रेट पूछें",

    // Brands
    brand_badge: "अधिकृत एवं लोकप्रिय ब्रांड्स",
    brand_title: "भारत के सर्वश्रेष्ठ ब्रांड्स का अटूट भरोसा",
    brand_desc:
      "हम केवल वही ब्रांड्स रखते हैं जो गुणवत्ता और मजबूती में नंबर 1 हैं।",

    // Estimator
    calc_badge: "त्वरित रेट कैलकुलेटर",
    calc_title: "दुकान आने से पहले रेट चेक करें",
    calc_desc:
      "आपको जो भी पार्ट चाहिए, उसका नाम और गाड़ी का मॉडल चुनें। सीधे व्हाट्सएप पर हमारे पास तुरंत कोटेशन आ जाएगा और हम आपको तुरंत फाइनल रेट बता देंगे।",
    perk_1: "10 मिनट के अंदर रेट रिप्लाई",
    perk_2: "मार्केट से कम और थोक डिस्काउंट भाव",
    perk_3: "न होने पर 24 घंटे में स्पेशल ऑर्डर पर उपलब्ध",
    form_title: "पार्ट्स की उपलब्धता & कीमत पूछें",
    form_name: "आपका नाम (Your Name)",
    form_name_ph: "अपना नाम दर्ज करें (e.g. राहुल पटेल)",
    form_vehicle: "गाड़ी का प्रकार (Vehicle / Machine)",
    form_parts: "क्या पार्ट चाहिए? (Part Name or Model)",
    form_parts_ph: "उदा: Swaraj 744 Filter + 7.5L Mobil Engine Oil",
    form_submit: "व्हाट्सएप पर तुरंत रेट पूछें",
    form_note: "* कोई स्पैम नहीं! आपका नंबर सिर्फ पूछताछ के लिए है।",

    // Services / Why Us
    why_badge: "हमारी खासियत",
    why_title: "गढ़ाकोटा में शुभम ट्रेडर्स ही क्यों?",
    why_desc:
      "हम केवल विक्रेता नहीं, बल्कि गाड़ी और कृषि यंत्रों के सही रख-रखाव में आपके सच्चे साथी हैं।",
    feat1_title: "100% असली व सीलपैक सामान",
    feat1_desc:
      "मार्केट में नकली और डुप्लीकेट सामान बहुत हैं, लेकिन शुभम ट्रेडर्स पर आपको केवल कंपनी सीलबंद और गारंटीड पार्ट्स मिलते हैं।",
    feat2_title: "थोक दाम पर फुटकर बिक्री",
    feat2_desc:
      "हम सीधे अधिकृत वितरकों से भारी मात्रा में माल लाते हैं, इसलिए हमारे रेट बाजार से हमेशा किफायती रहते हैं।",
    feat3_title: "विशाल स्टॉक और तुरंत डिलीवरी",
    feat3_desc:
      "ट्रैक्टर या बाइक को खड़ा नहीं रहना पड़ेगा। अधिकांश आवश्यक पार्ट्स हमेशा हमारे काउंटर पर रेडी-स्टॉक रहते हैं।",
    feat4_title: "मैकेनिक भाइयों के लिए विशेष सुविधा",
    feat4_desc:
      "गढ़ाकोटा व आसपास के सभी गैरेज एवं मैकेनिक भाइयों के लिए विशेष छूट, फोन पर पार्ट्स होल्ड और सहायता उपलब्ध।",

    // Testimonials
    rev_badge: "ग्राहकों की राय",
    rev_title: "हमारे संतुष्ट ग्राहकों के अनुभव",
    r1_text: `"स्वराज 744 के फिल्टर और ऑइल लेने गया था। गढ़ाकोटा में सबसे सही रेट और असली सामान यहीं मिलता है। भाई का व्यवहार बहुत अच्छा है।"`,
    r1_name: "रामेश्वर पटेल",
    r1_role: "किसान, गढ़ाकोटा",
    r2_text: `"हमारा गैरेज है और हम पिछले 3 साल से सारा बाइक का सामान शुभम ट्रेडर्स से ही लेते हैं। रोलॉन चेन सेट और कैस्ट्रोल ऑइल हमेशा ओरिजिनल रहता है।"`,
    r2_name: "दीपक विश्वकर्मा",
    r2_role: "ऑटो मैकेनिक, दमोह रोड",
    r3_text: `"दुकान बस स्टैंड के बिल्कुल पास होने से सामान तुरंत मिल जाता है। बैटरी का वारंटी कार्ड भी तुरंत बनाकर दिया। बहुत बढ़िया दुकान।"`,
    r3_name: "सुनील चौबे",
    r3_role: "गढ़ाकोटा, सागर",

    // Location & Contact
    loc_badge: "स्थान एवं संपर्क",
    loc_title: "दुकान पर पधारें या फोन लगाएं",
    loc_desc:
      "गढ़ाकोटा बस स्टैंड के बिल्कुल समीप स्थित, आसानी से पहुंचने योग्य।",
    loc_landmark:
      "मेन बस स्टैंड, नगर भवन के पास, गढ़ाकोटा, जिला सागर (म.प्र.) - 470229",
    c_phone: "मोबाइल नंबर (कॉलिंग)",
    c_wa: "व्हाट्सएप सहायता (24x7 पूछताछ)",
    c_wa_desc:
      "पार्ट्स की फोटो या वीडियो खींचकर भेजें और तुरंत रेट कन्फर्म करें।",
    c_hours: "दुकान का समय (Working Hours)",
    c_hours_time: "सोमवार से रविवार: 09:00 AM - 9:00 PM (रोजाना खुला)",
    c_hours_status: "365 दिन सेवा में",
    c_pin: "पिनकोड & क्षेत्र",
    open_in_gmaps: "गूगल मैप्स में रास्ता देखें",
    route_tip:
      "गढ़ाकोटा बस स्टैंड पर उतरकर नगर भवन की ओर 2 मिनट की दूरी पर दुकान स्थित है।",
    dock_call: "कॉल करें",
    dock_wa: "व्हाट्सएप",
    dock_dir: "रास्ता देखें",

    // Footer
    footer_about:
      "गढ़ाकोटा, सागर में ट्रैक्टर, बाइक एवं सभी गाड़ियों के ओरिजिनल स्पेयर पार्ट्स, ल्यूब्रीकेंट्स और हार्डवेयर का सबसे प्रतिष्ठित प्रतिष्ठान।",
    f_links_title: "त्वरित नेविगेशन",
    f_products_title: "मुख्य सामग्री",
    f_contact_title: "संपर्क सूत्र",
    f_rights:
      "© 2026 शुभम ट्रेडर्स (Shubham Traders Garhakota). सर्वाधिकार सुरक्षित।",
    f_crafted:
      "मध्य प्रदेश के स्थानीय व्यापारियों और किसानों के लिए गर्व से निर्मित",

    // Toast notification
    toast_copied: "मोबाइल नंबर कॉपी हो गया!",
    toast_lang_switched: "भाषा बदलकर हिंदी कर दी गई है",
  },

  en: {
    // Meta / General
    page_title:
      "Shubham Traders Garhakota | Auto Spares, Tractor Parts & Hardware Store",
    meta_desc:
      "Shubham Traders Garhakota - Trusted destination for 2-wheeler, tractor spare parts, lubricant oils, batteries, and hardware tools in Sagar, MP.",

    // Top Bar
    top_bar_welcome:
      "🌾 Most Trusted Auto & Tractor Spare Parts Store in Garhakota & Sagar Dist.",
    timing_text: "Mon - Sun: 09:00 AM - 9:00 PM",

    // Header & Nav
    shop_title: "Shubham Traders",
    shop_sub: "GARHAKOTA AUTO SPARES & HARDWARE",
    nav_home: "Home",
    nav_products: "Parts Catalog",
    nav_brands: "Brands",
    nav_services: "Why Choose Us",
    nav_estimate: "Price Quote",
    nav_reviews: "Reviews",
    nav_contact: "Contact & Location",
    btn_whatsapp: "WhatsApp Chat",
    btn_call: "Call Now",

    // Hero Section
    hero_verified: "100% Genuine Spare Parts | Wholesale & Retail Dealer",
    hero_h1: `Original <span class="highlight-gradient">Spare Parts</span> & Lubricants for Vehicles & Farm Equipment`,
    hero_p:
      "Genuine tractor parts (Mahindra, Swaraj, Sonalika), two-wheeler spares, commercial loader components, premium engine oils, high-durability batteries, and workshop tools under one roof at wholesale prices.",
    search_placeholder:
      "e.g., Castrol 4T, Swaraj Filter, 12V Battery, Rolon Chain...",
    search_btn: "Search",
    hero_call_now: "Check Rates: +91 9340135743",
    hero_directions: "Locate on Google Maps",

    // Hero Stats
    stat_experience: "Years of Trust",
    stat_products: "Ready-Stock Parts",
    stat_genuine: "Genuine Sealed Parts",
    stat_customers: "Satisfied Farmers & Mechanics",

    // Hero Showcase Card
    overlay_head: "Shubham Traders Garhakota",
    overlay_sub: "Near Nagar Bhawan, Main Bus Stand, Garhakota",
    status_open: "Shop Open Now",
    status_closed: "Shop Currently Closed (Opens at 09:00 AM)",
    status_timing: "Serving you 09:00 AM to 09:00 PM every single day",

    // Catalog Section
    cat_badge: "Product Catalog",
    cat_title: "Complete Range of Products in Stock",
    cat_desc:
      "Choose a category below or send us a quick photo on WhatsApp to verify availability.",
    tab_all: "All Products",
    tab_tractor: "🚜 Tractor & Farm Spares",
    tab_bike: "🏍️ Bike & Scooter Spares",
    tab_oils: "🛢️ Engine Oils & Grease",
    tab_battery: "🔋 Batteries & Electricals",
    tab_tools: "🔧 Tools & Bearings",

    // Product Items
    p1_title: "Engine Oils (2T, 4T, Heavy Duty)",
    p1_desc:
      "Castrol Activ, Servo 4T, Motul, Gulf Superfleet, Veedol - High performance lubricants for bikes, tractors & pickups.",
    p1_s1: "Available in 1L, 3L, 5L, 7.5L, 10L & 20L Buckets",
    p1_s2: "Delivers maximum mileage & smooth engine lifespan",

    p2_title: "Tractor Filters & Hydraulic Spares",
    p2_desc:
      "Mahindra, Swaraj, Sonalika, Eicher, Powertrac - Oil filters, diesel filters, hydraulic pipes, and lift kits.",
    p2_s1: "Bosch, Purolator, Mico OEM quality fittings",
    p2_s2: "Engineered for heavy loads and grueling farm duties",

    p3_title: "Two-Wheeler Clutch, Brakes & Chain Sets",
    p3_desc:
      "Splendor, HF Deluxe, Pulsar, Shine, Platina - Clutch plates, brake shoes, Rolon chain-sprockets, cables & pads.",
    p3_s1: "Rolon, ASK, Endurance, Varroc OEM parts",
    p3_s2: "Long-lasting durability and precision fitting guarantee",

    p4_title: "Automotive Batteries & Inverter Spares",
    p4_desc:
      "Exide, Amaron, Dynex, SF Sonic - High-cranking, long warranty batteries for bikes, tractors, loaders and cars.",
    p4_s1: "Official company warranty cards & testing support",
    p4_s2: "Huge scrap exchange discount on old batteries",

    p5_title: "Bearings, Oil Seals & Belts",
    p5_desc:
      "SKF, NBC, FAG, Fenner, PIX - Ball bearings, taper roller bearings, fan belts, alternator belts and oil seals in all sizes.",
    p5_s1: "Sizes for threshers, cultivators & borewell pumps",
    p5_s2: "High-heat and dust resistant sealing technology",

    p6_title: "Workshop & Mechanic Tools & Fasteners",
    p6_desc:
      "Spanner-wrench sets, socket kits, hydraulic jacks, grease guns, high-tensile tempered nuts, bolts and washers.",
    p6_s1: "Complete toolkit for garages and commercial vehicles",
    p6_s2: "Drop-forged hardened steel non-slip spanners",

    // Product Card Badges & Buttons
    best_price: "Wholesale Rates",
    in_stock: "Ready Stock",
    all_models: "All Models",
    best_exchange: "Exchange Offer",
    full_range: "Full Range",
    ready_stock: "In Stock",
    inquire: "Ask Price",

    // Brands
    brand_badge: "Authorized & Popular Brands",
    brand_title: "Unmatched Reliability of India's Leading Brands",
    brand_desc:
      "We exclusively stock trusted brands renowned for durability and engineering excellence.",

    // Estimator
    calc_badge: "Instant Price Quote",
    calc_title: "Check Prices Before Visiting Store",
    calc_desc:
      "Enter the part name or vehicle model. We'll receive your query on WhatsApp and respond with the best quote immediately.",
    perk_1: "Fast reply within 10 minutes",
    perk_2: "Direct wholesale rates below market prices",
    perk_3: "Special 24-hr ordering for rare components",
    form_title: "Check Part Availability & Cost",
    form_name: "Your Name",
    form_name_ph: "Enter your full name (e.g. Rahul Patel)",
    form_vehicle: "Vehicle / Machinery Type",
    form_parts: "Part Name or Vehicle Model",
    form_parts_ph: "e.g., Swaraj 744 Filter + 7.5L Mobil Engine Oil",
    form_submit: "Ask Price on WhatsApp",
    form_note:
      "* No spam. Your phone number is only used to send quote details.",

    // Services / Why Us
    why_badge: "Why Choose Us",
    why_title: "Why Shubham Traders in Garhakota?",
    why_desc:
      "We aren't just parts sellers; we are your dependable partners in vehicle and machinery maintenance.",
    feat1_title: "100% Genuine Sealed Products",
    feat1_desc:
      "The market is flooded with counterfeits, but at Shubham Traders you get strictly company-sealed, genuine items.",
    feat2_title: "Wholesale Pricing for Retail Buyers",
    feat2_desc:
      "By procuring bulk stock directly from authorized distributors, we pass significant savings to our customers.",
    feat3_title: "Massive Ready Stock & Quick Delivery",
    feat3_desc:
      "No vehicle downtime. The most essential tractor and motorcycle parts are always available over the counter.",
    feat4_title: "Exclusive Perks for Mechanics",
    feat4_desc:
      "Special loyalty discounts, advance phone-booking of parts, and dedicated support for all garage technicians.",

    // Testimonials
    rev_badge: "Testimonials",
    rev_title: "Experiences of Our Valued Customers",
    r1_text: `"Came here for Swaraj 744 filters and Mobil oil. Shubham Traders offers the most reasonable prices and genuine parts in Garhakota."`,
    r1_name: "Rameshwar Patel",
    r1_role: "Farmer, Garhakota",
    r2_text: `"I operate an auto garage and have been buying all bike parts from Shubham Traders for 3 years. Rolon chains and Castrol oil are always 100% authentic."`,
    r2_name: "Deepak Vishwakarma",
    r2_role: "Auto Mechanic, Damoh Road",
    r3_text: `"Very convenient location right by the bus stand. Got my battery tested and replacement warranty card issued on the spot. Excellent store."`,
    r3_name: "Sunil Choubey",
    r3_role: "Resident, Sagar",

    // Location & Contact
    loc_badge: "Location & Contact",
    loc_title: "Visit Our Showroom or Call Us",
    loc_desc:
      "Conveniently located right next to the Garhakota Main Bus Stand.",
    loc_landmark:
      "Shop No. 4, Near Nagar Bhawan, Main Bus Stand, Garhakota, Sagar (M.P.) - 470229",
    c_phone: "Phone Numbers (Calling)",
    c_wa: "WhatsApp Support (24x7 Inquiries)",
    c_wa_desc:
      "Snap a photo of the broken part or vehicle RC and send it to us for confirmation.",
    c_hours: "Business Hours",
    c_hours_time: "Monday to Sunday: 09:00 AM - 9:00 PM (Open 7 Days)",
    c_hours_status: "Open 365 Days",
    c_pin: "PIN Code & District",
    open_in_gmaps: "Get Directions on Google Maps",
    route_tip:
      "Just 2 minutes walk towards Nagar Bhawan after getting off at Garhakota Bus Stand.",
    dock_call: "Call",
    dock_wa: "WhatsApp",
    dock_dir: "Directions",

    // Footer
    footer_about:
      "Garhakota's premier retail & wholesale destination for automotive spares, tractor components, lubricants and industrial hardware.",
    f_links_title: "Quick Links",
    f_products_title: "Popular Products",
    f_contact_title: "Contact Details",
    f_rights: "© 2026 Shubham Traders Garhakota. All Rights Reserved.",
    f_crafted:
      "Crafted with pride for farmers and local businesses of Madhya Pradesh",

    // Toast notification
    toast_copied: "Phone number copied to clipboard!",
    toast_lang_switched: "Language switched to English",
  },
};

let currentLang = "hi";

/**
 * Switch Application Language (Hindi <-> English)
 * Saves preference in localStorage
 */
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem("shubham_lang", lang);

  document.documentElement.lang = lang;
  document.documentElement.setAttribute("data-lang", lang);

  const dict = translations[lang];

  // Update Page Title and Meta Description
  if (dict.page_title) {
    document.title = dict.page_title;
  }
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict.meta_desc) {
    metaDesc.setAttribute("content", dict.meta_desc);
  }

  // Update Active State on all Language Switchers (Top bar & Floating switcher)
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const btnLang = btn.getAttribute("data-lang-target");
    if (btnLang === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Update text for all elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Update Form Placeholders
  const searchInput = document.getElementById("partsSearchInput");
  if (searchInput && dict.search_placeholder) {
    searchInput.placeholder = dict.search_placeholder;
  }

  const custName = document.getElementById("custName");
  if (custName && dict.form_name_ph) {
    custName.placeholder = dict.form_name_ph;
  }

  const partsNeeded = document.getElementById("partsNeeded");
  if (partsNeeded && dict.form_parts_ph) {
    partsNeeded.placeholder = dict.form_parts_ph;
  }

  // Update Floating Switcher Label
  const floatLabel = document.getElementById("floatLangLabel");
  if (floatLabel) {
    floatLabel.textContent = lang === "hi" ? "English" : "हिंदी";
  }
}

/**
 * Toggle between Hindi and English
 */
function toggleLanguage() {
  const nextLang = currentLang === "hi" ? "en" : "hi";
  setLanguage(nextLang);
  showToast(translations[nextLang].toast_lang_switched);
}

/**
 * Switch Catalog Category Filter
 */
function switchCategory(category, targetBtn) {
  const tabs = document.querySelectorAll(".cat-tab");
  tabs.forEach((tab) => tab.classList.remove("active"));

  if (targetBtn) {
    targetBtn.classList.add("active");
  } else if (window.event && window.event.currentTarget) {
    window.event.currentTarget.classList.add("active");
  }

  const cards = document.querySelectorAll(".part-card");
  let visibleCount = 0;

  cards.forEach((card) => {
    if (category === "all" || card.getAttribute("data-cat") === category) {
      card.style.display = "flex";
      card.style.animation = "fadeInUp 0.35s ease forwards";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  const emptyMsg = document.getElementById("catalogEmptyMsg");
  if (emptyMsg) {
    emptyMsg.style.display = visibleCount === 0 ? "block" : "none";
  }
}

/**
 * Live Search Filter for Catalog Items
 */
function filterPartsLive() {
  const input = document.getElementById("partsSearchInput");
  if (!input) return;

  const query = input.value.trim().toLowerCase();
  const cards = document.querySelectorAll(".part-card");
  let matchedCount = 0;

  cards.forEach((card) => {
    const text = card.innerText.toLowerCase();
    if (query === "" || text.includes(query)) {
      card.style.display = "flex";
      matchedCount++;
    } else {
      card.style.display = "none";
    }
  });

  const emptyMsg = document.getElementById("catalogEmptyMsg");
  if (emptyMsg) {
    emptyMsg.style.display = matchedCount === 0 ? "block" : "none";
  }
}

/**
 * Smooth scroll to catalog section
 */
function scrollToCatalog() {
  const cat = document.getElementById("categories");
  if (cat) {
    cat.scrollIntoView({ behavior: "smooth" });
    filterPartsLive();
  }
}

/**
 * Submit Quote Inquiry directly via WhatsApp Web / App
 */
function sendWhatsAppInquiry(e) {
  e.preventDefault();
  const nameInput = document.getElementById("custName");
  const vehicleInput = document.getElementById("vehicleType");
  const partsInput = document.getElementById("partsNeeded");

  const name = nameInput ? nameInput.value.trim() : "";
  const vehicle = vehicleInput ? vehicleInput.value : "";
  const parts = partsInput ? partsInput.value.trim() : "";

  if (!name || !parts) {
    alert(
      currentLang === "hi"
        ? "कृपया अपना नाम और पार्ट्स का नाम लिखें।"
        : "Please enter your name and part details.",
    );
    return;
  }

  let msg =
    currentLang === "hi"
      ? `नमस्ते शुभम ट्रेडर्स गढ़ाकोटा!%0A%0A👤 *ग्राहक का नाम:* ${encodeURIComponent(name)}%0A🚜 *वाहन/मशीन:* ${encodeURIComponent(vehicle)}%0A🔧 *आवश्यक पार्ट्स:* ${encodeURIComponent(parts)}%0A%0Aकृपया उपलब्धता और सबसे अच्छा रेट बताइए। धन्यवाद!`
      : `Hello Shubham Traders Garhakota!%0A%0A👤 *Customer Name:* ${encodeURIComponent(name)}%0A🚜 *Vehicle/Machinery:* ${encodeURIComponent(vehicle)}%0A🔧 *Parts Required:* ${encodeURIComponent(parts)}%0A%0APlease share availability and best price. Thank you!`;

  const phone = "919340135743";
  const url = `https://wa.me/${phone}?text=${msg}`;
  window.open(url, "_blank");
}

/**
 * Copy Phone to Clipboard with Toast Notification
 */
function copyPhone(phoneNum) {
  navigator.clipboard
    .writeText(phoneNum)
    .then(() => {
      showToast(translations[currentLang].toast_copied || "Phone copied!");
    })
    .catch(() => {
      window.location.href = `tel:${phoneNum}`;
    });
}

/**
 * Floating Toast Message
 */
function showToast(message) {
  let toast = document.getElementById("modernToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "modernToast";
    toast.className = "modern-toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
  toast.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

/**
 * Check if store is currently open (09:00 AM - 9:00 PM IST)
 */
function checkStoreStatus() {
  const statusBadge = document.getElementById("shopStatusIndicator");
  const statusText = document.getElementById("shopStatusText");
  if (!statusBadge || !statusText) return;

  const now = new Date();
  // IST is UTC + 5:30
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const istDate = new Date(utc + 3600000 * 5.5);
  const hours = istDate.getHours();
  const minutes = istDate.getMinutes();
  const timeInMinutes = hours * 60 + minutes;

  const openTime = 8 * 60 + 30; // 09:00 AM
  const closeTime = 20 * 60 + 30; // 09:00 PM

  const isOpen = timeInMinutes >= openTime && timeInMinutes <= closeTime;
  const dict = translations[currentLang];

  if (isOpen) {
    statusBadge.classList.remove("closed");
    statusBadge.classList.add("open");
    statusText.setAttribute("data-i18n", "status_open");
    statusText.textContent = dict.status_open;
  } else {
    statusBadge.classList.remove("open");
    statusBadge.classList.add("closed");
    statusText.setAttribute("data-i18n", "status_closed");
    statusText.textContent = dict.status_closed;
  }
}

/**
 * Initialize on DOM Load
 */
document.addEventListener("DOMContentLoaded", () => {
  // Restore saved language or default to Hindi
  const savedLang = localStorage.getItem("shubham_lang") || "hi";
  setLanguage(savedLang);

  // Store status
  checkStoreStatus();
  setInterval(checkStoreStatus, 60000);

  // Mobile Hamburger Menu
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const navMenu = document.getElementById("navMenu");

  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      const icon = mobileBtn.querySelector("i");
      if (icon) {
        if (navMenu.classList.contains("active")) {
          icon.classList.remove("fa-bars-staggered");
          icon.classList.add("fa-xmark");
        } else {
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars-staggered");
        }
      }
    });

    navMenu.querySelectorAll(".nav-item").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        const icon = mobileBtn.querySelector("i");
        if (icon) {
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars-staggered");
        }
      });
    });
  }

  // Active Nav Link highlighting on click and scroll
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-menu .nav-item");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollY = window.pageYOffset;
    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    if (current) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    }
  });

  // Floating back to top button visibility
  const backToTop = document.getElementById("backToTopBtn");
  if (backToTop) {
    if (window.scrollY > 400) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  }
});
