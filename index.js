// Navbar Toggle for Mobile
document.getElementById("mobileToggle").addEventListener("click", function () {
  document.getElementById("navMenu").classList.toggle("active");
});

// Product Filtering
const filterBtns = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach((b) => b.classList.remove("active"));

    // Add active class to clicked button
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    productCards.forEach((card) => {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const petType = document.getElementById("petType");
  const message = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const petTypeError = document.getElementById("petTypeError");
  const messageError = document.getElementById("messageError");
  const successMessage = document.getElementById("successMessage");

  let isValid = true;

  // Reset errors
  nameError.style.display = "none";
  emailError.style.display = "none";
  petTypeError.style.display = "none";
  messageError.style.display = "none";

  // Validate name
  if (name.value.trim() === "") {
    nameError.style.display = "block";
    isValid = false;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    emailError.style.display = "block";
    isValid = false;
  }

  // Validate pet type
  if (petType.value === "") {
    petTypeError.style.display = "block";
    isValid = false;
  }

  // Validate message
  if (message.value.trim() === "") {
    messageError.style.display = "block";
    isValid = false;
  }

  // If form is valid, show success message
  if (isValid) {
    successMessage.style.display = "block";

    // Reset form
    name.value = "";
    email.value = "";
    petType.value = "";
    message.value = "";

    // Hide success message after 5 seconds
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 5000);
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });

    // Close mobile menu if open
    document.getElementById("navMenu").classList.remove("active");
  });
});
