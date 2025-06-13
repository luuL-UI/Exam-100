document.addEventListener('DOMContentLoaded', () => {
    // Strict login check - redirect to login if not authenticated
    // Only perform the redirect if not already on the login page
    if (!localStorage.getItem('isLoggedIn') && window.location.pathname.endsWith('/home.html')) {
        // Clear any existing session data
        localStorage.clear();
        window.location.href = 'index.html'; // Ensure redirect to login page
    }

    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');
    const loginBtn = document.querySelector('.login-btn');
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');

    // Add input animations
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', () => {
            input.parentElement.style.transform = 'scale(1)';
        });
    });

    // Toggle password visibility
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.classList.toggle('fa-eye');
        togglePassword.classList.toggle('fa-eye-slash');
    });

    // Handle form submission
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        // Add loading state
        loginBtn.classList.add('loading');
        errorMessage.textContent = '';

        try {
            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Check credentials
            if (username === 'DRAhmed' && password === '12345') {
                // Show success state
                loginBtn.classList.remove('loading');
                loginBtn.classList.add('success');
                loginBtn.innerHTML = '<i class="fas fa-check"></i> Success!';

                // Store login state
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('username', username);

                // Redirect after success animation
                setTimeout(() => {
                    window.location.href = 'home.html';
                }, 1000);
            } else {
                throw new Error('Invalid credentials');
            }
        } catch (error) {
            // Show error state
            loginBtn.classList.remove('loading');
            errorMessage.textContent = 'Invalid username or password';
            
            // Shake animation
            loginForm.style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => {
                loginForm.style.animation = '';
            }, 500);

            // Clear password field
            passwordInput.value = '';
        }
    });

    // Add hover effect to the left panel
    const leftPanel = document.querySelector('.left');
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        leftPanel.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    });
}); 