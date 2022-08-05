/* UC2
Ensure @ and validate the mandatory 2nd part i.e. bridgelabz
*/
console.log("Welcome To Email Validation.");

const emailRegex = RegExp("^[a-zA-Z]*[@]{1}[.a-z]*$");

function validateEmail(email){
    if(emailRegex.test(email))
        console.log(email + " : Valid Email Address !!");
    else
        throw email + " : Invalid Email address !!";
}

try{
    validateEmail("santhosh@bridgelabz.co.in");
    validateEmail("abc@bridgelabz.co.in");
    validateEmail("abcgmailcom.com");
}
catch(e){
    console.error(e);
}