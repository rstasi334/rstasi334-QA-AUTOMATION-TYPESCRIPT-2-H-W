export class UserEntity {
    public constructor(
        protected name: string,
        protected email: string
    ) {}

    public getSummary(): string {
        return `User: ${this.name}, Email: ${this.email}`;
    }
}

export class AdminEntity extends UserEntity {
    public constructor(
        name: string,
        email: string,
        private accessLevel: number
    ) {
        super(name, email);
    }

    public getSummary(): string {
        return `Admin: ${this.name}, Email: ${this.email}, Access Level: ${this.accessLevel}`;
    }
}
