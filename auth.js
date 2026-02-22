let isLogin = true;

function toggleForm() {
    isLogin = !isLogin;
    const formTitle = document.getElementById('formTitle');
    const toggleText = document.getElementById('toggleText');
    const confirmGroup = document.getElementById('confirmPasswordGroup');
    const authBtn = document.querySelector('.btn-auth');

    if (isLogin) {
        formTitle.textContent = 'Login to Your Account';
        toggleText.innerHTML = 'Don\'t have an account? <strong onclick="toggleForm()" style="cursor:pointer; color:#e74c3c;">Sign Up</strong>';
        confirmGroup.style.display = 'none';
        authBtn.textContent = 'Continue';
    } else {
        formTitle.textContent = 'Create New Account';
        toggleText.innerHTML = 'Already have an account? <strong onclick="toggleForm()" style="cursor:pointer; color:#e74c3c;">Login</strong>';
        confirmGroup.style.display = 'block';
        authBtn.textContent = 'Create Account';
    }
    clearErrors();
}

function clearErrors() {
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmError').textContent = '';
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function handleAuth() {
    clearErrors();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let hasError = false;

    if (!email) {
        document.getElementById('emailError').textContent = 'Email is required';
        hasError = true;
    } else if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email';
        hasError = true;
    }

    if (!password) {
        document.getElementById('passwordError').textContent = 'Password is required';
        hasError = true;
    } else if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
        hasError = true;
    }

    if (hasError) return;

    if (isLogin) {
        // LOGIN
        const users = JSON.parse(localStorage.getItem('users')) || {};
        
        if (users[email] && users[email].password === password) {
            localStorage.setItem('currentUser', email);
            showSuccess('Login successful! Redirecting...');
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 1500);
        } else {
            document.getElementById('emailError').textContent = 'Email or password is incorrect';
        }
    } else {
        // SIGNUP
        if (!confirmPassword) {
            document.getElementById('confirmError').textContent = 'Please confirm your password';
            return;
        }

        if (password !== confirmPassword) {
            document.getElementById('confirmError').textContent = 'Passwords do not match';
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || {};

        if (users[email]) {
            document.getElementById('emailError').textContent = 'Email already registered';
            return;
        }

        users[email] = {
            password: password,
            createdAt: new Date().toISOString(),
            userId: 'USER_' + Math.random().toString(36).substr(2, 9).toUpperCase()
        };
        localStorage.setItem('users', JSON.stringify(users));
        
        showSuccess('Account created successfully! Please login.');
        setTimeout(() => {
            isLogin = true;
            toggleForm();
            document.getElementById('email').value = '';
            document.getElementById('password').value = '';
        }, 1500);
    }
}

function demoLogin() {
    const demoEmail = 'test@example.com';
    const demoPassword = 'password123';
    
    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (!users[demoEmail]) {
        users[demoEmail] = {
            password: demoPassword,
            createdAt: new Date().toISOString(),
            userId: 'USER_DEMO123'
        };
        localStorage.setItem('users', JSON.stringify(users));
    }

    localStorage.setItem('currentUser', demoEmail);
    showSuccess('Demo login successful! Redirecting...');
    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 1500);
}

function showSuccess(message) {
    const successMsg = document.createElement('div');
    successMsg.className = 'success-message';
    successMsg.textContent = message;
    document.body.appendChild(successMsg);
    
    setTimeout(() => successMsg.remove(), 2000);
}

document.getElementById('authForm').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        handleAuth();
    }
});