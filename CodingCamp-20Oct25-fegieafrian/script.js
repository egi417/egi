// Reusable small helper
function el(id){ return document.getElementById(id); }

const form = el('contactForm');
if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = el('name').value.trim();
    const email = el('email').value.trim();
    const phone = el('phone').value.trim();
    const message = el('message').value.trim();
    const status = el('status');

    // Required check
    if(!name || !email || !phone || !message){
      status.style.color = 'crimson';
      status.textContent = 'Please fill all fields.';
      return;
    }

    // Email pattern
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
    if(!emailPattern.test(email)){
      status.style.color = 'crimson';
      status.textContent = 'Please enter a valid email.';
      return;
    }

    // Phone basic check (digits only)
    const digitsOnly = phone.replace(/\s+/g, '');
    if(isNaN(digitsOnly) || digitsOnly.length < 8){
      status.style.color = 'crimson';
      status.textContent = 'Please enter a valid phone number.';
      return;
    }

    // Success (we're not sending to server in this project)
    status.style.color = 'green';
    status.textContent = '✅ Message submitted — thank you!';
    form.reset();
  });
}
