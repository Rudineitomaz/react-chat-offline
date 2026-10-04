import { useEffect, useRef, useState } from 'react'
import SenderToggle from './SenderToggle'
import type { Sender } from '../types/message'

type ChatInputProps = {
  onSend: (text: string) => void
  onToggleSender: () => void
  sender: Sender
}

const MAX_TEXTAREA_HEIGHT = 144

export default function ChatInput({
  onSend,
  onToggleSender,
  sender,
}: ChatInputProps) {
  const [text, setText] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const textarea = textareaRef.current
    if (!textarea) return

    textarea.style.height = 'auto'
    textarea.style.height = `${Math.min(textarea.scrollHeight, MAX_TEXTAREA_HEIGHT)}px`
    textarea.style.overflowY =
      textarea.scrollHeight > MAX_TEXTAREA_HEIGHT ? 'auto' : 'hidden'
  }, [text])

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!text.trim()) return

    onSend(text)
    setText('')
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key.toLowerCase() === 'enter' && !event.shiftKey) {
      event.preventDefault()
      event.currentTarget.form?.requestSubmit()
    }
  }

  return (
    <footer className="sticky bottom-0 bg-stone-50 p-4 pt-2">
      <form
        aria-label="Enviar mensagem"
        className={`flex items-end gap-3 rounded-lg border bg-white p-3 shadow-sm transition-colors ${
          sender === 'robot'
            ? 'border-2 border-purple-500'
            : 'border-stone-300'
        }`}
        onSubmit={handleSubmit}
      >
        <SenderToggle onToggle={onToggleSender} sender={sender} />
        <textarea
          ref={textareaRef}
          aria-label="Mensagem"
          className="max-h-36 min-h-6 flex-1 resize-none overflow-y-hidden bg-transparent text-stone-800 outline-none placeholder:text-stone-500"
          onChange={(event) => setText(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Digite uma mensagem..."
          value={text}
        />
        <button
          className="shrink-0 rounded-md bg-stone-800 px-3 py-2 text-sm font-medium text-white transition-colors enabled:hover:bg-stone-700 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={!text.trim()}
          type="submit"
        >
          Enviar
        </button>
      </form>
    </footer>
  )
}