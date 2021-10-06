import loadNavBar from "./navBar";
import loadHomePage from "./home";

loadMainPage();

function loadMainPage() {
  loadHomePage();
  loadNavBar("home");
}
