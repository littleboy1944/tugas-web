// Ambil elemen hamburger dan list navigasi berdasarkan ID
const burgerButton = document.getElementById('burger-button');
const navList = document.getElementById('nav-list');
const navLinks = document.querySelectorAll('#nav-list ul li a');

// Tambahkan event listener untuk klik
burgerButton.addEventListener('click', () => {
  // Tambahkan atau hapus class 'active' pada list navigasi dan burger button
  navList.classList.toggle('active');
  burgerButton.classList.toggle('active');
});

// Tutup menu saat link navigasi diklik
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        burgerButton.classList.remove('active');
    });
});

// Tambahkan smooth scrolling untuk tautan navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Mencegah perilaku default tautan (melompat langsung)
        e.preventDefault();

        // Mengambil elemen target berdasarkan nilai href
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Menggulir ke elemen target dengan efek smooth
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});