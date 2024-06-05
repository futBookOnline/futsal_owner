import React from 'react'
import OverviewCard from './OverviewCard'

const Overview = () => {
  return (
    <>
        <header >
            <p className="text-xl">Overview</p>
            <hr />
        </header>
        <div className='flex justify-between my-4'>
            <OverviewCard title={"Total Bookings"} value={10} />
            <OverviewCard title={"Remaining Slots"} value={4} />
            <OverviewCard title={"Pending Bookings"} value={6} />
            <OverviewCard title={"Total Earnings"} value={"3k"} />
        </div>
    </>
  )
}

export default Overview