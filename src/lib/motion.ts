export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

function readIntroSeen(): boolean {
  try {
    return sessionStorage.getItem('intro-seen') === '1'
  } catch {
    return false
  }
}

/** The countdown intro plays once per browser session, so returning visitors skip it. */
export const SHOW_INTRO: boolean = typeof window !== 'undefined' && !readIntroSeen()

export function markIntroSeen(): void {
  try {
    sessionStorage.setItem('intro-seen', '1')
  } catch {
    // Storage can be blocked; the intro just plays again next time.
  }
}

/** Seconds to wait before the hero starts animating, so it lines up with the curtain opening. */
export function introDelay(reduceMotion: boolean | null): number {
  return SHOW_INTRO && !reduceMotion ? 1.7 : 0.1
}
