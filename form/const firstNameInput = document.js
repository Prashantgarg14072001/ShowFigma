const firstNameInput = document.getElementById("first-name");
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

//last name
const lastNameInput = document.getElementById("last-name");
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


//username


const usernameInput = document.getElementById("username");
const usernamePattern = /^[a-zA-Z0-9]{3,}$/;

usernameInput.addEventListener("input", () => {
  const username = usernameInput.value;
  const isValid = usernamePattern.test(username);

  if (username === "") {
    usernameInput.setCustomValidity("Please enter a username.");
    console.error("Error: Username is required.");
  } else if (isValid) {
    usernameInput.setCustomValidity("");
    console.log("Success: Username is valid!");
  } else {
    usernameInput.setCustomValidity("Username must be at least 3 alphanumeric characters.");
    console.error("Error: Username must be at least 3 alphanumeric characters.");
  }
});


//email

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


//email second type

const emailInput = document.getElementById("email");
const emailPattern = /^\S+@\S+\.com$/;
let hasComDomain = false;

emailInput.addEventListener("input", () => {
  const email = emailInput.value;
  const isValid = emailPattern.test(email);

  if (email === "") {
    emailInput.setCustomValidity("Please enter an email address.");
    console.error("Error: Email is required.");
  } else if (hasComDomain) {
    emailInput.setCustomValidity("Please enter an email address with the .com domain only once.");
    console.error("Error: Please enter an email address with the .com domain only once.");
  } else if (isValid) {
    emailInput.setCustomValidity("");
    hasComDomain = true;
    console.log("Success: Email is valid and has the .com domain only once!");
  } else {
    emailInput.setCustomValidity("Please enter a valid email address with the .com domain.");
    console.error("Error: Please enter a valid email address with the .com domain.");
  }
});

//email third type

const emailInput = document.getElementById("email");
const emailPattern = /^\S+@\S+\.com$/;

emailInput.addEventListener("input", () => {
  const email = emailInput.value;
  const isValid = emailPattern.test(email);

  if (email === "") {
    emailInput.setCustomValidity("Please enter an email address.");
    console.error("Error: Email is required.");
  } else if (/(.)\1+/.test(email)) {
    emailInput.setCustomValidity("Please enter an email address without duplicate characters.");
    console.error("Error: Please enter an email address without duplicate characters.");
  } else if (isValid) {
    emailInput.setCustomValidity("");
    console.log("Success: Email is valid and does not contain duplicate characters!");
  } else {
    emailInput.setCustomValidity("Please enter a valid email address with the .com domain.");
    console.error("Error: Please enter a valid email address with the .com domain.");
  }
});


//phone

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




countryCodeInput.addEventListener("change", () => {
  const countryCode = countryCodeInput.value;
  console.log(`Country code changed to ${countryCode}`);
});

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

countryCodeInput.addEventListener("change", () => {
  const countryCode = countryCodeInput.value;
  console.log(`Country code changed to ${countryCode}`);
});
