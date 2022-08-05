/* UC4
Make sure 400 088 is also valid along with 400088
*/
console.log("Welcome To PinCode Validation: ");
const pincodeRegex = RegExp("^[1-9][0-9]{2}\\s{0,1}[0-9]{3}$");

function validatePincode(pincode){
    if(pincodeRegex.test(pincode))
        console.log(pincode + " : Valid PinCode!");
    else
        throw pincode + " : Invalid Pincode!";
}

try{
    validatePincode("400088");
    validatePincode("400 088");
    validatePincode("400");
}
catch(e){
    console.error(e);
}
