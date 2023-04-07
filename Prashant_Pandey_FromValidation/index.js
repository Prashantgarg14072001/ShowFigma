const form = document.getElementById('form');

function validate(){
    const username= document.getElementById('username').value;
    const fnames= document.getElementById('fname').value;
    const lname= document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const dob= document.getElementById('dob').value;
    const country= document.getElementById('country').value;
    // const countryCode= document.getElementById('country-code').value;
    const phoneinput= document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;
    const file = document.getElementById('file').value;
    const pdffileinput = document.getElementById('pdf-file-input').value;
    const address = document.getElementById('address').value;
    const languagedropdown = document.getElementById('language-dropdown').value;
    const male = document.getElementById('male').value;
    const female = document.getElementById('female').value;
    const search = document.getElementById('search').value;
    const educationdropdown = document.getElementById('education-dropdown').value;
    const yeardropdown = document.getElementById('year-dropdown').value;
    const termscheckbox = document.getElementById('terms-checkbox').value;
    document.writeln("Your Info: => "+"<br>"+" Your name: "+ username +"<br>");
    document.writeln("Your First name: "+ fnames+"<br>");
    document.writeln("Your Last name: "+ lname +"<br>");
    document.writeln("Your Email address: "+ email +"<br>");
    document.writeln("Your Date Of Birth Is : "+ dob +"<br>");
    document.writeln("Your Country : "+ country +"<br>");
    // document.writeln("Your Country Code: "+ countryCode +"<br>");
    document.writeln("Your phone Number : "+ phoneinput +"<br>");
    document.writeln("Your Password : "+ password +"<br>");
    document.writeln("Your Confirm Password : "+ password2 +"<br>");
    document.writeln("Your Image File : "+ file+"<br>");
    document.writeln("Your Resume In PDF Formate : "+pdffileinput+"<br>");
    document.writeln("Your Address : "+address+"<br>");
    document.writeln("Your Language : "+languagedropdown+"<br>");
    document.writeln("Gender: "+male+"<br>");
    document.writeln("Gender: "+female+"<br>");
    document.writeln("Search Box: "+search+"<br>");
    document.writeln("Education : "+educationdropdown+"<br>")
    document.writeln("Yaer : "+yeardropdown+"<br>");
    document.writeln("Terms & Condition :"+termscheckbox+"<br>")
    if (fnb==false){
        alert('full name is invalid');
        return false;
}
else if (firstnb==false){
    alert('first name is invalid');
    return false;
}
else if (lastnb==false){
    alert('Last name is invalid');
    return false;
}else if(enb == false){
    alert('email is invalid');
    return false;
}
else if( passnb == false){
    alert('Password is invalid');
    return false;
}else if(passnbcon == false){
    alert('Password 2 is invalid');
    return false;
}
// else if(addnb==false){
//     alert('Address is invalid');
//       return false;
// }
else{
alert('form is submitted')
return true;
}
 

}


