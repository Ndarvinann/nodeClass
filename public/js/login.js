document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
  
    // Simple validation (replace with server-side checks in production)
    if (username === 'admin' && password === 'password123') {
      errorMessage.textContent = '';
      alert('Login successful! Redirecting...');
      // window.location.href = '/dashboard'; // Redirect in a real app
    } else {
      errorMessage.textContent = 'Invalid username or password.';
    }
  });