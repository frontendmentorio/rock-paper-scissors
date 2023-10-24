// const btnRules = document.querySelector(".rules-btn");
// const bntColse = document.querySelector(".close_btn");
// const rules = document.querySelector(".rules");

// btnRules.addEventListener("click", () => {
//     rules.classList.toggle("show-rules");
// });
// bntColse.addEventListener("click", () => {
//     rules.classList.toggle("show-rules");
// });

const rulesButton = document.getElementById("rulesButton");
const rules = document.querySelector(".rules");
const closeButton = document.querySelector(".close_btn");
// Function to show the rules
function showRules() {
  rulesContainer.style.display = "block";
}
// Function to hide the rules
function hideRules() {
  rulesContainer.style.display = "none";
}

// Attach event listener to the "RULES" button
rulesButton.addEventListener("click", showRules);

// Attach event listener to the "close" button
closeButton.addEventListener("click", hideRules);