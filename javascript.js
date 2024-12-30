const teksAnimasi = document.getElementById("animasi");

teksAnimasi.style.opacity = '0';
teksAnimasi.style.transform = 'translateY(60px)'; // Posisi awal, tersembunyi di bawah

window.onload = () => {
    teksAnimasi.style.transition = 'opacity 1s ease-in, transform 2s'; // Durasi yang sama
    teksAnimasi.style.opacity = '1';
    teksAnimasi.style.transform = 'translateY(0)'; // Kembalikan ke posisi awal setelah muncul
};



const teksAnimasi2 = document.querySelectorAll('.product-card, .contact-info'); // Menggunakan querySelectorAll untuk mendapatkan semua elemen dengan class 'animasi'

teksAnimasi2.forEach(teks => {
  teks.style.opacity = '0';
  teks.style.transform = 'translateY(60px)';
});

function animasiSaatScroll() {
  teksAnimasi2.forEach(teks => {
    const posisiElemen = teks.getBoundingClientRect().top;
    const tinggiJendela = window.innerHeight;

    if (posisiElemen < tinggiJendela) {
      teks.style.transition = 'opacity 1s ease-in, transform 2s';
      teks.style.opacity = '1';
      teks.style.transform = 'translateY(0)';
    }
  });
}

window.addEventListener('scroll', animasiSaatScroll);

// script.js

// Ambil tombol
const scrollUpBtn = document.getElementById("scrollUpBtn");

// Tampilkan tombol saat scroll lebih dari 100px
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
};

// Kembali ke atas saat tombol diklik
scrollUpBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
