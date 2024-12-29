function validateAndProceed(mergeTitle) {
    // Check if mergeTitle is falsy or its length is less than 5
    if (!mergeTitle || mergeTitle.length < 5) {
        console.log("Invalid mergeTitle. It must be at least 5 characters long.");
        return;
    }

    // If validation passes, proceed with the desired action
    console.log("Valid mergeTitle:", mergeTitle);
    // Perform the desired action here
    // e.g., save to a database, make an API call, etc.
}

// Example usage:
validateAndProceed(""); // Output: Invalid mergeTitle. It must be at least 5 characters long.
validateAndProceed("abc"); // Output: Invalid mergeTitle. It must be at least 5 characters long.
validateAndProceed("validTitle"); // Output: Valid mergeTitle: validTitle
