import React from "react";
import TableElement from "@/components/TableElement";
import { getDayName, getMonthName } from "@/helpers/dateHelper";
import ButtonElement from "@/components/ButtonElement";
const date = new Date();
const currentDate =
  getMonthName(date.getMonth()) +
  " " +
  date.getDate() +
  " " +
  getDayName(date.getDay()) +
  ", " +
  date.getFullYear();
const Bookings = () => {
  const data = [
    {
      name: "Alice Johnson",
      date: "2024-05-01",
      time: "09:00",
      amount: "150.00",
      payment: "Credit Card",
    },
    {
      name: "Bob Smith",
      date: "2024-05-02",
      time: "10:30",
      amount: "200.00",
      payment: "Cash",
    },
    {
      name: "Charlie Brown",
      date: "2024-05-03",
      time: "11:45",
      amount: "250.00",
      payment: "Credit Card",
    },
    {
      name: "Daisy Miller",
      date: "2024-05-04",
      time: "13:15",
      amount: "300.00",
      payment: "Debit Card",
    },
    {
      name: "Ethan Allen",
      date: "2024-05-05",
      time: "14:30",
      amount: "350.00",
      payment: "Cash",
    },
    {
      name: "Fiona Green",
      date: "2024-05-06",
      time: "16:00",
      amount: "400.00",
      payment: "Credit Card",
    },
    {
      name: "George White",
      date: "2024-05-07",
      time: "17:15",
      amount: "450.00",
      payment: "Debit Card",
    },
    {
      name: "Hannah Black",
      date: "2024-05-08",
      time: "18:30",
      amount: "500.00",
      payment: "Cash",
    },
    {
      name: "Ian Blue",
      date: "2024-05-09",
      time: "19:45",
      amount: "550.00",
      payment: "Credit Card",
    },
    {
      name: "Alice Johnson",
      date: "2024-05-01",
      time: "09:00",
      amount: "150.00",
      payment: "Credit Card",
    },
    {
      name: "Bob Smith",
      date: "2024-05-02",
      time: "10:30",
      amount: "200.00",
      payment: "Cash",
    },
    {
      name: "Charlie Brown",
      date: "2024-05-03",
      time: "11:45",
      amount: "250.00",
      payment: "Credit Card",
    },
    {
      name: "Daisy Miller",
      date: "2024-05-04",
      time: "13:15",
      amount: "300.00",
      payment: "Debit Card",
    },
    {
      name: "Ethan Allen",
      date: "2024-05-05",
      time: "14:30",
      amount: "350.00",
      payment: "Cash",
    },
    {
      name: "Fiona Green",
      date: "2024-05-06",
      time: "16:00",
      amount: "400.00",
      payment: "Credit Card",
    },
    {
      name: "George White",
      date: "2024-05-07",
      time: "17:15",
      amount: "450.00",
      payment: "Debit Card",
    },
    {
      name: "Hannah Black",
      date: "2024-05-08",
      time: "18:30",
      amount: "500.00",
      payment: "Cash",
    },
    {
      name: "Ian Blue",
      date: "2024-05-09",
      time: "19:45",
      amount: "550.00",
      payment: "Credit Card",
    },
  ];
  const headers = Object.keys(data[0]);
  return (
    <>
      <header className="w-full flex justify-between">
        <p className="text-xl font-semibold">Booking List</p>
        <div className="flex items-center gap-4">
          <p className="text-md">{currentDate}</p>
          <ButtonElement isIconOnly={true} icon="fa-solid fa-calendar" />
        </div>
      </header>
      <TableElement headers={headers} rows={data} />
    </>
  );
};

export default Bookings;
