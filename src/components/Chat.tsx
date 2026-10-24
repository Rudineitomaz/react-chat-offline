import { useState } from 'react'
import { useChatStore } from '../stores/chatStore'
import ChatInput from './ChatInput'
import MessageList from './MessageList'
import MobileMenuButton from './MobileMenuButton'
import Sidebar from './Sidebar'

export default function Chat() {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const activeConversationId = useChatStore((state) => state.activeConversationId)
  const activeConversation = useChatStore((state) =>
    state.conversations.find(
      (conversation) => conversation.id === state.activeConversationId,
    ),
  )
  const sender = useChatStore((state) => state.sender)
  const toggleSender = useChatStore((state) => state.toggleSender)
  const addMessage = useChatStore((state) => state.addMessage)
  const createConversation = useChatStore((state) => state.createConversation)
  const selectConversation = useChatStore((state) => state.selectConversation)
  const disabled = activeConversationId === null

  function handleSend(text: string) {
    addMessage(text)
  }

  function handleCreateConversation() {
    createConversation()
    setSidebarOpen(false)
  }

  function handleSelectConversation(id: string) {
    selectConversation(id)
    setSidebarOpen(false)
  }

  return (
    <main className="min-h-dvh bg-stone-200 px-0 sm:px-4">
      <section
        aria-label="Chat"
        className="relative mx-auto flex h-dvh w-full max-w-6xl overflow-hidden bg-stone-50 shadow-sm"
      >
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onCreateConversation={handleCreateConversation}
          onSelectConversation={handleSelectConversation}
        />

        <div className="relative flex min-w-0 flex-1 flex-col pt-14 md:pt-0">
          <MobileMenuButton
            isOpen={isSidebarOpen}
            onToggle={() => setSidebarOpen((prev) => !prev)}
          />

          {activeConversation === undefined ? (
            <div className="flex flex-1 items-center justify-center p-6 pt-16 text-center text-stone-600 md:pt-6">
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
