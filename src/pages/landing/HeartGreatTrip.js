const HeartGreatTrip = ({ Data }) => {

  console.log(Data)

  const boxImgStyle = (id) => {
    if(id === 23) {
      return <div className="w-full h-96 bg-hgt1 bg-cover bg-cneter" />
    }
    if(id === 24) {
      return <div className="w-full h-96 bg-hgt2 bg-cover bg-cneter" />
    }
    if(id === 25) {
      return <div className="w-full h-96 bg-hgt3 bg-cover bg-cneter" />
    }
    if(id === 26) {
      return <div className="w-full h-96 bg-hgt4 bg-cover bg-cneter" />
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
          !!Data ?
          <div className="flex flex-row flex-wrap justify-center w-full">
            {Data.map((data) => {
              return <div key={data.id}
                className='w-3/4 sm:w-2/5 sm:mr-6 mb-8'
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
export default HeartGreatTrip;