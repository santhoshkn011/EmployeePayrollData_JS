/*
Validate Email address with a regex. 
The email consists of minimum 3 and optional 2 more parts with mandatory @ and . abc.xyz@bridgelabz.co.in
Here abc, bridgelabz and co are mandatory and the remaining 2 are optional
To begin with lets validate the mandatory part and start with abc
*/
console.log("Welcome To Email Validation.");

const emailRegex = RegExp("^[a-zA-Z][.@a-zA-Z]*$");

function validateEmail(email){
    if(emailRegex.test(email))
        console.log(email + " : Valid Email Address !!");
    else
        throw email + " : Invalid Email address !!";
}

try{
    validateEmail("santhosh@bridgelabz.co.in");
    validateEmail("abc.xyz@bridgelabz.co.in");
    validateEmail(".abc@abc.com");
}
catch(e){
    console.error(e);
}