<pre><code>
# Nomos - Catálogo de Produtos Open Source

![Nomos Logo](https://i.imgur.com/b9xLiqq.png)

**Open, organizado e acessível. Um passo real para a digitalização de pequenos negócios.**

---

## 🧠 Sobre o Projeto Nomos

**Nomos** é um microSaaS **open source**, pensado para ser uma solução gratuita, extensível e leve para pequenos negócios que desejam criar catálogos de produtos online — sem a complexidade de um e-commerce ou custos altos.

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
<code>git clone https://github.com/AlberthRamos/Nomos.git
cd nomos
</code>

### 2. Configure as variáveis de ambiente:

Copie o arquivo de exemplo <code>.env.example</code> para um novo arquivo <code>.env</code>:

<code>cp .env.example .env
</code>

> **Importante:** Edite o arquivo <code>.env</code> e preencha as variáveis, especialmente <code>JWT_SECRET</code> com uma chave secreta forte.

### 3. Suba a aplicação com Docker Compose:

<code>docker-compose up --build
</code>

### 4. Acesse a aplicação:

- **Frontend:** [http://localhost:4200](http://localhost:4200)  
- **Backend API:** [http://localhost:3000](http://localhost:3000)

---

## 📊 Monitoramento com PM2 (Localmente)

Se rodar o backend fora do Docker, pode usar PM2 para gerenciar e monitorar o processo.

**Comandos úteis:**

- Iniciar com PM2:

<code>npm run start-pm2
</code>

- Ver logs em tempo real:

<code>npm run logs
</code>

- Monitorar métricas no terminal:

<code>npm run monitor
</code>

- Dashboard web:

<code>pm2 dashboard
</code>

> O arquivo <code>ecosystem.config.js</code> no backend contém as configurações do PM2.

---

## 📚 Documentação da API (Swagger/OpenAPI)

*(A implementar)* — Futuramente será adicionada documentação interativa da API via Swagger para facilitar testes e consulta.

### Endpoints principais:

- <code>POST /api/auth/register</code> — Registrar novo usuário  
- <code>POST /api/auth/login</code> — Login e geração de token JWT  
- <code>GET /api/products</code> — Listar produtos do usuário autenticado  
- <code>POST /api/products</code> — Criar novo produto  
- <code>GET /api/products/:id</code> — Detalhes de um produto específico  
- <code>PUT /api/products/:id</code> — Atualizar um produto  
- <code>DELETE /api/products/:id</code> — Excluir um produto  

> Todas as rotas de produtos requerem token JWT no cabeçalho <code>Authorization: Bearer &lt;token&gt;</code>.

---

## ☁️ Deploy na Nuvem (AWS EKS com Kubernetes)

### Passos para deploy:

1. Construa e publique as imagens Docker em um registro (ex: Amazon ECR).

2. Atualize os nomes das imagens nos arquivos de deployment:

- <code>k8s/backend-deployment.yaml</code>  
- <code>k8s/frontend-deployment.yaml</code>

3. Aplique os manifestos no cluster Kubernetes:

<code>kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/mysql-secret.yaml  # Senhas em base64
kubectl apply -f k8s/mysql-configmap.yaml
kubectl apply -f k8s/mysql-deployment.yaml
kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/frontend-deployment.yaml
</code>

4. Acesse a aplicação pelo IP externo do serviço <code>frontend-service</code>.

---

## 🤝 Como Contribuir

Este projeto foi criado com a visão de continuidade e crescimento futuros. A ideia é que o Nomos evolua constantemente, com novas funcionalidades e melhorias, sempre aberto para a comunidade.

Quem quiser contribuir, colaborar, sugerir melhorias ou desenvolver funcionalidades pode entrar em contato comigo diretamente pelo meu perfil no LinkedIn:  
https://www.linkedin.com/in/alberthdev/

Este é um projeto open source e sua contribuição é muito bem-vinda! Por favor, leia o arquivo <code>CONTRIBUTING.md</code> para conhecer nossas regras e o processo para participar da construção desse projeto.

---

## 📜 Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo <code>LICENSE</code> para detalhes.

---

## 👤 Créditos

Desenvolvido por **Alberth Ramos da Silva**  
https://www.linkedin.com/in/alberthdev/  
Curitiba - PR - Brasil - 2025
</code></pre>
