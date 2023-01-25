//text to find
const textToFind = "chatgpt";

// Find all p, span and div elements in the document
const elements = document.querySelectorAll("p, span, div.feed-shared-update-v2");

// Iterate through all elements
for (let i = 0; i < elements.length; i++) {
    console.log(elements)
  // Check if the text you want to find is in the element
  if (elements[i].textContent.toLowerCase().indexOf(textToFind) !== -1) {
    // Get the parent element
    elements[i].textContent = "";
    console.log("❌ CHATGPT FOUND!")
  }
}
