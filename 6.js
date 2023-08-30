// Buat fungsi yang menggunakan bilangan bulat sebagai argumen dan mengembalikan bilangan "Even"genap atau "Odd"ganjil.

function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

console.log(evenOrOdd(4));
