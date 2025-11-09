import fetch from 'node-fetch';
import { User } from './types';

export async function fetchUser(id: number): Promise<User> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data: User = await response.json();
    return data;
}