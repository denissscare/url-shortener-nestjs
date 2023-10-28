export function randomAlias(aliasLenght: number) {
  let res = '';
  const chars: string =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789';
  for (let i = 0; i < aliasLenght; i++) {
    res += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return res;
}
