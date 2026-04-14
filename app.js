const loginForm = document.getElementById('loginForm');
const guestBtn = document.getElementById('guestBtn');

// Function to handle redirection
function enterDashboard(name, role) {
    localStorage.setItem('userName', name);
    localStorage.setItem('userRole', role);
    window.location.href = 'dashboard.html';
}

// 1. Logic for the Login Form
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    
    if (username.trim() === "") {
        // If empty, treat as guest automatically
        enterDashboard("Guest Student", "Explorer");
    } else {
        // If name exists, treat as Pro User
        enterDashboard(username, "Pro Learner");
    }
});

// 2. Logic for the Guest Button
guestBtn.addEventListener('click', () => {
    enterDashboard("Guest Student", "Explorer");
});