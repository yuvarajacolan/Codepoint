
import { Outlet } from "react-router-dom";
import Sidebar from "../../layout/Sidebar";

const AdminLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      {/* <div
        style={{
          backgroundColor: "#eaeded",
          minHeight: "100vh",
          // width: "100vw",
          padding: "0 20px",
        }}
      >
        <div style={{ margin: "20px" }}>
          <Outlet />
        </div>
      </div> */}
    </div>
  );
};
export default AdminLayout;
