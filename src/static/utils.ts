export function setContains<T> (a: T[], b: T[]): boolean {
  return b.every(i => a.includes(i));
}

export function setEquals<T> (a: T[], b: T[]): boolean {
  return a.every(i => b.includes(i)) && b.every(i => a.includes(i));
}