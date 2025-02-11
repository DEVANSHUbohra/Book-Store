// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  
    // Select the login form and input fields
    const loginForm = document.querySelector('.login_form form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
  
    // Add submit event listener to the form
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent form submission
      
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      
      // Basic validation for email and password
      if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      
      if (password.length < 6) {
        alert('Password should be at least 6 characters long.');
        return;
      }
  
      // If both email and password are valid, allow form submission
      loginForm.submit(); // You can remove this or replace it with an AJAX request
    });
  
    // Email validation function
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });
  headings.forEach((heading) => {
    heading.addEventListener('click', function () {
        const sibling = this.nextElementSibling;
        if (sibling.style.display === "none" || !sibling.style.display) {
            sibling.style.display = "block";
        } else {
            sibling.style.display = "none";
        }
    });
});
window.addEventListener('scroll', function() {
    const sidebar = document.querySelector('.sidebar_menu');
    if (window.scrollY > 50) {
        sidebar.classList.add('scrolled');
    } else {
        sidebar.classList.remove('scrolled');
    }
});