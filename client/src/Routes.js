
import Home from "./views/Home.jsx";
import HooksForm from "./views/HooksForm.jsx";

const landingRoutes = [
  {
    path: "/home",
    name: "Home",
    icon: "pe-7s-graph",
    component: Home,
    layout: "/landing"
  },
  {
    path: "/hooks_form",
    name: "Hooks Form",
    icon: "pe-7s-user",
    component: HooksForm,
    layout: "/landing"
  },
  
];

export default landingRoutes;
