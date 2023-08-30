// Tugas Anda adalah membuat fungsi yang melakukan empat operasi matematika dasar. Fungsi ini harus mengambil tiga argumen - operasi (string/char), nilai1 (angka), nilai2 (angka). Fungsi tersebut harus mengembalikan hasil angka setelah menerapkan operasi yang dipilih.

// Contoh(Operator, nilai1, nilai2) --> keluaran
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return 0;
  }
}

console.log(basicOp("+", 10, 10));