let fnb = false;
let firstnb = false;
let lastnb = false;
let enb = false;
let passnb = false;
let passnbcon = false;
let addnb = false;

 function fullName(){
    const username = document.getElementById('username').value;
    let len = username.length;
     let input = document.getElementById("username");
     input.value = input.value.charAt(0).toUpperCase() + input.value.slice(1);
    const re =/^[A-Z](?!.*([a-zA-Z0-9_@])\1{2,})(?=.*([a-zA-Z0-9_@])\1)[a-zA-Z0-9_@]{0,16}$/;
    if(len >= 16){
        document.getElementById('fullName').innerHTML = 'Name Should Be 16 Character';
    }else if(username.charAt(0) === ' '){
        document.getElementById('fullName').innerHTML = 'White Space Not Allowed';
    }else if(len <= 2){
        document.getElementById('fullName').innerHTML = 'Name Contain More Than 2 Character';
    }
    else if(re.test(username)){
        document.getElementById('fullName').innerHTML = '';
        fnb=true;
    }else{
        document.getElementById('fullName').innerHTML = `It content First latter UpperCase and remaining lower case character. it will also support @ and underscore ( _ ) only. 
        the word does not repeat more than 2 times`;
    }
 }
 username.addEventListener('keydown', (e) =>{
    if(e.key === ' '){
        e.preventDefault();
    }
 });
 
 function firstName(){
    const fname = document.getElementById('fname').value;
    let len = fname.length;
    let input = document.getElementById("fname");
    input.value = input.value.charAt(0).toUpperCase() + input.value.slice(1);
    const re = /^[A-Z](?!.*([a-zA-Z])\1{2,})(?=.*([a-zA-Z])\1)[a-zA-Z][\p{Lu}\p{L}\s.'-]{0,50}$/u;  
    if(len >= 20){
        document.getElementById('firstName').innerHTML = 'Name Should Be 20 Character';
    }else if(len <= 0){
        document.getElementById('firstName').innerHTML = 'White Space Not Allowed'
    }else if(len <= 2){
        document.getElementById('firstName').innerHTML = 'Name Contain More Than 2 Character'
    }else if(re.test(fname)){
        document.getElementById('firstName').innerHTML = '';
        firstnb = true;
    }else{
        document.getElementById('firstName').innerHTML = 'Invalid Name';
    }
    

 }
 fname.addEventListener("keydown", (e) => {
  if ((fname.selectionStart===0 && e.keyCode ===32) || /[^\w\s]/.test(e.key) || /\d/.test(e.key)) {
    e.preventDefault();
  }
});
 function lastName(){
    const lname = document.getElementById('lname').value;
    let len = lname.length;
    let input = document.getElementById("lname");
    const inputValue = input.value;
    if (inputValue.includes(".")) {
      input.disabled = true;
    } else {
      input.disabled = false;
    }
    input.value = input.value.charAt(0).toUpperCase() + input.value.slice(1);
    const re = /^(?!.*([a-zA-Z.])\1{1,})(?=.*([a-zA-Z.])\1)[a-zA-Z.]{0,15}$/gm;
    if(len >= 15){
        document.getElementById('lastName').innerHTML = 'Name Should Be 15 Character';
    }else if(len <= 0){
        document.getElementById('lastName').innerHTML = 'Last Name Enter At Least 1 character'
    }else if(re.test(lname)){
        document.getElementById('lastName').innerHTML = '';;
        lastnb = true;
    }else{
        document.getElementById('lastName').innerHTML = 'Invalid Name';
    }
 }
 lname.addEventListener('keydown', (e) =>{
    if(e.key === ' '){
        e.preventDefault();
    }
 });
 lname.addEventListener("keydown", (e) => {
  if ((lname.selectionStart===0 && e.keyCode ===32) ||  /\d/.test(e.key)) {
    e.preventDefault();
  }
});
 function emailFunc(){
    const email = document.getElementById('email').value;
    const reg = /^[^@\s]+@((?!subdomain\.com\.com)(?:(?!co\.in|ac\.in|gov\.in|org\.in)[^.\s])+\.([^.\s]{2,}|co\.in|ac\.in|gov\.in|org\.in))$/; 
    if(reg.test(email)){
        document.getElementById('emailFunc').innerHTML = '';
        enb = true;
    }else if(email.charAt(0) === ' '){
        document.getElementById('emailFunc').innerHTML = 'space not accept'
    }
    else{
        document.getElementById('emailFunc').innerHTML = 'Invalid Email';
    }
}
email.addEventListener('keydown', (e) =>{
    if(e.key === ' '){
        e.preventDefault();
    }
 });


 function validatePhone() {
    var phoneInput = document.getElementById("phone");
    var countryInput = document.getElementById("country");
    var countryCodeElement = document.getElementById("country-code");
    var countryCode = "";
    const input = document.getElementById("phone");
      const message = document.getElementById("message");
      
    if (countryInput.value === "india") {
      phoneInput.pattern = "[6-9]\\d{9}";
      phoneInput.placeholder = "Enter phone number (10 digits)";
      phoneInput.setAttribute("maxlength", "10");
      countryCode = "+91";
      countryCodeElement.innerHTML = countryCode;
      input.addEventListener("input", function() {
        const numericCount = input.value.replace(/\D/g, "").length;
        const remainingCount = 10 - numericCount;
        if (remainingCount > 0) {
          message.innerText = `You have ${remainingCount} characters remaining.`;
        } else {
          message.innerText = "";
        } 
        });
    } else if (countryInput.value === "uae") {
        input.addEventListener("input", function() {
            const numericCount = input.value.replace(/\D/g, "").length;
            const remainingCount = 9 - numericCount;
            if (remainingCount > 0) {
              message.innerText = `You have ${remainingCount} characters remaining.`;
            } else {
              message.innerText = "";
            } 
            });
      phoneInput.pattern = "[1-9]\\d{0,8}";
      phoneInput.placeholder = "Enter phone number (max 9 digits)";
      phoneInput.setAttribute("maxlength", "9");
      countryCode = "+971";
      countryCodeElement.innerHTML = countryCode;
    } else if (countryInput.value === "china") {
      phoneInput.pattern = "[1-9]\\d{0,10}";
      phoneInput.placeholder = "Enter phone number (max 10 digits)";
      phoneInput.setAttribute("maxlength", "10");
      countryCode = "+86";
      countryCodeElement.innerHTML = countryCode;
      input.addEventListener("input", function() {
        const numericCount = input.value.replace(/\D/g, "").length;
        const remainingCount = 10 - numericCount;
        if (remainingCount > 0) {
          message.innerText = `You have ${remainingCount} characters remaining.`;
        } else {
          message.innerText = "";
        } 
        });
    }
    else if (countryInput.value === "lanka") {
      phoneInput.pattern = "[1-9]\\d{0,9}";
      phoneInput.placeholder = "Enter phone number (max 10 digits)";
      phoneInput.setAttribute("maxlength", "10");
      countryCode = "+94";
      countryCodeElement.innerHTML = countryCode;
      input.addEventListener("input", function() {
        const numericCount = input.value.replace(/\D/g, "").length;
        const remainingCount = 10 - numericCount;
        if (remainingCount > 0) {
          message.innerText = `You have ${remainingCount} characters remaining.`;
        } else {
          message.innerText = "";
        } 
        });
    }
     else {
      phoneInput.pattern = "";
      phoneInput.placeholder = "";
      phoneInput.setAttribute("maxlength", "15");
      phoneInput.disabled = true;
      countryCodeElement.innerHTML = "";
      document.getElementById("phone-error").innerHTML = "Please select a country";
      document.getElementById("phone-success").innerHTML = "";
    }
  
    phoneInput.disabled = false;
    var phoneValue = phoneInput.value;
    var phoneIsValid = phoneValue.match(phoneInput.pattern);
  
    if (phoneIsValid && phoneValue.length === parseInt(phoneInput.getAttribute("maxlength"))) {
      document.getElementById("phone-error").innerHTML = "";
      // document.getElementById("phone-success").innerHTML = "Valid phone number for " + countryInput.options[countryInput.selectedIndex].text + " (" + countryCode + phoneValue + ")";
      document.getElementById("phone-success").innerHTML = "";
    } else {
      document.getElementById("phone-error").innerHTML = "Invalid phone number for " + countryInput.options[countryInput.selectedIndex].text;
      document.getElementById("phone-success").innerHTML = "";
    }

  }
  
const phoneinputFeild= document.getElementById("phone");
let phoneprevious = "";
let samePhoneCount =0;
phoneinputFeild.addEventListener("input", function (e) {
    const currentChar = e.data;
    if(currentChar == phoneprevious){
        samePhoneCount++;
        if(samePhoneCount>=2){
            phoneinputFeild.value = phoneinputFeild.value.slice(0,-1);
        }
    }else{
        samePhoneCount =0;
    }
    phoneprevious = currentChar;
});


function passwordValidation(){

    const password = document.getElementById('password').value;
    const reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if(reg.test(password)){
        document.getElementById('passVal').innerHTML = '';
        passnb = true;
    }else{
        document.getElementById('passVal').innerHTML = 'Password content minimum 8 Character Combination of Password is One Upper Case latter and 1 special Character are required';
    }

    return password
}
const passwordToggle = document.querySelectorAll(".password-toggle-icon");
    function togglePasswordVisibilityPass() {  
        for (let icon of passwordToggle) {
          if (icon.classList.contains("fa-eye-slash")) {
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
            password.type = "text";
            password2.type = "text";
          } else {
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");
            password.type = "password";
            password2.type = "password";
          }
        }
}


function passwordValidation2(){
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;
    if(password === password2){
        document.getElementById('passVal2').innerHTML = '';
        passnbcon = true;
    }else if(!(password.length === password2.length)){
        document.getElementById('passVal2').innerHTML = 'Password & Confirm Password not match';
    }
}
const passwordToggleIcons = document.querySelectorAll(".password-toggle-icon");
    function togglePasswordVisibility() {  
        for (let icon of passwordToggleIcons) {
          if (icon.classList.contains("fa-eye-slash")) {
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
            password.type = "text";
            password2.type = "text";
          } else {
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");
            password.type = "password";
            password2.type = "password";
          }
        }
}

function fileValidation(){
    var fileInput = document.getElementById('file');
    var filePath = fileInput.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if(!allowedExtensions.exec(filePath)){
        alert('Please upload file having extensions .jpeg/.jpg/.png/.gif only.');
       
        fileInput.value = '';
        return false;
    }else{
        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('imagePreview').innerHTML = '<img src="'+e.target.result+'"/>';
            };
            reader.readAsDataURL(fileInput.files[0]);
        }
    }
}

