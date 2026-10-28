import React, { createContext, useContext, useState, useEffect } from 'react';
import { type Language, type TranslationDict, translations } from './translations';

interface LanguageContextType {
  lang: Language;
  t: TranslationDict;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('shubham_lang') as Language;
    return saved === 'en' ? 'en' : 'hi';
  });

  const setLanguage = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('shubham_lang', newLang);
    document.documentElement.lang = newLang;
    document.documentElement.setAttribute('data-lang', newLang);
    document.title = translations[newLang].pageTitle;
  };

  const toggleLanguage = () => {
    setLanguage(lang === 'hi' ? 'en' : 'hi');
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-lang', lang);
    document.title = translations[lang].pageTitle;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
