/*
Ability to check the name
starts with capital and has at
least 3 characters - Use Regex Pattern - Use Try Catch in case of Error
*/
class EmployeePayrollData {
    
    //Constructor

    constructor(...empData){
        this.id = empData[0];
        this.name = empData[1];
        this.salary = empData[2];
        this.gender = empData[3];
        this.startDate = empData[4];
    }

    //Getter And Setter
    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is incorrect!!';
    }

    //Method
    toString() {     
        return "id: " + this.id + "\nname: " + this.name + "\nSalary: " + this.salary + "\nGender: " +this.gender+ "\nStartDate: " + this.startDate;
    }
} 
/*
toLocaleDateString() returns the date (not the time) of a date, as a string, using locale conventions.
*/
const date = new Date();
let currentDate = date.toLocaleDateString();

let employeePayrollData1 = new EmployeePayrollData(1, "Santhosh", 30000);
console.log(employeePayrollData1.toString());
console.log();

try {
    let employeePayrollData2 = new EmployeePayrollData(2, "kumar", 35000);
    console.log(employeePayrollData2.toString());  
}catch (e) {
    console.error(e);
}

console.log();
let employeePayrollData3 = new EmployeePayrollData(3 , "Nayak" , 40000 , "M" , currentDate);
console.log(employeePayrollData3.toString());