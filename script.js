//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// Function to remove articles and normalize a string for comparison
function removeArticlesAndNormalize(str) {
  // Define the articles to be removed
  const articles = ['the', 'a', 'an'];

  // Convert the string to lowercase for case-insensitive comparison
  const lowercaseStr = str.toLowerCase();

  // Split the string into words
  const words = lowercaseStr.split(' ');

  // Filter out the articles
  const filteredWords = words.filter(word => !articles.includes(word));

  // Join the words back into a string
  const normalizedStr = filteredWords.join(' ');

  return normalizedStr;
}

// Sort the array while considering only the normalized form
touristSpots.sort((a, b) => {
  const normalizedA = removeArticlesAndNormalize(a);
  const normalizedB = removeArticlesAndNormalize(b);
  return normalizedA.localeCompare(normalizedB);
});

// Get the ul element by its id
const ulElement = document.getElementById('band');

// Add li elements to the ul for each sorted spot
for (const spot of touristSpots) {
  const liElement = document.createElement('li');
  liElement.textContent = spot;
  ulElement.appendChild(liElement);
}
