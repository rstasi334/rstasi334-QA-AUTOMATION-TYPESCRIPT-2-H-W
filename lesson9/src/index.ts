import { fetchUser } from './fetch-user';
import { BriefUser } from './brief-user';
import { UserEntity, AdminEntity } from './abstractions/i-user-entities';
import { IEmployee } from './abstractions/i-employee';
import { Developer } from './abstractions/i-developer';
import { Tester } from './abstractions/i-tester';

async function main(): Promise<void> {
    const user = await fetchUser(1);
    const brief = new BriefUser(user);
    console.log('Brief User:', brief);

    const userEntity = new UserEntity(user.name, user.email);
    const adminEntity = new AdminEntity(user.name, user.email, 5);

    console.log(userEntity.getSummary());
    console.log(adminEntity.getSummary());
}

function printEmployeeDetails(employee: IEmployee): void {
    console.log(employee.getDetails());
}

const dev = new Developer('Alice', 30, 90000, ['TypeScript', 'React']);
const tester = new Tester('Bob', 28, 70000, ['Selenium', 'Jest']);

printEmployeeDetails(dev);
printEmployeeDetails(tester);

main().catch(console.error);


