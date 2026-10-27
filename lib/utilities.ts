export const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** Format seconds as m:ss */
export function formatTime(time: number) {
  if (!Number.isFinite(time)) return '0:00';
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
