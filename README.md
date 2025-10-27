# Hogwarts Catalog (Catálogo de Hogwarts)

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-green)

Este projeto é a solução para um desafio técnico de frontend que exige o desenvolvimento de um catálogo interativo baseado no universo de Harry Potter. A aplicação consome dados de uma API pública para exibir informações sobre estudantes, funcionários e feitiços.

A interface inclui um menu de navegação dinâmico, páginas de catálogo com cards detalhados e funcionalidade de filtro. O projeto foi desenvolvido com React, TypeScript e Docker.

## 📷 Screenshots

*(Adicione seus screenshots aqui para demonstrar o visual da aplicação. Ex:)*

| Página Home | Página de Alunos |
| :---: | :---: |
| <img width="1892" height="932" alt="{503C9FE1-9D06-49AD-AED5-B796A60707E8}" src="https://github.com/user-attachments/assets/1c1eee9a-ab71-446b-9201-cb7fa25d8a04" />
 |<img width="1858" height="924" alt="{6310B2F4-E86E-43FA-BB45-BACC1F557C7D}" src="https://github.com/user-attachments/assets/7aefdc66-d0c9-4142-b628-a8b72116c172" />
 |

## 🛠️ Tecnologias Utilizadas

* **[React](https://reactjs.org/)**
* **[TypeScript](https://www.typescriptlang.org/)**
* **[Tailwind CSS](https://tailwindcss.com/)** (Para estilização utilitária)
* **[React Router DOM](https://reactrouter.com/)** (Para gerenciamento de rotas)
* **[Axios](https://axios-http.com/)** (Para realizar as chamadas à API)
* **[Docker](https://www.docker.com/)** & **[Docker Compose](https://docs.docker.com/compose/)**

## ✨ Funcionalidades Principais

* **Navbar Dinâmica:** Menu de navegação que destaca a página ativa. Possui um layout flutuante e semitransparente na página Home, e sólido nas demais páginas, conforme o design de referência.
* **Catálogo de Personagens:** Exibição dos Alunos e Funcionários de Hogwarts em cards.
* **Design dos Cards:**
    * Cards de personagens com uma barra de cor superior baseada na casa do personagem (Grifinória, Sonserina, etc.).
    * Cards de feitiços com uma cor roxa padrão.
    * Efeito de `hover` que expande o card sutilmente.
* **Filtro por Casas:** A página "Casas" é clicável e redireciona para a página de alunos, filtrando apenas os estudantes daquela casa.
* **Tratamento de Dados:** Dados nulos ou vazios vindos da API são exibidos como "-".

---

## 🚀 Como Executar o Projeto

Existem duas maneiras de executar este projeto:
1.  **Com Docker** (Recomendado, conforme o desafio)
2.  **Localmente** (Para desenvolvimento)

---

### 1. Executando com Docker (Recomendado)

Este método constrói e executa a aplicação dentro de um contêiner isolado, garantindo que ela funcione da mesma forma em qualquer ambiente.

**Pré-requisitos:**
* [Git](https://git-scm.com)
* [Docker Desktop](https://www.docker.com/products/docker-desktop/) (deve estar em execução)

**Passo 1: Clonar o Repositório**
Abra seu terminal, navegue até a pasta onde deseja salvar o projeto e execute o comando:
```bash
git clone [https://github.com/seu-usuario/hogwarts-catalog.git](https://github.com/seu-usuario/hogwarts-catalog.git

Passo 2: Entrar na Pasta do Projeto

Bash

cd hogwarts-catalog
Passo 3: Criar o Arquivo de Variáveis de Ambiente Este passo é crucial para que a aplicação saiba onde encontrar a API.

Crie um arquivo chamado .env na raiz do projeto.

Copie e cole o seguinte conteúdo dentro dele:

REACT_APP_API_URL=[https://hp-api.onrender.com/api](https://hp-api.onrender.com/api)
Passo 4: Construir e Iniciar os Contêineres No seu terminal, na raiz do projeto, execute:

Bash

docker-compose up --build
O Docker irá baixar a imagem do Node, instalar as dependências e iniciar o servidor.

A opção --build força a reconstrução da imagem, o que é útil se você fizer alterações.

Passo 5: Acessar a Aplicação Abra seu navegador e acesse: http://localhost:3000

2. Executando Localmente (Sem Docker)
Este método roda o projeto diretamente na sua máquina, usando seu Node.js local.

Pré-requisitos:

Git

Node.js (v18 ou superior recomendado)

Passo 1: Clonar o Repositório

Bash

git clone [https://github.com/seu-usuario/hogwarts-catalog.git](https://github.com/seu-usuario/hogwarts-catalog.git)
(Substitua pela URL do seu repositório)

Passo 2: Entrar na Pasta do Projeto

Bash

cd hogwarts-catalog
Passo 3: Criar o Arquivo .env

Crie o arquivo .env na raiz do projeto.

Copie e cole o conteúdo abaixo:

REACT_APP_API_URL=[https://hp-api.onrender.com/api](https://hp-api.onrender.com/api)
Passo 4: Instalar as Dependências No terminal, execute:

Bash

npm install
Passo 5: Iniciar o Servidor de Desenvolvimento

Bash

npm start
Passo 6: Acessar a Aplicação O seu navegador deve abrir automaticamente na página http://localhost:3000.

👤 Autor
Chrystian Alves
