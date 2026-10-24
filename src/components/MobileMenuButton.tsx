type MobileMenuButtonProps = {
  isOpen: boolean
  onToggle: () => void
}

export default function MobileMenuButton({
  isOpen,
  onToggle,
}: MobileMenuButtonProps) {
  if (isOpen) return null

  return (
    <button
      aria-label="Abrir menu lateral"
      className="absolute left-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-lg border border-stone-200 bg-white/90 text-stone-700 shadow-sm transition hover:bg-stone-100 md:hidden"
      onClick={onToggle}
      type="button"
    >
      <span className="flex flex-col gap-1.5" aria-hidden="true">
        <span className="block h-0.5 w-5 rounded-full bg-current" />
        <span className="block h-0.5 w-5 rounded-full bg-current" />
        <span className="block h-0.5 w-5 rounded-full bg-current" />
      </span>
    </button>
  )
}
