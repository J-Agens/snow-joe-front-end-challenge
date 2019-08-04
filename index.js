document.addEventListener("DOMContentLoaded", function() {
  // Collect all "add to cart" buttons
  const addBtns = document.body.querySelectorAll(".add-one-btn");

  // Lowercase text for mobile display
  function shrinkText() {
    addBtns.forEach(btn => {
      btn.innerText = "Add to Cart";
    });
  }

  // Uppercase text for desktop display
  function boostText() {
    addBtns.forEach(btn => {
      btn.innerText = "ADD TO CART";
    })
  }

  // Check window size and adjust text accordingly
  function sizeCheck() {
    window.innerWidth > 992 ? boostText() : shrinkText();
  }

  // Adjust text on window resize
  window.addEventListener("resize", function(e) {
    sizeCheck();
  });

  // Adjust text on initial load
  sizeCheck();

})
