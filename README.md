# Elev-C - Plataforma de Filantropia Premiável e E-commerce

Plataforma web moderna desenvolvida para o **Instituto Plural**, unindo e-commerce de moda exclusiva com a modalidade de **Filantropia Premiável**, permitindo que usuários adquiram produtos, participem de sorteios regulamentados e contribuam para projetos sociais.

---

## 🎯 Sobre o Projeto

**Elev-C** é uma aplicação híbrida que integra:
1.  **Loja Virtual Premium**: Moda exclusiva com design sofisticado.
2.  **Plataforma de Sorteios**: Títulos de capitalização regulamentados pela SUSEP, onde a compra apoia causas sociais e dá direito a concorrer a prêmios em dinheiro.

**Missão:** Une estilo, sorte e solidariedade. "Prêmio pra você. Impacto para muitos!"

---

## ✨ Funcionalidades Principais

### 🎟️ Campanhas e Sorteios (Novo)
- **Grid de Campanhas**: Visualização clara de sorteios em andamento.
- **Design Premium**: Cards com tipografia impactante, preço em destaque e badges de status.
- **Transparência**: Exibição clara de datas de sorteio e número da edição.
- **Últimos Ganhadores**: Seção dedicada para mostrar a transparência e veracidade dos prêmios entregues.

### ⚖️ Legalidade e Transparência (Novo)
- **Seção Informativa**: Área dedicada à explicação do modelo de negócios (Filantropia Premiável).
- **Parceiros Oficiais**: Exibição dos órgãos reguladores e parceiros (SUSEP, Kovr Capitalização, Instituto Plural).
- **Modal Interativo**: Acesso rápido ao regulamento completo via modal acessível, mantendo o design limpo.
- **Conteúdo Educativo**: Abas interativas alternando entre informações sobre "Legalidade" e "Filantropia".

### 🛒 E-commerce Completo
- **Carrinho de Compras**: Adicionar/remover itens, cálculo de frete e total.
- **Favoritos**: Lista de desejos persistente.
- **Catálogo de Produtos**: Filtros por categoria, detalhes de produto e variações (tamanho/cor).

### 🎨 Design e UI/UX
- **Layout Responsivo**: Alinhamento global padronizado (`max-w-6xl`) para uma experiência visual consistente em desktop e mobile.
- **Tema Dark Moderno**: Paleta de cores sofisticada (Preto, Cinza e Vermelho Primário).
- **Partículas**: Background dinâmico com partículas sutis na seção Hero e Biografia.
- **Animações**: Micro-interações em botões, cards e transições de página.

---

## 🛠️ Tecnologias Utilizadas

- **Framework**: React 18 + Vite
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Componentes**: shadcn/ui + Radix UI
- **Ícones**: Lucide React
- **Navegação**: React Router DOM
- **Gerenciamento de Estado**: React Context API

---

## 📁 Estrutura do Projeto Atualizada

```
lainan-junger-e-commerce/
├── src/
│   ├── components/
│   │   ├── ui/                 # Componentes base (shadcn/ui)
│   │   ├── Header.tsx          # Navegação principal
│   │   ├── Hero.tsx            # Destaque inicial
│   │   ├── CampaignSection.tsx # Grid de sorteios e ganhadores
│   │   ├── LegalitySection.tsx # Seção de transparência e regulamento
│   │   ├── Biography.tsx       # Sobre Lainan Junger
│   │   ├── ProductCard.tsx     # Componente de produto
│   │   └── Footer.tsx          # Rodapé com links e selos
│   ├── pages/
│   │   ├── Index.tsx           # Home que agrega todas as seções
│   │   └── ...
│   ├── data/
│   │   └── products.json       # Dados mockados
│   └── ...
```

---

## 🚀 Como Executar

1.  **Instale as dependências:**
    ```bash
    npm install
    ```

2.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

3.  **Acesse:**
    Abra `http://localhost:8080` (ou a porta indicada no terminal).

---

## 🔒 Licença e Direitos

**Todos os direitos reservados © 2026 Elev-C / Instituto Plural**

Este projeto opera sob rigorosa regulamentação da **SUSEP** em parceria com a **Kovr Capitalização S.A.**. O código-fonte é proprietário.
