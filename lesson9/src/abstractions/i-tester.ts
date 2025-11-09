import { IEmployee } from './i-employee';

export class Tester implements IEmployee {
    public skills: string[];

    public constructor(
        public name: string,
        public age: number,
        public salary: number,
        private technologies: string[]
    ) {
        this.skills = technologies;
    }

    public getDetails(): string {
        return `Developer ${this.name}, age: ${this.age}, salary: ${this.salary}, technologies: ${this.technologies.join(', ')}`;
    }
}
