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

function createMenuItems(item) {
  const itemContainer = document.createElement("div");
  itemContainer.classList.add("product-item");

  const htmlTemplate = `<p class="product-title">${item.item}</p>
    <p class="product-price">${item.price}</p>
    <p class="product-description">${item.description}</p>`;

  itemContainer.innerHTML = htmlTemplate;

  return itemContainer;
}

function loadMenuPage() {
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

  //menu Items
  dinnerItems.forEach((item) => menu.appendChild(createMenuItems(item)));
  const desertTitle = document.createElement("h2");
  desertTitle.textContent = "Deserts";
  deserts.forEach((item) => menu.appendChild(createMenuItems(item)));

  return menuContainer;
}

export default loadMenuPage;
