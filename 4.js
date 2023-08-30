// Anda sedang menulis kode untuk mengontrol lampu lalu lintas kota Anda. Anda memerlukan fungsi untuk menangani setiap perubahan dari green, ke yellow, ke red, dan lagi green.

// Selesaikan fungsi yang menggunakan string sebagai argumen yang mewakili keadaan lampu saat ini dan mengembalikan string yang mewakili keadaan lampu yang harus diubah.

// Misalnya, jika masukannya adalah green, maka keluarannya haruslah yellow.

function updateLight(current) {
  if (current === "green") {
    current = "yellow";
  } else if (current === "yellow") {
    current = "red";
  } else if (current === "red") {
    current = "green";
  } else {
  }

  return current;
}

console.log(updateLight("green"));
