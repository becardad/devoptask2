function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    if (username === "" || password === "") {
        errorMessage.textContent = "Both fields are required!";
        return false; // Prevent form submission
    }
    
    // You can add further validation for the username and password here if necessary
    errorMessage.textContent = ""; // Clear any previous error messages
    return true; // Allow form submission
}
