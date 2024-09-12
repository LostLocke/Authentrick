document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const closeBtn = document.querySelector('.close-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const navLinks = document.querySelectorAll('.mobile-nav a');

    // Toggle mobile menu visibility
    menuIcon.addEventListener('click', function() {
        mobileNav.classList.add('active');
    });

    // Close the menu when the close button is clicked
    closeBtn.addEventListener('click', function() {
        mobileNav.classList.remove('active');
    });

    // Close the menu when any nav link is clicked
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('active');
        });
    });
});
