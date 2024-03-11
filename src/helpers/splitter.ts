export const splitter = (u: number) => {
  const chars = u.toString();

  switch (chars.length) {
    case 1:
      return chars.padStart(2, '0').split('');
    default:
      return chars.padStart(chars.length, '0').split('');
  }
}
