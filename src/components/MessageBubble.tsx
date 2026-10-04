import type { Message } from '../types/message'

type MessageBubbleProps = {
  message: Message
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const alignment = message.sender === 'user' ? 'justify-end' : 'justify-start'

  return (
    <li className={`flex ${alignment}`}>
      <p className="max-w-[85%] break-words rounded-lg bg-white px-4 py-3 text-stone-800 shadow-sm whitespace-pre-wrap">
        {message.text}
      </p>
    </li>
  )
}