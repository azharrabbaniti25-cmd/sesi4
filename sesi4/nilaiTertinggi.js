// data nilai siswa
let studentsScore = [
  { name: "Andi", score: 90 },
  { name: "Rudi", score: 80 },
  { name: "Dira", score: 100 },
];

// urutkan nilai dari tertinggi ke terendah
studentsScore.sort((a, b) => b.score - a.score);

// tampilkan semua siswa berdasarkan urutan nilai
studentsScore.forEach((student, index) => {
  console.log(`Peringkat ${index + 1}`);
  console.log(`Nama  : ${student.name}`);
  console.log(`Nilai : ${student.score}`);
  console.log("----------------");
});
