import type { Sender } from '../types/message'

type SenderToggleProps = {
  disabled?: boolean
  onToggle: () => void
  sender: Sender
}

export default function SenderToggle({
  disabled = false,
  onToggle,
  sender,
}: SenderToggleProps) {
  const isRobot = sender === 'robot'

  return (
    <button
      aria-label={`Remetente atual: ${isRobot ? 'robô' : 'usuário'}. Alternar remetente`}
      aria-pressed={isRobot}
      className="flex h-10 shrink-0 items-center gap-2 rounded-md px-2 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-100 disabled:cursor-not-allowed disabled:opacity-50"
      disabled={disabled}
      onClick={onToggle}
      type="button"
    >
      <span aria-hidden="true">{isRobot ? '🤖' : '👤'}</span>
    </button>
  )
}