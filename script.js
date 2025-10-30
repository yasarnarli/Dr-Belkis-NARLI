// Mobil menü aç/kapa
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Yıl bilgisini otomatik olarak ekle
document.getElementById('year').textContent = new Date().getFullYear();

// Basit form gönderim örneği (ileride backend eklenebilir)
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mesajınız gönderildi. Teşekkür ederim!');
    e.target.reset();
});
