import { useState } from 'react'
import MessageList from './MessageList'
import ChatInput from './ChatInput'
import type { Message, Sender } from '../types/message'

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [sender, setSender] = useState<Sender>('user')

  function handleSend(text: string) {
    if (!text.trim()) return

    const message: Message = {
      id: crypto.randomUUID(),
      text,
      sender,
    }

    setMessages((currentMessages) => [...currentMessages, message])
  }

  return (
    <main className="min-h-dvh bg-stone-200 px-4">
      <section
        aria-label="Chat"
        className="mx-auto flex h-dvh max-w-2xl flex-col bg-stone-50"
      >
        <MessageList messages={messages} />
        <ChatInput
          onSend={handleSend}
          onToggleSender={() =>
            setSender((currentSender) =>
              currentSender === 'user' ? 'robot' : 'user',
            )
          }
          sender={sender}
        />
      </section>
    </main>
  )
}