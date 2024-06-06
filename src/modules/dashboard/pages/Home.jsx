import BookingList from "@/modules/dashboard/components/BookingList";
import Overview from "@/modules/dashboard/components/Overview";
import TopClients from "@/modules/dashboard/components/TopClients";
import RecentBookingTable from "@/modules/dashboard/components/RecentBookingTable";

const Home = () => {
  return (
    <>
      <Overview />
      <div className="flex justify-between gap-10 py-4 rounded-md my-8">
        <BookingList className="w-[45%]" />
        <TopClients className="w-[45%]" />
      </div>
      <RecentBookingTable />
    </>
  );
};

export default Home;