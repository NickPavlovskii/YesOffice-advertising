export type CountUpRange = {
  from: number
  to: number
}

export type UseCountUpOptions = {
  duration?: number
}

export function parseCountUpRange(value: string): CountUpRange | null {
  const match = value.match(/^(\d+)\s*-\s*(\d+)$/)
  if (!match) return null

  return {
    from: Number(match[1]),
    to: Number(match[2]),
  }
}

export function formatCountUpRange({ from, to }: CountUpRange): string {
  return `${from}-${to}`
}
