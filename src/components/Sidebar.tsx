import { useChatStore } from '../stores/chatStore'
import SidebarItem from './SidebarItem'

export default function Sidebar() {
  const {
    conversations,
    activeConversationId,
    createConversation,
    selectConversation,
    deleteConversation,
  } = useChatStore()

  return (
    <aside className="flex w-280px shrink-0 flex-col border-r border-stone-200 bg-stone-100/80 backdrop-blur-sm">
      <div className="border-b border-stone-200 p-4">
        <button
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-stone-800 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stone-700"
          onClick={createConversation}
          type="button"
        >
          <span aria-hidden="true">＋</span>
          Nova conversa
        </button>
      </div>

      <nav aria-label="Conversas" className="flex-1 overflow-y-auto p-3">
        {conversations.length === 0 ? (
          <p className="px-2 pt-4 text-sm text-stone-500">
            Nenhuma conversa criada.
          </p>
        ) : (
          <ul className="space-y-2">
            {conversations.map((conversation) => (
              <SidebarItem
                conversation={conversation}
                isActive={conversation.id === activeConversationId}
                key={conversation.id}
                onDelete={() => deleteConversation(conversation.id)}
                onSelect={() => selectConversation(conversation.id)}
              />
            ))}
          </ul>
        )}
      </nav>
    </aside>
  )
}
