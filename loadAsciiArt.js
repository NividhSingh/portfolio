// loadAsciiArt.js

/**
 * Fetch ASCII art from the given URL if the window width meets a minimum threshold.
 * @param {string} url - The URL to fetch the ASCII art from.
 * @param {number} minWidth - Minimum window width required to load the art (default: 768).
 * @returns {Promise<string>} A promise that resolves with the ASCII art text, or an empty string if the width is too small.
 */
function loadAsciiArt(url, minWidth = 768) {
  if (window.innerWidth < minWidth) {
    // If the window is too narrow, return an empty string
    return Promise.resolve("");
  }
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load " + url);
      }
      return response.text();
    })
    .catch((error) => {
      console.error("Error loading ASCII art from " + url, error);
      return "";
    });
}
