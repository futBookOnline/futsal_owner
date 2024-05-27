import { Outlet } from "react-router-dom";
import DashboardLayout from "../../../layouts/DashboardLayout";
import AsideMenu from "../components/AsideMenu";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

console.info(typeof AsideMenu);

const Dashboard = () => {
  const currentPath = useLocation().pathname;

  useEffect(() => {
    alert(currentPath);
  }, [currentPath]);

  return (
    <>
      <DashboardLayout menu={AsideMenu}></DashboardLayout>
    </>
  );
};

export default Dashboard;
