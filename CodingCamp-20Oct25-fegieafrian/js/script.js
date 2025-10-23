// Inisialisasi AOS
if (typeof AOS !== "undefined") {
  AOS.init({ duration: 800, once: true });
}

// Form Contact ke WhatsApp (dipakai di index & contact)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("⚠️ Harap isi semua kolom terlebih dahulu!");
        return;
      }

      const phone = "6281234567890"; // Ganti sesuai nomor marketing
      const text = `Halo, saya ${name} (${email}).%0A%0A${message}`;
      const waLink = `https://wa.me/${phone}?text=${text}`;
      window.open(waLink, "_blank");
      form.reset();
    });
  }
});
// Popup foto tim
const teamPhoto = document.getElementById("team-photo");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");

if (teamPhoto && popup) {
  teamPhoto.addEventListener("click", () => {
    popup.classList.remove("hidden");
    popup.classList.add("flex");
  });

  popup.addEventListener("click", () => {
    popup.classList.add("hidden");
  });
}
