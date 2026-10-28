export interface ProductItem {
  id: string;
  category: "tractor" | "commercial" | "oils" | "battery" | "hardware";
  badge: string;
  iconName: string;
  titleHi: string;
  titleEn: string;
  descHi: string;
  descEn: string;
  specsHi: string[];
  specsEn: string[];
  priceBadgeHi: string;
  priceBadgeEn: string;
  waPrompt: string;
}

export const productsData: ProductItem[] = [
  {
    id: "p1",
    category: "tractor",
    badge: "Engine & Clutch",
    iconName: "Tractor",
    titleHi: "ट्रैक्टर इंजन, क्लच प्लेट & क्राउन पिनियन",
    titleEn: "Tractor Engine Spares, Clutch Assembly & Crown Pinion",
    descHi:
      "Mahindra (BhoomiPutra, Sarpanch, Yuvo), Swaraj (735, 744, 855 FE), Sonalika DI, Eicher, Powertrac - लाइनर पिस्टन सेट, कनेक्टिंग रॉड, हेवी-ड्यूटी क्लच प्लेट, प्रेशर प्लेट, फ्लाईव्हील रिंग और क्राउन पिनियन किट।",
    descEn:
      "Mahindra, Swaraj, Sonalika, Eicher & Powertrac - Cylinder liner piston kits, connecting rods, heavy duty dual-clutch plates, pressure plates, flywheel rings & differential crown pinions.",
    specsHi: [
      "100% ओरिजिनल कंपनी सीलबंद पैकेजिंग व पक्का बिल",
      "भारी जुताई, रोटावेटर और ट्रॉली खिंचाई के लिए उच्चतम मजबूती",
      "इंजन लाइफ बढ़ाने वाले प्रिसिजन हीट-ट्रीटेड कम्पोनेंट्स",
    ],
    specsEn: [
      "100% Original company sealed packaging with tax invoice",
      "Engineered for deep tilling, rotavator torque & heavy haulage",
      "Precision heat-treated components for extended engine lifespan",
    ],
    priceBadgeHi: "थोक डिस्काउंट भाव",
    priceBadgeEn: "Wholesale Discount",
    waPrompt:
      "Namaste Shubham Traders! Mujhe Swaraj / Mahindra tractor ke engine parts aur clutch plate ke rate chahiye.",
  },
  {
    id: "p2",
    category: "tractor",
    badge: "Hydraulics & Filters",
    iconName: "Filter",
    titleHi: "ट्रैक्टर हाइड्रोलिक पंप, लिफ्ट किट & फिल्टर्स",
    titleEn: "Hydraulic Lift Kits, Power Steering & Filters",
    descHi:
      "Bosch, Purolator, Mico, Donaldson - ऑइल फिल्टर, प्राइमरी व सेकेंडरी डीजल फिल्टर, हाइड्रोलिक लिफ्ट पंप, डिस्ट्रीब्यूटर वाल्व, लिफ्ट आर्म शाफ्ट और पावर स्टीयरिंग सील किट।",
    descEn:
      "Bosch, Purolator, Mico, Donaldson - High-efficiency oil filters, dual diesel filter bowls, hydraulic lift gear pumps, control distributor valves, lift arm shafts & power steering seal kits.",
    specsHi: [
      "माइक्रोन-लेवल शुद्धता जो डीजल नोजल व इंजेक्टर पंप को बचाए",
      "1500-2500 किग्रा लिफ्ट क्षमता वाले हैवी हाइड्रोलिक प्रेशर पार्ट्स",
      "सभी महिंद्रा, स्वराज, सोनालिका व आयशर मॉडल के लिए रेडी स्टॉक",
    ],
    specsEn: [
      "Micron-grade filtration protecting fuel injection pumps",
      "Heavy duty hydraulic components rated for 1500-2500 kg lift capacity",
      "Ready stock for Mahindra, Swaraj, Sonalika & Eicher models",
    ],
    priceBadgeHi: "तुरंत रेडी स्टॉक",
    priceBadgeEn: "Ready in Stock",
    waPrompt:
      "Namaste Shubham Traders! Mujhe Tractor hydraulic pump aur diesel/oil filter ke rate batayein.",
  },
  {
    id: "p3",
    category: "commercial",
    badge: "Suspension & Springs",
    iconName: "Truck",
    titleHi: "पिकअप, लोडर & ट्रक कमानी (Leaf Springs) व सस्पेंशन",
    titleEn: "Commercial Leaf Springs, Shackle Pins & Suspension",
    descHi:
      "Bolero Pickup 1.7T/1.3T, Bolero Maxi Truck, Tata Ace, Tata 407, Ashok Leyland Dost, Bada Dost - मेन पत्ता, सेकंड पत्ता, हेल्पर कमानी, सेंटर बोल्ट, यू-बोल्ट (U-Bolts), शेकल पिन और नायलॉन बुश किट।",
    descEn:
      "Bolero Pickup, Bolero Maxi Truck, Tata Ace, Tata 407, Ashok Leyland Dost - Main leaves, helper spring leaves, center bolts, forged U-bolts, heavy-duty shackle pins & brass/nylon bush sets.",
    specsHi: [
      "हाई-सिलिकॉन मैंगनीज स्प्रिंग स्टील (Supreme Load Bearing)",
      "ओवरलोड में भी न टूटने वाले और अतिरिक्त भार सहने में सक्षम",
      "लोकल ट्रांसपोर्टर्स व लोडर मैकेनिकों के लिए तुरंत उपलब्ध",
    ],
    specsEn: [
      "High-silicon manganese spring steel for ultimate overload resistance",
      "Reinforced against snapping on bumpy rural & highway routes",
      "Immediate over-the-counter supply for fleet operators & garages",
    ],
    priceBadgeHi: "थोक वजन भाव",
    priceBadgeEn: "Fleet Wholesale",
    waPrompt:
      "Namaste Shubham Traders! Mujhe Bolero Pickup / Tata Ace ki kamani patte aur U-bolt ke rate chahiye.",
  },
  {
    id: "p4",
    category: "commercial",
    badge: "Brakes & Axles",
    iconName: "Disc",
    titleHi: "कमर्शियल ब्रेक ड्रम, ब्रेक शू, प्रोपेलर शाफ्ट & क्रॉस",
    titleEn: "Commercial Brake Drums, Shoes, Propeller Shaft & Cross Joints",
    descHi:
      "टाटा, महिंद्रा, आयशर, लेलैंड - हैवी-ड्यूटी ब्रेक ड्रम, ब्रेक लाइनिंग, व्हील सिलेंडर, मास्टर सिलेंडर, प्रोपेलर शाफ्ट स्पाइडर (यूनिवर्सल क्रॉस जॉइंट), हब बेयरिंग और रियर एक्सल शाफ्ट।",
    descEn:
      "Tata, Mahindra, Eicher, Leyland - Heavy-duty brake drums, premium asbestos-free brake shoes, wheel cylinders, master cylinders, universal spider cross joints, hub bearings & axle shafts.",
    specsHi: [
      "भारी लोड में ढलान पर कभी ब्रेक फेल न होने देने वाला मटेरियल",
      "यूनिवर्सल जॉइंट क्रॉस जो वाइब्रेशन और गड़गड़ाहट को रोके",
      "बोलेरो, पिकअप, आयशर 10.59 व टिपर साइज में उपलब्ध",
    ],
    specsEn: [
      "Thermal fade-resistant brake compounds for heavy downhill braking",
      "Precision-balanced universal joints eliminating drive shaft vibration",
      "Sizes ready for Bolero Pickup, Tata 407, Eicher Pro & Tippers",
    ],
    priceBadgeHi: "सस्ता & टिकाऊ",
    priceBadgeEn: "Heavy Grade",
    waPrompt:
      "Namaste Shubham Traders! Mujhe Commercial loader ke brake drum, shoe aur universal cross joint chahiye.",
  },
  {
    id: "p5",
    category: "oils",
    badge: "Diesel Engine Oil",
    iconName: "Fuel",
    titleHi: "हेवी-ड्यूटी 15W-40 / 20W-50 डीजल इंजन ऑइल बाल्टी",
    titleEn: "Heavy-Duty 15W-40 / 20W-50 Diesel Engine Oil Buckets",
    descHi:
      "Castrol CRB Turbomax 15W-40 CI-4+, Servo Pride TC, Motul Tekma Mega, Gulf Superfleet Multi, Veedol - ट्रैक्टर, हार्वेस्टर और कमर्शियल पिकअप के लिए 5L, 7.5L, 8.5L, 10L, 15L व 20L सीलबंद बाल्टी।",
    descEn:
      "Castrol CRB Turbomax 15W-40 CI-4+, Servo Pride TC, Motul Tekma, Gulf Superfleet, Veedol - Sealed 5L, 7.5L, 8.5L, 10L, 15L & 20L buckets engineered for heavy diesel turbo engines.",
    specsHi: [
      "डुराशील्ड (DuraShield) बूस्टर्स जो इंजन में घिसाव 3 गुना कम करें",
      "500 घंटे / 15,000 किमी तक सुरक्षित और स्मूथ माइलेज बैकअप",
      "100% असली सीलपैक बारकोड वारंटी के साथ",
    ],
    specsEn: [
      "DuraShield boosters delivering up to 3x wear protection",
      "Extended drain interval up to 500 tractor hours / 15,000 kms",
      "100% Genuine factory-sealed tamper-proof QR/Barcode buckets",
    ],
    priceBadgeHi: "थोक बाल्टी भाव",
    priceBadgeEn: "Wholesale Bucket Rate",
    waPrompt:
      "Namaste Shubham Traders! Mujhe Castrol CRB / Servo 15W-40 7.5L ya 15L/20L engine oil bucket ke rate batayein.",
  },
  {
    id: "p6",
    category: "oils",
    badge: "Gear & Hydraulics",
    iconName: "Fuel",
    titleHi: "80W-90, 85W-140 गियर ऑइल, ट्रांसमिशन & ग्रीस बाल्टी",
    titleEn:
      "Gear Oils (80W-90, 85W-140), Universal Tractor Transmission Oil & Grease",
    descHi:
      "गियरबॉक्स, क्राउन पिनियन, वेट-ब्रेक (Wet Brake) ट्रांसमिशन ऑइल (UTTO), 68 नंबर हाइड्रोलिक ऑइल और 1kg, 2kg, 3kg, 5kg, 18kg की लिथियम AP3 / MP3 हेवी ग्रीस बाल्टी।",
    descEn:
      "Heavy gear oils (80W-90, EP-90, 85W-140, 140), Universal Tractor Transmission Oil (Wet Brake oil), Grade 68 hydraulic oil & 1kg to 18kg AP3/MP3 blue lithium grease buckets.",
    specsHi: [
      "तेल में डूबे ब्रेक (Oil-Immersed Brakes) में गूंज व शोर रोकने वाला फॉर्मूला",
      "अत्यधिक दबाव (Extreme Pressure) में गियर के दांतों को घिसने से बचाए",
      "पानी, धूल और हाई-हीट में पिघलकर न बहने वाली प्रीमियम ग्रीस",
    ],
    specsEn: [
      "Anti-chatter formulation for oil-immersed wet disc brakes",
      "Extreme Pressure additives protecting crown and differential gears",
      "High drop-point waterproof lithium grease for bearings & kingpins",
    ],
    priceBadgeHi: "फुल स्टॉक उपलब्ध",
    priceBadgeEn: "Ready in Stock",
    waPrompt:
      "Namaste Shubham Traders! Mujhe Wet Brake Oil / Gear Oil 80W90 aur AP3 grease bucket ke rate chahiye.",
  },
  {
    id: "p7",
    category: "battery",
    badge: "Heavy Batteries",
    iconName: "BatteryCharging",
    titleHi: "ट्रैक्टर, ट्रक, लोडर व जनरेटर हेवी बैटरियां (75Ah - 180Ah)",
    titleEn:
      "Tractor, Truck, Commercial & Genset Heavy Batteries (75Ah - 180Ah)",
    descHi:
      "Exide (Jai Kisan, Express, Cargo, Matrix), Amaron (Hi-Life Commercial, Harvest), Dynex, SF Sonic - 75Ah, 88Ah, 100Ah, 130Ah, 150Ah व 180Ah की हाई-क्रैंकिंग क्षमता वाली बैटरियां।",
    descEn:
      "Exide (Jai Kisan, Express, Cargo), Amaron (Commercial Heavy Duty), Dynex - High-cranking 75Ah, 88Ah, 100Ah, 130Ah, 150Ah & 180Ah batteries built for tractors, harvesters, trucks and gensets.",
    specsHi: [
      "कठिन सर्दियों व भारी लोड में 1-सेल्फ में इंजन स्टार्ट की गारंटी",
      "36 से 48 महीने की कंपनी वारंटी कार्ड व ऑन-द-स्पॉट लोड टेस्टर",
      "पुरानी भारी बैटरी बदलने पर सागर जिले में सर्वाधिक स्क्रैप एक्सचेंज छूट",
    ],
    specsEn: [
      "High cold-cranking amps guaranteeing instant single-turn self start",
      "36 to 48 months manufacturer warranty with on-the-spot load testing",
      "Highest scrap exchange rebate on your old commercial batteries",
    ],
    priceBadgeHi: "एक्सचेंज डिस्काउंट",
    priceBadgeEn: "Exchange Rebate",
    waPrompt:
      "Namaste Shubham Traders! Mujhe Tractor / Pickup / Truck ki 88Ah/100Ah/150Ah heavy battery ke rate aur exchange offer janna hai.",
  },
  {
    id: "p8",
    category: "hardware",
    badge: "Bearings & V-Belts",
    iconName: "Disc",
    titleHi: "थ्रेशर, कल्टीवेटर, रोटावेटर बेयरिंग, सील & V-बेल्ट्स",
    titleEn:
      "Thresher, Cultivator, Rotavator Heavy Bearings, Oil Seals & V-Belts",
    descHi:
      "SKF, NBC, FAG, Fenner, PIX, Continental - रोटावेटर हब बेयरिंग, थ्रेशर शाफ्ट पेडेस्टल बेयरिंग (UCP), कंबाइन हार्वेस्टर बेयरिंग, हाई-टेंपर डबल-लिप ऑयल सील और सभी सेक्शन (A, B, C) की हेवी V-बेल्ट्स।",
    descEn:
      "SKF, NBC, FAG, Fenner, PIX - Heavy rotavator hub bearings, thresher pillow block bearings (UCP 208, 210, 212), combine harvester spares, double-lip heat seals & all Section A, B, C V-belts.",
    specsHi: [
      "सीजन के दौरान 24x7 थ्रेशर व कल्टीवेटर के सभी रनिंग साइज काउंटर पर रेडी",
      "धूल, कीचड़ और हाई-हीट से सुरक्षित डबल-शील्ड सील तकनीक",
      "Fenner व PIX की ओरिजिनल खिंचाव-मुक्त और टिकाऊ V-बेल्ट्स",
    ],
    specsEn: [
      "All harvest thresher and rotavator running sizes ready on counter",
      "Double-shielded technology resisting dust, mud and high friction heat",
      "Original stretch-resistant high-torque V-belts by Fenner & PIX",
    ],
    priceBadgeHi: "संपूर्ण साइज रेंज",
    priceBadgeEn: "Full Size Range",
    waPrompt:
      "Namaste Shubham Traders! Mujhe Thresher / Rotavator ke heavy bearings aur Fenner belt ke rate chahiye.",
  },
  {
    id: "p9",
    category: "hardware",
    badge: "Workshop Tools",
    iconName: "Wrench",
    titleHi: "कमर्शियल वर्कशॉप टूल्स, 5T-30T हाइड्रोलिक जैक & नट-बोल्ट",
    titleEn: "Commercial Workshop Tools, 5T-30T Hydraulic Jacks & Fasteners",
    descHi:
      "5 टन से 30 टन क्षमता वाले हाइड्रोलिक बॉटल जैक, हेवी-ड्यूटी फुट/न्यूमेटिक ग्रीस गन, बड़े पाना-रिंच रिंग सॉकेट सेट (6mm से 50mm), कल्टीवेटर ब्लेड नट-बोल्ट और ग्रेड 8.8 / 10.9 हाई-टेन्साइल फास्टनर्स।",
    descEn:
      "5-Ton to 30-Ton heavy bottle jacks, pneumatic & foot grease guns, heavy socket/spanner wrench sets (6mm-50mm), rotavator/cultivator blade bolts & Grade 8.8/10.9 high-tensile tempered fasteners.",
    specsHi: [
      "ड्रॉप-फोर्ज्ड अलॉय स्टील जो अत्यधिक टॉर्क में भी कभी स्लिप न हो",
      "ट्रैक्टर, डंपर व लोडर पहिया खोलने के लिए हैवी पाना व पाइप लीवर",
      "थोक वर्कशॉप रेट पर मैकेनिक भाइयों के लिए विशेष टूलकिट पैकेज",
    ],
    specsEn: [
      "Drop-forged hardened alloy steel preventing slippage under extreme torque",
      "Heavy wheel nut spanners and extension pipe levers for trucks & tractors",
      "Special wholesale workshop starter packages for local garage mechanics",
    ],
    priceBadgeHi: "थोक वर्कशॉप भाव",
    priceBadgeEn: "Workshop Rates",
    waPrompt:
      "Namaste Shubham Traders! Mujhe Hydraulic Jack, heavy tool set aur high-tensile bolts ke rate batayein.",
  },
];

