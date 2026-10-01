// MOBILE MENU

 const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menu.addEventListener("click", () => {
  nav.classList.toggle("open");
});


// CLOSE MOBILE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav a").forEach((link) => {

  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });

});


// AUTO-SELECT PUPPY IN INQUIRY FORM

document.querySelectorAll("[data-puppy]").forEach((link) => {

  link.addEventListener("click", () => {

    const select = document.getElementById("puppySelect");
    const name = link.dataset.puppy;

    [...select.options].forEach((option) => {

      if (option.textContent.startsWith(name)) {
        select.value = option.textContent;
      }

    });

  });

});


// INQUIRY FORM

document
  .getElementById("inquiryForm")
  .addEventListener("submit", (event) => {

    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const subject = encodeURIComponent(
      `Puppy Adoption Inquiry — ${
        data.get("puppy") || "General Inquiry"
      }`
    );

    const body = encodeURIComponent(
`Name: ${data.get("name")}
Email: ${data.get("email")}
Phone: ${data.get("phone")}
Puppy: ${data.get("puppy")}
Location: ${data.get("location")}

Message:
${data.get("message")}`
    );

    window.location.href =

<a href="mailto:hello@puppiesandpawsadoption.com?subject=Adoption%20Inquiry&body=Hello%2C%20I%27d%20like%20to%20ask%20about%20adoption.">
  Email us
</a>

  });