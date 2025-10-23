function sendWhatsApp() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Please fill out all fields before submitting!");
    return;
  }

  const phone = "6281234567890"; // Nomor WhatsApp marketing (ganti sesuai kebutuhan)
  const text = `Halo MegaHoliday Tours! Saya ${name} (${email}) ingin bertanya: ${message}`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");
}
