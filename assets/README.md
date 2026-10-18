# Exercise 00 - Personal Portfolio

## About

This project is a personal portfolio website built from scratch using HTML5, CSS3, and JavaScript ES6.

The goal of this exercise is to create an authentic and responsive personal website without using frameworks, templates, or UI libraries.

## Project Sections

The portfolio includes:

- Header and Navigation Bar
- About Me with Profile Photo
- Skills Grid
- Project Showcase
- Hobbies
- Contact Form
- Footer

The Projects section showcases Projects 00, 01, 02, and 03.

## Technologies Used

- HTML5
- CSS3
- JavaScript ES6+
- Git

## HTML

HTML5 is used to create the structure of the portfolio.

The page is divided into sections such as:

- About
- Skills
- Projects
- Hobbies
- Contact

Navigation links are connected to the sections using their IDs.

## CSS

CSS3 is used to style the website and make it responsive.

Flexbox is used to arrange:

- Navigation links
- Skills
- Project cards

CSS media queries are used to make the website responsive on smaller screens.

## JavaScript

JavaScript is used to add an interactive theme switcher.

When the user clicks the **Change Theme** button, JavaScript adds or removes the `dark-theme` class from the `<body>`.

```js
const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
});
