document.getElementById('loginForm').addEventListener('submit', function(event) {
    
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
  
    // Simple validation (replace with server-side checks in production)
    if (!username ||!password) {
      event.preventDefault(); // Prevent form submission
       errorMessage.textContent = 'Invalid username or password.'
    }
  
  });