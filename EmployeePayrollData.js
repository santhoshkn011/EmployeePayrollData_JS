/*
Ability to check the employee id and salary are non zero positive number, the gender is M or F and
date is not a future date
*/
class EmployeePayrollData {
    
    //Constructor

    constructor(...empData){
        this.id = empData[0];
        this.name = empData[1];
        this.salary = empData[2];
        this.genders = empData[3];
        this.startDate = empData[4];
    }

    //Getter And Setter
    get id() {
        return this._id;
    }

    set id(id) {
        let idRegx = RegExp('^[1-9][0-9]*$');
        if (idRegx.test(id))
            this._id = id;
        else throw 'Invalid ID';
            
    }

    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Invalid Name';
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        let salaryRegx = RegExp('^[1-9][0-9]*$');
        if (salaryRegx.test(salary))
            this._salary = salary;
        else throw 'Invalid Salary.';
    }

    get genders() {
        return this._genders;
    }

    set genders(genders) {
        let genderRegex = RegExp('^(?:m|M|male|Male|f|F|female|Female)$');
        if (genderRegex.test(genders)){
            this._genders = genders;
        }   
        else {
            throw 'Invalid gender';  
        }      
    }

    get startDate() {
        return this._startDate;
    }

    set startDate(startDate) {
        if(startDate <= new Date())
            this._startDate = startDate;
        else throw 'Invalid date';         
    }

    //Method
    toString() {     
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const employeeDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-us", options);
        return "Id = " + this.id + ", Name = " + this.name + ", Gender = " + this.genders + ", Salary = " + this.salary + ", Start Date = " + employeeDate;
    }
} 
/*
toLocaleDateString() returns the date (not the time) of a date, as a string, using locale conventions.
*/

// const date = new Date();
// let currentDate = date.toLocaleDateString();

try {
    let employeePayrollData1 = new EmployeePayrollData(1, "Santhosh", 30000, "M", new Date());
    console.log(employeePayrollData1.toString());
}
catch (e) {
    console.error("An error caught: "+e);
}

try {
    let teresaPayrollData = new EmployeePayrollData(0, "Namitha", 50000, "F", new Date());
    console.log(teresaPayrollData.toString()); 
}
catch (e) {
    console.error("An error caught: "+e);
}

try {
    let employeePayrollData = new EmployeePayrollData(2, "Kumar", 5000000, "M", new Date());
    console.log(employeePayrollData.toString()); 
}
catch (e) {
    console.error("An error caught: "+e);
}

try {
    let teresaPayrollData = new EmployeePayrollData(3, "Nayak", 50000, "Mal", new Date());
    console.log(teresaPayrollData.toString()); 
}
catch (e) {
    console.error("An error caught: "+e);
}