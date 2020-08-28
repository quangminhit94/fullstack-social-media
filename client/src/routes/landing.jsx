
import LoginPage from "../views/Pages/LoginPage.jsx";
import RegisterPage from "../views/Pages/RegisterPage.jsx";

// material-ui-icons
import PersonAdd from "material-ui-icons/PersonAdd";
import Fingerprint from "material-ui-icons/Fingerprint";
import MonetizationOn from "material-ui-icons/MonetizationOn";
import LockOpen from "material-ui-icons/LockOpen";

const landingRoutes = [
  {
    path: "/pages/login-page",
    name: "Login Page",
    short: "Login",
    mini: "LP",
    icon: Fingerprint,
    component: LoginPage
  },
  {
    path: "/pages/register-page",
    name: "Register Page",
    short: "Register",
    mini: "RP",
    icon: PersonAdd,
    component: RegisterPage
  },
  
];

export default landingRoutes;
