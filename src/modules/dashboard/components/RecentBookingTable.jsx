import React from 'react'

const RecentBookingTable = () => {
  const data = [
    {
        name: "Alice Johnson",
        date: "2024-05-01",
        time: "09:00",
        amount: "150.00",
        payment: "Credit Card"
    },
    {
        name: "Bob Smith",
        date: "2024-05-02",
        time: "10:30",
        amount: "200.00",
        payment: "Cash"
    },
    {
        name: "Charlie Brown",
        date: "2024-05-03",
        time: "11:45",
        amount: "250.00",
        payment: "Credit Card"
    },
    {
        name: "Daisy Miller",
        date: "2024-05-04",
        time: "13:15",
        amount: "300.00",
        payment: "Debit Card"
    },
    {
        name: "Ethan Allen",
        date: "2024-05-05",
        time: "14:30",
        amount: "350.00",
        payment: "Cash"
    },
    {
        name: "Fiona Green",
        date: "2024-05-06",
        time: "16:00",
        amount: "400.00",
        payment: "Credit Card"
    },
    {
        name: "George White",
        date: "2024-05-07",
        time: "17:15",
        amount: "450.00",
        payment: "Debit Card"
    },
    {
        name: "Hannah Black",
        date: "2024-05-08",
        time: "18:30",
        amount: "500.00",
        payment: "Cash"
    },
    {
        name: "Ian Blue",
        date: "2024-05-09",
        time: "19:45",
        amount: "550.00",
        payment: "Credit Card"
    }
]

  return (
    <>
      <header>
        <p className='text-xl'>Recent Bookings</p>
        <hr />
      </header>
      <div className="my-4">
        <table className='min-w-full'>
          <thead>
            <tr className='border-b-1'>
              <th className='py-2'>Customer</th>
              <th>Date</th>
              <th>Time</th>
              <th>Amount</th>
              <th>Payment Method</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
              <td className='py-2'>{item.name}</td>
              <td className='text-center'>{item.date}</td>
              <td className='text-center'>{item.time}</td>
              <td className='text-center'>{item.amount}</td>
              <td className='text-center'>{item.payment}</td>
            </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    </>
  )
}

export default RecentBookingTable