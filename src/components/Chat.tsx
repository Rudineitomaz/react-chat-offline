import { useState } from 'react'
import MessageList from './MessageList'
import type { Message } from '../types/message'

export default function Chat() {
  const [messages] = useState<Message[]>([])

  return (
    <main className="min-h-dvh bg-stone-200 px-4">
      <section
        aria-label="Chat"
        className="mx-auto flex h-dvh max-w-2xl flex-col bg-stone-50"
      >
        <MessageList messages={messages} />
      </section>
    </main>
  )
}