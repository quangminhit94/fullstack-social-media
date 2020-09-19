
import Landing from 'layout/Landing.jsx'
import BlogPage from "views/Blog/BlogPage.jsx";
import SagaTodo from "hooks/SagaTodo.jsx";
import ThunkGit from "hooks/ThunkGit.jsx";

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
  {
    path: "/admin/todo",
    name: "Saga Todo",
    component: SagaTodo
  },
  {
    path: "/admin/git_repo",
    name: "Thunk Git",
    component: ThunkGit
  },
  // {
  //   path: "/admin/sign_in",
  //   name: "Sign In",
  //   icon: "pe-7s-user",
  //   component: SignUp
  // },
  
];

export default adminRoutes;
