import type { Conversation } from '../types/conversation'

type SidebarItemProps = {
  conversation: Conversation
  isActive: boolean
  onSelect: () => void
  onDelete: () => void
}

export default function SidebarItem({
  conversation,
  isActive,
  onSelect,
  onDelete,
}: SidebarItemProps) {
  return (
    <li className="flex items-center gap-2">
      <button
        aria-current={isActive ? 'page' : undefined}
        className={`flex min-w-0 flex-1 items-center rounded-lg border-l-4 px-3 py-2.5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 ${
          isActive
            ? 'border-l-violet-600 border-y-violet-200 border-r-violet-200 bg-violet-100 text-violet-950 shadow-sm'
            : 'border-l-transparent border-y-stone-200 border-r-stone-200 bg-white text-stone-700 hover:border-l-stone-300 hover:bg-stone-50'
        }`}
        onClick={onSelect}
        type="button"
      >
        <span className="truncate text-sm font-medium">{conversation.id}</span>
      </button>

      <button
        aria-label={`Excluir conversa ${conversation.id}`}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-stone-500 transition-colors hover:bg-red-100 hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        onClick={(event) => {
          event.stopPropagation()
          onDelete()
        }}
        type="button"
      >
        <span aria-hidden="true">✕</span>
      </button>
    </li>
  )
}
