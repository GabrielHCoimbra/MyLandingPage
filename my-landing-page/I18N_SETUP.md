# i18n Implementation Guide

## Overview
Este projeto utiliza **i18next** com **react-i18next** para internacionalização (i18n) moderna e eficiente.

## Idiomas Suportados
- 🇺🇸 **English** (en)
- 🇧🇷 **Português** (pt)
- 🇫🇷 **Français** (fr)
- 🇪🇸 **Español** (es)

## Estrutura de Arquivos

```
src/
├── i18n.js                      # Configuração i18n
├── locales/
│   ├── en.json                  # Traduções em Inglês
│   ├── pt.json                  # Traduções em Português
│   ├── fr.json                  # Traduções em Francês
│   └── es.json                  # Traduções em Espanhol
├── components/
│   └── LanguageSwitcher/
│       ├── LanguageSwitcher.jsx # Componente seletor de idioma
│       └── LanguageSwitcher.css # Estilos do seletor
└── main.jsx                     # Import de i18n adicionado
```

## Como Usar

### 1. Em Componentes React

```jsx
import { useTranslation } from 'react-i18next';

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

### 2. Estrutura de Chaves de Tradução

As traduções são organizadas hierarquicamente em JSON:

```json
{
  "nav": {
    "about": "About",
    "skills": "Skills"
  },
  "about": {
    "title": "About me",
    "description": "..."
  }
}
```

Use a notação de ponto para acessar: `t('nav.about')`, `t('about.title')`

### 3. Adicionar Novas Traduções

1. Abra os arquivos em `src/locales/`
2. Adicione as novas chaves e valores em todos os idiomas
3. Use nos componentes com `t('chave.subchave')`

### 4. LanguageSwitcher

O seletor de idioma é exibido automaticamente no canto inferior direito da página. Características:

- ✅ Design responsivo
- ✅ Bandeiras como ícones
- ✅ Armazenamento de preferência no localStorage
- ✅ Estilo com gradiente verde (matrix style)
- ✅ Detecção automática de idioma do navegador

### 5. Detecção Automática de Idioma

O sistema detecta automaticamente:
1. Idioma salvo no localStorage
2. Idioma do navegador (se disponível)
3. Fallback para Inglês

## Exemplo Completo

```jsx
import { useTranslation } from 'react-i18next';

export default function Section() {
  const { t } = useTranslation();

  return (
    <section id="about">
      <h2>{t('about.title')}</h2>
      <p>{t('about.description')}</p>
      <h3>{t('about.currentStatus')}</h3>
      <ul>
        <li>{t('about.status1')}</li>
        <li>{t('about.status2')}</li>
        <li>{t('about.status3')}</li>
      </ul>
    </section>
  );
}
```

## Instalação de Dependências

Se ainda não tiver instalado, execute:

```bash
npm install i18next react-i18next
```

## Recursos Adicionais

- [i18next Documentation](https://www.i18next.com/)
- [react-i18next Documentation](https://react.i18next.com/)

## Notas

- As traduções são carregadas localmente (não requerem servidor)
- A performance é otimizada com JSON estático
- O localStorage preserva a escolha de idioma do usuário
- Sistema escalável para adicionar mais idiomas no futuro
