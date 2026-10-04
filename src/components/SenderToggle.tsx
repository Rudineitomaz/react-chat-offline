import type { Sender } from '../types/message'

type SenderToggleProps = {
  onToggle: () => void
  sender: Sender
}

export default function SenderToggle({
  onToggle,
  sender,
}: SenderToggleProps) {
  const isRobot = sender === 'robot'

  return (
    <button
      aria-label={`Remetente atual: ${isRobot ? 'robô' : 'usuário'}. Alternar remetente`}
      aria-pressed={isRobot}
      className="flex h-10 shrink-0 items-center gap-2 rounded-md px-2 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-100"
      onClick={onToggle}
      type="button"
    >
      <span aria-hidden="true">{isRobot ? '🤖' : '👤'}</span>
      <span>{isRobot ? 'Robô' : 'Usuário'}</span>
    </button>
  )
}