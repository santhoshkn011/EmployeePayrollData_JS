/* UC4
Lets handle optional part
i.e. xyz in
abc.xyz@bridgelabz.co.in
NOTE: make sure only
following are valid special
characters _,+,
-,.
*/
console.log("Welcome To Email Validation.");

const emailRegex = RegExp("^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[.a-z]*");

function validateEmail(email){
    if(emailRegex.test(email))
        console.log(email + " : Valid Email Address !!");
    else
        throw email + " : Invalid Email address !!";
}

try{
    validateEmail("santhosh@bridgelabz.co.in");
    validateEmail("abc_def@bridgelabz.co.in");
    validateEmail("abc()*@gmail.com");
}
catch(e){
    console.error(e);
}