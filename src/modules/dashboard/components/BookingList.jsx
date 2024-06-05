import ButtonElement from "@/components/ButtonElement";
import { getDayName, getMonthName } from "@/helpers/dateHelper";
import CardElement from "@/components/CardElement";
import { useState } from "react";

const date = new Date();
const currentDate =
  getMonthName(date.getMonth()) +
  " " +
  date.getDate() +
  " " +
  getDayName(date.getDay()) +
  ", " +
  date.getFullYear();

const getScheduleList = () => {
  const starting = 6;
  const ending = 18;
  const list = [];
  for (let i = starting; i < ending; i++) {
    i < 12
      ? list.push(`${i}:00 AM - ${i + 1}:00 AM`)
      : i == 12
        ? list.push(`${i}:00 PM - ${1}:00 PM`)
        : list.push(`${i - 12}:00 PM - ${i - 12 + 1}:00 PM`);
  }
  return list;
};

const BookingList = () => {
  const [selectedSlot, setSelectedSLot] = useState({
    time: null,
    status: null,
    bookedBy: null,
  });

  const onCardClick = (timeSlot) => {
    setSelectedSLot((selectedSlot) => ({
      ...selectedSlot,
      time: timeSlot,
      status: null,
      bookedBy: "Sachin Khatri",
    }));
  };

  return (
    <div className="w-full max-w-full flex flex-col gap-5">
      <header className="w-full flex justify-between">
        <p className="text-xl font-medium">Booking List</p>
        <div className="flex items-center gap-4">
          <p className="text-md">{currentDate}</p>
          <ButtonElement isIconOnly={true} icon="fa-solid fa-calendar" />
        </div>
      </header>
      {/*container*/}
      <div className="grid grid-cols-3 gap-6">
        {getScheduleList().map((item, index) => (
          <CardElement bodyStyle="flex justify-center items-center" cardText={item} key={index} clickEvent={() => onCardClick(item)} />
        ))}
      </div>
      {/*current selected schedule*/}
      {selectedSlot["time"] != null && (
        <div className="w-full border-[.1rem] rounded-lg border-dashed border-[grey] py-2 px-4 flex justify-center items-center">
          {selectedSlot["status"] == "Booked" ? <div className="w-full"><p className="text-lg font-medium">{selectedSlot.bookedBy}</p>
            <p>{selectedSlot.time}</p></div> :
            <p className="text-[grey] font-bold">Not yet booked</p>
          }
        </div>
      )}
    </div>
  );
};

export default BookingList;
