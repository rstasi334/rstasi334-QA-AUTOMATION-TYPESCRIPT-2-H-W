import { fetchUser } from './fetchUser';
import { BriefUser } from './briefUser';
import { UserEntity, AdminEntity } from './abstraction';

async function main(): Promise<void> {
    const user = await fetchUser(1);
    const brief = new BriefUser(user);
    console.log('Brief User:', brief);

    const userEntity = new UserEntity(user.name, user.email);
    const adminEntity = new AdminEntity(user.name, user.email, 5);

    console.log(userEntity.getSummary());
    console.log(adminEntity.getSummary());
}

main().catch(console.error);
