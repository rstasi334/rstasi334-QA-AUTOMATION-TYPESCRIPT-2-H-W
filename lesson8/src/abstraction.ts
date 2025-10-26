export abstract class Entity {
    public abstract getSummary(): string;
}

export class UserEntity extends Entity {
    public name: string;
    public email: string;

    public constructor(name: string, email: string) {
        super();
        this.name = name;
        this.email = email;
    }

    public getSummary(): string {
        return `User: ${this.name}, Email: ${this.email}`;
    }
}

export class AdminEntity extends UserEntity {
    public adminLevel: number;

    public constructor(name: string, email: string, adminLevel: number) {
        super(name, email);
        this.adminLevel = adminLevel;
    }

    public getSummary(): string {
        return `Admin: ${this.name}, Level: ${this.adminLevel}, Email: ${this.email}`;
    }
}
