export interface IEmployee {
    name: string;
    age: number;
    salary: number;
    skills: string[];
    getDetails(): string;
}
