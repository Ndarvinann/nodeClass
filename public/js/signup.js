document.getElementById('salesAgentForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    // Clear previous errors
    clearErrors();
  
    // Validate inputs
    let isValid = true;
  
    // Agent Name Validation
    const agentName = document.getElementById('agentName').value.trim();
    if (agentName.length < 2 || !/^[a-zA-Z0-9\s]+$/.test(agentName)) {
      showError('agentNameError', 'Agent name must be at least 2 characters and alphanumeric.');
      isValid = false;
    }
  
    // Branch Validation
    const branch = document.getElementById('branch').value;
    if (branch === "") {
      showError('branchError', 'Please select a branch.');
      isValid = false;
    }
  
    // Contact Validation
    const contact = document.getElementById('contact').value.trim();
    if (!/^\d{10}$/.test(contact)) {
      showError('contactError', 'Contact must be a valid 10-digit phone number.');
      isValid = false;
    }
  
    // If all valid, submit the form
    if (isValid) {
      alert('Sales agent registered successfully!');
      // Here you can add code to send data to the server
    }
  });
  
  function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
  }
  
  function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
      error.textContent = '';
      error.style.display = 'none';
    });
  }