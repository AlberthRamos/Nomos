# 🤝 Guia de Contribuição - Nomos

Seja muito bem-vindo(a) ao projeto Nomos! Ficamos felizes com seu interesse em contribuir para uma solução que democratiza a digitalização de pequenos negócios. Este guia vai te ajudar a contribuir de forma efetiva e alinhada com nossos padrões.

---

## 🎯 Como Você Pode Contribuir

### 🐛 **Reportando Bugs**
- Use as [Issues do GitHub](https://github.com/AlberthRamos/Nomos/issues) com o template de bug
- Inclua prints, logs e passos para reproduzir
- Descreva o comportamento esperado vs atual

### 💡 **Sugerindo Melhorias**
- Abra uma Issue com tag `enhancement`
- Explique o problema que a melhoria resolve
- Descreva a solução proposta e alternativas consideradas

### 🚀 **Desenvolvendo Funcionalidades**
- Consulte nosso [Roadmap](README.md#roadmap-e-melhorias-futuras)
- Discuta grandes mudanças em Issues antes de começar
- Siga nossos padrões de código e documentação

### 📖 **Melhorando Documentação**
- Corrija erros de português
- Adicione exemplos práticos
- Melhore instruções de setup e uso

---

## 🛠️ Configuração do Ambiente de Desenvolvimento

### Pré-requisitos
- Node.js 18+
- Docker e Docker Compose
- Git configurado

### Setup Local
```bash
# 1. Fork e clone o repositório
git clone https://github.com/SEU_USUARIO/Nomos.git
cd Nomos

# 2. Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env com suas configurações

# 3. Instale dependências (para desenvolvimento)
cd backend && npm install
cd ../frontend && npm install

# 4. Execute com Docker (recomendado)
docker-compose up --build

# 5. Ou execute manualmente para desenvolvimento
# Terminal 1: Backend
cd backend && npm run dev

# Terminal 2: Frontend  
cd frontend && npm start
```

### Estrutura do Projeto
```
nomos/
├── backend/          # API Node.js + Express + TypeScript
├── frontend/         # App Angular + TypeScript
├── k8s/             # Manifestos Kubernetes
├── docker-compose.yml
└── docs/            # Documentação adicional
```

---

## 📝 Padrões de Desenvolvimento

### 🌍 **Idioma e Nomenclatura**
- **Código**: Português brasileiro para variáveis, funções e classes
- **Commits**: Português brasileiro
- **Documentação**: Português brasileiro
- **Issues/PRs**: Português ou inglês (conforme preferir)

**Exemplos:**
```typescript
// ✅ Correto
const listarProdutos = async () => { ... }
class GerenciadorProdutos { ... }

// ❌ Evitar
const getProducts = async () => { ... }
class ProductManager { ... }
```

### 🎨 **Estilo de Código**

#### Backend (Node.js + TypeScript)
- Use **camelCase** para variáveis e funções
- Use **PascalCase** para classes e interfaces
- Prefira **async/await** ao invés de Promises
- Valide sempre dados de entrada
- Trate erros de forma consistente

```typescript
// ✅ Exemplo de função bem estruturada
export const criarProduto = async (dadosProduto: CriarProdutoDto): Promise<Produto> => {
  try {
    validarDadosProduto(dadosProduto);
    const produto = await repositorioProdutos.criar(dadosProduto);
    return produto;
  } catch (erro) {
    logger.error('Erro ao criar produto:', erro);
    throw new ErroNegocio('Não foi possível criar o produto');
  }
};
```

#### Frontend (Angular + TypeScript)
- Use **kebab-case** para seletores de componentes
- Use **camelCase** para propriedades e métodos
- Implemente **OnDestroy** para cleanup de subscriptions
- Use **trackBy** em *ngFor para performance

```typescript
// ✅ Exemplo de componente bem estruturado
@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html'
})
export class ListaProdutosComponent implements OnInit, OnDestroy {
  produtos: Produto[] = [];
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.carregarProdutos();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
```

### 📋 **Padrão de Commits**

Seguimos o **Conventional Commits** em português:

**Formato:** `<tipo>(<escopo>): <descrição>`

#### Tipos Aceitos:
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Mudanças na documentação
- `style`: Formatação, sem mudança de lógica
- `refactor`: Refatoração de código
- `test`: Adição ou correção de testes
- `chore`: Manutenção, configs, dependencies

#### Escopos Sugeridos:
- `backend`: API, banco, autenticação
- `frontend`: Interface, componentes
- `infra`: Docker, K8s, CI/CD
- `docs`: README, guias

#### Exemplos:
```bash
feat(backend): adiciona endpoint para busca de produtos
fix(frontend): corrige validação de formulário de produto
docs(readme): atualiza instruções de instalação
refactor(backend): melhora estrutura do controller de produtos
```

---

## 🔄 Fluxo de Trabalho (Git Flow)

### Branches Principais
- **`main`**: Código de produção, sempre estável
- **`develop`**: Integração de novas funcionalidades

### Workflow para Contribuições

1. **Fork** do repositório no GitHub
2. **Clone** seu fork localmente
3. **Crie branch** a partir da `develop`:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feat/nome-da-funcionalidade
   ```
4. **Desenvolva** suas mudanças
5. **Teste** localmente
6. **Commit** seguindo o padrão
7. **Push** para seu fork
8. **Abra Pull Request** para `develop`

### 📤 **Abrindo um Pull Request**

#### Checklist antes de abrir o PR:
- [ ] Código testado localmente
- [ ] Commits seguem o padrão
- [ ] Documentação atualizada se necessário
- [ ] Sem conflitos com a branch `develop`

#### Template do PR:
```markdown
## 📋 Descrição
Breve descrição das mudanças realizadas.

## 🔧 Tipo de Mudança
- [ ] Bug fix
- [ ] Nova funcionalidade
- [ ] Breaking change
- [ ] Documentação

## 🧪 Como Testar
Passos para testar as mudanças:
1. ...
2. ...

## 📸 Screenshots (se aplicável)
Adicione prints das mudanças visuais.

## ✅ Checklist
- [ ] Meu código segue os padrões do projeto
- [ ] Testei localmente
- [ ] Atualizei a documentação necessária
```

---

## 🧪 Testes e Qualidade

### Rodando Testes Localmente
```bash
# Backend
cd backend
npm run test          # Testes unitários
npm run test:e2e      # Testes de integração

# Frontend  
cd frontend
npm run test          # Testes unitários
npm run e2e           # Testes E2E com Cypress
```

### Padrões de Teste
- **Coverage mínimo**: 80% para novas funcionalidades
- **Testes unitários**: Para lógica de negócio
- **Testes de integração**: Para endpoints da API
- **Testes E2E**: Para fluxos críticos do usuário

---

## 🏗️ Arquitetura e Padrões

### Backend
- **Repository Pattern** para acesso a dados
- **Dependency Injection** para testabilidade
- **Middleware** para autenticação e validação
- **DTOs** para validação de entrada

### Frontend
- **Component-based** architecture
- **Services** para lógica de negócio
- **Guards** para proteção de rotas
- **Interceptors** para HTTP

---

## 📞 Comunicação e Suporte

### 🗨️ **Canais de Comunicação**
- **Issues**: Para bugs e funcionalidades
- **Discussions**: Para perguntas gerais
- **LinkedIn**: [@alberthdev](https://www.linkedin.com/in/alberthdev/) para discussões estratégicas

### ❓ **Dúvidas Frequentes**

**P: Posso contribuir mesmo sendo iniciante?**
R: Sim! Temos issues marcadas como `good first issue` para iniciantes.

**P: Como escolho em que trabalhar?**
R: Consulte o [Roadmap](README.md#roadmap-e-melhorias-futuras) e issues abertas. Para grandes funcionalidades, abra uma discussão primeiro.

**P: Quanto tempo demora para revisar PRs?**
R: Tentamos revisar em até 3 dias úteis. PRs pequenos são priorizados.

---

## 🏆 Reconhecimento

Todos os contribuidores serão reconhecidos:
- **README**: Lista de contribuidores
- **Releases**: Créditos nas notas de versão
- **LinkedIn**: Compartilhamento de contribuições significativas

---

## 💝 Apoie o Projeto

Se o Nomos te ajuda ou você acredita na missão de democratizar a digitalização de pequenos negócios, considere:

### 💰 **Doação via PIX**
**alberthramosx@gmail.com**

### ⭐ **Outras Formas de Apoiar**
- Dê uma ⭐ no repositório
- Compartilhe com outros desenvolvedores
- Use em seus projetos e dê feedback
- Contribute com código, documentação ou testes

---

## 📜 Código de Conduta

Este projeto segue o [Código de Conduta da Comunidade](CODE_OF_CONDUCT.md). Ao participar, você concorda em seguir estes termos para manter um ambiente respeitoso e inclusivo.

---

## 🙏 Agradecimentos

**Obrigado por considerar contribuir com o Nomos!** Cada contribuição, por menor que seja, ajuda a construir uma solução que pode transformar a vida de milhares de pequenos empreendedores brasileiros.

Juntos, estamos democratizando a tecnologia e criando oportunidades reais de crescimento! 🚀

---

**Desenvolvido com ❤️ por [Alberth Ramos da Silva](https://www.linkedin.com/in/alberthdev/)**  
Curitiba, PR - Brasil - 2025