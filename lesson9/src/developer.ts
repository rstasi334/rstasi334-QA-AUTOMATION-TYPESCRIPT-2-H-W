import { IEmployee } from './abstractions/i-employee';

export class Developer implements IEmployee {
    public name: string;
    public age: number;
    public salary: number;
    public skills: string[];

    public constructor(
        name: string,
        age: number,
        salary: number,
        skills: string[]
    ) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.skills = skills;
    }

    public getDetails(): string {
        return `Developer: ${this.name}, Age: ${this.age}, Salary: $${this.salary}, Skills: ${this.skills.join(', ')}`;
    }
}
