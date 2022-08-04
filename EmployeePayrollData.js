/*
Ability to extend Employee Payroll Data to store gender and start date
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
        this._name = name;
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

let employeePayrollData = new EmployeePayrollData(1, "Santhosh", 30000);
console.log(employeePayrollData.toString());

let newEmployeePayrollData = new EmployeePayrollData(2 , "Kumar" , 40000 , "M" , currentDate);
console.log(newEmployeePayrollData.toString());