"use strict";
class Department {
    constructor(id, n) {
        this.id = id;
        this.n = n;
        // private id :string;
        // private name:string;
        this.employee = [];
        // this.id = id;
        // this.name = n;
    }
    describe() {
        console.log(`${this.id} : ${this.n}`);
    }
    addEmployee(employee) {
        this.employee.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employee.length);
        console.log(this.employee);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT"); //super calls the base constructor, it can take the argument of the base constructor id and n
        this.admins = admins;
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
    }
    addReports(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(name) {
        if (name === "Olivia") {
            return;
        }
        else {
            this.employee.push(name);
        }
    }
}
const department = new Department("000", "department");
const it = new ITDepartment("121", ["数组"]);
const accounting = new AccountingDepartment("555", []);
accounting.addReports("Sth went wrong!!!");
accounting.addEmployee("Olivia");
accounting.addEmployee("Candy");
accounting.printEmployeeInformation();
accounting.printReports();
// console.log(it);
it.addEmployee("Olivia");
it.addEmployee("Chen");
it.describe();
it.printEmployeeInformation();
console.log(department);
console.log(it);
console.log(accounting);
