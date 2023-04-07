const form = document.getElementById('form');
const username = document.getElementById('username');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');

// function setErrorMsg(input, errormsgs){
//   const formControl = input.parentElement; 
 
//   const small = formControl.querySelector('.small');
//   formControl.className="form-control error"; 
//   small.innerText = errormsgs;
// }

// function setSuccessMsg(input){
//   const formControl = input.parentElement; 
//   formControl.className="form-control success"; 
// }


function validateUserName(){
    const usernameInput = document.getElementById("username");
    const err = document.getElementById('nameErr');
    const usernamePattern = /^[a-zA-Z0-9]{3,}$/;
    usernameInput.addEventListener("input", () => {
      const username = usernameInput.value;
      
      const isValid = usernamePattern.test(username);
      if (username === "") {
        usernameInput.setCustomValidity("Please enter a username.");
        // setErrorMsg(username, 'username can not blank');
        err.innerHTML = 'username can not blank';
      } else if (isValid) {
        usernameInput.setCustomValidity("");
        // setSuccessMsg(username,'Success: Username is valid!');
        err.innerHTML = 'Username is valid!'
      } else {
        usernameInput.setCustomValidity("Username must be at least 3 alphanumeric characters.");
        // setErrorMsg(username, 'username must be at least 3 alphanumeric characters.');
        err.innerHTML = 'username must be at least 3 alphanumeric characters.'
      }
    });    
}
function validateFirstName(){
    const firstNameInput = document.getElementById("fname");
    const firstNamePattern = /^[A-Z][a-zA-Z0-9]*$/;
    firstNameInput.addEventListener("input", () => {
      const firstName = firstNameInput.value;
      const isValid = firstNamePattern.test(firstName);
      if (isValid) {
        firstNameInput.setCustomValidity("");
        console.log("Success: First name is valid!");
      } else {
        firstNameInput.setCustomValidity("Please enter a valid first name.");
        console.error("Error: Please enter a valid first name.");
      }
    });
}

function validateLastName(){
    const lastNameInput = document.getElementById("lname");
const lastNamePattern = /^[a-zA-Z0-9]+$/;

lastNameInput.addEventListener("input", () => {
  const lastName = lastNameInput.value;
  const isValid = lastNamePattern.test(lastName);

  if (lastName === "") {
    lastNameInput.setCustomValidity("Please enter a last name.");
    console.error("Error: Last name is required.");
  } else if (isValid) {
    lastNameInput.setCustomValidity("");
    console.log("Success: Last name is valid!");
  } else {
    lastNameInput.setCustomValidity("Please enter a valid last name.");
    console.error("Error: Please enter a valid last name.");
  }
});
}
function  validateEmail(){
    const emailInput = document.getElementById("email");
const emailPattern = /^\S+@\S+\.\S+$/;
const enteredEmails = new Set();

emailInput.addEventListener("input", () => {
  const email = emailInput.value;
  const isValid = emailPattern.test(email);

  if (email === "") {
    emailInput.setCustomValidity("Please enter an email address.");
    console.error("Error: Email is required.");
  } else if (enteredEmails.has(email)) {
    emailInput.setCustomValidity("This email has already been entered.");
    console.error("Error: This email has already been entered.");
  } else if (isValid) {
    emailInput.setCustomValidity("");
    enteredEmails.add(email);
    console.log("Success: Email is valid and not a duplicate!");
  } else {
    emailInput.setCustomValidity("Please enter a valid email address.");
    console.error("Error: Please enter a valid email address.");
  }
});
}
 function validatePhone(){
    
const phoneInput = document.getElementById("phone");
const countryCodeInput = document.getElementById("country-code");

phoneInput.addEventListener("input", () => {
  const phone = phoneInput.value;
  const countryCode = countryCodeInput.value;
  let isValid = true;

  switch (countryCode) {
    case "india":
      isValid = /^[6-9]\d{9}$/.test(phone);
      break;
    // Add more cases for other countries here
    default:
      isValid = /^\d+$/.test(phone);
      break;
  }

  if (phone === "") {
    phoneInput.setCustomValidity("Please enter a phone number.");
    console.error("Error: Phone number is required.");
  } else if (isValid) {
    phoneInput.setCustomValidity("");
    console.log(`Success: Phone number is valid for ${countryCode}!`);
  } else {
    phoneInput.setCustomValidity(`Please enter a valid phone number for ${countryCode}.`);
    console.error(`Error: Please enter a valid phone number for ${countryCode}.`);
  }
});
 }







form.addEventListener('submit', (event) =>{
    event.preventDefault();
    validateUserName();
    validateFirstName();
    validateLastName();
    validateEmail();
    validatePhone();
})

