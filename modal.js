export function showModal() {
    var rulesBtn = document.querySelector('.rules-btn');
    var imageDiv = document.getElementById('imageDiv');
    var closeBtn = document.getElementById('closeBtn');
  
    rulesBtn.addEventListener('click', function() {
      imageDiv.style.display = 'block';
    });
  
    closeBtn.addEventListener('click', function() {
      imageDiv.style.display = 'none';
    });
}

// export function showModal() {
//     var rulesBtn = document.querySelector('.rules-btn');
//     var imageDiv = document.getElementById('imageDiv');
  
//     rulesBtn.addEventListener('click', function() {
//         imageDiv.classList.toggle('show');
//     });
// }

// function toggleShowRules() {
//     if (isRulesShown())
//       hideRules();
//     else
//       showRules();
//   }
  
//   function isRulesShown() {
//     return rules.display.style !== "none";
//   }
  
//   function showRules() {
//     rules.display.style = "block";
//   }
  
//   function hideRules() {
//     rules.display.style = "none";
//   }
  