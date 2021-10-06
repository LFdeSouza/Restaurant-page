import loadHomePage from "./home";
import loadContactPage from "./contact";
import loadMenuPage from "./menu";

function loadNavBar(page) {
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
  homeButton.id = "home-button";
  homeButton.classList.add("btn");

  const menuButton = document.createElement("button");
  menuButton.textContent = "Menu";
  menuButton.id = "menu-button";
  menuButton.classList.add("btn");

  const contactButton = document.createElement("button");
  contactButton.textContent = "Contact";
  contactButton.id = "contact-button";
  contactButton.classList.add("btn");

  btnContainer.appendChild(homeButton);
  btnContainer.appendChild(menuButton);
  btnContainer.appendChild(contactButton);
  navBar.appendChild(btnContainer);

  if (page === "home") {
    navBar.classList.add("nav-bar-home");
    homeButton.classList.add("btn-home");
    menuButton.classList.add("btn-home");
    contactButton.classList.add("btn-home");
  }

  //event home
  homeButton.addEventListener("click", (e) => {
    document.body.innerHTML = "";
    loadHomePage();
    loadNavBar("home");
  });

  //event menu
  menuButton.addEventListener("click", (e) => {
    document.body.innerHTML = "";
    loadMenuPage();
    loadNavBar();
  });

  //event contact
  contactButton.addEventListener("click", (e) => {
    document.body.innerHTML = "";
    loadContactPage();
    loadNavBar();
  });

  return navBar;
}

export default loadNavBar;
