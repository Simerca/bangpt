
// Array of words to find in the document whith chatgpt various words
const textToFind = ["chatgpt", "chat gpt"]

// Function that removes elements containing the specified text
function removeElementsWithText(textToFind) {
    // Find all p, span and div elements in the document
    const elements = document.querySelectorAll("p, span, div.feed-shared-update-v2");

    // Iterate through all elements
    for (let i = 0; i < elements.length; i++) {
        // Iterate through all words in the textToFind array
        for (let j = 0; j < textToFind.length; j++) {
            // Check if the text you want to find is in the element
            if (elements[i].textContent.toLowerCase().indexOf(textToFind[j]) !== -1) {
                // Get the parent element
                elements[i].textContent = "";
                console.log(`❌ post with ${textToFind[j]} word has removed`);
            }
        }
    }
}

removeElementsWithText(textToFind);

// Add an observer to listen for changes in the DOM
const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        // Check if the target node is a `<video>` element.
        if (mutation.target.nodeName === "VIDEO") {
            // If it is, pause the video before removing the element
            mutation.target.pause();
        }
        // check if there are added nodes
        if (mutation.addedNodes.length > 0) {
            // Iterate through added nodes
            for (let i = 0; i < mutation.addedNodes.length; i++) {
                // check if the added node is an element
                if (mutation.addedNodes[i].nodeType === 1) {
                    // check if the added node matches the specified element types
                    if (mutation.addedNodes[i].matches("p, span, div.feed-shared-update-v2")) {
                        // Iterate through all words in the textToFind array
                        for (let j = 0; j < textToFind.length; j++) {
                            // check if the text you want to find is in the element
                            if (mutation.addedNodes[i].textContent.toLowerCase().indexOf(textToFind[j]) !== -1) {
                                // Get the parent element
                                mutation.addedNodes[i].textContent = "";
                                console.log("supprimé");
                            }
                        }
                    }
                }
            }
        }
    });
});

// Observe the entire document
const config = { attributes: true, childList: true, characterData: true, subtree: true };
observer.observe(document, config);
