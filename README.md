# Node.js + TypeScript + Express Starter

Guia passo a passo e documentação completa para inicialização, estruturação e execução de uma aplicação backend utilizando **Node.js**, **TypeScript** e **Express**.

---

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

* [Node.js](https://nodejs.org/) (Versão LTS recomendada)
* Gerenciador de pacotes (`npm` ou `yarn`)

---

## Tecnologias Utilizadas

* **[Node.js](https://nodejs.org/)** - Ambiente de execução JavaScript no servidor
* **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
* **[Express](https://expressjs.com/)** - Framework web para Node.js
* **[tsx](https://github.com/privatenumber/tsx)** - Executor TypeScript super rápido com suporte a *watch mode*

---

## Passo a Passo de Configuração

### 1. Inicialização e Instalação de Dependências

Abra o terminal na pasta raiz do seu projeto e execute os comandos abaixo:

```bash
# 1. Inicializa o projeto Node.js (cria o package.json)
npm init -y

# 2. Instala o framework Express
npm i express

# 3. Instala as dependências de desenvolvimento (TypeScript, tipos e executor tsx)
npm i -D typescript @types/node @types/express tsx

# 4. Gera o arquivo de configuração do TypeScript (tsconfig.json)
npx tsc --init
```

---

### 2. Configuração do TypeScript (`tsconfig.json`)

Substitua ou ajuste o conteúdo do seu arquivo `tsconfig.json` com as configurações recomendadas a seguir:

```json
{
  "compilerOptions": {
    "target": "es2022",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"]
}
```

---

### 3. Estrutura de Diretórios

Crie a seguinte estrutura de arquivos no seu diretório:

```text
.
├── src/
│   └── server.ts
├── dist/             # Criado automaticamente após o build
├── node_modules/
├── package.json
├── tsconfig.json
└── README.md
```

---

### 4. Criação do Servidor (`src/server.ts`)

No arquivo `src/server.ts`, insira o código básico da aplicação:

```typescript
import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para interpretar requisições com corpo em JSON
app.use(express.json());

// Rota principal de teste
app.get('/', (req: Request, res: Response) => {
  return res.json({ message: '🚀 API Node.js + TypeScript + Express rodando com sucesso!' });
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`⚡ Servidor rodando em: http://localhost:${PORT}`);
});
```

---

### 5. Configuração dos Scripts (`package.json`)

Abra o arquivo `package.json` e atualize a seção `"scripts"` com os comandos de desenvolvimento, compilação e execução em produção:

```json
"scripts": {
  "dev": "tsx watch src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js"
}
```

---

## Como Executar o Projeto

### Modo Desenvolvimento
Executa a aplicação com recarregamento automático a cada alteração salva no código:
```bash
npm run dev
```

### Compilação para Produção (Build)
Transpila o código escrito em TypeScript na pasta `src/` para JavaScript na pasta `dist/`:
```bash
npm run build
```

### Modo Produção
Executa a versão compilada em JavaScript diretamente com o Node.js:
```bash
npm run start
```

---

## Licença

Este projeto está sob a licença MIT. Sinta-se livre para utilizar e modificar!
