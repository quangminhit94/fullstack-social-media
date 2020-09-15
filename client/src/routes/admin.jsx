
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
    path: "/admin/user_profile",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile
  },
  {
    path: "/admin/sign_in",
    name: "Sign In",
    icon: "pe-7s-user",
    component: SignUp
  },
  
];

export default adminRoutes;
