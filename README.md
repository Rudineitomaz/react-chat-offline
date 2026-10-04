# React Chat Offline

Aplicação de chat em uma única janela, desenvolvida com React, TypeScript e Vite, com foco em um fluxo simples e responsivo de envio de mensagens entre dois remetentes: usuário e robô.

## Visão geral

O projeto simula um chat local sem backend ou persistência. O histórico de mensagens fica apenas em memória no estado do React, então todas as mensagens são perdidas ao recarregar a página. A interface é centralizada em um container responsivo e mantém o input fixo no rodapé do chat.

## Funcionalidades

- Toggle para escolher o remetente da próxima mensagem:
  - usuário
  - robô
- Envio por botão ou com Enter no textarea
- Shift + Enter para quebra de linha
- Textarea multilinha com altura dinâmica
- Botão de envio desabilitado quando o campo estiver vazio após trim
- Lista de mensagens em ordem cronológica
- Mensagens do usuário alinhadas à direita e do robô à esquerda
- Estado vazio com mensagem indicativa quando não há conversa
- Auto-scroll para a última mensagem enviada
- Layout responsivo em tela cheia com fundo marrom claro
- Borda roxa destacando o modo robô no input

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Oxlint

## Scripts

```bash
npm install
npm run dev
```

### Outros comandos

```bash
npm run build
npm run lint
npm run preview
```

## Estrutura do projeto

```text
src/
├── App.tsx
├── index.css
├── main.tsx
├── components/
│   ├── Chat.tsx
│   ├── ChatInput.tsx
│   ├── MessageBubble.tsx
│   ├── MessageList.tsx
│   └── SenderToggle.tsx
├── types/
│   └── message.ts
└── assets/
```

## Modelo de dados

```ts
type Sender = 'user' | 'robot'

type Message = {
  id: string
  text: string
  sender: Sender
}
```

## Regras de comportamento

- O toggle afeta apenas a próxima mensagem enviada
- Mensagens já criadas não mudam de remetente
- O campo aceita texto em múltiplas linhas
- A área de histórico cresce e mantém a última mensagem visível
- Não há persistência em localStorage, banco ou backend

## Como executar localmente

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o ambiente de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Abra o endereço exibido no terminal no navegador.

## Observações

Este projeto foi pensado como uma implementação de chat offline de interface única, seguindo o PRD definido para uma aplicação leve, visualmente simples e funcional, sem armazenamento externo.
