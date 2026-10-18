const themeButton = document.getElementById("themeButton");
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");
const yearElement = document.getElementById("year");

// Toggle the page theme when the button is clicked.
themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        themeButton.textContent = "☀ Theme";
    } else {
        themeButton.textContent = "☾ Theme";
    }
});

// Display the current year in the footer.
yearElement.textContent = new Date().getFullYear();


