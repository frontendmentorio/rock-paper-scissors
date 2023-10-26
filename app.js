
document.addEventListener("DOMContentLoaded", function() {
  const rulesButton = document.getElementById("rulesButton");
  const rules = document.querySelector(".rules");
  const rulesContainer = document.querySelector(".rules_container");
  const closeButton = document.querySelector(".close_btn");

  // Function to show the rules
  function showRules() {
    rules.style.display = "block";
  }

  // Function to hide the rules
  function hideRules() {
    rules.style.display = "none";
  }
  // Attach event listener to the "RULES" button
  rulesButton.addEventListener("click", showRules, hideRules);

  // Attach event listener to the "close" button
  closeButton.addEventListener("click", hideRules);
});

