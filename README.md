# React Chat Offline

Aplicação de chat local, desenvolvida com React, TypeScript e Vite. Permite criar e organizar várias conversas, trocar mensagens entre os remetentes usuário e robô e manter as conversas salvas no navegador.

## Funcionalidades

- Criar, selecionar e excluir conversas pela barra lateral
- Alternar entre usuário e robô como remetente da próxima mensagem
- Enviar mensagens pelo botão ou pressionando Enter
- Usar Shift + Enter para inserir uma quebra de linha
- Usar um campo de texto multilinha com altura dinâmica
- Exibir mensagens em ordem cronológica, alinhadas conforme o remetente
- Rolar automaticamente até a mensagem mais recente
- Usar a barra lateral adaptada para dispositivos móveis
- Persistir conversas e mensagens no `localStorage` do navegador
- Funcionar sem backend ou conexão com um serviço externo

## Persistência

As conversas e suas mensagens são salvas no `localStorage`, sob a chave `chat-storage`, e continuam disponíveis após recarregar a página no mesmo navegador. A conversa selecionada e o remetente atual não são persistidos: após recarregar, nenhuma conversa fica selecionada e o remetente volta a ser usuário.

Os dados ficam somente no navegador. Limpar os dados locais do site remove as conversas salvas.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Zustand
- Oxlint

## Como executar

Requer Node.js e npm instalados.

```bash
npm install
npm run dev
```

Abra no navegador o endereço informado pelo Vite.

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
│   ├── MobileMenuButton.tsx
│   ├── SenderToggle.tsx
│   ├── Sidebar.tsx
│   └── SidebarItem.tsx
├── stores/
│   └── chatStore.ts
├── types/
│   ├── conversation.ts
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

type Conversation = {
  id: string
  messages: Message[]
}
```
