// container
const container = document.createElement("div");
container.classList.add("hero-container");
document.body.append(container);

// nav bar
const navBar = document.createElement("div");
navBar.classList.add("nav-bar");
document.body.append(navBar);

const title = document.createElement("p");
title.textContent = "Fiddler's Blues";
navBar.appendChild(title);

const btnContainer = document.createElement("div");
btnContainer.classList.add("btn-container");

const homeButton = document.createElement("button");
homeButton.textContent = "Home";
homeButton.classList.add("btn");

const menuButton = document.createElement("button");
menuButton.textContent = "Menu";
menuButton.classList.add("btn");

const aboutButton = document.createElement("button");
aboutButton.textContent = "About us";
aboutButton.classList.add("btn");

btnContainer.appendChild(homeButton);
btnContainer.appendChild(menuButton);
btnContainer.appendChild(aboutButton);
navBar.appendChild(btnContainer);

//presentation text
const presentationText = document.createElement("div");
presentationText.classList.add("presentation-text");

const presentationH1 = document.createElement("h1");
presentationH1.textContent = "Inspired Cuisine";
const presentationH3 = document.createElement("h3");
presentationH3.textContent = "Enjoy our great wine selection";

presentationText.appendChild(presentationH1);
presentationText.appendChild(presentationH3);
container.appendChild(presentationText);
