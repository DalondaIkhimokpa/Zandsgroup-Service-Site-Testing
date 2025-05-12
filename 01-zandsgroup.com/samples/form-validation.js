// form-validation.js
function validateContactForm(name, email, message) {
    if (!name || !email || !message) {
      return "All fields are required.";
    }
    if (!email.includes("@")) {
      return "Invalid email address.";
    }
    return "Form is valid.";
  }
  
  // Example usage
  console.log(validateContactForm("Dee", "dee@example.com", "Hello"));