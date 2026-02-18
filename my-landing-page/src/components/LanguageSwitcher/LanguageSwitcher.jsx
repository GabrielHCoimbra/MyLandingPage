import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ];

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language);

  return (
    <div className="language-switcher">
      <div className="language-switcher-content">
        {languages.map((lang) => (
          <button
            key={lang.code}
            className={`language-button ${i18n.language === lang.code ? 'active' : ''}`}
            onClick={() => handleLanguageChange(lang.code)}
            title={lang.name}
            aria-label={`Change language to ${lang.name}`}
          >
            <span className="flag">{lang.flag}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
