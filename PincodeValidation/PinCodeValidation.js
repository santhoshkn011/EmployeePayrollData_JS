/* UC1
The Postal Index Number (PIN) or PIN Code is a 6 digit code of Post Office numbering used by India Post.
*/
console.log("Welcome To PinCode Validation: ");
const pincodeRegex = RegExp("^[1-9][0-9]{5}$");

function validatePincode(pincode){
    if(pincodeRegex.test(pincode))
        console.log(pincode + " : Valid PinCode!");
    else
        throw pincode + " : Invalid Pincode!";
}

try{
    validatePincode("400088");
    validatePincode("004456");   
}
catch(e){
    console.error(e);
}

try{
    validatePincode("400");  
}
catch(e){
    console.error(e);
}