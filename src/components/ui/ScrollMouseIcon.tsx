export function ScrollMouseIcon() {
  return (
    <div
      className="animate-mouse-bob motion-reduce:animate-none"
      aria-hidden
    >
      <svg
        width="24"
        height="38"
        viewBox="0 0 24 38"
        fill="none"
        className="text-slate-500"
      >
        <rect
          x="1"
          y="1"
          width="22"
          height="36"
          rx="11"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <g className="animate-scroll-wheel motion-reduce:animate-none">
          <rect x="10" y="8" width="4" height="8" rx="2" fill="currentColor" />
        </g>
      </svg>
    </div>
  )
}
