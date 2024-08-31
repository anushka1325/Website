// JavaScript for Hero Section Animation
window.addEventListener('load', function() {
    const heroHeading = document.querySelector('.hero-content h1');
    heroHeading.style.opacity = 1;
    heroHeading.style.transform = 'translateY(0)';
});

// JavaScript for Tab Navigation
function showTab(tabId) {
    // Hide all tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Remove active class from all tab buttons
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => button.classList.remove('active'));

    // Show the selected tab content
    document.getElementById(tabId).classList.add('active');

    // Add active class to the clicked button
    const activeButton = Array.from(buttons).find(button => button.getAttribute('onclick').includes(tabId));
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Initialize with the first tab visible
document.addEventListener('DOMContentLoaded', () => {
    showTab('education');
});

