const StayLittleLonger = ({StayALittleLongerData}) => {

  const boxImgStyle = (id) => {
    if(id === 9) {
      return <div className="w-full h-36 bg-sall2 bg-cover bg-cneter" />
    }
    if(id === 10) {
      return <div className="w-full h-36 bg-sall3 bg-cover bg-cneter" />
    }
    if(id === 11) {
      return <div className="w-full h-36 bg-sall4 bg-cover bg-cneter" />
    }
    if(id === 12) {
      return <div className="w-full h-36 bg-sall5 bg-cover bg-cneter" />
    }
    if(id === 13) {
      return <div className="w-full h-36 bg-sall6 bg-cover bg-cneter" />
    }
    if(id === 14) {
      return <div className="w-full h-36 bg-sall7 bg-cover bg-cneter" />
    }
    if(id === 15) {
      return <div className="w-full h-36 bg-sall8 bg-cover bg-cneter" />
    }
    if(id === 16) {
      return <div className="w-full h-36 bg-sall9 bg-cover bg-cneter" />
    }
    if(id === 17) {
      return <div className="w-full h-36 bg-sall10 bg-cover bg-cneter" />
    }
    if(id === 18) {
      return <div className="w-full h-36 bg-sall11 bg-cover bg-cneter" />
    }
    if(id === 19) {
      return <div className="w-full h-36 bg-sall12 bg-cover bg-cneter" />
    }
    if(id === 8) {
      return <div className="w-full h-36 bg-sall1 bg-cover bg-cneter" />
    }
  }
  
  return (
    <section className="px-4">
      <div className="my-8">
        <h3 className="text-lg md:text-2xl lg:text-3xl font-extrabold text-blue-800 mb-3">Stay a little longer</h3>
        <p className="text-gray-900 mb-4">Enjoy even more reasons to celebrate the season.</p>
      </div>
      <div>
        {
          !!StayALittleLongerData ?
          <div className="flex flex-row flex-wrap justify-center w-full">
            {StayALittleLongerData.map((data) => {
              return <div key={data.id}
                className='w-3/4 sm:w-1/4 sm:mr-6 mb-8'
              >
                {/* img box */}
                {boxImgStyle(data.id)}
                <h3 className="font-bold text-lg">{data.title}</h3>
                <p>{data.text}</p>
                <p><a href='#' className="text-blue-800 underline">{data.linkText}</a></p>
              </div>
            })}
          </div>
          :
          <p>Loading...</p>
        }
      </div>
    </section>
  );
}
export default StayLittleLonger;