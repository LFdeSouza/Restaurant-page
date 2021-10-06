function loadContactPage() {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");
  document.body.appendChild(contactContainer);

  const contactTitle = document.createElement("h1");
  contactTitle.textContent = "Come visit us!";
  contactContainer.appendChild(contactTitle);

  const contactText = document.createElement("p");
  contactText.textContent = "We're very hard to get to, but worth the travel!";
  contactContainer.appendChild(contactText);

  const location = document.createElement("div");
  location.classList.add("location");
  contactContainer.appendChild(location);

  const locationTitle = document.createElement("h2");
  locationTitle.textContent = "Elephant Island";
  const locationText = document.createElement("p");
  locationText.textContent = "Antartica";
  contactContainer.appendChild(locationTitle);
  contactContainer.appendChild(locationText);

  const contactImage = document.createElement("img");
  contactImage.src = "/src/wine pic.jpg";
  contactContainer.appendChild(contactImage);

  return contactContainer;
}

export default loadContactPage;
