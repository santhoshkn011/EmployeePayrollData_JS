class EmployeePayrollData {
    //Constructor

    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
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
        return "id: " + this.id + "\nname: " + this.name + "\nSalary: " + this.salary;
    }
} 
    let employeePayrollData = new EmployeePayrollData(11, "Santhosh", 30000);
console.log(employeePayrollData.toString());