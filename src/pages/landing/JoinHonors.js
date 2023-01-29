import hiltonHonorsImg from '../../img/honors-logo-image-092920.webp'

const JoinHonors = (props) => {
  return (
    <div className="bg-blue-400 text-white w-full h-24 flex flex-row justify-center items-center font-bold">
      <div className='mr-5'>
        {/* TODO: place Logo */}
        <img src={hiltonHonorsImg} />
      </div>
      <div>
        <p className='truncate'>Join Hilton Honors and get up to 4,500 Bunus Points</p>
        <p>on your next two stays. <span className='underline'>Join for Free</span></p>
      </div>
    </div>
  );
}
export default JoinHonors;