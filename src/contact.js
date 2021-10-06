import "/src/images/contact-image.jpg";

function loadContactPage() {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");
  document.body.appendChild(contactContainer);

  const contactTitleContainer = document.createElement("div");
  contactTitleContainer.classList.add("contact-title");
  contactContainer.appendChild(contactTitleContainer);

  const contactTitle = document.createElement("h1");
  contactTitle.textContent = "Come visit us!";
  contactTitleContainer.appendChild(contactTitle);

  const contactText = document.createElement("p");
  contactText.textContent = "We're very hard to get to, but worth the travel!";
  contactTitleContainer.appendChild(contactText);

  const location = document.createElement("div");
  location.classList.add("location");
  contactContainer.appendChild(location);

  const locationTitle = document.createElement("h2");
  const locationAddress = document.createElement("p");
  const locationContinent = document.createElement("p");
  locationTitle.textContent = "Location";
  locationAddress.textContent = "Elephant Island";
  locationContinent.textContent = "Antartica";
  location.appendChild(locationTitle);
  location.appendChild(locationAddress);
  location.appendChild(locationContinent);

  const contactImage = document.createElement("img");
  contactImage.src = "/src/images/contact-image.jpg";
  contactContainer.appendChild(contactImage);

  return contactContainer;
}

export default loadContactPage;
