import TableElement from "../../../components/TableElement";

const headers = ["Name", "Games"]

const TopClients = () => {
  const data = [
    {
      name: "Iyer",
      game: 10,
    },
    {
      name: "Venugopal Iyer",
      game: 8,
    },
    {
      name: "Muthuswami Venugopal Iyer",
      game: 7,
    },
    {
      name: "Chinnaswami Muthuswami Venugopal Iyer",
      game: 6,
    },
    {
      name: "Parambatur Chinnaswami Muthuswami Venugopal Iyer",
      game: 5,
    },
    {
      name: "Parampeel Parambatur Chinnaswami Muthuswami Venugopal Iyer",
      game: 1
    }
  ];
  return (
    <div className="min-w-[45%]">
      <header>
        <p className="text-xl">Top Clients</p>
        <hr />
      </header>
      {/* <div className="my-4">
        <table className="hover:table-fixed">
          <thead>
            <tr>
              <th>Name</th>
              <th>Games</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}  className="border-b-1">
                <td className="py-2">{item.name}</td>
                <td className="text-center">{item.game}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

      <TableElement headers={headers} className="mt-5">

      </TableElement>
    </div>
  );
};

export default TopClients;
