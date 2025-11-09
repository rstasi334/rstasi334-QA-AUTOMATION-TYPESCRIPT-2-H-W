import { IEmployee } from './abstractions/i-employee';

export class Tester implements IEmployee {
    public constructor(
        public name: string,
        public age: number,
        public salary: number,
        public skills: string[]
    ) {}

    public getDetails(): string {
        return `Tester: ${this.name}, Age: ${this.age}, Salary: ${this.salary}, Skills: ${this.skills.join(', ')}`;
    }
}

