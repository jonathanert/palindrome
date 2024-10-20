// Fungsi untuk memeriksa apakah sebuah angka adalah palindrome
function isPalindrome(num) {
  const strNum = num.toString(); // number array diubah menjadi string array
  const len = strNum.length; // cari total character yang terdapat di strNum
  const indeksTengah = Math.floor(len / 2) // mencari indeks tengah dengan total character / 2

  for (let i = 0; i < indeksTengah; i++) { // melakukan iterasi dari 0 sebanyak indeksTengah
    const x = strNum[i] // nilai depan strNum dari nilai i yang diminta
    const y = strNum[len - 1 - i] // nilai belakang strNum yang diminta dengan cara total character (strNum - 1 - nilai i)

    if (x !== y) { // validasi apakah nilai depan strNum sama dengan nilai belakang strNum
      return false; // memberikan response boolean false
    }
  } 

  return true; // memberikan response boolean true
}

// Fungsi untuk generate semua angka
function generateNumericPalindromes(n) {
  const palindromes = []; // array kosong untuk menyimpan palindrome

  for (let i = 1; i <= n; i++) { // melakukan iterasi dari 11 sebanyak request
    if (isPalindrome(i)) { // validasi apakah nilai i tersebut termasuk palindrome atau bukan
      palindromes.push(i); // menambahkan nilai i ke dalam array palindrome di setiap iterasi 
    }
  }

  return palindromes; // nilai i yang sudah ditambahkan pada proses looping diatas akan menjadi response berbentuk array 
}

// Fungsi untuk mencari palindrome terdekat
function findNearestPalindrome(n) {
  let closestPalindrome = n; // variabel ini akan digunakan untuk menyimpan palindrome terdekat yang ditemukan dan default valuenya n
  let difference = Infinity; // Variabel ini akan digunakan untuk menyimpan perbedaan antara n dengan palindrome terdekat dan default valuenya tak terhingga

  // Cari palindrome di sekitar n
  for (let i = n - 10; i <= n + 10; i++) { // melakukan iterasi dari n sebanyak request
    if (isPalindrome(i)) { // validasi apakah nilai i tersebut termasuk palindrome atau bukan
      const newDifference = Math.abs(n - i);
      if (newDifference < difference) {
        closestPalindrome = i;
        difference = newDifference;
      }
    }
  }

  return closestPalindrome;
}

function findNextPalindrome(n) {
  for (let i = n + 1; ; i++) {
    if (isPalindrome(i)) { // validasi apakah nilai i tersebut termasuk palindrome atau bukan
      return i;
    }
  }
}

const n = 109951995; // request 
const resultGeneratePalindrome = generateNumericPalindromes(n); // menjalankan fungsi generate numeric palindrome
const resultNearestPalindrome = findNearestPalindrome(n); // menjalankan fungsi generate numeric palindrome
const resultNextPalindrome = findNextPalindrome(n); // menjalankan fungsi mencari palindrome selanjutnya
console.log(resultNextPalindrome);