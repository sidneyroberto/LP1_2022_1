export const calculateCheckDigit = (code: string) => {
  if (code.length == 12) {
    let result = 0
    for (let i = 0; i < code.length; i++) {
      const multiplier = i % 2 == 0 ? 1 : 3
      const character = code.charAt(i)
      const digit = parseInt(character)
      result += digit * multiplier
    }

    const difference = result % 10
    const checkDigit = difference != 0 ? 10 - difference : difference
    return checkDigit
  }

  return -1
}
