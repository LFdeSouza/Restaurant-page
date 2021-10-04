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

// menu container
const menuContainer = document.createElement("div");
menuContainer.classList.add("menu-container");
document.body.appendChild(menuContainer);

const menuPicture = document.createElement("img");
menuPicture.src = "/src/menu pic.png";
menuContainer.appendChild(menuPicture);

//menu
const menu = document.createElement("div");
menu.classList.add("menu");
menuContainer.appendChild(menu);

const dinnerTitle = document.createElement("h2");
dinnerTitle.textContent = "Dinner";
menu.appendChild(dinnerTitle);

function createMenuList(item) {
  const itemContainer = document.createElement("div");
  itemContainer.classList.add("product-item");

  const htmlTemplate = `<p class="product-title">${item.item}</p>
    <p class="product-price">${item.price}</p>
    <p class="product-description">${item.description}</p>`;

  itemContainer.innerHTML = htmlTemplate;

  return itemContainer;
}
//menu Items
const dinnerItems = [
  {
    item: "Duck on Orange",
    price: 15,
    description:
      "Slow roasted duck in classic orange sause with mashed potatoes and vegetables.",
  },

  {
    item: "Sirloin steak",
    price: 15,
    description:
      "Char-grilled sirloin with mashed potatoes, seasonal vegetables and red wind jus.",
  },

  {
    item: "Wild Turkey",
    price: 15,
    description: "Served with with seasonal vegetables.",
  },

  {
    item: "Venison burguer",
    price: 13,
    description:
      "Brioche bun, lettuce, tomato, red wine marinade and swiss cheese with fried botatoes.",
  },

  {
    item: "Roasted rabbit",
    price: 16,
    description: "Roasted rabbit.",
  },

  {
    item: "Wild boar",
    price: 21,
    description:
      "Wild boar shoulder with peppercorns and red wine jus. Served with salad.",
  },
];

const deserts = [
  {
    item: "Chocolate lava cakey",
    price: 10,
    description:
      " Delicious Chocolate cake with caramelized hazelnut and vanilla ice cream.",
  },

  {
    item: "Espresso",
    price: 7,
    description: "Classic Italian espresso",
  },
];

dinnerItems.forEach((item) => menu.appendChild(createMenuList(item)));
const desertTitle = document.createElement("h2");
desertTitle.textContent = "Deserts";
menu.appendChild(desertTitle);
deserts.forEach((item) => menu.appendChild(createMenuList(item)));
