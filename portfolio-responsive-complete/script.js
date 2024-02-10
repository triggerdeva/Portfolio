document.addEventListener('DOMContentLoaded', function () {
    // Function to toggle navigation menu
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('show');
        });
    }

    // Add smooth scrolling to navigation links
    const navLinks = document.querySelectorAll('.nav__link');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust the offset if you have a fixed header
                behavior: 'smooth'
            });

            // Close navigation menu after clicking on a link (if needed)
            if (navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
            }
        });
    });

    // Functionality for the Contact section (example: form submission)
    const contactForm = document.querySelector('.contact__form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Serialize form data
            const formData = new FormData(contactForm);

            // Send form data to a server using Fetch API
            fetch('your-endpoint-url', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    // Handle successful submission
                    console.log('Form submitted successfully');
                    // Optionally, you can display a success message to the user
                } else {
                    // Handle failed submission
                    console.error('Form submission failed');
                    // Optionally, you can display an error message to the user
                }
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle network errors or other exceptions
            });
        });
    }

    // Add functionality for other sections like Skills and Work here
});
