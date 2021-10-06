function loadHomePage() {
  // container
  const home = document.createElement("div");
  home.classList.add("home-container");
  document.body.append(home);

  //presentation text
  const presentationText = document.createElement("div");
  presentationText.classList.add("presentation-text");

  const presentationH1 = document.createElement("h1");
  presentationH1.textContent = "Inspired Cuisine";
  const presentationH3 = document.createElement("h3");
  presentationH3.textContent = "Enjoy our great wine selection";

  presentationText.appendChild(presentationH1);
  presentationText.appendChild(presentationH3);
  home.appendChild(presentationText);

  return home;
}

export default loadHomePage;