export interface BrandItem {
  name: string;
  category: string;
  desc: string;
}

export const brandsData: BrandItem[] = [
  {
    name: "MAHINDRA",
    category: "Tractor & Loader OEM",
    desc: "BhoomiPutra, Sarpanch, Yuvo Spares",
  },
  {
    name: "SWARAJ",
    category: "Tractor Spares",
    desc: "735, 744, 855 Genuine Parts",
  },
  {
    name: "SONALIKA",
    category: "Tractor Spares",
    desc: "DI 745, 750, Tiger Heavy Duty",
  },
  {
    name: "TATA MOTORS",
    category: "Commercial Spares",
    desc: "Ace, 407, 1109 & Tipper Range",
  },
  {
    name: "ASHOK LEYLAND",
    category: "Commercial Fleet",
    desc: "Dost, Bada Dost, Ecomet Parts",
  },
  {
    name: "EICHER",
    category: "Tractor & Truck",
    desc: "Pro Commercial & Tractor Spares",
  },
  {
    name: "CASTROL",
    category: "Heavy Diesel Lube",
    desc: "CRB Turbomax 15W-40 CI-4+",
  },
  {
    name: "SERVO",
    category: "Indian Oil",
    desc: "Pride TC, Super Duty & UTTO",
  },
  {
    name: "GULF OIL",
    category: "Commercial Fleet",
    desc: "Superfleet Special Fleet Lube",
  },
  {
    name: "EXIDE",
    category: "Heavy Duty Battery",
    desc: "Jai Kisan, Express, Cargo Range",
  },
  {
    name: "AMARON",
    category: "Commercial Battery",
    desc: "Hi-Life Commercial & Harvest",
  },
  {
    name: "SKF / NBC / FAG",
    category: "Industrial Bearings",
    desc: "Tractor, Rotavator & Thresher",
  },
  {
    name: "BOSCH / MICO",
    category: "Pumps & Filters",
    desc: "Diesel Nozzles, Pumps & Filters",
  },
  {
    name: "FENNER / PIX",
    category: "Belts & Hoses",
    desc: "Heavy Duty Section A/B/C V-Belts",
  },
  {
    name: "PUROLATOR",
    category: "Filtration Systems",
    desc: "Heavy Duty Engine & Oil Filters",
  },
  {
    name: "DONALDSON",
    category: "Air Filters",
    desc: "RadialSeal Heavy Air Cleaners",
  },
];

