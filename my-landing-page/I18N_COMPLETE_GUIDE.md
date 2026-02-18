# 🌍 Guia Completo de Internacionalização (i18n)

## 📋 Estrutura Implementada

Todos os componentes foram estruturados para usar **react-i18next** com suporte a 4 idiomas.

### Componentes Integrados ✅

- ✅ `Navbar.jsx` - Links de navegação traduzidos
- ✅ `Section.jsx` - Todos os títulos e descrições
- ✅ `Experience.jsx` - Seções Education e Professional
- ✅ `Project.jsx` - Mensagens e botões
- ✅ `LanguageSwitcher.jsx` - Seletor de idioma com bandeiras

### Idiomas Suportados 🌐

| Idioma | Código | Flag |
|--------|--------|------|
| English | `en` | 🇺🇸 |
| Português | `pt` | 🇧🇷 |
| Français | `fr` | 🇫🇷 |
| Español | `es` | 🇪🇸 |

---

## 📁 Estrutura de Ficheiros

```
src/
├── i18n.js                           # Config do i18next
├── locales/
│   ├── en.json                       # Inglês
│   ├── pt.json                       # Português
│   ├── fr.json                       # Francês
│   └── es.json                       # Espanhol
├── components/
│   ├── LanguageSwitcher/
│   │   ├── LanguageSwitcher.jsx      # ✅ Com tradução
│   │   └── LanguageSwitcher.css
│   ├── Navbar/
│   │   ├── navbar.jsx                # ✅ Com tradução
│   │   └── navbar.css
│   ├── Section/
│   │   ├── section.jsx               # ✅ Com tradução
│   │   └── section.css
│   ├── Experience/
│   │   ├── experience.jsx            # ✅ Com tradução
│   │   └── experience.css
│   ├── Projects/
│   │   ├── project.jsx               # ✅ Com tradução
│   │   └── project.css
│   └── MatrixBackground/
│       ├── matrixbackground.jsx      # (sem textual)
│       └── matrixbackground.css
├── pages/
│   └── home.jsx                      # (container, sem textual)
├── main.jsx                          # ✅ Import i18n
└── App.jsx                           # ✅ LanguageSwitcher integrado
```

---

## 🔧 Como Usar em Componentes

### 1. Importar o Hook

```jsx
import { useTranslation } from 'react-i18next';
```

### 2. Usar no Componente

```jsx
export default function MyComponent() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('about.title')}</h1>
      <p>{t('about.description')}</p>
    </div>
  );
}
```

### 3. Estrutura das Chaves

As chaves usam notação de ponto para aninhamento:

```json
{
  "nav": {
    "home": "Home",
    "about": "About"
  },
  "hero": {
    "title": "Gabriel Viana",
    "subtitle": "Software Engineer"
  }
}
```

Acesso: `t('nav.home')`, `t('hero.title')`

---

## 📝 Chaves de Tradução Disponíveis

### Navegação (`nav`)
- `t('nav.home')` - Home
- `t('nav.about')` - About
- `t('nav.skills')` - Skills
- `t('nav.experience')` - Experience
- `t('nav.projects')` - Projects
- `t('nav.contact')` - Contacts

### Hero Section (`hero`)
- `t('hero.title')` - Gabriel Viana
- `t('hero.subtitle')` - Software Engineer

### About Section (`about`)
- `t('about.title')` - About me
- `t('about.description')` - Full biography
- `t('about.currentStatus')` - Current Status
- `t('about.status1')` - Status 1
- `t('about.status2')` - Status 2
- `t('about.status3')` - Status 3

### Skills Section (`skills`)
- `t('skills.title')` - Skills

### Experience Section (`experience`)
- `t('experience.title')` - Experience
- `t('experience.education')` - Education
- `t('experience.professional')` - Professional

### Projects Section (`projects`)
- `t('projects.title')` - Projects
- `t('projects.defaultDescription')` - Default message
- `t('projects.goToProject')` - Go to Project button

### Contact Section (`contact`)
- `t('contact.title')` - Contacts

---

## 🚀 Adicionar Nova Tradução

### Passo 1: Adicionar a Chave em Todos os Idiomas

**src/locales/en.json:**
```json
{
  "newSection": {
    "newKey": "English text"
  }
}
```

**src/locales/pt.json:**
```json
{
  "newSection": {
    "newKey": "Texto em português"
  }
}
```

**src/locales/fr.json:**
```json
{
  "newSection": {
    "newKey": "Texte en français"
  }
}
```

**src/locales/es.json:**
```json
{
  "newSection": {
    "newKey": "Texto en español"
  }
}
```

### Passo 2: Usar no Componente

```jsx
const { t } = useTranslation();

return <h2>{t('newSection.newKey')}</h2>;
```

---

## 🎯 Adicionar Novo Idioma

### 1. Criar ficheiro de tradução

**src/locales/de.json** (Alemão)
```json
{
  "nav": {
    "home": "Startseite",
    "about": "Über",
    ...
  }
}
```

### 2. Registar em i18n.js

```jsx
import deTranslations from '../locales/de.json';

const resources = {
  en: { translation: enTranslations },
  pt: { translation: ptTranslations },
  fr: { translation: frTranslations },
  es: { translation: esTranslations },
  de: { translation: deTranslations }, // ← Adicionar
};
```

### 3. Adicionar ao LanguageSwitcher

```jsx
const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' }, // ← Adicionar
];
```

---

## 🔄 Fluxo de Trabalho

1. **Escrever novo conteúdo em Inglês** no JSON
2. **Traduzir para os outros 3 idiomas**
3. **Usar no componente com `t('chave')`**
4. **Testar alternando idiomas**

---

## 💡 Boas Práticas

✅ **Fazer:**
- Manter chaves consistentes em todos os JSOns
- Organizar chaves hierarchicamente
- Usar nomes descritivos para as chaves
- Testar todas as traduções antes de committar

❌ **Evitar:**
- Hardcoding de textos em componentes
- Chaves com espaços ou caracteres especiais
- Tradução de valores dinâmicos (use interpolação)

---

## 🎨 Float Box de Idiomas

O seletor está no canto inferior direito e:
- ✅ Mostra o idioma ativo com destaque
- ✅ Salva preferência no localStorage
- ✅ Responde automaticamente ao mudar idioma
- ✅ Responsivo para mobile
- ✅ Estilo matching com o tema do site

---

## 📚 Referências

- [i18next Documentation](https://www.i18next.com/)
- [react-i18next Documentation](https://react.i18next.com/)
- [Localization Best Practices](https://www.w3.org/International/)

---

## ✨ Status Atual

**Total de Componentes Estruturados:** 5/6
- Navbar ✅
- Section (Hero, About, Skills, Projects) ✅
- Experience ✅
- Projects ✅
- LanguageSwitcher ✅
- MatrixBackground ⚠️ (Sem conteúdo textual)

**Total de Idiomas:** 4/4
- English ✅
- Português ✅
- Français ✅
- Español ✅

---

## 🎯 Próximos Passos Sugeridos

1. Testar mudança de idiomas em tempo real
2. Traduzir conteúdo dinâmico de `experience.json`
3. Adicionar mais idiomas conforme necessário
4. Implementar detecção de preferência do navegador (já feito!)

