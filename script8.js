function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const age = document.getElementById("age").value.trim();
  const gender = document.getElementById("gender").value;
  const eyeColor = document.getElementById("eyeColor").value;
  const height = document.getElementById("height").value.trim();
  const weight = document.getElementById("weight").value.trim();
  const description = document.getElementById("description").value.trim();
  const plan = document.getElementById("plan").value;
  const message = document.getElementById("message");

  // Basic name check
  if (name === "") {
    showMessage("Please enter your full name.", "red");
    return false;
  }

  // Email validation
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  if (!emailPattern.test(email)) {
    showMessage("Enter a valid email address.", "red");
    return false;
  }

  // Phone validation
  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone)) {
    showMessage("Phone number must be 10 digits.", "red");
    return false;
  }

  // Age validation
  if (age === "" || age < 16 || age > 60) {
    showMessage("Age must be between 16 and 60.", "red");
    return false;
  }

  // Gender check
  if (gender === "") {
    showMessage("Please select your gender.", "red");
    return false;
  }

  // Eye color check
  if (eyeColor === "") {
    showMessage("Please select your eye color.", "red");
    return false;
  }

  // Height and Weight validation
  if (height === "" || height < 120 || height > 230) {
    showMessage("Enter a valid height (120–230 cm).", "red");
    return false;
  }

  if (weight === "" || weight < 30 || weight > 200) {
    showMessage("Enter a valid weight (30–200 kg).", "red");
    return false;
  }

  // Physical description
  if (description === "") {
    showMessage("Please provide a short physical description.", "red");
    return false;
  }

  // Plan check
  if (plan === "") {
    showMessage("Please select a membership plan.", "red");
    return false;
  }

  // If all good
  showMessage("Registration Successful! Welcome to our gym 💪", "green");
  document.getElementById("gymForm").reset();
  return false; // prevent page reload
}

// Helper function to show messages
function showMessage(msg, color) {
  const message = document.getElementById("message");
  message.style.color = color;
  message.innerText = msg;
}