export interface FaqItem {
  questionHi: string;
  questionEn: string;
  answerHi: string;
  answerEn: string;
}

export const faqData: FaqItem[] = [
  {
    questionHi:
      "क्या आपके यहाँ स्वराज, महिंद्रा और सोनालिका ट्रैक्टर के सभी मॉडल के पार्ट्स मिलते हैं?",
    questionEn:
      "Do you stock spare parts for all models of Swaraj, Mahindra, and Sonalika tractors?",
    answerHi:
      "हाँ! हमारे पास स्वराज 735, 744, 855, महिंद्रा 275, 475, 575, 585 और सोनालिका के क्लच, गियर, ब्रेक, फिल्टर, हाइड्रोलिक लिफ्ट और इंजन के लगभग सभी रनिंग पार्ट्स काउंटर पर रेडी-स्टॉक रहते हैं।",
    answerEn:
      "Yes! We maintain ready counter stock for Swaraj 735, 744, 855, Mahindra 275, 475, 575, 585, and Sonalika tractors including clutch, gears, brakes, filters, lift kits, and engine spares.",
  },
  {
    questionHi:
      "क्या बोलेरो पिकअप और छोटा हाथी (Tata Ace) के कमानी पत्ते व सस्पेंशन पार्ट्स उपलब्ध हैं?",
    questionEn:
      "Are leaf springs and suspension components available for Bolero Pickup and Tata Ace?",
    answerHi:
      "बिल्कुल! बोलेरो पिकअप 1.7T/1.3T, मैक्सिट्रक और टाटा एस के मेन कमानी पत्ते, सेकंड पत्ते, हेल्पर कमानी, सेंटर बोल्ट, यू-बोल्ट और बुश किट हमेशा थोक भाव में रेडी रहते हैं।",
    answerEn:
      "Absolutely! Main leaf springs, second leaves, helper springs, center bolts, forged U-bolts, and bush sets for Bolero Pickup and Tata Ace are always in ready stock at wholesale prices.",
  },
  {
    questionHi:
      "इंजन ऑइल बाल्टी (Castrol / Servo) के साथ क्या बिल और ओरिजिनल होने की गारंटी मिलती है?",
    questionEn:
      "Do engine oil buckets (Castrol / Servo) come with tax invoices and authenticity guarantee?",
    answerHi:
      "शुभम ट्रेडर्स पर 100% ओरिजिनल कंपनी सीलबंद माल ही मिलता है। हर बाल्टी पर अधिकृत बारकोड/QR कोड होता है और पक्का बिल दिया जाता है। डुप्लीकेट सामान हम बिल्कुल नहीं रखते।",
    answerEn:
      "Shubham Traders exclusively sells 100% factory-sealed products. Every bucket comes with manufacturer QR/barcodes and legitimate billing. We maintain zero tolerance for counterfeits.",
  },
  {
    questionHi:
      "पुरानी बड़ी ट्रैक्टर/ट्रक की बैटरी बदलने पर कितना एक्सचेंज डिस्काउंट मिलता है?",
    questionEn:
      "How much scrap exchange discount is offered on old tractor or truck batteries?",
    answerHi:
      "हम वजन और Ah रेटिंग के अनुसार सागर जिले में सबसे ज्यादा स्क्रैप भाव देते हैं। पुरानी 75Ah से 180Ah की बैटरी वापस करने पर आपको नई एक्साइड/एमरॉन बैटरी पर भारी छूट मिल जाती है।",
    answerEn:
      "We provide the highest scrap valuation in Sagar district based on battery weight and Ah capacity, providing significant instant rebates on new Exide and Amaron batteries.",
  },
  {
    questionHi:
      "यदि कोई दुर्लभ पार्ट काउंटर पर उपलब्ध न हो, तो क्या आप मंगा कर देते हैं?",
    questionEn:
      "If a rare tractor or commercial part is not in stock, can you arrange it?",
    answerHi:
      "जी हाँ, यदि कोई दुर्लभ ट्रैक्टर या हेवी वाहन का पार्ट तुरंत उपलब्ध न हो, तो हम 24 से 36 घंटे के भीतर सीधे अधिकृत वितरकों से मंगाकर आपको उपलब्ध करा देते हैं।",
    answerEn:
      "Yes, if an uncommon part is momentarily out of stock, our distributor logistics network allows us to source and deliver it within 24 to 36 hours.",
  },
];

