// JavaScript code to handle menu opening and closing
const hamburgerMenu = document.querySelector(".hamburger-menu");

// Check if the element exists
if (hamburgerMenu) {
  const mobileMenu = document.createElement("div");

  // Create the mobile menu structure
  mobileMenu.classList.add("mobile-menu");
  mobileMenu.innerHTML = `
        <div class="mobile-menu-content">
          <button class="close-menu">✕</button>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
      `;

  // Add the mobile menu to the body
  document.body.appendChild(mobileMenu);

  // Open the menu when the hamburger is clicked
  hamburgerMenu.addEventListener("click", () => {
    mobileMenu.classList.add("menu-active");
  });

  // Close the menu when the close button is clicked
  const closeMenuBtn = mobileMenu.querySelector(".close-menu");
  closeMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("menu-active");
  });
} else {
  console.error("Hamburger menu not found");
}
