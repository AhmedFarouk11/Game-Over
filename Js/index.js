import { GamesData } from "./ui.js"; // Assuming GamesData class is in ui.js
import { gameDetail } from "./gameDetail.js"; // Assuming gameDetail class is in gameDetail.js

let res = new GamesData(); // Create an instance of GamesData

// Add event listener for category navigation
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    // Remove the 'active' class from all nav links
    document.querySelectorAll(".nav-link").forEach((el) => el.classList.remove("active"));

    // Add the 'active' class to the clicked link
    e.target.classList.add("active");

    // Fetch and display data for the clicked category
    let categorytype = e.target.innerHTML.toLowerCase(); // Get category from clicked link text
    res.DisplayData(categorytype); // Call DisplayData to show the games for that category
  });
});

// Close button functionality
document.getElementById("closeGameDetail").addEventListener("click", () => {
  // Hide the modal
  document.getElementById("gameDetailModal").classList.add("d-none");

  // Show the game cards
  document.getElementById("RowData").classList.remove("d-none");
});

// Initially load the "MMORPG" category
res.DisplayData("mmorpg");
