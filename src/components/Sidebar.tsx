import { useChatStore } from '../stores/chatStore'
import SidebarItem from './SidebarItem'

type SidebarProps = {
  isOpen?: boolean
  onClose?: () => void
  onCreateConversation?: () => void
  onSelectConversation?: (id: string) => void
}

export default function Sidebar({
  isOpen = true,
  onClose,
  onCreateConversation,
  onSelectConversation,
}: SidebarProps) {
  const {
    conversations,
    activeConversationId,
    createConversation,
    selectConversation,
    deleteConversation,
  } = useChatStore()

  const handleCreateConversation = () => {
    if (onCreateConversation) {
      onCreateConversation()
      return
    }

    createConversation()
  }

  const handleSelectConversation = (id: string) => {
    if (onSelectConversation) {
      onSelectConversation(id)
      return
    }

    selectConversation(id)
  }

  const handleDeleteConversation = (id: string) => {
    deleteConversation(id)
    if (onClose && activeConversationId === id) {
      onClose()
    }
  }

  return (
    <>
      {onClose && (
        <button
          aria-label="Fechar menu lateral"
          className={`fixed inset-0 z-30 bg-stone-950/30 transition-opacity duration-300 ease-in-out motion-reduce:transition-none md:hidden ${
            isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
          onClick={onClose}
          type="button"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-72 shrink-0 flex-col border-r border-stone-200 bg-stone-100/95 shadow-xl backdrop-blur-sm transition-transform duration-300 ease-in-out motion-reduce:transition-none md:static md:z-auto md:w-72 md:translate-x-0 md:border-r md:bg-stone-100/80 md:shadow-none ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="space-y-3 border-b border-stone-200 p-5">
          {isOpen && onClose && (
            <div className="flex justify-end md:hidden">
              <button
                aria-label="Fechar menu lateral"
                className="flex h-9 w-9 items-center justify-center rounded-md text-stone-600 transition-colors hover:bg-stone-200 hover:text-stone-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-700"
                onClick={onClose}
                type="button"
              >
                <span aria-hidden="true">✕</span>
              </button>
            </div>
          )}
          <button
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-stone-800 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-stone-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-700"
            onClick={handleCreateConversation}
            type="button"
          >
            <span aria-hidden="true">＋</span>
            Nova conversa
          </button>
        </div>

        <nav aria-label="Conversas" className="flex-1 overflow-y-auto p-4">
          {conversations.length === 0 ? (
            <p className="px-2 pt-3 text-sm leading-relaxed text-stone-500">
              Nenhuma conversa criada.
            </p>
          ) : (
            <ul className="space-y-2.5">
              {conversations.map((conversation) => (
                <SidebarItem
                  conversation={conversation}
                  isActive={conversation.id === activeConversationId}
                  key={conversation.id}
                  onDelete={() => handleDeleteConversation(conversation.id)}
                  onSelect={() => handleSelectConversation(conversation.id)}
                />
              ))}
            </ul>
          )}
        </nav>
      </aside>
    </>
  )
}
