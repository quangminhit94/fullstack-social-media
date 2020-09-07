
import LoginPage from "views/Pages/LoginPage.jsx";
import RegisterPage from "views/Pages/RegisterPage.jsx";
import UserProfile from "views/Profile/UserProfile.jsx";
import BlogPage from "views/Blog/BlogPage.jsx";

// material-ui-icons
import PersonAdd from "material-ui-icons/PersonAdd";
import Fingerprint from "material-ui-icons/Fingerprint";
import MonetizationOn from "material-ui-icons/MonetizationOn";
import LockOpen from "material-ui-icons/LockOpen";
import Book from "material-ui-icons/Book";

const landingRoutes = [
  {
    path: "/landing/login",
    name: "Login Page",
    short: "Login",
    mini: "LP",
    icon: Fingerprint,
    component: LoginPage
  },
  {
    path: "/landing/register",
    name: "Register Page",
    short: "Register",
    mini: "RP",
    icon: PersonAdd,
    component: RegisterPage
  },
  {
    path: "/",
    name: "Portfolio",
    short: "Portfolio",
    mini: "PF",
    icon: Book,
    component: UserProfile
  },
];

export default landingRoutes;
