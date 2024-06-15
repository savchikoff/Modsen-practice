class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    calculateAnnualSalary() {
        const bonus = this.salary * 12 * 0.2;
        return super.calculateAnnualSalary() + bonus;
    }
}

const manager1 = new Manager("John Doe", 5000, "Development");
const manager2 = new Manager("Peter Johnson", 6000, "Marketing");

console.log(`${manager1.name} (${manager1.department}): $${manager1.calculateAnnualSalary()}`);
console.log(`${manager2.name} (${manager2.department}): $${manager2.calculateAnnualSalary()}`);