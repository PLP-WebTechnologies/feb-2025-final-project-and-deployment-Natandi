// Example interaction: show alert when form is submitted
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector("#contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Stop form from actually submitting
      alert("Thank you for reaching out! We will get back to you shortly.");
      contactForm.reset(); // Reset form fields after submission
    });
  }
});
