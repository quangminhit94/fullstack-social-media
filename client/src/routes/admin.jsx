
import Landing from 'layout/Landing.jsx'
import BlogPage from "views/Blog/BlogPage.jsx";
import SagaTodo from "views/ReactExamples/SagaTodo.jsx";
import ThunkGit from "views/ReactExamples/ThunkGit.jsx";
import DarkTheme from "views/ReactExamples/DarkTheme.jsx";
import HooksForm from "views/ReactExamples/HooksForm.jsx";

const adminRoutes = [
  {
    redirect: true,
    path: "/landing",
    pathTo: "/landing/portfolio",
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
  {
    path: "/admin/dark_theme",
    name: "Dark Theme",
    icon: "pe-7s-user",
    component: DarkTheme,
    theme: "dark"
  },
  {
    path: "/admin/hooks_form",
    name: "Hooks Form",
    icon: "pe-7s-user",
    component: HooksForm
  },
  
];

export default adminRoutes;
