import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const DashboardLayout = ({ menu, children }) => {
  return (
    <div className="w-full h-screen flex">
      <aside className="w-[10rem] max-w-[15rem] bg-purple-900 h-screen box-border px-3 py-6 flex flex-col gap-3">
        {menu.map((item) => (
          <div
            key={item.title}
            className="flex items-baseline gap-2 cursor-pointer border-2 border-transparent p-3 hover:border-b-2 hover:border-b-[white] text-[white] font-medium"
            // onClick={handleRoute(item.path)}
          >
            {item.isActive && (
              <FontAwesomeIcon icon="fa-solid fa-angle-right" />
            )}
            <FontAwesomeIcon icon={item.icon} />
            <p className="text-[1.15rem]">{item.title}</p>
          </div>
        ))}
      </aside>
      {/*container*/}
      <div className="flex flex-col">
        <header className="flex justify-end">
          
        </header>
      </div>
      {children}
    </div>
  );
};

export default DashboardLayout;
