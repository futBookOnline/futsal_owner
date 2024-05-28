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
    AsideMenu.map((item) => {
      if (item.path === currentLocation) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }
    });
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
