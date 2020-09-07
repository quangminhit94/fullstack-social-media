
import Landing from 'layout/Landing.jsx'
import UserProfile from "views/Profile/UserProfile.jsx";
import SignUp from "Users/SignUp";

const adminRoutes = [
  {
    redirect: true,
    path: "/landing",
    pathTo: "/landing/register",
    name: "Landing"
  },
  {
    path: "/user_profile",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
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
