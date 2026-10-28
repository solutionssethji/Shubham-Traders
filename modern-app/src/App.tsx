import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { productsData, brandsData, faqData, type ProductItem } from './data';
import confetti from 'canvas-confetti';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Search,
  CheckCircle2,
  Award,
  ShieldCheck,
  Zap,
  TrendingDown,
  Truck,
  Wrench,
  Fuel,
  Tractor,
  BatteryCharging,
  Disc,
  Filter,
  Menu,
  X,
  ExternalLink,
  ChevronUp,
  ChevronDown,
  Languages,
  Copy,
  Sparkles,
  Boxes,
  HelpCircle,
  PackageCheck,
  BadgeCheck,
  History,
  Star,
  Send
} from 'lucide-react';

export const App: React.FC = () => {
  const { lang, t, setLanguage, toggleLanguage } = useLanguage();

  // Navigation mobile drawer state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Active category filter & search query
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Selected Part for Modal / Quick View
  const [selectedPartModal, setSelectedPartModal] = useState<ProductItem | null>(null);

  // Quotation form state
  const [custName, setCustName] = useState('');
  const [vehicleType, setVehicleType] = useState('Tractor (ट्रैक्टर - Mahindra, Swaraj, Sonalika)');
  const [partsNeeded, setPartsNeeded] = useState('');

  // Toast notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Back to top scroll state
  const [showBackToTop, setShowBackToTop] = useState(false);

  // FAQ Accordion State (open question index)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Live shop open/closed status calculation (09:00 AM - 9:00 PM IST)
  const [isStoreOpen, setIsStoreOpen] = useState(true);

  useEffect(() => {
    const updateStoreStatus = () => {
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const istDate = new Date(utc + (3600000 * 5.5));
      const hours = istDate.getHours();
      const minutes = istDate.getMinutes();
      const totalMinutes = (hours * 60) + minutes;

      const openMinutes = 8 * 60 + 30;   // 09:00 AM
      const closeMinutes = 20 * 60 + 30; // 09:00 PM

      setIsStoreOpen(totalMinutes >= openMinutes && totalMinutes <= closeMinutes);
    };

    updateStoreStatus();
    const interval = setInterval(updateStoreStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  // Active navigation section for red underline indicator
  const [activeNav, setActiveNav] = useState('home');

  useEffect(() => {
    let scrollTimeout: any = null;

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      // If user recently clicked a nav item, don't let intermediate scroll overwrite it immediately
      if ((window as any).__isClickNavigating) return;

      const sectionIds = ['home', 'categories', 'brands', 'services', 'estimate', 'reviews', 'faq', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sectionIds[i]);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveNav(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleCopyPhone = (number: string) => {
    navigator.clipboard.writeText(number).then(() => {
      triggerToast(t.toastCopied);
    }).catch(() => {
      window.location.href = `tel:${number}`;
    });
  };

  const handleWhatsAppQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!custName.trim() || !partsNeeded.trim()) {
      alert(lang === 'hi' ? 'कृपया अपना नाम और पार्ट्स का नाम लिखें।' : 'Please enter your name and part details.');
      return;
    }

    // Modern celebration effect
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 }
    });

    const msg = (lang === 'hi')
      ? `नमस्ते शुभम ट्रेडर्स गढ़ाकोटा!%0A%0A👤 *ग्राहक का नाम:* ${encodeURIComponent(custName)}%0A🚜 *वाहन/मशीन:* ${encodeURIComponent(vehicleType)}%0A🔧 *आवश्यक हेवी पार्ट्स:* ${encodeURIComponent(partsNeeded)}%0A%0Aकृपया उपलब्धता और सबसे अच्छा थोक रेट बताइए। धन्यवाद!`
      : `Hello Shubham Traders Garhakota!%0A%0A👤 *Customer Name:* ${encodeURIComponent(custName)}%0A🚜 *Vehicle/Machinery:* ${encodeURIComponent(vehicleType)}%0A🔧 *Heavy Parts Required:* ${encodeURIComponent(partsNeeded)}%0A%0APlease share availability and best wholesale price. Thank you!`;

    const phone = "919340135743";
    window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
  };

  // Filtered products list
  const filteredProducts = productsData.filter((item: ProductItem) => {
    const matchesCategory = (selectedCategory === 'all') || (item.category === selectedCategory);
    const searchLower = searchQuery.toLowerCase().trim();
    const itemTitle = (lang === 'hi' ? item.titleHi : item.titleEn).toLowerCase();
    const itemDesc = (lang === 'hi' ? item.descHi : item.descEn).toLowerCase();
    const matchesSearch = !searchLower || itemTitle.includes(searchLower) || itemDesc.includes(searchLower);
    return matchesCategory && matchesSearch;
  });

  const getProductIcon = (iconName: string) => {
    switch (iconName) {
      case 'Fuel': return <Fuel className="icon" />;
      case 'Tractor': return <Tractor className="icon" />;
      case 'Filter': return <Filter className="icon" />;
      case 'Truck': return <Truck className="icon" />;
      case 'BatteryCharging': return <BatteryCharging className="icon" />;
      case 'Disc': return <Disc className="icon" />;
      default: return <Wrench className="icon" />;
    }
  };

  return (
    <div className="app-root">
      {/* Background Ambient Glow Lights */}
      <div className="ambient-glow glow-top-left" aria-hidden="true"></div>
      <div className="ambient-glow glow-middle-right" aria-hidden="true"></div>
      <div className="ambient-glow glow-bottom-left" aria-hidden="true"></div>

      {/* Modern Part Quick View Modal */}
      {selectedPartModal && (
        <div className="modal-backdrop" onClick={() => setSelectedPartModal(null)}>
          <div className="modal-glass-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setSelectedPartModal(null)}
              aria-label="Close Modal"
            >
              <X size={20} />
            </button>
            <div className="modal-header">
              <div className="modal-badge">{selectedPartModal.badge}</div>
              <div className="modal-icon-wrap">
                {getProductIcon(selectedPartModal.iconName)}
              </div>
              <h3>{lang === 'hi' ? selectedPartModal.titleHi : selectedPartModal.titleEn}</h3>
            </div>
            <p className="modal-desc">{lang === 'hi' ? selectedPartModal.descHi : selectedPartModal.descEn}</p>
            <div className="modal-specs-wrap">
              <strong>{lang === 'hi' ? 'विशेषताएं & तकनीकी विवरण:' : 'Specifications & Details:'}</strong>
              <ul>
                {(lang === 'hi' ? selectedPartModal.specsHi : selectedPartModal.specsEn).map((sp, i) => (
                  <li key={i}>
                    <CheckCircle2 size={16} className="modal-check" />
                    <span>{sp}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="modal-footer">
              <span className="modal-price">{lang === 'hi' ? selectedPartModal.priceBadgeHi : selectedPartModal.priceBadgeEn}</span>
              <a
                href={`https://wa.me/919340135743?text=${encodeURIComponent(selectedPartModal.waPrompt)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle size={18} />
                <span>{lang === 'hi' ? 'व्हाट्सएप पर रेट पूछें' : 'Check Rate on WhatsApp'}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="modern-toast show">
          <CheckCircle2 size={18} className="toast-icon" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Announcement Bar */}
      <aside className="top-announcement" aria-label="Announcement & Quick Info">
        <div className="container top-inner">
          <div className="announcement-left">
            <span className="pulse-dot"></span>
            <span>{t.topWelcome}</span>
          </div>
          <div className="announcement-right">
            <span className="timing">
              <Clock size={14} className="timing-icon" />
              <span>{t.timingText}</span>
            </span>
            <div className="lang-switch-container">
              <button
                type="button"
                className={`lang-btn ${lang === 'hi' ? 'active' : ''}`}
                onClick={() => setLanguage('hi')}
              >
                हिंदी
              </button>
              <span className="lang-sep">|</span>
              <button
                type="button"
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => setLanguage('en')}
              >
                English
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Header & Navigation with Glassmorphism */}
      <header className="main-header" id="mainHeader">
        <div className="container nav-box">
          <a href="#home" className="brand" aria-label="Shubham Traders Home">
            <div className="brand-symbol">
              <Tractor size={24} />
            </div>
            <div className="brand-text">
              <h1 className="shop-name">{t.shopTitle}</h1>
              <span className="shop-tagline">{t.shopSub}</span>
            </div>
          </a>

          <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`} aria-label="Main Navigation">
            {['home', 'categories', 'brands', 'services', 'estimate', 'reviews', 'faq', 'contact'].map((id) => {
              const labelMap: Record<string, string> = {
                home: t.navHome,
                categories: t.navCatalog,
                brands: t.navBrands,
                services: t.navWhyUs,
                estimate: t.navQuote,
                reviews: t.navReviews,
                faq: t.navFaq,
                contact: t.navContact,
              };
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`nav-item ${activeNav === id ? 'active' : ''}`}
                  onClick={() => {
                    setActiveNav(id);
                    setMobileMenuOpen(false);
                    (window as any).__isClickNavigating = true;
                    setTimeout(() => {
                      (window as any).__isClickNavigating = false;
                    }, 800);
                  }}
                >
                  {labelMap[id]}
                </a>
              );
            })}
          </nav>

          <div className="header-actions">
            <a
              href="https://wa.me/919340135743?text=Namaste!%20Shubham%20Traders%20Garhakota%20-%20Mujhe%20tractor%20aur%20commercial%20vehicle%20parts%20chahiye."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa-header"
            >
              <MessageCircle size={18} />
              <span>{t.btnWhatsApp}</span>
            </a>
            <a href="tel:+919340135743" className="btn btn-call-header">
              <Phone size={16} />
              <span>{t.btnCall}</span>
            </a>
            <button
              type="button"
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="container hero-layout">
          <div className="hero-details">
            <div className="verified-pill">
              <BadgeCheck size={18} className="pill-icon" />
              <span>{t.heroVerified}</span>
            </div>

            <h2 className="hero-headline">
              {t.heroH1}
              <span className="highlight-gradient">{t.heroH1Highlight}</span>
              {t.heroH1End}
            </h2>

            <p className="hero-subtext">{t.heroP}</p>

            {/* Quick Vehicle Badge Pills */}
            <div className="hero-vehicle-pills">
              <span>🚜 Swaraj 744/855</span>
              <span>🚜 Mahindra 575/475</span>
              <span>🚜 Sonalika DI</span>
              <span>🚚 Bolero Pickup</span>
              <span>🚚 Tata Ace</span>
              <span>🛢️ 15L/20L Lube</span>
              <span>🔋 75Ah-180Ah</span>
            </div>

            {/* Live Search Input Bar */}
            <div className="parts-search-bar">
              <div className="search-input-wrap">
                <Search size={20} className="search-icon" />
                <input
                  type="text"
                  id="partsSearchInput"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.searchPlaceholder}
                  aria-label="Search spare parts"
                />
              </div>
              <a href="#categories" className="btn btn-primary">
                {t.searchBtn}
              </a>
            </div>

            <div className="hero-action-buttons">
              <a href="tel:+919340135743" className="btn btn-lg btn-red">
                <Phone size={18} />
                <span>{t.heroCallNow}</span>
              </a>
              <a href="#contact" className="btn btn-lg btn-glass">
                <MapPin size={18} />
                <span>{t.heroDirections}</span>
              </a>
            </div>

            {/* Metrics Counters */}
            <div className="trust-counter-row">
              <div className="trust-card">
                <span className="trust-num">15+</span>
                <span className="trust-label">{t.statExperience}</span>
              </div>
              <div className="trust-card">
                <span className="trust-num">3500+</span>
                <span className="trust-label">{t.statProducts}</span>
              </div>
              <div className="trust-card">
                <span className="trust-num">100%</span>
                <span className="trust-label">{t.statGenuine}</span>
              </div>
              <div className="trust-card">
                <span className="trust-num">8000+</span>
                <span className="trust-label">{t.statCustomers}</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Card with Dynamic Status */}
          <div className="hero-visual">
            <div className="store-image-container">
              <img
                src="/hero_banner.jpg"
                alt="Shubham Traders Garhakota Showroom"
                className="store-main-img"
              />
              <div className="image-overlay-card">
                <div className="overlay-badge">
                  <Award size={24} className="award-icon" />
                  <div>
                    <strong>{t.overlayHead}</strong>
                    <p>{t.overlaySub}</p>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps/place/Shubham+Traders+Garhakota/@23.7815806,79.1443171,17z/data=!3m1!4b1!4m6!3m5!1s0x3978b3e441bea463:0x9f2dceed31147a6d!8m2!3d23.7815806!4d79.146892!16s%2Fg%2F11fpqb17pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overlay-map-btn"
                  title="Open in Google Maps"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            {/* Live Store Opening Status Banner */}
            <div className="shop-status-banner">
              <div className={`status-indicator ${isStoreOpen ? 'open' : 'closed'}`}></div>
              <div>
                <strong>{isStoreOpen ? t.statusOpen : t.statusClosed}</strong>
                <p>{t.statusTiming}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Products Catalog */}
      <section className="section catalog-section" id="categories">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-badge">{t.catBadge}</span>
            <h3 className="section-heading">{t.catTitle}</h3>
            <p className="section-desc">{t.catDesc}</p>
          </div>

          {/* Filter Categories */}
          <div className="category-tabs" role="tablist">
            <button
              type="button"
              className={`cat-tab ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              {t.tabAll}
            </button>
            <button
              type="button"
              className={`cat-tab ${selectedCategory === 'tractor' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('tractor')}
            >
              {t.tabTractor}
            </button>
            <button
              type="button"
              className={`cat-tab ${selectedCategory === 'commercial' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('commercial')}
            >
              {t.tabCommercial}
            </button>
            <button
              type="button"
              className={`cat-tab ${selectedCategory === 'oils' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('oils')}
            >
              {t.tabOils}
            </button>
            <button
              type="button"
              className={`cat-tab ${selectedCategory === 'battery' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('battery')}
            >
              {t.tabBattery}
            </button>
            <button
              type="button"
              className={`cat-tab ${selectedCategory === 'hardware' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('hardware')}
            >
              {t.tabTools}
            </button>
          </div>

          {/* Empty search results fallback */}
          {filteredProducts.length === 0 && (
            <div className="catalog-empty-state">
              <Boxes size={48} className="empty-icon" />
              <h4>{t.noProductFound}</h4>
              <p>कृपया सीधे व्हाट्सएप पर फोटो या पार्ट नंबर भेजें, हम तुरंत उपलब्धता व रेट बता देंगे।</p>
              <a
                href="https://wa.me/919340135743?text=Namaste!%20Mujhe%20heavy%20parts%20chahiye%20jo%20list%20me%20nahi%20hai."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp mt-2"
              >
                <MessageCircle size={18} /> व्हाट्सएप पर पूछें
              </a>
            </div>
          )}

          {/* Products Grid */}
          <div className="catalog-grid" id="catalogGrid">
            {filteredProducts.map((item: ProductItem) => {
              const title = lang === 'hi' ? item.titleHi : item.titleEn;
              const desc = lang === 'hi' ? item.descHi : item.descEn;
              const specs = lang === 'hi' ? item.specsHi : item.specsEn;
              const priceBadge = lang === 'hi' ? item.priceBadgeHi : item.priceBadgeEn;

              return (
                <article key={item.id} className="part-card" onClick={() => setSelectedPartModal(item)}>
                  <div className="part-badge">{item.badge}</div>
                  <div className="part-icon-frame">
                    {getProductIcon(item.iconName)}
                  </div>
                  <h4 className="part-title">{title}</h4>
                  <p className="part-desc">{desc}</p>
                  <ul className="part-specs">
                    {specs.map((spec: string, idx: number) => (
                      <li key={idx}>
                        <CheckCircle2 size={16} className="spec-check" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="part-footer" onClick={(e) => e.stopPropagation()}>
                    <span className="price-est">{priceBadge}</span>
                    <div className="card-btn-group">
                      <a
                        href={`https://wa.me/919340135743?text=${encodeURIComponent(item.waPrompt)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-inquire"
                      >
                        <MessageCircle size={15} />
                        <span>{t.inquire}</span>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="section brands-section" id="brands">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-badge">{t.brandBadge}</span>
            <h3 className="section-heading">{t.brandTitle}</h3>
            <p className="section-desc">{t.brandDesc}</p>
          </div>

          <div className="brand-showcase-grid">
            {brandsData.map((brand, idx) => (
              <div key={idx} className="brand-item">
                <span className="brand-logo-text">{brand.name}</span>
                <span className="brand-category">{brand.category}</span>
                <span className="brand-subtext">{brand.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Quote Calculator */}
      <section className="section estimate-section" id="estimate">
        <div className="container">
          <div className="estimate-box">
            <div className="estimate-content">
              <span className="section-badge">{t.calcBadge}</span>
              <h3 className="section-heading-light">{t.calcTitle}</h3>
              <p className="estimate-p">{t.calcDesc}</p>
              <div className="perks-list">
                <div>
                  <Zap size={20} className="perk-icon" />
                  <span>{t.perk1}</span>
                </div>
                <div>
                  <TrendingDown size={20} className="perk-icon" />
                  <span>{t.perk2}</span>
                </div>
                <div>
                  <Truck size={20} className="perk-icon" />
                  <span>{t.perk3}</span>
                </div>
                <div>
                  <PackageCheck size={20} className="perk-icon" />
                  <span>{t.perk4}</span>
                </div>
              </div>
            </div>

            <div className="estimate-form-card">
              <h4>{t.formTitle}</h4>
              <form onSubmit={handleWhatsAppQuote}>
                <div className="form-group">
                  <label htmlFor="custName">{t.formName}</label>
                  <input
                    type="text"
                    id="custName"
                    value={custName}
                    onChange={(e) => setCustName(e.target.value)}
                    placeholder={t.formNamePh}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="vehicleType">{t.formVehicle}</label>
                  <select
                    id="vehicleType"
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                    required
                  >
                    <option value="Tractor (ट्रैक्टर - Mahindra, Swaraj, Sonalika)">🚜 ट्रैक्टर (Mahindra, Swaraj, Sonalika, Eicher, Powertrac)</option>
                    <option value="Commercial Pickup/Loader (पिकअप/लोडर/छोटा हाथी)">🚚 पिकअप / लोडर (Bolero Pickup, Camper, Tata Ace, Dost)</option>
                    <option value="Heavy Commercial Truck/Dumper (ट्रक/डंपर)">🚛 हेवी ट्रक / डंपर / टिपर (Tata 407, Eicher Pro, Tipper)</option>
                    <option value="Agriculture Machinery / Thresher (थ्रेशर/कल्टीवेटर/पंप)">🌾 कृषि मशीनरी / थ्रेशर / कल्टीवेटर / बोरवेल पंप / हार्वेस्टर</option>
                    <option value="Heavy Generator / Industrial (जनरेटर/हार्डवेयर)">⚙️ हेवी जनरेटर सेट / वर्कशॉप टूल्स / अन्य</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="partsNeeded">{t.formParts}</label>
                  <input
                    type="text"
                    id="partsNeeded"
                    value={partsNeeded}
                    onChange={(e) => setPartsNeeded(e.target.value)}
                    placeholder={t.formPartsPh}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-whatsapp btn-block btn-quote-pulse">
                  <Send size={18} />
                  <span>{t.formSubmit}</span>
                </button>
                <p className="form-note">{t.formNote}</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Shubham Traders (6 Comprehensive Feature Cards) */}
      <section className="section services-section" id="services">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-badge">{t.whyBadge}</span>
            <h3 className="section-heading">{t.whyTitle}</h3>
            <p className="section-desc">{t.whyDesc}</p>
          </div>

          <div className="services-grid services-grid-six">
            <div className="service-card">
              <div className="service-icon"><ShieldCheck size={28} /></div>
              <h4>{t.feat1Title}</h4>
              <p>{t.feat1Desc}</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><TrendingDown size={28} /></div>
              <h4>{t.feat2Title}</h4>
              <p>{t.feat2Desc}</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Truck size={28} /></div>
              <h4>{t.feat3Title}</h4>
              <p>{t.feat3Desc}</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Wrench size={28} /></div>
              <h4>{t.feat4Title}</h4>
              <p>{t.feat4Desc}</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><BatteryCharging size={28} /></div>
              <h4>{t.feat5Title}</h4>
              <p>{t.feat5Desc}</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><History size={28} /></div>
              <h4>{t.feat6Title}</h4>
              <p>{t.feat6Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Google Maps Reviews Section */}
      <section className="section reviews-section" id="reviews">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-badge">{lang === 'hi' ? '⭐ गूगल मैप्स लाइव समीक्षा' : '⭐ Google Maps Live Reviews'}</span>
            <h3 className="section-heading">{lang === 'hi' ? 'शुभम ट्रेडर्स गूगल मैप्स रेटिंग व समीक्षाएं' : 'Shubham Traders Google Maps Ratings & Reviews'}</h3>
            <p className="section-desc">
              {lang === 'hi'
                ? 'हमारे सभी ग्राहकों और किसान भाइयों की वास्तविक रेटिंग्स व समीक्षाएं सीधे गूगल मैप्स पर सत्यापित हैं।'
                : 'All customer and farmer ratings are authentic, verified directly on our official Google Maps profile.'}
            </p>
          </div>

          <div className="google-reviews-showcase">
            <div className="google-rating-card">
              <div className="google-badge-top">
                <svg viewBox="0 0 24 24" width="36" height="36" className="google-g-icon">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <div className="google-verified-text">
                  <span className="google-name">Google Business Profile</span>
                  <span className="google-verified-tag">✓ Verified Store</span>
                </div>
              </div>

              <div className="google-score-box">
                <span className="google-big-rating">5.0</span>
                <div className="google-stars-wrap">
                  <div className="google-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={22} className="star-filled" fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <span className="google-rating-label">
                    {lang === 'hi' ? 'सर्वश्रेष्ठ ग्राहक संतुष्टि' : 'Excellent Customer Satisfaction'}
                  </span>
                </div>
              </div>

              <p className="google-prompt-text">
                {lang === 'hi'
                  ? 'गढ़ाकोटा व सागर जिले के किसान भाइयों एवं मैकेनिकों के वास्तविक अनुभव पढ़ने या अपनी समीक्षा साझा करने के लिए गूगल मैप्स पर पधारें।'
                  : 'Read authentic real-time feedback from farmers & garage mechanics across Garhakota, or share your own review on Google Maps.'}
              </p>

              <div className="google-card-actions">
                <a
                  href="https://www.google.com/maps/place/Shubham+Traders+Garhakota/@23.7815806,79.1443171,17z/data=!3m1!4b1!4m6!3m5!1s0x3978b3e441bea463:0x9f2dceed31147a6d!8m2!3d23.7815806!4d79.146892!16s%2Fg%2F11fpqb17pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-google-map"
                >
                  <ExternalLink size={18} />
                  <span>{lang === 'hi' ? 'गूगल मैप्स पर सभी लाइव रिव्यू देखें' : 'View Real Reviews on Google Maps'}</span>
                </a>
                <a
                  href="https://www.google.com/maps/place/Shubham+Traders+Garhakota/@23.7815806,79.1443171,17z/data=!3m1!4b1!4m6!3m5!1s0x3978b3e441bea463:0x9f2dceed31147a6d!8m2!3d23.7815806!4d79.146892!16s%2Fg%2F11fpqb17pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-write-review"
                >
                  <Star size={18} />
                  <span>{lang === 'hi' ? 'अपनी रेटिंग / रिव्यू दर्ज करें' : 'Write a Review on Google'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ Accordion) */}
      <section className="section faq-section" id="faq">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-badge">{t.faqBadge}</span>
            <h3 className="section-heading">{t.faqTitle}</h3>
            <p className="section-desc">{t.faqDesc}</p>
          </div>

          <div className="faq-container">
            {faqData.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              const question = lang === 'hi' ? faq.questionHi : faq.questionEn;
              const answer = lang === 'hi' ? faq.answerHi : faq.answerEn;

              return (
                <div key={index} className={`faq-card ${isOpen ? 'open' : ''}`}>
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-q-text">
                      <HelpCircle size={18} className="faq-q-icon" />
                      {question}
                    </span>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {isOpen && (
                    <div className="faq-answer-panel">
                      <p>{answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section className="section contact-section" id="contact">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-badge">{t.locBadge}</span>
            <h3 className="section-heading">{t.locTitle}</h3>
            <p className="section-desc">{t.locDesc}</p>
          </div>

          <div className="contact-dual-container">
            {/* Contact Details */}
            <div className="contact-info-card">
              <div className="contact-header">
                <h4>{t.shopTitle}</h4>
                <p>{t.locLandmark}</p>
              </div>

              <div className="contact-details-list">
                <div className="c-row">
                  <div className="c-icon"><Phone size={22} /></div>
                  <div>
                    <strong>{t.cPhone}</strong>
                    <p className="phone-row">
                      <a href="tel:+919340135743" className="phone-link">+91 93401 35743</a> (मुख्य)
                      <button
                        type="button"
                        className="copy-btn"
                        onClick={() => handleCopyPhone('+919340135743')}
                        title="Copy Phone"
                      >
                        <Copy size={14} />
                      </button>
                    </p>
                    <p className="phone-row">
                      <a href="tel:+917987850875" className="phone-link">+91 79878 50875</a> (सहायक)
                      <button
                        type="button"
                        className="copy-btn"
                        onClick={() => handleCopyPhone('+917987850875')}
                        title="Copy Phone"
                      >
                        <Copy size={14} />
                      </button>
                    </p>
                  </div>
                </div>

                <div className="c-row">
                  <div className="c-icon wa-icon"><MessageCircle size={22} /></div>
                  <div>
                    <strong>{t.cWa}</strong>
                    <p>{t.cWaDesc}</p>
                    <a
                      href="https://wa.me/919340135743?text=Namaste!%20Shubham%20Traders%20Garhakota."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp btn-sm mt-1"
                    >
                      <MessageCircle size={16} /> +91 93401 35743 पर चैट करें
                    </a>
                  </div>
                </div>

                <div className="c-row">
                  <div className="c-icon"><Clock size={22} /></div>
                  <div>
                    <strong>{t.cHours}</strong>
                    <p>{t.cHoursTime}</p>
                    <span className="badge-status">{t.cHoursStatus}</span>
                  </div>
                </div>

                <div className="c-row">
                  <div className="c-icon"><MapPin size={22} /></div>
                  <div>
                    <strong>{t.cPin}</strong>
                    <p>Garhakota, Sagar District, Madhya Pradesh - 470229</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="map-wrapper-card">
              <div className="map-actions-bar">
                <span><MapPin size={18} /> <strong>Google Maps</strong></span>
                <a
                  href="https://www.google.com/maps/place/Shubham+Traders+Garhakota/@23.7815806,79.1443171,17z/data=!3m1!4b1!4m6!3m5!1s0x3978b3e441bea463:0x9f2dceed31147a6d!8m2!3d23.7815806!4d79.146892!16s%2Fg%2F11fpqb17pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link-btn"
                >
                  {t.openInGmaps} <ExternalLink size={14} />
                </a>
              </div>

              <div className="embed-map-box">
                <iframe
                  src="https://maps.google.com/maps?q=Shubham%20Traders%20Garhakota&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="380"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Shubham Traders Garhakota Location"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="map-footer-help">
                <Sparkles size={16} />
                <span>{t.routeTip}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Controls (Language Toggle & Back to top) */}
      <aside className="floating-controls" aria-label="Quick Controls">
        <button
          type="button"
          className="float-lang-pill"
          onClick={toggleLanguage}
          title="Switch Language"
        >
          <Languages size={18} />
          <span>{lang === 'hi' ? 'English' : 'हिंदी'}</span>
        </button>

        {showBackToTop && (
          <a
            href="#home"
            className="back-to-top visible"
            title="Back to top"
            aria-label="Back to top"
          >
            <ChevronUp size={20} />
          </a>
        )}
      </aside>

      {/* Sticky Mobile Dock */}
      <div className="sticky-mobile-dock">
        <a href="tel:+919340135743" className="dock-btn dock-call">
          <Phone size={18} />
          <span>{t.dockCall}</span>
        </a>
        <a
          href="https://wa.me/919340135743?text=Namaste!%20Shubham%20Traders%20se%20heavy%20parts%20chahiye."
          target="_blank"
          rel="noopener noreferrer"
          className="dock-btn dock-wa"
        >
          <MessageCircle size={18} />
          <span>{t.dockWa}</span>
        </a>
        <a
          href="https://www.google.com/maps/place/Shubham+Traders+Garhakota/@23.7815806,79.1443171,17z/data=!3m1!4b1!4m6!3m5!1s0x3978b3e441bea463:0x9f2dceed31147a6d!8m2!3d23.7815806!4d79.146892!16s%2Fg%2F11fpqb17pl"
          target="_blank"
          rel="noopener noreferrer"
          className="dock-btn dock-dir"
        >
          <MapPin size={18} />
          <span>{t.dockDir}</span>
        </a>
      </div>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="f-col f-about">
            <div className="brand">
              <div className="brand-symbol"><Tractor size={22} /></div>
              <div className="brand-text">
                <span className="shop-name">{t.shopTitle}</span>
                <span className="shop-tagline">GARHAKOTA</span>
              </div>
            </div>
            <p className="f-desc">{t.footerAbout}</p>
          </div>

          <div className="f-col">
            <h4>{t.fLinksTitle}</h4>
            <ul className="f-links">
              <li><a href="#home">{t.navHome}</a></li>
              <li><a href="#categories">{t.navCatalog}</a></li>
              <li><a href="#brands">{t.navBrands}</a></li>
              <li><a href="#services">{t.navWhyUs}</a></li>
              <li><a href="#estimate">{t.navQuote}</a></li>
              <li><a href="#faq">{t.navFaq}</a></li>
              <li><a href="#contact">{t.navContact}</a></li>
            </ul>
          </div>

          <div className="f-col">
            <h4>{t.fProductsTitle}</h4>
            <ul className="f-links">
              <li>Castrol CRB 15W-40 & Servo 15L/20L Diesel Oils</li>
              <li>Swaraj 744/855 & Mahindra Tractor Spares</li>
              <li>Bolero Pickup / Tata Ace Leaf Springs & U-Bolts</li>
              <li>Exide & Amaron Commercial 75Ah - 180Ah Batteries</li>
              <li>SKF / NBC Thresher & Rotavator Bearings</li>
            </ul>
          </div>

          <div className="f-col">
            <h4>{t.fContactTitle}</h4>
            <p className="f-contact-line"><Phone size={16} /> +91 93401 35743</p>
            <p className="f-contact-line"><Phone size={16} /> +91 79878 50875</p>
            <p className="f-contact-line"><MapPin size={16} /> Near Nagar Bhawan, Main Bus Stand, Garhakota - 470229</p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container footer-bottom-flex">
            <p>{t.fRights}</p>
            <p className="credit">{t.fCrafted}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
