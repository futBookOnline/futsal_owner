import React from 'react'
import OverviewCard from './OverviewCard'

const Overview = () => {
  return (
    <div className='w-full'>
      <header >
        <p className="text-xl font-semibold mb-2">Overview</p>
      </header>
      <div className='flex justify-start mt-3 gap-8'>
        <OverviewCard title={"Total Bookings"} value={10} />
        <OverviewCard title={"Remaining Slots"} value={4} />
        <OverviewCard title={"Pending Bookings"} value={6} />
        <OverviewCard title={"Total Earnings"} value={"3k"} />
      </div>
    </div>
  )
}

export default Overview