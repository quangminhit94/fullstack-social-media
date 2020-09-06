
import Landing from 'layout/Landing.jsx'
import HooksForm from "views/HooksForm.jsx";
import SignUp from "Users/SignUp";

const adminRoutes = [
  {
    path: "/login_page",
    name: "Landing",
    icon: "pe-7s-graph",
    component: Landing,
    layout: "/landing"
  },
  {
    path: "/hooks_form",
    name: "Hooks Form",
    icon: "pe-7s-user",
    component: HooksForm,
    layout: "/admin"
  },
  {
    path: "/sign_in",
    name: "Sign In",
    icon: "pe-7s-user",
    component: SignUp,
    layout: "/admin"
  },
  
];

export default adminRoutes;
