
document.addEventListener("DOMContentLoaded", function() {
  const rulesButton = document.getElementById("rulesButton");
  const rules = document.querySelector(".rules");
  const rulesContainer = document.querySelector(".rules_container");
  const closeButton = document.querySelector(".close_btn");
 console.log(rules);
  // Function to show the rules
  function showRules() {
    rules.style.display = "block";

  }

  function toggleShowRules() {
    if (isRulesShown())
      hideRules();
    else
      showRules();
  }
  
  function isRulesShown() {
    return rules.style.display !== "none";
  }
  
  function showRules() {
    rules.style.display= "block";
  }
  
  function hideRules() {
    rules.display.style = "none";
  }

  // Function to hide the rules
  function hideRules() {
    rules.style.display = "none";
  }
  // Attach event listener to the "RULES" button
  rulesButton.addEventListener("click", toggleShowRules);

  // Attach event listener to the "close" button
  closeButton.addEventListener("click", hideRules);
  
}); 
  const pickUserHand = (hand) => {
    console.log(hand);

    let hands = document.querySelector(".hands");
    hands.style.display = "none";

    let rulesButton = document.querySelector(".rules-btn");
    rulesButton.style.display = "none";
  }


