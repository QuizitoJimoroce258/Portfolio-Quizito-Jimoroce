// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const menuMobile = document.getElementById("menuMobile");

menuToggle.addEventListener("click", () => {
  menuMobile.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".menu-item-mobile").forEach((item) => {
  item.addEventListener("click", () => {
    menuMobile.classList.remove("active");
    menuToggle.classList.remove("active");
  });
});

// Portfolio Filter
const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    portfolioItems.forEach((item) => {
      if (filterValue === "todos") {
        item.classList.remove("hidden");
      } else {
        if (item.getAttribute("data-category") === filterValue) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      }
    });
  });
});

// Contact Form Submission
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
  const formData = new FormData(contactForm);
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  // Log the data (replace with actual form submission)
  console.log("Form submitted:", {
    name,
    email,
    subject,
    message,
  });

  // Reset form
  contactForm.reset();
  alert("Mensagem enviada com sucesso!");
});

// Update the form inputs to work with FormData
const formInputs = document.querySelectorAll(".form-input");
formInputs.forEach((input, index) => {
  if (index === 0) input.setAttribute("name", "name");
  if (index === 1) input.setAttribute("name", "email");
  if (index === 2) input.setAttribute("name", "subject");
  if (index === 3) input.setAttribute("name", "message");
});

// Smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Active navigation link highlighting
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".menu-item, .menu-item-mobile");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href") === `#${current}`) {
      item.classList.add("active");
    }
  });
});

// Add CSS for active menu items
const style = document.createElement("style");
style.textContent = `
    .menu-item.active,
    .menu-item-mobile.active {
        color: #ffc001;
    }
`;
document.head.appendChild(style);
