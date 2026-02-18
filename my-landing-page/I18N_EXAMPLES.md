# 📚 Exemplos Práticos de Uso de i18n

## Exemplo 1: Componente Simples

```jsx
import { useTranslation } from 'react-i18next';

export default function SimpleComponent() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.subtitle')}</p>
    </div>
  );
}
```

**JSON de Tradução (en.json):**
```json
{
  "hero": {
    "title": "Gabriel Viana",
    "subtitle": "Software Engineer"
  }
}
```

---

## Exemplo 2: Componente com Lógica Condicional

```jsx
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function ConditionalComponent() {
  const { t } = useTranslation();
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <h2>{t('about.title')}</h2>
      {showDetails && (
        <p>{t('about.description')}</p>
      )}
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide' : 'Show'} Details
      </button>
    </div>
  );
}
```

---

## Exemplo 3: Componente com Lista

```jsx
import { useTranslation } from 'react-i18next';

export default function ListComponent() {
  const { t } = useTranslation();
  
  const items = [
    t('about.status1'),
    t('about.status2'),
    t('about.status3'),
  ];

  return (
    <div>
      <h3>{t('about.currentStatus')}</h3>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
```

---

## Exemplo 4: Usando Interpolação (Variáveis)

**Componente:**
```jsx
import { useTranslation } from 'react-i18next';

export default function InterpolationComponent() {
  const { t } = useTranslation();
  const userName = "Gabriel";

  return (
    <p>{t('greeting', { name: userName })}</p>
  );
}
```

**JSON de Tradução (en.json):**
```json
{
  "greeting": "Hello, {{name}}! Welcome to my portfolio."
}
```

**Resultado:** "Hello, Gabriel! Welcome to my portfolio."

---

## Exemplo 5: Pluralização

**Componente:**
```jsx
import { useTranslation } from 'react-i18next';

export default function PluralComponent() {
  const { t } = useTranslation();
  const projectCount = 6;

  return (
    <p>{t('projects.count', { count: projectCount })}</p>
  );
}
```

**JSON de Tradução (en.json):**
```json
{
  "projects": {
    "count_one": "I have {{count}} project",
    "count_other": "I have {{count}} projects"
  }
}
```

**Resultado:** "I have 6 projects"

---

## Exemplo 6: Acesso Aninhado Dinâmico

```jsx
import { useTranslation } from 'react-i18next';

export default function DynamicKeyComponent({ section, key }) {
  const { t } = useTranslation();

  // Acesso dinâmico a chaves
  const text = t(`${section}.${key}`);

  return <p>{text}</p>;
}

// Uso:
// <DynamicKeyComponent section="about" key="title" />
// → "About me"
```

---

## Exemplo 7: Traduzindo Arrays

**JSON (en.json):**
```json
{
  "skills": {
    "languages": ["JavaScript", "Python", "PHP"],
    "frameworks": ["React", "Vue", "Angular"]
  }
}
```

**Componente:**
```jsx
import { useTranslation } from 'react-i18next';

export default function SkillsComponent() {
  const { t, i18n } = useTranslation();
  
  const languages = i18n.language === 'en' 
    ? ["JavaScript", "Python", "PHP"]
    : ["JavaScript", "Python", "PHP"]; // Ou traduzir

  return (
    <div>
      <h3>{t('skills.title')}</h3>
      <ul>
        {languages.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
```

---

## Exemplo 8: Detectando Idioma Atual

```jsx
import { useTranslation } from 'react-i18next';

export default function LanguageDetectorComponent() {
  const { i18n } = useTranslation();

  return (
    <div>
      <p>Current Language: {i18n.language}</p>
      <p>Language Changed: {i18n.language === 'pt' ? 'Português' : i18n.language}</p>
      
      <button onClick={() => i18n.changeLanguage('en')}>
        English
      </button>
      <button onClick={() => i18n.changeLanguage('pt')}>
        Português
      </button>
    </div>
  );
}
```

---

## Exemplo 9: Componente com Efeito ao Mudar Idioma

```jsx
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function LanguageAwareComponent() {
  const { t, i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Executado quando o idioma muda
    setIsLoading(true);
    
    // Simular loading de conteúdo novo
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, [i18n.language]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1>{t('about.title')}</h1>
      <p>{t('about.description')}</p>
    </div>
  );
}
```

---

## Exemplo 10: Seletor de Idioma Custom

```jsx
import { useTranslation } from 'react-i18next';

export default function CustomLanguageSwitcher() {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'pt', name: 'Português' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' },
  ];

  return (
    <div>
      <label htmlFor="language-select">Select Language:</label>
      <select 
        id="language-select"
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}
```

---

## Exemplo 11: Tradução de Erros

**JSON (en.json):**
```json
{
  "errors": {
    "404": "Page not found",
    "500": "Server error",
    "validation": "Please fill all fields"
  }
}
```

**Componente:**
```jsx
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function FormComponent() {
  const { t } = useTranslation();
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validação
    if (/* validação falhar */) {
      setError(t('errors.validation'));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      {/* formulário */}
    </form>
  );
}
```

---

## Exemplo 12: Tradução Dinâmica com fetch

```jsx
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function DynamicContentComponent() {
  const { t } = useTranslation();
  const [content, setContent] = useState('');

  useEffect(() => {
    // Buscar conteúdo quando o idioma mudar
    fetch(`/api/content/${t('nav.home')}`)
      .then(res => res.json())
      .then(data => setContent(data.text));
  }, [t]);

  return <div>{content}</div>;
}
```

---

## Padrões Comuns

### ✅ Bom

```jsx
const { t } = useTranslation();
return <h1>{t('section.title')}</h1>;
```

### ❌ Evitar

```jsx
const title = "Hard-coded text";
return <h1>{title}</h1>;
```

### ✅ Bom

```jsx
useEffect(() => {
  // atualiza quando idioma muda
}, [i18n.language]);
```

### ❌ Evitar

```jsx
const messages = {
  en: "English",
  pt: "Português",
  // replicar para cada chave
};
```

---

## Dicas Importantes

1. **Sempre importar useTranslation** no início do componente
2. **Colocar todas as chaves nos 4 JSON files** simultaneamente
3. **Usar nomes descritivos** para as chaves (ex: `about.title` em vez de `title1`)
4. **Testar em todos os idiomas** antes de commitar
5. **Manter JSON bem formatado** (use prettier se possível)
6. **Adicionar comentários** nos JSON para chaves complexas

---

## Referência Rápida

| Tarefa | Código |
|--------|--------|
| Traduzir texto | `{t('chave.subchave')}` |
| Obter idioma atual | `i18n.language` |
| Mudar idioma | `i18n.changeLanguage('pt')` |
| Interpolação | `t('key', { var: value })` |
| Pluralização | `t('key', { count: 5 })` |

