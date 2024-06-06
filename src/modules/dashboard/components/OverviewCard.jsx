import CardElement from "@/components/CardElement"

const OverviewCard = (props) => {
  const { title, value } = props
  return (
    <CardElement customClass="rounded-md">
      <div className="flex flex-col items-center w-[15rem] text-teal-600">
        <p className='text-3xl font-bold'>{value}</p>
        <p className='text-xl font-semibold'>{title}</p>
      </div>
    </CardElement>
  )
}

export default OverviewCard