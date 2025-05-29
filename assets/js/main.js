// Example: Show an alert when the "Contact Me" button is clicked

document.addEventListener('DOMContentLoaded', function() {
  var ctaBtn = document.querySelector('.cta-btn');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', function(e) {
      // Optional: Uncomment to prevent default link behavior if needed
      // e.preventDefault();
      alert('Thank you for your interest! Please fill out the contact form to reach me.');
    });
  }
});