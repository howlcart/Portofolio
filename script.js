document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Terima kasih, ' + name + '! Pesan Anda telah dikirim.');
        document.getElementById('contactForm').reset();
    } else {
        alert('Harap isi semua field.');
    }
});
// Fungsi untuk menampilkan ucapan selamat datang berdasarkan waktu
function displayWelcomeMessage() {
    const hour = new Date().getHours();
    let message = "";
    let description = "Ini adalah portofolio saya yang dibuat menggunakan HTML, CSS, dan JavaScript.";

    if (hour >= 5 && hour < 12) {
        message = "Welcome To My Portofolio!";
        description = "Hope Your Day Full With Joy.";
    } else if (hour >= 12 && hour < 18) {
        message = "Selamat Siang! ☀️";
        description = "Semoga siangmu produktif! Lihat proyek-proyek terbaru saya.";
    } else if (hour >= 18 && hour < 21) {
        message = "Selamat Sore! 🌇";
        description = "Saat yang tepat untuk melihat portofolio saya. Selamat bersantai!";
    } else {
        message = "Selamat Malam! 🌙";
        description = "Jangan lupa istirahat! Mari lihat proyek-proyek saya sebelum tidur.";
    }

    document.getElementById('welcomeMessage').textContent = message;
    document.getElementById('welcomeDescription').textContent = description;
}

// Panggil fungsi saat halaman dimuat
window.onload = displayWelcomeMessage;