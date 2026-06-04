import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext.jsx";

function GeorgiaFlag() {
  return (
    <svg viewBox="0 0 640 480" aria-hidden="true" focusable="false">
      <rect width="640" height="480" fill="#fff" />
      <path fill="#e30a17" d="M274 0h92v480h-92zM0 194h640v92H0z" />
      <path fill="#e30a17" d="M123 75h28v124h-28zM75 123h124v28H75zM489 75h28v124h-28zM441 123h124v28H441zM123 281h28v124h-28zM75 329h124v28H75zM489 281h28v124h-28zM441 329h124v28H441z" />
    </svg>
  );
}

function UkFlag() {
  return (
    <svg viewBox="0 0 640 480" aria-hidden="true" focusable="false">
      <path fill="#012169" d="M0 0h640v480H0z" />
      <path fill="#fff" d="m75 0 245 181L564 0h76v62L400 240l240 178v62h-78L320 301 78 480H0v-60l238-178L0 66V0z" />
      <path fill="#c8102e" d="m424 281 216 159v40L369 281zm-184 20 6 35L52 480H0zM640 0v3L391 188l2-44L590 0zM0 0l238 176h-60L0 44z" />
      <path fill="#fff" d="M241 0v480h160V0zM0 160v160h640V160z" />
      <path fill="#c8102e" d="M273 0v480h96V0zM0 192v96h640v-96z" />
    </svg>
  );
}

function RussiaFlag() {
  return (
    <svg viewBox="0 0 640 480" aria-hidden="true" focusable="false">
      <path fill="#fff" d="M0 0h640v160H0z" />
      <path fill="#0039a6" d="M0 160h640v160H0z" />
      <path fill="#d52b1e" d="M0 320h640v160H0z" />
    </svg>
  );
}

const flagIcons = {
  ka: GeorgiaFlag,
  en: UkFlag,
  ru: RussiaFlag,
};

export default function LanguageSwitcher() {
  const { language, languages, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const switcherRef = useRef(null);
  const activeLanguage = languages.find((item) => item.code === language) || languages[0];
  const ActiveFlag = flagIcons[activeLanguage.code];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!switcherRef.current?.contains(event.target)) setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="language-switcher" ref={switcherRef}>
      <button
        className="language-trigger"
        type="button"
        aria-label={t.common.language}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="language-flag">
          <ActiveFlag />
        </span>
        <span>{activeLanguage.shortLabel}</span>
        <span className="language-chevron" aria-hidden="true" />
      </button>

      {open && (
        <div className="language-menu" role="listbox" aria-label={t.common.language}>
          {languages.map((item) => {
            const Flag = flagIcons[item.code];
            const selected = item.code === language;

            return (
              <button
                className={`language-option${selected ? " selected" : ""}`}
                type="button"
                role="option"
                aria-selected={selected}
                key={item.code}
                onClick={() => {
                  setLanguage(item.code);
                  setOpen(false);
                }}
              >
                <span className="language-flag">
                  <Flag />
                </span>
                <span>{item.nativeLabel}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
