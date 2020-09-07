import Admin from 'layout/Admin.jsx'
import Landing from 'layout/Landing.jsx'

const indexRoutes = [
  { path: '/admin', name: 'Admin', component: Admin },
  { path: '/', name: 'Landing', component: Landing }
];

export default indexRoutes;