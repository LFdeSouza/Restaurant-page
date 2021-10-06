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

  if (page === "home") {
    navBar.classList.add("nav-bar-home");
    homeButton.classList.add("btn-home");
    menuButton.classList.add("btn-home");
    aboutButton.classList.add("btn-home");
  }

  return navBar;
}

export default loadNavBar;
