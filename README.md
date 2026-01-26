# Elev-C - Plataforma de Campanhas Sociais

Plataforma web moderna desenvolvida para o Instituto Plural, permitindo que usuários participem de campanhas, concorram a prêmios e contribuam para projetos sociais.

---

## 🎯 Sobre o Projeto

**Elev-C** é uma aplicação web completa que conecta pessoas a causas sociais através de campanhas interativas. O projeto combina tecnologia de ponta com propósito social, oferecendo uma experiência premium aos usuários enquanto gera impacto positivo na sociedade.

**Missão:** Prêmio pra você. Impacto para muitos!

---

## ✨ Funcionalidades Implementadas

### 🛒 Sistema de Carrinho Completo
- Adicionar produtos ao carrinho com seleção de tamanho e cor
- Atualizar quantidades de itens
- Remover produtos do carrinho
- Cálculo automático de subtotal, frete e total
- Frete grátis para compras acima de R$ 199
- Persistência de dados no localStorage
- Notificações visuais (toast) para todas as ações

### ❤️ Sistema de Favoritos
- Adicionar/remover produtos dos favoritos
- Indicador visual nos cards de produtos
- Persistência no localStorage
- Contador de favoritos

### 📦 Catálogo de Produtos
- 12 produtos completos com informações detalhadas
- 7 categorias organizadas
- Grid responsivo de produtos
- Badges de desconto e novidades
- Imagens de alta qualidade

### 🔍 Páginas Detalhadas
- **Home** - Hero section com partículas animadas, produtos em destaque e categorias
- **Detalhes do Produto** - Galeria de imagens, seleção de variações, avaliações e produtos relacionados
- **Carrinho** - Visualização completa com resumo do pedido e indicador de frete grátis
- **404** - Página de erro personalizada

### 🎨 Efeitos Visuais
- **Partículas animadas** no background do Hero (80 partículas dinâmicas)
- Animações suaves em hover
- Transições fluidas entre páginas
- Design responsivo para todos os dispositivos
- Tema dark moderno com gradientes

### 🧭 Navegação
- Roteamento completo com React Router
- Links funcionais entre todas as páginas
- Breadcrumbs para navegação contextual
- Menu mobile responsivo
- Contador dinâmico no carrinho (header)

---

## 🛠️ Tecnologias Utilizadas

### Core
- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **React Router DOM** - Roteamento

### UI/UX
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes UI de alta qualidade
- **Lucide React** - Ícones modernos
- **Sonner** - Sistema de notificações toast

### Gerenciamento de Estado
- **Context API** - Estado global (carrinho, favoritos)
- **Custom Hooks** - Lógica reutilizável
- **localStorage** - Persistência de dados

### Animações
- **CSS Animations** - Partículas e transições
- **Tailwind Animate** - Animações utilitárias

---

## 📁 Estrutura do Projeto

```
lainan-junger-e-commerce/
├── public/                    # Arquivos estáticos
│   ├── favicon.ico           # Ícone do site
│   └── lainan1.jpeg          # Imagem do hero
├── src/
│   ├── components/           # Componentes reutilizáveis
│   │   ├── ui/              # Componentes shadcn/ui
│   │   ├── Header.tsx       # Cabeçalho com navegação
│   │   ├── Hero.tsx         # Seção hero com partículas
│   │   ├── ProductCard.tsx  # Card de produto
│   │   ├── ProductGrid.tsx  # Grid de produtos
│   │   ├── Categories.tsx   # Seção de categorias
│   │   ├── CartItem.tsx     # Item do carrinho
│   │   ├── CartSummary.tsx  # Resumo do pedido
│   │   ├── ParticlesBackground.tsx  # Efeito de partículas
│   │   ├── Newsletter.tsx   # Formulário de newsletter
│   │   ├── TrustBadges.tsx  # Badges de confiança
│   │   └── Footer.tsx       # Rodapé
│   ├── pages/               # Páginas da aplicação
│   │   ├── Index.tsx        # Página inicial
│   │   ├── Cart.tsx         # Página do carrinho
│   │   ├── ProductDetail.tsx # Detalhes do produto
│   │   └── NotFound.tsx     # Página 404
│   ├── contexts/            # Context API providers
│   │   ├── CartContext.tsx  # Gerenciamento do carrinho
│   │   └── FavoritesContext.tsx # Gerenciamento de favoritos
│   ├── hooks/               # Custom hooks
│   │   ├── useCart.ts       # Hook do carrinho
│   │   ├── useFavorites.ts  # Hook de favoritos
│   │   └── useProducts.ts   # Hook de produtos (filtros, busca)
│   ├── types/               # TypeScript types
│   │   └── types.ts         # Definições de tipos
│   ├── constants/           # Constantes da aplicação
│   │   └── constants.ts     # Configurações e valores fixos
│   ├── data/                # Dados mockados
│   │   ├── products.json    # 12 produtos completos
│   │   └── categories.json  # 7 categorias
│   ├── lib/                 # Utilitários
│   │   └── utils.ts         # Funções auxiliares
│   ├── App.tsx              # Componente raiz com rotas
│   ├── main.tsx             # Entry point
│   └── index.css            # Estilos globais
├── index.html               # HTML principal
├── package.json             # Dependências
├── tailwind.config.ts       # Configuração Tailwind
├── tsconfig.json            # Configuração TypeScript
└── vite.config.ts           # Configuração Vite
```

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação de Dependências
```bash
npm install
```

### Servidor de Desenvolvimento
```bash
npm run dev
```
Acesse: `http://localhost:8080`

### Build para Produção
```bash
npm run build
```

### Preview do Build
```bash
npm run preview
```

---

## 🎨 Personalização

### Cores e Tema
Edite `tailwind.config.ts` e `src/index.css` para ajustar:
- Paleta de cores
- Fontes
- Espaçamentos
- Animações

### Conteúdo
- **Produtos:** `src/data/products.json`
- **Categorias:** `src/data/categories.json`
- **Textos:** Componentes em `src/components/`

### Imagens
Adicione suas imagens em `public/` e referencie com `/nome-da-imagem.jpg`

---

## 📊 Dados do Projeto

### Produtos
- **Total:** 12 produtos completos
- **Categorias:** Camisetas, Calças, Moletons, Jaquetas, Bermudas, Calçados, Acessórios
- **Informações:** Nome, preço, imagens múltiplas, tamanhos, cores, descrição, avaliações

### Categorias
- **Total:** 7 categorias
- **Dados:** Nome, imagem, contagem de produtos, descrição

---

## 🔒 Licença

**Todos os direitos reservados © 2026 Elev-C / Instituto Plural**

Este projeto está sob licença proprietária protegida. O código-fonte, design e conteúdo são propriedade exclusiva do Instituto Plural e não podem ser reproduzidos, distribuídos ou utilizados sem autorização expressa.

---

## 📞 Contato

Para mais informações sobre o projeto ou parcerias:
- **Email:** contato@elevc.com.br
- **Website:** Em breve
- **Instagram:** @elevc

---

**Desenvolvido com 💜 para fazer a diferença**
