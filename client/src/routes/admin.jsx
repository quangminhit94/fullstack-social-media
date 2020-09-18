
import Landing from 'layout/Landing.jsx'
import BlogPage from "views/Blog/BlogPage.jsx";
import SignUp from "Users/SignUp";

const adminRoutes = [
  {
    redirect: true,
    path: "/landing",
    pathTo: "/landing/register",
    name: "Landing"
  },
  {
    path: "/admin/blog_page",
    name: "Blog Page",
    component: BlogPage
  },
  // {
  //   path: "/admin/sign_in",
  //   name: "Sign In",
  //   icon: "pe-7s-user",
  //   component: SignUp
  // },
  
];

export default adminRoutes;
