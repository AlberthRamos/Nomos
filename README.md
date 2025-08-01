# Nomos - Catálogo de Produtos Open Source

![Nomos Logo](https://i.imgur.com/b9xLiqq.png)

**Open, organizado e acessível. Um passo real para a digitalização de pequenos negócios.**

---

## 🧠 Sobre o Projeto Nomos

**Nomos** é um microSaaS **open source**, pensado para ser uma solução gratuita, extensível e leve para pequenos negócios que desejam criar catálogos de produtos online sem a complexidade de um e-commerce ou custos altos.

O projeto foi desenvolvido com o propósito de ajudar MEIs, comerciantes locais, revendedores e distribuidores a **organizar, apresentar e compartilhar seus produtos** com facilidade, mesmo sem conhecimento técnico.

### 🔍 Visão do Projeto

Ao desenvolver o Nomos, não me limitei a resolver um desafio técnico. Pensei em como criar uma solução que fosse, acima de tudo, um modelo de negócio sustentável e de impacto real.

Nomos foi concebido para atender a uma necessidade muito presente, mas pouco explorada digitalmente: a digitalização acessível e simplificada para pequenos negócios, como MEIs, comerciantes locais e revendedores. Ao oferecer uma plataforma leve, gratuita e extensível, o Nomos facilita a entrada desses empreendedores no mundo digital, sem a complexidade e os custos altos de um e-commerce tradicional.

Além disso, adotando a filosofia open source, o projeto abre espaço para crescimento comunitário e para que desenvolvedores possam adaptar e criar versões personalizadas, gerando oportunidades de negócio para diferentes perfis.

Em suma, Nomos é mais que um projeto técnico — é uma solução pensada para gerar valor real, sustentabilidade e transformação digital para pequenos negócios.

---

## 🛠️ Tecnologias Utilizadas

| Camada           | Tecnologia                  | Por quê?                                             |
| ---------------- | -------------------------- | --------------------------------------------------- |
| **Frontend**     | Angular com TypeScript      | Estrutura robusta e escalável para o frontend.      |
| **Backend**      | Node.js com Express e TypeScript | Performance e segurança com tipagem para a API.      |
| **Banco de Dados** | MySQL com TypeORM          | Banco relacional sólido com ORM moderno que facilita a vida. |
| **Monitoramento** | PM2                        | Gerenciamento de processos e monitoramento em tempo real. |
| **Containerização** | Docker & Docker Compose   | Ambiente padronizado e fácil de executar.            |
| **Infraestrutura** | Kubernetes (Manifestos YAML) | Deploy escalável e resiliente em nuvem.               |

---

## 🚀 Como Rodar Localmente

**Pré-requisitos:** Docker e Docker Compose instalados.

### 1. Clone o projeto:

git clone https://github.com/AlberthRamos/Nomos.git

cd nomos

### 2. Configure as variáveis de ambiente:

Copie o arquivo de exemplo `.env.example` para um novo arquivo `.env`:

cp .env.example .env

> **Importante:** Edite o arquivo `.env` e preencha as variáveis, especialmente `JWT_SECRET` com uma chave secreta forte.

### 3. Suba a aplicação com Docker Compose:

docker-compose up --build

### 4. Acesse a aplicação:

- Frontend: [http://localhost:4200](http://localhost:4200)  
- Backend API: [http://localhost:3000](http://localhost:3000)

---

## 📊 Monitoramento com PM2 (Localmente)

Se rodar o backend fora do Docker, pode usar PM2 para gerenciar e monitorar o processo.

**Comandos úteis:**

Iniciar com PM2:

npm run start-pm2

Ver logs em tempo real:

npm run logs

Monitorar métricas no terminal:

npm run monitor

Dashboard web:

pm2 dashboard

> O arquivo `ecosystem.config.js` no backend contém as configurações do PM2.

---

## 📚 Documentação da API (Swagger/OpenAPI)

*(A implementar)* — Futuramente será adicionada documentação interativa da API via Swagger para facilitar testes e consulta.

### Endpoints principais:

- `POST /api/auth/register` — Registrar novo usuário  
- `POST /api/auth/login` — Login e geração de token JWT  
- `GET /api/products` — Listar produtos do usuário autenticado  
- `POST /api/products` — Criar novo produto  
- `GET /api/products/:id` — Detalhes de um produto específico  
- `PUT /api/products/:id` — Atualizar um produto  
- `DELETE /api/products/:id` — Excluir um produto  

> Todas as rotas de produtos requerem token JWT no cabeçalho `Authorization: Bearer <token>`.

---

## ☁️ Deploy na Nuvem (AWS EKS com Kubernetes)

### Passos para deploy:

1. Construa e publique as imagens Docker em um registro (ex: Amazon ECR).

2. Atualize os nomes das imagens nos arquivos de deployment:

- `k8s/backend-deployment.yaml`  
- `k8s/frontend-deployment.yaml`

3. Aplique os manifestos no cluster Kubernetes:

kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/mysql-secret.yaml  # Senhas em base64
kubectl apply -f k8s/mysql-configmap.yaml
kubectl apply -f k8s/mysql-deployment.yaml
kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/frontend-deployment.yaml

4. Acesse a aplicação pelo IP externo do serviço `frontend-service`.

---

## 🤝 Como Contribuir

Este projeto foi criado com a visão de continuidade e crescimento futuros. A ideia é que o Nomos evolua constantemente, com novas funcionalidades e melhorias, sempre aberto para a comunidade.

Quem quiser contribuir, colaborar, sugerir melhorias ou desenvolver funcionalidades pode entrar em contato comigo diretamente pelo meu perfil no LinkedIn:  
https://www.linkedin.com/in/alberthdev/

Este é um projeto open source e sua contribuição é muito bem-vinda! Por favor, leia o arquivo `CONTRIBUTING.md` para conhecer nossas regras e o processo para participar da construção desse projeto.

---

## 📜 Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo `LICENSE` para detalhes.

---

## 👤 Créditos

Desenvolvido por **Alberth Ramos da Silva**  
https://www.linkedin.com/in/alberthdev/  
Curitiba - PR - Brasil - 2025
