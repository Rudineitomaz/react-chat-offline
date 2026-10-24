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
        className={`flex flex-1 items-center justify-between rounded-lg border px-3 py-2 text-left transition-colors ${
          isActive
            ? 'border-violet-300 bg-violet-50 text-violet-900 shadow-sm'
            : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
        }`}
        onClick={onSelect}
        type="button"
      >
        <span className="truncate text-sm font-medium">{conversation.id}</span>
      </button>

      <button
        aria-label={`Excluir conversa ${conversation.id}`}
        className="flex h-9 w-9 items-center justify-center rounded-md text-stone-500 transition-colors hover:bg-stone-200 hover:text-stone-700"
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
