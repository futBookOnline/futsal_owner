import React from "react";
import Search from "@/modules/dashboard/components/Search";
import TableElement from "@/components/TableElement";
const Clients = () => {
  const data = [
    { name: "Alice Johnson", game: "5" },
    { name: "Bob Smith", game: "8" },
    { name: "Charlie Brown", game: "2" },
    { name: "Daisy Evans", game: "10" },
    { name: "Ethan Harris", game: "7" },
    { name: "Fiona Clark", game: "4" },
    { name: "George King", game: "9" },
    { name: "Hannah Lewis", game: "3" },
    { name: "Ian Wright", game: "11" },
    { name: "Jane Adams", game: "6" },
    { name: "Kyle Scott", game: "13" },
    { name: "Laura Miller", game: "14" },
    { name: "Mason Taylor", game: "1" },
    { name: "Nina Turner", game: "12" },
    { name: "Oliver Walker", game: "15" },
    { name: "Paula Robinson", game: "16" },
    { name: "Quentin Foster", game: "17" },
    { name: "Rachel Carter", game: "18" },
    { name: "Sam Wilson", game: "19" },
    { name: "Tina Gomez", game: "20" }
  ]
  const headers = Object.keys(data[0])
  return (
    <>
      <header>
        <p className="text-xl font-semibold">Client List</p>
      </header>
      <Search />
      <TableElement headers={headers} rows={data}/>
    </>
  );
};

export default Clients;
