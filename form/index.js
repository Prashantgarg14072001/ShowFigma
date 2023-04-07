const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const pass = document.getElementById('pass');
const cpass = document.getElementById('cpass');

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    validate();
})

const isEmail = (emailVal) =>{
    var atSymbol = emailVal.indexOf("@");
    if(atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot < atSymbol + 2 ) return false;
    if(dot === emailVal.length - 1) return false;
    return true;
} 
const validate = () =>{
const usernameVal = username.value.trim();
const emailVal = email.value.trim();
const mobileVal = mobile.value.trim();
const passVal = pass.value.trim();
const cpassVal =cpass.value.trim();

if (usernameVal === ""){
    setErrorMsg(username, 'username can not blank');
}else if(usernameVal.length<3){
    setErrorMsg(username, 'username min 3 char');
}else{
    setSuccessMsg(username);
}


if (emailVal===""){
    setErrorMsg(email, 'email can not blank');
}else if(!isEmail(emailVal)){
    setErrorMsg(emailVal , 'email is not vaild');
}else{
    setSuccessMsg(email);
}
}

    function setErrorMsg(input, errormsgs){
        const formControl = input.parentElement; 
        const small = formControl.querySelector('small');
        formControl.className="form-control error"; 
        small.innerText = errormsgs;
}
    function setSuccessMsg(input){
        const formControl = input.parentElement; 
        formControl.className="form-control success"; 
    }