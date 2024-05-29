import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AvatarElement from "../components/AvatarElement";
import { useNavigate } from "react-router-dom";

const DashboardLayout = ({ menu, children }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex">
      <aside className="w-[10rem] max-w-[15rem] bg-purple-900 h-screen box-border px-3 py-6 flex flex-col gap-3">
        {menu.map((item) => (
          <div
            onClick={() => navigate(item.path)}
            key={item.title}
            className="flex items-baseline gap-2 cursor-pointer border-2 border-transparent p-3 hover:border-b-2 hover:border-b-[white] text-[white] font-medium"
          >
            {/**show the pointer in the current active page tab*/}
            {item.isActive && (
              <FontAwesomeIcon icon="fa-solid fa-angle-right" />
            )}
            <FontAwesomeIcon icon={item.icon} />
            <p className="text-[1.15rem]">{item.title}</p>
          </div>
        ))}
      </aside>
      {/*container*/}
      <div className="w-full flex flex-col py-10 px-20">
        <header className="w-full flex justify-end mb-20">
          <AvatarElement
            isBordered={true}
            color="secondary"
            name="U"
            customClass="cursor-pointer text-[white] text-lg"
          />
        </header>
        {/*rendering the current page here*/}
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
