import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { languages, translations } from "./translations.js";

const DEFAULT_LANGUAGE = "ka";
const STORAGE_KEY = "mclinic-language";

const LanguageContext = createContext(null);

function getInitialLanguage() {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;

  const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
  return translations[savedLanguage] ? savedLanguage : DEFAULT_LANGUAGE;
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getInitialLanguage);

  const setLanguage = (nextLanguage) => {
    if (!translations[nextLanguage]) return;
    setLanguageState(nextLanguage);
  };

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      languages,
      setLanguage,
      t: translations[language],
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
