import { Outlet } from "react-router-dom";
import DashboardLayout from "../../../layouts/DashboardLayout";
import AsideMenu from "../components/AsideMenu";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {
  const currentLocation = useLocation().pathname;
  const [menu, setMenu] = useState(AsideMenu);

  useEffect(() => {
    // Update the active state of menu items based on the current location
    setMenu((prevMenu) =>
      prevMenu.map((item) => ({
        ...item,
        isActive: item.path === currentLocation,
      }))
    );
  }, [currentLocation]);

  return (
    <>
      <DashboardLayout menu={menu}>
        <Outlet />
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
