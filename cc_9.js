// Task 1 - creating employee class
class Employee {
  constructor(name, id, department, salary) {
    this.name = name;
    this.id = id;
    this.department = department;
    this.salary = salary;
  }

  getDetails() {
    return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
  }
  calculateAnnualSalary() {
    return this.salary * 12;
  }
}

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails()); 
// Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"

console.log(emp1.calculateAnnualSalary()); 
// Expected output: 60000

// Task 2 - creating manager class
class Manager extends Employee {
  constructor(name, id, department, salary, teamSize) {
    super(name, id, department, salary);
    this.teamSize = teamSize;
  }

  getDetails() {
    return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: ${this.salary} Team size: ${this.teamSize}`;
  }
  calculateBonus() {
    return this.salary * 12 * 0.1; // 10% of annual salary
  }
}

// Test cases
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails());
// Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

console.log(mgr1.calculateBonus()); 
// Expected output: 9600

// Task 3 - creating a company class
class Company {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    
    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployees() {
        this.employees.forEach(employee => 
            console.log(employee.getDetails()));
        }

    calculateTotalPayroll() {
        return this.employees.reduce((total, employee) => 
            total + employee.calculateAnnualSalary(), 0);
        }
    }
        // Test cases
const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();
// Expected output:
// "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
// "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

console.log(company.calculateTotalPayroll()); 
// Expected output: 172800 (assuming emp1 and mgr1 salaries)

