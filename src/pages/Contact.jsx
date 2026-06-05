import PageHero from "../components/PageHero.jsx";
import ContactInfo from "../components/ContactInfo.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { usePageMeta } from "../hooks/usePageMeta.js";

export default function Contact() {
  const { t } = useLanguage();

  usePageMeta({ title: t.meta.contact, description: t.pages.contact.text });

  return (
    <main>
      <PageHero
        title={t.pages.contact.title}
        text={t.pages.contact.text}
      />
      <ContactInfo />
    </main>
  );
}
