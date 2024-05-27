import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashboardLayout = ({ menu }) => {
  return (
    <div className="w-full h-screen">
      <aside className="w-[10rem] max-w-[15rem] bg-purple-900 h-screen box-border px-3 py-6 flex flex-col gap-3">
        {menu.map((item) => (
          <div
            key={item.title}
            className="flex items-baseline gap-2 cursor-pointer border-2 border-transparent p-3 hover:border-b-2 hover:border-b-[whitePDa] text-[white] font-medium"
          >
            <FontAwesomeIcon icon={item.icon} />
            <p className="text-[1.15rem]">{item.title}</p>
          </div>
        ))}
      </aside>
    </div>
  );
};

export default DashboardLayout;
