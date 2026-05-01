# Holy Lies — Um Registro Humano

Site: **https://fdavidgithub.github.io/holy-lies-a-human-reckoning/**

Um registro visual das mortes justificadas pela fé, pelo poder e pela crença — enquanto o planeta morre em silêncio.

---

## Rodar localmente

Requisito: Node.js instalado ([instalar via nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

```sh
# Clonar o repositório
git clone git@github.com:fdavidgithub/holy-lies-a-human-reckoning.git
cd holy-lies-a-human-reckoning

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento (http://localhost:8080)
npm run dev
```

O servidor recarrega automaticamente a cada alteração salva.

---

## Publicar no GitHub Pages

```sh
# Build para GitHub Pages + deploy automático no branch gh-pages
npm run deploy
```

Esse comando executa em sequência:
1. `npm run build:github` — gera o build em `dist/` com o base path correto (`/holy-lies-a-human-reckoning/`)
2. `gh-pages -d dist` — publica o conteúdo de `dist/` no branch `gh-pages`

O site fica disponível em alguns minutos após o GitHub Pages processar o deploy.

> **Pré-requisito:** ter a chave SSH configurada para o GitHub antes de rodar `npm run deploy`.

---

## Tecnologias

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- [React Router](https://reactrouter.com/)
- [Lovable](https://lovable.dev/) (edição visual via IA)