export interface TestimonialItem {
  stars: number;
  quoteHi: string;
  quoteEn: string;
  authorHi: string;
  authorEn: string;
  roleHi: string;
  roleEn: string;
  locationHi: string;
  locationEn: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    stars: 5,
    quoteHi:
      "स्वराज 744 के फिल्टर, हाइड्रोलिक लिफ्ट किट और 15L कैस्ट्रोल टर्बोमैक्स ऑइल लेने आया था। गढ़ाकोटा में ट्रैक्टर का असली सामान सबसे वाजिब थोक भाव में यहीं मिलता है। भाई का व्यवहार बहुत बढ़िया है।",
    quoteEn:
      "Came for Swaraj 744 filters, hydraulic lift kit, and 15L Castrol Turbomax oil. Shubham Traders offers the most reasonable prices and genuine parts in Garhakota. Very respectful service.",
    authorHi: "रामेश्वर पटेल",
    authorEn: "Rameshwar Patel",
    roleHi: "किसान एवं स्वराज 744 मालिक",
    roleEn: "Farmer & Swaraj 744 Owner",
    locationHi: "गढ़ाकोटा",
    locationEn: "Garhakota",
  },
  {
    stars: 5,
    quoteHi:
      "हमारी 4 बोलेरो पिकअप और 2 लोडर चलते हैं। कमानी पत्ते, ब्रेक शू और प्रोपेलर शाफ्ट क्रॉस हमेशा शुभम ट्रेडर्स से ही लेते हैं। सागर जाने की जरूरत ही नहीं पड़ती, सब सामान यहीं रीज़नेबल रेट में मिल जाता है।",
    quoteEn:
      "We operate 4 Bolero Pickups and 2 commercial loaders. We buy all leaf springs, brake shoes, and cross joints from Shubham Traders. No need to travel to Sagar city, everything is right here.",
    authorHi: "दिनेश यादव",
    authorEn: "Dinesh Yadav",
    roleHi: "ट्रांसपोर्ट फ्लीट ऑपरेटर",
    roleEn: "Transport Fleet Operator",
    locationHi: "दमोह-सागर रोड",
    locationEn: "Damoh-Sagar Road",
  },
  {
    stars: 5,
    quoteHi:
      "हमारा ट्रैक्टर रिपेयरिंग वर्कशॉप है। पिछले 4 साल से महिंद्रा और आयशर के सारे क्लच प्लेट, बेयरिंग और नट-बोल्ट यहीं से लेते हैं। माल हमेशा सीलपैक और जेन्युइन निकलता है।",
    quoteEn:
      "I run a tractor repair workshop. For the past 4 years I source all Mahindra and Eicher clutch plates, bearings, and bolts here. Strictly company-sealed and durable quality.",
    authorHi: "कमलेश विश्वकर्मा",
    authorEn: "Kamlesh Vishwakarma",
    roleHi: "ट्रैक्टर मैकेनिक & गैरेज ओनर",
    roleEn: "Tractor Mechanic & Garage Owner",
    locationHi: "बस स्टैंड के पास, गढ़ाकोटा",
    locationEn: "Near Bus Stand, Garhakota",
  },
  {
    stars: 5,
    quoteHi:
      "थ्रेशर सीजन में SKF के बेयरिंग और 100Ah की एक्साइड जय किसान बैटरी तुरंत मिली। ऑन-द-स्पॉट लोड टेस्ट करके वारंटी कार्ड बना कर दिया। बहुत ईमानदार दुकान है।",
    quoteEn:
      "Got SKF thresher bearings and a 100Ah Exide Jai Kisan battery right in the middle of harvest season. Tested the battery instantly and handed over the warranty card. Highly reliable.",
    authorHi: "सुनील चौबे",
    authorEn: "Sunil Choubey",
    roleHi: "कृषि फार्मर & हार्वेस्टर ओनर",
    roleEn: "Agricultural Farmer & Harvester Owner",
    locationHi: "सागर जिला",
    locationEn: "Sagar District",
  },
];
