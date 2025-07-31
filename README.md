# Nomos - Catálogo de Produtos Open Source

![Nomos Logo Placeholder](https://i.imgur.com/JOKsNeT.jpeg) <!-- Usando a imagem que você me passou como placeholder -->

**Open, organizado e acessível. Um passo real para a digitalização de pequenos negócios.**

---

## 🧠 Sobre o Projeto Nomos

**Nomos** é um microSaaS **open source**, pensado para ser uma solução gratuita, extensível e leve para pequenos negócios que desejam criar catálogos de produtos online — sem a complexidade de um e-commerce ou custos altos.

O projeto foi desenvolvido com o propósito de ajudar MEIs, comerciantes locais, revendedores e distribuidores a **organizar, apresentar e compartilhar seus produtos** com facilidade, mesmo sem conhecimento técnico.

### Ideologia Open Source

- **Gratuito e Transparente:** Nomos é e sempre será gratuito para uso básico.
- **Extensível:** Pensado para que desenvolvedores possam contribuir, adaptar ou até comercializar versões personalizadas.
- **Comunidade:** O objetivo é construir uma base sólida de micro-SaaS que possa evoluir com a ajuda da comunidade.

---

## 🛠️ Tecnologias Utilizadas

| Camada | Tecnologia | Por quê? |
| :--- | :--- | :--- |
| **Frontend** | **Angular com TypeScript** | Estrutura robusta e escalável para o frontend. |
| **Backend** | **Node.js com Express e TypeScript** | Performance e segurança com tipagem para a API. |
| **Banco de Dados** | **MySQL com TypeORM** | Um banco de dados relacional sólido com um ORM moderno que facilita a vida. |
| **Monitoramento** | **PM2** | Gerenciamento de processos e monitoramento em tempo real do backend. |
| **Containerização** | **Docker & Docker Compose** | Garante um ambiente de desenvolvimento padronizado e fácil de rodar. |
| **Infraestrutura** | **Kubernetes (Manifestos YAML)** | Prepara a aplicação para deploy em nuvem de forma escalável e resiliente. |

---

## 🚀 Como Rodar Localmente

**Pré-requisitos:** Você só precisa do **Docker** e do **Docker Compose** instalados.

**1. Clone o projeto:**
```bash
git clone <url-do-repositorio>
cd nomos
```

**2. Configure as Variáveis de Ambiente:**
Copie o arquivo de exemplo `.env.example` para um novo arquivo chamado `.env`.
```bash
cp .env.example .env
```
> **Importante:** Abra o arquivo `.env` e preencha as variáveis, especialmente `JWT_SECRET` com uma chave secreta forte.

**3. Suba a Aplicação com Docker Compose:**
Este comando constrói as imagens e sobe os contêineres do frontend, backend e banco de dados.
```bash
docker-compose up --build
```

**4. Acesse a Aplicação:**
*   **Frontend:** [http://localhost:4200](http://localhost:4200)
*   **API Backend:** `http://localhost:3000`

---

## 📊 Monitoramento com PM2 (Localmente)

O backend é gerenciado pelo PM2, o que nos dá superpoderes de monitoramento.

**1. Iniciar com PM2 (se não estiver usando Docker):**
Se você estiver rodando o backend fora do Docker, pode iniciá-lo com:
```bash
npm run start-pm2
```

**2. Ver Logs em Tempo Real:**
```bash
npm run logs # ou pm2 logs nomos-api
```

**3. Monitorar Métricas no Terminal:**
Um painel direto no seu terminal com uso de CPU, memória, etc.
```bash
npm run monitor # ou pm2 monit
```

**4. Dashboard Web (Local):**
Um dashboard completo no seu navegador.
```bash
pm2 dashboard
```

O arquivo `ecosystem.config.js` na raiz do backend contém todas as configurações do PM2.

---

## 📚 Documentação da API (Swagger/OpenAPI)

*(A ser implementado)* - Uma futura melhoria será adicionar o Swagger para gerar uma documentação interativa da API, permitindo testar os endpoints diretamente do navegador.

**Endpoints Principais:**

*   `POST /api/auth/register` - Registra um novo usuário.
*   `POST /api/auth/login` - Realiza o login e retorna um token JWT.
*   `GET /api/products` - Retorna a lista de produtos do usuário autenticado.
*   `POST /api/products` - Cria um novo produto (sujeito às regras do plano).
*   `GET /api/products/:id` - Retorna um produto específico.
*   `PUT /api/products/:id` - Atualiza um produto.
*   `DELETE /api/products/:id` - Deleta um produto.

> Todas as rotas de produtos (`/api/products`) são protegidas e exigem um token JWT no cabeçalho `Authorization: Bearer <token>`.

---

## ☁️ Deploy na Nuvem (AWS EKS com Kubernetes)

Os manifestos na pasta `/kubernetes` estão prontos para o deploy.

**Etapas:**
1.  **Construa e Publique as Imagens Docker** para um registro (ex: Amazon ECR).
2.  **Atualize os Nomes das Imagens** nos arquivos `k8s/backend-deployment.yaml` e `k8s/frontend-deployment.yaml`.
3.  **Aplique os Manifestos** no seu cluster Kubernetes:
    ```bash
    # Crie o namespace e os segredos primeiro
    kubectl apply -f k8s/namespace.yaml
    kubectl apply -f k8s/mysql-secret.yaml # Lembre de encodar suas senhas em base64

    # Aplique o resto
    kubectl apply -f k8s/mysql-configmap.yaml
    kubectl apply -f k8s/mysql-deployment.yaml
    kubectl apply -f k8s/backend-deployment.yaml
    kubectl apply -f k8s/frontend-deployment.yaml
    ```
4.  **Acesse a Aplicação** pegando o IP externo do serviço `frontend-service`.

---

## 🤝 Como Contribuir

Este é um projeto open source e toda ajuda é bem-vinda! Por favor, leia o nosso `CONTRIBUTING.md` para entender nossas convenções de código, commits e como abrir um Pull Request.

---

## 📜 Licença

Este projeto é licenciado sob a **Licença MIT**. Veja o arquivo `LICENSE` para mais detalhes.
