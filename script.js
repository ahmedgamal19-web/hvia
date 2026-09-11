// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal Logic for Intern Login
const modal = document.getElementById("loginModal");

function openLoginModal() {
    modal.style.display = "block";
}

function closeLoginModal() {
    modal.style.display = "none";
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
