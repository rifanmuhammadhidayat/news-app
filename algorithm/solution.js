// =============================================
// SOLUSI ALGORITMA - 4 SOAL
// =============================================

console.log("=== SOLUSI ALGORITMA ===\n");

// =============================================
// SOAL 1: Reverse Alphabet dengan Angka di Akhir
// =============================================
function reverseAlphabetKeepNumbers(str) {
  // Pisahkan huruf dan angka
  const letters = [];
  const numbers = [];

  for (let char of str) {
    if (char >= "0" && char <= "9") {
      numbers.push(char);
    } else {
      letters.push(char);
    }
  }

  // Reverse huruf dan gabungkan dengan angka
  const reversedLetters = letters.reverse().join("");
  const result = reversedLetters + numbers.join("");

  return result;
}

console.log("SOAL 1: Reverse Alphabet dengan Angka di Akhir");
console.log("Input: 'NEGIE1'");
console.log("Output:", reverseAlphabetKeepNumbers("NEGIE1"));
console.log("Penjelasan: Huruf NEGIE di-reverse menjadi EIGEN, angka 1 tetap di akhir\n");

// =============================================
// SOAL 2: Cari Kata Terpanjang
// =============================================
function longest(sentence) {
  // Split kalimat menjadi array kata
  const words = sentence.split(" ");

  // Cari kata terpanjang
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return `${longestWord}: ${longestWord.length} character`;
}

console.log("SOAL 2: Cari Kata Terpanjang");
const sentence = "Saya sangat senang mengerjakan soal algoritma";
console.log("Input:", sentence);
console.log("Output:", longest(sentence));
console.log();

// =============================================
// SOAL 3: Hitung Kemunculan Kata dalam Array
// =============================================
function countOccurrences(input, query) {
  const result = [];

  for (let queryWord of query) {
    let count = 0;
    for (let inputWord of input) {
      if (inputWord === queryWord) {
        count++;
      }
    }
    result.push(count);
  }

  return result;
}

console.log("SOAL 3: Hitung Kemunculan Kata dalam Array");
const INPUT = ["xc", "dz", "bbb", "dz"];
const QUERY = ["bbb", "ac", "dz"];
const OUTPUT = countOccurrences(INPUT, QUERY);

console.log("INPUT =", INPUT);
console.log("QUERY =", QUERY);
console.log("OUTPUT =", OUTPUT);
console.log("Penjelasan:");
console.log("- 'bbb' muncul 1 kali di INPUT");
console.log("- 'ac' muncul 0 kali di INPUT");
console.log("- 'dz' muncul 2 kali di INPUT");
console.log();

// =============================================
// SOAL 4: Selisih Diagonal Matrix
// =============================================
function diagonalDifference(matrix) {
  const n = matrix.length;
  let primaryDiagonal = 0;
  let secondaryDiagonal = 0;

  for (let i = 0; i < n; i++) {
    // Diagonal utama (kiri atas ke kanan bawah)
    primaryDiagonal += matrix[i][i];

    // Diagonal kedua (kanan atas ke kiri bawah)
    secondaryDiagonal += matrix[i][n - 1 - i];
  }

  return {
    primaryDiagonal,
    secondaryDiagonal,
    difference: primaryDiagonal - secondaryDiagonal,
  };
}

console.log("SOAL 4: Selisih Diagonal Matrix");
const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("Matrix:");
matrix.forEach((row) => console.log(row));

const diagonalResult = diagonalDifference(matrix);
console.log("\nDiagonal Pertama (1 + 5 + 9) =", diagonalResult.primaryDiagonal);
console.log("Diagonal Kedua (0 + 5 + 7) =", diagonalResult.secondaryDiagonal);
console.log("Selisih =", diagonalResult.difference);

// =============================================
// TESTING TAMBAHAN
// =============================================
console.log("\n=== TESTING TAMBAHAN ===");

// Test soal 1 dengan input lain
console.log("\nTest Soal 1 - Input lain:");
console.log("'ABC123' ->", reverseAlphabetKeepNumbers("ABC123"));
console.log("'HELLO456' ->", reverseAlphabetKeepNumbers("HELLO456"));

// Test soal 2 dengan kalimat lain
console.log("\nTest Soal 2 - Kalimat lain:");
const sentence2 = "Pemrograman adalah seni memecahkan masalah";
console.log(sentence2, "->", longest(sentence2));

// Test soal 4 dengan matrix lain
console.log("\nTest Soal 4 - Matrix 4x4:");
const matrix4x4 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
const result4x4 = diagonalDifference(matrix4x4);
console.log("Matrix 4x4 - Diagonal 1:", result4x4.primaryDiagonal);
console.log("Matrix 4x4 - Diagonal 2:", result4x4.secondaryDiagonal);
console.log("Matrix 4x4 - Selisih:", result4x4.difference);
