const barangData = {
  "001": { nama: "A", harga: 10000 },
  "002": { nama: "B", harga: 20000 },
  "003": { nama: "C", harga: 30000 },
};

function handleFormSubmit() {
  const kodeBarang = document.getElementById("kodeBarang").value;
  const banyakBarang = parseInt(document.getElementById("banyakBarang").value);

  if (!kodeBarang || banyakBarang <= 0) {
    alert("input tidak valid");
    return;
  }
  const totalHarga = barangData[kodeBarang].harga * banyakBarang;
  alert(`Total pembayaran adalah : ${totalHarga}`);
  const jumlahBayar = parseFloat(prompt("Masukkan uang user :"));
  if (jumlahBayar < totalHarga) {
    alert("Jumlah uang tidak valid!");
    return;
  }
  const kembalian = jumlahBayar - totalHarga;

  alert(`Total kembalian anda adalah : ${kembalian}`);
}
