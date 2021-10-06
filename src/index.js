import loadNavBar from "./navBar";
import loadHomePage from "./home";
import "./style.css";

loadMainPage();

function loadMainPage() {
  loadHomePage();
  loadNavBar("home");
}
