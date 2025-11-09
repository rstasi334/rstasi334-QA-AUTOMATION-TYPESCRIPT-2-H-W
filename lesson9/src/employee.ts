import { IEmployee } from './abstractions/i-employee';

export abstract class Employee implements IEmployee {
    public constructor(
        public name: string,
        public age: number,
        public salary: number,
        public skills: string[]
    ) {}

    public abstract getDetails(): string;
}
