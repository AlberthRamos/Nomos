# Como Contribuir com o Nomos

Fico feliz com seu interesse em contribuir! O Nomos é um projeto open source e toda ajuda é bem-vinda. Para manter a organização e a qualidade, pedimos que siga estas diretrizes.

## Convenções de Código

* **Idioma:** Todo o código, incluindo variáveis, funções, classes e comentários, deve ser escrito em **português do Brasil**.  
* **Estilo:** Siga o estilo de código já presente no projeto, utilizando as ferramentas de lint e formatação configuradas.  
* **Foco na Simplicidade:** Prefira soluções claras e diretas em vez de abstrações complexas.

## Padrão de Commits

Usamos o padrão **Conventional Commits**. Isso nos ajuda a ter um histórico de commits claro e a automatizar a geração de changelogs.

O formato é: `<tipo>(<escopo>): <descrição>`

* **Tipos:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.  
* **Escopo (opcional):** `backend`, `frontend`, `docs`, `infra`.

**Exemplo:** `feat(backend): adiciona endpoint para deletar produtos`

## Fluxo de Trabalho (Git Flow)

* **`main`**: Contém o código de produção estável.  
* **`develop`**: Branch principal de desenvolvimento. Novas features são integradas aqui.  
* **Branches de Feature:** Crie sua branch a partir da `develop` com o nome `feat/<nome-da-feature>`.

## Abrindo um Pull Request (PR)

1. **Faça um Fork** do repositório.  
2. **Crie uma nova branch** a partir da `develop`.  
3. **Faça suas alterações** e commits seguindo o padrão.  
4. **Abra um Pull Request** para a branch `develop` do repositório original.  
5. **Descreva suas mudanças** claramente no PR.

---

## Créditos

Este projeto foi idealizado, desenvolvido e mantido integralmente por **Alberth Ramos da Silva**. Toda a autoria do código, design e arquitetura é minha.

---

## Doações

Se quiser apoiar o desenvolvimento do Nomos, você pode fazer uma doação via PIX:  

**alberthramosx@gmail.com**

Obrigado por ajudar a tornar o Nomos melhor!