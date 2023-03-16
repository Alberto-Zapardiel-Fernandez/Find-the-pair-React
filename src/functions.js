//TODO generar los numeros y desordenar para devolverlos en el array (shuffle array)
export function generateNumbers(numbers) {
  if (numbers <= 0) return
  const totalNumbers = []

  for (let i = 0; i < numbers / 2; i++) {
    totalNumbers.push(i)
    totalNumbers.push(i)
  }
  //Barajear aquí
  return totalNumbers
}
