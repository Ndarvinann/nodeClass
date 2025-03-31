//prevent automatic form submission

document.getElementById('produceForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    // Clear previous errors
    clearErrors();
  
    // Validate inputs
    let isValid = true;
  
    // Produce Name Validation
    const produceName = document.getElementById('produceName').value.trim();
    if (produceName.length < 2 || !/^[a-zA-Z0-9\s]+$/.test(produceName)) {
      showError('produceNameError', 'Produce name must be at least 2 characters and alphanumeric.');
      isValid = false;
    }
  
    // Produce Type Validation
    const produceType = document.getElementById('produceType').value.trim();
    if (produceType.length < 2 || !/^[a-zA-Z]+$/.test(produceType)) {
      showError('produceTypeError', 'Produce type must be at least 2 characters and alphabets only.');
      isValid = false;
    }
  
    // Tonnage Validation
    const tonnage = document.getElementById('tonnage').value.trim();
    if (tonnage === "" || tonnage.length < 3 || isNaN(tonnage)) {
      showError('tonnageError', 'Tonnage must be a number and at least 3 characters.');
      isValid = false;
    }
  
    // Cost Validation
    const cost = document.getElementById('cost').value.trim();
    if (cost === "" || cost.length < 5 || isNaN(cost)) {
      showError('costError', 'Cost must be a number and at least 5 characters.');
      isValid = false;
    }
  
    // If all valid, submit the form
    if (isValid) {
      alert('Produce registered successfully!');
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


  // //ensure all fields are filled 
  // if(!agentName || !agentEmail || !agentPhone || !branch ||!agentID || !hireDate){
  //   showMessage("please fill out all feilds.", "red");
  //   return;
  // }