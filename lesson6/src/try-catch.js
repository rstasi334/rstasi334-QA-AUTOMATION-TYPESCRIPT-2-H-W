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

// URLs for the non-existing and existing services
const nonExistingUrl = "https://nonexistent.example.com/data";
const fallbackUrl = "https://jsonplaceholder.typicode.com/todos/1";

async function main() {
    try {
        // Try the non-existing service first
        const json = await fetchJsonData(nonExistingUrl);
        const result = processData(json);
        console.log("Primary service result:", result);
    } catch (primaryError) {
        console.warn("Primary service failed, trying fallback...", primaryError.message);
        try {
            const fallbackJson = await fetchJsonData(fallbackUrl);
            // Example of custom validation: check if the object has an 'id' property
            if (!fallbackJson || typeof fallbackJson.id === "undefined") {
                throw new Error("Fallback response is invalid: missing 'id' property.");
            }
            const fallbackResult = processData(fallbackJson);
            console.log("Fallback service result:", fallbackResult);
        } catch (fallbackError) {
            // Custom error for invalid fallback response
            throw new Error(`Both services failed. Fallback error: ${fallbackError.message}`);
        }
    }
}

main().catch(error => console.error("Error:", error));
