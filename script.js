
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Signup form handler
document.getElementById('signup-form')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const signupMessage = document.getElementById('signup-message');

    // Check if the email is already registered
    if (localStorage.getItem(email)) {
        signupMessage.textContent = 'Email already registered. Please use a different email.';
    } else if (password !== confirmPassword) {
        signupMessage.textContent = 'Passwords do not match. Please try again.';
    } else {
        // Store user data in localStorage
        const userData = {
            name: name,
            password: password
        };
        localStorage.setItem(email, JSON.stringify(userData));
        signupMessage.textContent = 'Sign Up Successful! You can now log in.';
        document.getElementById('signup-form').reset(); // Reset form
    }
});

// Login form handler
document.getElementById('login-form')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const errorMessage = document.getElementById('error-message');

    // Check if email exists and password matches
    const storedUserData = localStorage.getItem(email);
    const storedPassword = storedUserData ? JSON.parse(storedUserData).password : null;

    if (!storedUserData) {
        errorMessage.textContent = 'Incorrect username. Please try again.';
    } else if (storedPassword !== password) {
        errorMessage.textContent = 'Incorrect password. Please try again.';
    } else {
        alert('Login Successful!');
        sessionStorage.setItem('loggedIn', 'true');
        window.location.href = 'index.html'; // Redirect to index page
    }
});

// Test form handler
document.getElementById('test-form')?.addEventListener('submit', function (event) {
    event.preventDefault();
    const sugarLevel = parseInt(document.getElementById('sugar-level').value);
    const resultDiv = document.getElementById('result');

    if (sugarLevel < 70) {
        resultDiv.innerHTML = `<h3>Your blood sugar level is low. Please consult a doctor.</h3>
                               <a href="appointment.html">Book an Appointment</a>`;
    } else if (sugarLevel > 126) {
        resultDiv.innerHTML = `<h3>Your blood sugar level is high. Please consult a doctor.</h3>
                               <a href="appointment.html">Book an Appointment</a>`;
    } else {
        resultDiv.innerHTML = `<h3>Your blood sugar level is normal. Keep up the good work!</h3>`;
    }
});

// Appointment form handler
document.getElementById('appointment-form')?.addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Gather the form data
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Here you would normally send the data to a backend server.
    // For this example, we'll just display a success message.
    
    const responseMessage = document.getElementById('response-message');
    responseMessage.innerHTML = `<h3>Appointment Request Submitted!</h3>
                                 <p>Thank you, ${fullName}. We will contact you shortly to confirm your appointment on ${date} at ${time}.</p>`;

    // Optionally, reset the form
    document.getElementById('appointment-form').reset();
});

