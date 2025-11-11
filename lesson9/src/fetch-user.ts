export async function fetchUser(id: number): Promise<{ name: string; email: string }> {
    // Mock implementation, replace with actual fetch logic if needed
    await Promise.resolve(); // Simulate async operation
    return {
        name: `User${id}`,
        email: `user${id}@example.com`
    };
}
