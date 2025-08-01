# Nomos - Catálogo de Produtos Open Source

![Nomos Logo](https://i.imgur.com/b9xLiqq.png)

**Open, organizado e acessível. Um passo real para a digitalização de pequenos negócios.**

---

## 📋 Sobre o Projeto

**Nomos** é um microSaaS **open source** projetado como uma solução gratuita, extensível e leve para pequenos negócios que desejam criar catálogos de produtos online sem a complexidade de um e-commerce tradicional.

### 🎯 Funcionalidades Implementadas

- ✅ **Gestão Completa de Produtos**: CRUD completo (Criar, Listar, Atualizar, Deletar)
- ✅ **Autenticação JWT**: Sistema seguro de registro e login de usuários
- ✅ **Visualização de Catálogo**: Interface para listar produtos do usuário autenticado
- ✅ **Detalhes de Produtos**: Página dedicada com informações completas
- ✅ **Controle de Acesso**: Produtos protegidos por autenticação
- ✅ **Interface Responsiva**: Design Angular adaptável para diferentes dispositivos
- ✅ **API RESTful**: Endpoints padronizados para integração
- ✅ **Containerização Completa**: Docker e Docker Compose prontos para uso

### 🎨 Demonstração Visual

A aplicação oferece uma experiência intuitiva tanto para gestores quanto para visitantes do catálogo, facilitando a organização e apresentação profissional dos produtos.

---

## 🛠️ Stack Tecnológica

| Camada           | Tecnologia                     | Justificativa                                        |
| ---------------- | ------------------------------ | --------------------------------------------------- |
| **Frontend**     | Angular 17 + TypeScript        | Framework robusto com tipagem forte e componentes reutilizáveis |
| **Backend**      | Node.js + Express + TypeScript | Performance elevada com type safety e desenvolvimento ágil |
| **Banco de Dados** | MySQL 8.0 + TypeORM          | Banco relacional confiável com ORM moderno e migrations |
| **Autenticação** | JWT (JSON Web Tokens)         | Autenticação stateless e segura para APIs |
| **Monitoramento** | PM2                           | Gerenciamento de processos e métricas em tempo real |
| **Containerização** | Docker + Docker Compose     | Ambiente padronizado e isolado para desenvolvimento |
| **Orquestração** | Kubernetes (Manifestos YAML)  | Deploy escalável e resiliente em nuvem |

---

## 🏗️ Arquitetura da Solução

### Estrutura do Banco de Dados

```sql
-- Tabela de Produtos
CREATE TABLE products (
  id VARCHAR(36) PRIMARY KEY,           -- UUID único
  nome VARCHAR(255) NOT NULL,           -- Nome do produto
  descricao TEXT,                       -- Descrição detalhada
  preco DECIMAL(10,2) NOT NULL,         -- Preço com precisão monetária
  url_imagem VARCHAR(500),              -- URL da imagem do produto
  quantidade_em_stock INT DEFAULT 0,    -- Controle de estoque
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### API Endpoints

#### Autenticação
- `POST /api/auth/register` - Registro de novo usuário
- `POST /api/auth/login` - Login e geração de token JWT

#### Produtos (Requer Autenticação)
- `GET /api/products` - Listar todos os produtos do usuário autenticado
- `GET /api/products/:id` - Obter detalhes de um produto específico
- `POST /api/products` - Criar novo produto
- `PUT /api/products/:id` - Atualizar produto existente
- `DELETE /api/products/:id` - Remover produto

> **Segurança**: Todas as rotas de produtos requerem token JWT no cabeçalho `Authorization: Bearer <token>`

---

## 🚀 Setup e Execução Local

### Pré-requisitos
- Docker 20.10+
- Docker Compose 2.0+
- Node.js 18+ (opcional, para desenvolvimento)

### 🔧 Instalação Rápida

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/AlberthRamos/Nomos.git
   cd nomos
   ```

2. **Configure as variáveis de ambiente:**
   ```bash
   cp .env.example .env
   ```
   
   **⚠️ Importante**: Edite o arquivo `.env` e configure:
   ```env
   JWT_SECRET=sua_chave_secreta_muito_forte_aqui
   DB_PASSWORD=senha_segura_mysql
   DB_NAME=nomos_db
   ```

3. **Execute com Docker Compose:**
   ```bash
   docker-compose up --build
   ```

4. **Acesse a aplicação:**
   - 🌐 **Frontend**: [http://localhost:4200](http://localhost:4200)
   - 🔌 **Backend API**: [http://localhost:3000](http://localhost:3000)
   - 📊 **Database**: MySQL na porta 3306

### 🧪 Como Testar a API

**Exemplos de requisições:**

```bash
# Login para obter token
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password"}'

# Listar produtos do usuário (com token)
curl -X GET http://localhost:3000/api/products \
  -H "Authorization: Bearer SEU_TOKEN_AQUI"

# Criar novo produto
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer SEU_TOKEN_AQUI" \
  -d '{"nome":"Produto Teste","descricao":"Descrição","preco":29.99}'

# Detalhes de um produto
curl -X GET http://localhost:3000/api/products/123e4567-e89b-12d3-a456-426614174000 \
  -H "Authorization: Bearer SEU_TOKEN_AQUI"
```

---

## 📊 Monitoramento e Observabilidade

### Usando PM2 (Desenvolvimento Local)

Para desenvolvimento fora do Docker, utilize PM2 para monitoramento avançado:

```bash
# Iniciar aplicação com PM2
npm run start-pm2

# Monitorar logs em tempo real
npm run logs

# Dashboard de métricas no terminal
npm run monitor

# Interface web de monitoramento
pm2 dashboard
```

**Configurações PM2**: Definidas em `ecosystem.config.js` com:
- Reinicialização automática
- Logs estruturados
- Métricas de performance
- Limite de memória

---

## ☁️ Deploy em Produção

### Kubernetes (Recomendado)

O projeto inclui manifestos Kubernetes prontos para deploy escalável:

1. **Preparar imagens Docker:**
   ```bash
   # Build e push para registry (ex: AWS ECR)
   docker build -t seu-registry/nomos-backend ./backend
   docker build -t seu-registry/nomos-frontend ./frontend
   docker push seu-registry/nomos-backend
   docker push seu-registry/nomos-frontend
   ```

2. **Atualizar manifestos:**
   Edite `k8s/backend-deployment.yaml` e `k8s/frontend-deployment.yaml` com suas imagens.

3. **Deploy no cluster:**
   ```bash
   kubectl apply -f k8s/namespace.yaml
   kubectl apply -f k8s/mysql-secret.yaml
   kubectl apply -f k8s/mysql-configmap.yaml
   kubectl apply -f k8s/mysql-deployment.yaml
   kubectl apply -f k8s/backend-deployment.yaml
   kubectl apply -f k8s/frontend-deployment.yaml
   ```

4. **Verificar deployment:**
   ```bash
   kubectl get pods -n nomos
   kubectl get services -n nomos
   ```

---

## 🎯 Decisões de Design e Arquitetura

### Por que Angular?
- **Componentes reutilizáveis** para interfaces consistentes
- **TypeScript nativo** garantindo type safety
- **Roteamento robusto** para navegação entre páginas
- **HttpClient** otimizado para consumo de APIs

### Por que Node.js + Express?
- **Performance superior** para aplicações I/O intensivas
- **Ecossistema maduro** com pacotes estáveis
- **TypeScript** para maior confiabilidade de código
- **Compatibilidade** com ferramentas modernas de desenvolvimento

### Por que MySQL + TypeORM?
- **Confiabilidade** comprovada em ambiente de produção
- **ACID compliance** para consistência de dados
- **TypeORM** oferece migrations automáticas e type safety
- **Escalabilidade** horizontal com sharding quando necessário

### Padrões Arquiteturais Aplicados
- **Repository Pattern** para abstração de dados
- **Dependency Injection** para testabilidade
- **Middleware Pattern** para tratamento de erros e autenticação
- **Component-based Architecture** no frontend

---

## 🔮 Roadmap e Melhorias Futuras

### 🚀 Próximas Funcionalidades
- [ ] **Busca e Filtros** para encontrar produtos por nome
- [ ] **Paginação Avançada** para melhor performance com muitos produtos
- [ ] **Ordenação Dinâmica** por preço, nome, data de criação
- [ ] **Cache Redis** para otimização de performance
- [ ] **Upload de Imagens** com AWS S3/CloudFront
- [ ] **Relatórios e Analytics** de visualizações
- [ ] **API de Integração** com marketplaces
- [ ] **PWA Support** para experiência mobile nativa
- [ ] **Multi-tenancy** para suporte a múltiplas lojas

### 🔧 Melhorias Técnicas
- [ ] **Testes automatizados** (Jest + Cypress)
- [ ] **Documentação Swagger** interativa
- [ ] **CI/CD Pipeline** com GitHub Actions
- [ ] **Observabilidade** com Prometheus + Grafana
- [ ] **Rate Limiting** para proteção de API

---

## 🤝 Contribuições e Comunidade

Este projeto foi criado com visão de crescimento comunitário e colaborativo. Contribuições são muito bem-vindas!

### 📧 Contato Direto
Para discussões sobre arquitetura, parcerias ou contribuições significativas:  
**LinkedIn**: [https://www.linkedin.com/in/alberthdev/](https://www.linkedin.com/in/alberthdev/)

### 📖 Como Contribuir
Consulte o arquivo `CONTRIBUTING.md` para:
- Padrões de código e commits
- Processo de review
- Configuração do ambiente de desenvolvimento
- Guidelines para novas funcionalidades

---

## 📄 Licença

Este projeto está sob a **Licença MIT**. Consulte o arquivo `LICENSE` para detalhes completos.

---

## 👨‍💻 Desenvolvedor

**Alberth Ramos da Silva**  
Senior Full Stack Developer  
📍 Curitiba, PR - Brasil  
💼 [LinkedIn](https://www.linkedin.com/in/alberthdev/)  
📅 2025

---

*Nomos - Transformando a digitalização de pequenos negócios, um catálogo por vez.* ✨