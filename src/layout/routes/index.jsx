import adminRoutes from "./adminRoutes";
import guestRoutes from "./guestRoutes";


const ROLES_ROUTES = {
  0: guestRoutes,
  1: adminRoutes,
};

export const getRoutes = (role) => {
  return ROLES_ROUTES[role];
};


