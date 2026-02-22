// Check if user is logged in
window.addEventListener('load', () => {
    const currentUser = localStorage.getItem('currentUser');
    const authNav = document.getElementById('authNav');
    const userNav = document.getElementById('userNav');

    if (currentUser) {
        authNav.style.display = 'none';
        userNav.style.display = 'flex';
        document.querySelector('.user-email').textContent = currentUser;
    } else {
        authNav.style.display = 'block';
        userNav.style.display = 'none';
    }
});

// Logout function
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('currentUser');
        location.reload();
    }
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Load saved theme
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('selectedTheme') || 'theme1';
    document.body.className = savedTheme;
});