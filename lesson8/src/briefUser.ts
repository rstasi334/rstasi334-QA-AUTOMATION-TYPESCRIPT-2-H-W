import { User } from './types';

export class BriefUser {
    id: number;
    name: string;
    city: string;
    companyName: string;

    constructor(user: User) {
        this.id = user.id;
        this.name = user.name;
        this.city = user.address.city;
        this.companyName = user.company.name;
    }
}