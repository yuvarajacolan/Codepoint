import AdminLayout from "../../pages/Admin";
import Dashboard from "../../pages/Admin/Dashboard";
import ManageActor from "../../pages/Admin/ManageActor";
import ManageBot from "../../pages/Admin/ManageBot";
import Createbot from "../../pages/Admin/ManageBot/Createbot";
import ManageModule from "../../pages/Admin/ManageModule";
import Updateprofile from "../../pages/Admin/UpdateProfile";
import Loginindex from "../../pages/Auth/login";

const adminRoutes = [
  { path: "*", element: <h1>404</h1> },
  {
    path: "/",
    element: <Loginindex />,
  },
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "manageactor",
        element: <ManageActor />,
      },
      {
        path: "managemodule",
        element: <ManageModule />,
      },
      {
        path: "managebot",
        children: [
          {
            index: true,
            element: <ManageBot />,
          },
          {
            path: "createbot",
            element: <Createbot />,
          },
        ]
      },
      {
        path: "updateprofile",
        element: <Updateprofile />,
      },

    ],
  },
];

export default adminRoutes;
