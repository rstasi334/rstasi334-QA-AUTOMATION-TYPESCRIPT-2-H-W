interface UserData {
    name: string;
    email: string;
}

export class BriefUser {
    public constructor(user: UserData) {
        Object.assign(this, {
            name: user.name,
            email: user.email
        });
    }
}
