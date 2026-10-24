import { useChatStore } from '../stores/chatStore'
import ChatInput from './ChatInput'
import MessageList from './MessageList'
import Sidebar from './Sidebar'

export default function Chat() {
  const activeConversationId = useChatStore((state) => state.activeConversationId)
  const activeConversation = useChatStore((state) =>
    state.conversations.find(
      (conversation) => conversation.id === state.activeConversationId,
    ),
  )
  const sender = useChatStore((state) => state.sender)
  const toggleSender = useChatStore((state) => state.toggleSender)
  const addMessage = useChatStore((state) => state.addMessage)
  const disabled = activeConversationId === null

  function handleSend(text: string) {
    addMessage(text)
  }

  return (
    <main className="min-h-dvh bg-stone-200 px-0 sm:px-4">
      <section
        aria-label="Chat"
        className="mx-auto flex h-dvh w-full max-w-6xl overflow-hidden bg-stone-50 shadow-sm"
      >
        <Sidebar />

        <div className="flex min-w-0 flex-1 flex-col">
          {activeConversation === undefined ? (
            <div className="flex flex-1 items-center justify-center p-6 text-center text-stone-600">
              Crie ou selecione uma conversa
            </div>
          ) : (
            <>
              <MessageList messages={activeConversation.messages} />
              <ChatInput
                disabled={disabled}
                onSend={handleSend}
                onToggleSender={toggleSender}
                sender={sender}
              />
            </>
          )}
        </div>
      </section>
    </main>
  )
}
