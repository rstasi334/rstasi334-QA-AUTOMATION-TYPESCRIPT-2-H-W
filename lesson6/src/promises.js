// Function to fetch JSON data from a resource
function fetchJsonData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        });
}

// Function to process the obtained JSON
function processData(data) {
    // Example: return the number of keys in the JSON object
    return `Received object has ${Object.keys(data).length} keys.`;
}

// Example usage
const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";

fetchJsonData(apiUrl)
    .then(json => processData(json))
    .then(result => console.log(result))
    .catch(error => console.error("Error:", error));
