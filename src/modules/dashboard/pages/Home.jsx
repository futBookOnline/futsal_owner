import BookingList from "@/modules/dashboard/components/BookingList";
import Overview from "@/modules/dashboard/components/Overview";
import TopClients from "../components/TopClients";
import RecentBookingTable from "../components/RecentBookingTable";

const Home = () => {
  return (
    <>
      <Overview />
      <div className="flex justify-between gap-10 py-10">
        <div className="basis-2/3">
          <BookingList />
        </div>
        <div className="basis-1/3">
          <TopClients />
        </div>
      </div>
      <RecentBookingTable />
    </>
  );
};

export default Home;
