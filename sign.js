function validateForm() {
    // Clear previous errors
    clearErrors();

    // Get form elements
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const identification = document.getElementById('identification').value.trim();
    const country = document.getElementById('country').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const rePassword = document.getElementById('re-password').value.trim();

    let isValid = true;

    // Validate First Name
    if (firstName === "") {
        showError('first-name-error', "First name is required.");
        isValid = false;
    }

    // Validate Last Name
    if (lastName === "") {
        showError('last-name-error', "Last name is required.");
        isValid = false;
    }

    // Validate Mobile (assuming 10 digits for the mobile number)
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
        showError('mobile-error', "Please enter a valid 10-digit mobile number.");
        isValid = false;
    }

    // Validate Identification
    if (identification === "") {
        showError('identification-error', "Identification is required.");
        isValid = false;
    }

    // Validate Country
    if (country === "") {
        showError('country-error', "Please select your country.");
        isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError('email-error', "Please enter a valid email address.");
        isValid = false;
    }

    // Validate Passwords
    if (password.length < 8) {
        showError('password-error', "Password must be at least 8 characters long.");
        isValid = false;
    }

    if (password !== rePassword) {
        showError('re-password-error', "Passwords do not match.");
        isValid = false;
    }

    // If all validations pass
    return isValid;
}

// Function to show error messages
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
    errorElement.style.display = 'block';
}

// Function to clear all error messages
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function (element) {
        element.innerText = '';
        element.style.display = 'none';
    });
}