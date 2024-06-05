import React from 'react'

const OverviewCard = (props) => {
  const{title, value} = props
  return (
    <div className='bg-green-100 px-10 py-6 text-center'>
        <p className='text-green-800 text-3xl font-bold'>{value}</p>
        <p className='text-green-800 font-bold'>{title}</p>
    </div>
  )
}

export default OverviewCard