document.addEventListener("DOMContentLoaded", async () => {
    const quoteContainer = document.getElementById("quote-text");
    const openMenuBtn = document.getElementById("open-menu");
    const closeMenuBtn = document.getElementById("close-menu");
    const backgroundMenu = document.getElementById("background-menu");
    const backgroundOptions = document.querySelectorAll(".background-option");
  
    // Function to display a random quote
    const showRandomQuote = async () => {
      try {
        const response = await fetch("quotes.json"); // Load quotes from the JSON file
        const quotes = await response.json();
  
        // Generates a random quote
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
  
        // Show citation on page
        quoteContainer.textContent = randomQuote;
      } catch (error) {
        quoteContainer.textContent = "Error loading citations.";
        console.error("Error loading citations:", error);
      }
    };
  
    // Show a random quote when the tab is opened
    await showRandomQuote();
  
    // Retrieves the saved background (if any) and applies it
    const savedBackground = localStorage.getItem("selectedBackground");
    if (savedBackground) {
      document.body.style.backgroundImage = `url('${savedBackground}')`;
    }
  
    // Show backgrounds menu
    openMenuBtn.addEventListener("click", () => {
      backgroundMenu.classList.remove("hidden");
    });
  
    // Close the background menu
    closeMenuBtn.addEventListener("click", () => {
      backgroundMenu.classList.add("hidden");
    });
  
    // Change the background
    backgroundOptions.forEach(option => {
      option.addEventListener("click", () => {
        const selectedBg = option.getAttribute("data-bg");
        document.body.style.backgroundImage = `url('${selectedBg}')`;
        localStorage.setItem("selectedBackground", selectedBg); // Save the background in localStorage
        backgroundMenu.classList.add("hidden");
      });
    });
  });