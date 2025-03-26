const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const authModal = document.getElementById('auth-modal');
const closeModalBtn = document.querySelector('.close-btn');
const authForm = document.getElementById('auth-form');
const authSubmitBtn = document.getElementById('auth-submit-btn');
const authModalTitle = document.getElementById('auth-modal-title');
const toggleSignupText = document.getElementById('toggle-signup');
const authToggleMsg = document.getElementById('auth-toggle-msg');

// Show the modal
function showModal() {
    authModal.style.display = 'flex';
}

// Close the modal
function closeModal() {
    authModal.style.display = 'none';
}

// Switch between login and signup
function toggleAuthMode() {
    if (authModalTitle.innerText === 'Login') {
        authModalTitle.innerText = 'Sign Up';
        authSubmitBtn.innerText = 'Create Account';
        authToggleMsg.innerHTML = 'Already have an account? <span id="toggle-login">Login</span>';
    } else {
        authModalTitle.innerText = 'Login';
        authSubmitBtn.innerText = 'Submit';
        authToggleMsg.innerHTML = "Don't have an account? <span id='toggle-signup'>Sign Up</span>";
    }
}

// Event Listeners
loginBtn.addEventListener('click', () => {
    authModal.style.display = 'flex';
    authModalTitle.innerText = 'Login';
    authSubmitBtn.innerText = 'Submit';
});

signupBtn.addEventListener('click', () => {
    authModal.style.display = 'flex';
    authModalTitle.innerText = 'Sign Up';
    authSubmitBtn.innerText = 'Create Account';
});

closeModalBtn.addEventListener('click', closeModal);

// Toggle between Login and Sign Up
authToggleMsg.addEventListener('click', (e) => {
    if (e.target.id === 'toggle-signup') {
        toggleAuthMode();
    } else if (e.target.id === 'toggle-login') {
        toggleAuthMode();
    }
});

authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert(Form submitted: ${document.getElementById('username').value});
    closeModal();
});