const pdfFileInput = document.getElementById("pdf-file-input");
		const pdfFileSubmit = document.getElementById("pdf-file-submit");
		const pdfFileValidationMessage = document.getElementById("pdf-file-validation-message");

		function validatePdfFile() {
			const pdfFile = pdfFileInput.files[0];
			if (pdfFile) {
				const pdfFileName = pdfFile.name;
				const pdfFileExtension = pdfFileName.split(".").pop().toLowerCase();
				if (pdfFileExtension === "pdf") {
					pdfFileValidationMessage.textContent = "PDF file selected.";
				} else {
					pdfFileValidationMessage.textContent = "Please select a PDF file.";
				}
			} else {
				pdfFileValidationMessage.textContent = "Please select a file.";
			}
		}

     pdfFileSubmit.addEventListener("click", validatePdfFile);




     function fullAddress(){
      const address = document.getElementById('address').value;
      let len = address.length;
      let input = document.getElementById("address");
      input.value = input.value.charAt(0).toUpperCase() + input.value.slice(1);
      const re = /^[/\//a-zA-Z0-9\s,'-]*$/;
      if(len >= 100){
          document.getElementById('fulladd').innerHTML = 'Name Should Be 16 Character';
      }else if(address.charAt(0) === ' '){
          document.getElementById('fulladd').innerHTML = 'Not Start With Space';
      }else if(len <= 2){
          document.getElementById('fulladd').innerHTML = 'Name Contain More Than 2 Character'
      }
      else if(re.test(address)){
          document.getElementById('fulladd').innerHTML = '';
          addnb = true;
      }else{
          document.getElementById('fulladd').innerHTML = 'Invalid Name';
      }
      const addressField1 = document.getElementById('address');
function addWhiteSpace(element) {
  const address = element.value;
  let formattedAddress = '';
  let count = 0;

  for (let i = 0; i < address.length; i++) {
    if (count > 0 && count % 16 === 0) {
      if (address[i] !== ' ') {
        formattedAddress += ' ';
      }
    }
    formattedAddress += address[i];
    if (address[i] !== ' ') {
      count++;
    } else {
      count = 0;
    }
  }

  element.value = formattedAddress;
}
addressField1.addEventListener('input', function() {
  addWhiteSpace(addressField1);
});
  } 
  const addressFieldSpace= document.getElementById("address");
let previousChar = "";
let sameCharCount = 0;
addressFieldSpace.addEventListener("input", function (e) {
    const currentChar = e.data;
    if(currentChar === previousChar){
        sameCharCount++;
        if(sameCharCount>=2){
            addressFieldSpace.value = addressFieldSpace.value.slice(0,-1);
        }
    }else{
        sameCharCount =0;
    }
    previousChar = currentChar; 
});

//   function fullAddress(){
//     const address = document.getElementById('address').value;
//     let len = address.length;
//     // let input = document.getElementById("address");
//     // input.value = input.value.charAt(0).toUpperCase() + input.value.slice(1);
//     const re = /^([A-Za-z0-9]+[\s,.\/-]?){1,16}(\s+[A-Za-z0-9]+[\s,.\/-]?){0,}(\s*)$/;

//     if(len >= 200){
//         document.getElementById('fulladd').innerHTML = 'Maximum Character length 200';
//     }
//     // else if(len >= 16){
//     //     document.getElementById('fulladd').innerHTML = 'Name Should Be 16 Character';
//     // }
//     else if(address.charAt(0) === ' '){
//         document.getElementById('fulladd').innerHTML = 'Not Start With Space';
//     }else if(len <= 2){
//         document.getElementById('fulladd').innerHTML = 'Name Contain More Than 2 Character'
//     }
//     else if(re.test(address)){
//         document.getElementById('fulladd').innerHTML = '<div class="textColores">Success</div>';
//         addnb = true;
//     }else{
//         document.getElementById('fulladd').innerHTML = 'Invalid Name';
//     }
// } 

const languageRegex = /^(en|fr|es|de|it)$/; 

function validateLanguageSelection() {
  const dropdown = document.getElementById("language-dropdown");
  const selectedValue = dropdown.value;
  if (languageRegex.test(selectedValue)) {
    dropdown.classList.remove("error");
  } else {
    dropdown.classList.add("error");
  }
}

function fetchData() {
    const maleRadio = document.getElementById("male");
    const femaleRadio = document.getElementById("female");
console.log("gender is : "+femaleRadio.value)
    if (maleRadio.checked) { 
      console.log("User selected Male");
    } else if (femaleRadio.checked) {
      console.log("User selected Female");
    } else {
      console.log("User did not select a gender");
    }
  }

  (function() {

    const form = document.querySelector('#sectionForm');
    const checkboxes = form.querySelectorAll('input[type=checkbox]');
    const checkboxLength = checkboxes.length;
    const firstCheckbox = checkboxLength > 0 ? checkboxes[0] : null;

    function init() {
        if (firstCheckbox) {
            for (let i = 0; i < checkboxLength; i++) {
                checkboxes[i].addEventListener('change', checkValidity);
            }

            checkValidity();
        }
    }

    function isChecked() {
        for (let i = 0; i < checkboxLength; i++) {
            if (checkboxes[i].checked) return true;
        }

        return false;
    }

    function checkValidity() {
        const errorMessage = !isChecked() ? 'At least one checkbox must be selected.' : '';
        firstCheckbox.setCustomValidity(errorMessage);
    }
    init();
    
})();

function searchValidation(){
    const searchValue = document.getElementById('search').value.trim();
    const reg = (/^[a-zA-Z*|\s*]{3,12}/g);
    let input = document.getElementById("search");
    input.value = input.value.charAt(0).toUpperCase() + input.value.slice(1);
    if(searchValue === ' '){
        document.getElementById('searchAns').innerHTML = 'Provide Input'; 
    }else if(searchValue === ''){
        document.getElementById('searchAns').innerHTML = 'field is required';
    }
    else if(searchValue.length <= 1){
        document.getElementById('searchAns').innerHTML = 'Provide more than 5 Character';
    }else if(searchValue.length >= 250){
        document.getElementById('searchAns').innerHTML = 'Not More than 250 character';
    }else if(reg.test(searchValue)){
        document.getElementById('searchAns').innerHTML = '';
    }
    else{
        document.getElementById('searchAns').innerHTML =  "Invalid Input";
    }
    search.addEventListener("keydown", (e) => {
      if ((search.selectionStart===0 && e.keyCode ===32) || /[^\w\s]/.test(e.key) || /\d/.test(e.key)) {
        e.preventDefault();
      }
    });
}

const educationRegex = /^(btech|ug|pg|diploma|class12|class10)$/; 

function validateEducationSelection() {
  const dropdown = document.getElementById("education-dropdown");
  const selectedValue = dropdown.value;
  if (educationRegex.test(selectedValue)) {
    dropdown.classList.remove("error");
  } else {
    dropdown.classList.add("error");
  }
}

const yearRegex = /^(1|2|3|final|others)$/; 

function validateYearSelection() {
  const dropdown = document.getElementById("year-dropdown");
  const selectedValue = dropdown.value;
  if (yearRegex.test(selectedValue)) {
    dropdown.classList.remove("error");
  } else {
    dropdown.classList.add("error");
  }
}



function myDateOfBirth(){
    const dob = document.getElementById('dob');
    const minDob = new Date('1995-04-09');
    const maxDob = new Date('2001-07-14');

    if(dob < minDob || dob > maxDob){
        document.getElementById("dateofbirth").innerHTML = "Please enter the given date";
    }else{
        document.getElementById("dateofbirth").innerHTML = " Date is Correct";
        return false;
    }
}
const termsCheckbox = document.querySelector('#terms-checkbox');
termsCheckbox.onkeyup = () => {
  if (!termsCheckbox.checked) {
    alert('Please agree to the terms and conditions.');
  } else {
    const termsData = fetchTermsData();
  }
}

function fetchTermsData() {
  const termsElement = document.querySelector('#terms');
  const termsRegex = /<p>(.*?)<\/p>/;
  const termsMatch = termsRegex.exec(termsElement.innerHTML);
  const termsData = termsMatch[1];
  return termsData;
}

