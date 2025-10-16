// Function to fetch JSON data from a resource using async/await
async function fetchJsonData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

// Function to process the obtained JSON
function processData(data) {
    // Example: return the number of keys in the JSON object
    return `Received object has ${Object.keys(data).length} keys.`;
}

// Example usage
const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";

async function main() {
    try {
        const json = await fetchJsonData(apiUrl);
        const result = processData(json);
        console.log(result);
    } catch (error) {
        console.error("Error:", error);
    }
}

main();
