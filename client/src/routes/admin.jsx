
import Home from "../views/Home.jsx";
import HooksForm from "../views/HooksForm.jsx";

const adminRoutes = [
  {
    path: "/home",
    name: "Home",
    icon: "pe-7s-graph",
    component: Home,
    layout: "/admin"
  },
  {
    path: "/hooks_form",
    name: "Hooks Form",
    icon: "pe-7s-user",
    component: HooksForm,
    layout: "/admin"
  },
  
];

export default adminRoutes;
