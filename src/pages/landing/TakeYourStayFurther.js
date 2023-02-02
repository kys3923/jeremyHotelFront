const TakeYourStayFurther = ({ Data, setModalId, setIsModalOpen }) => {

  const modalOpener = (e, id) => {
    e.preventDefault();
    setModalId(id);
    setIsModalOpen(true);
  }

  const boxStyle = (id) => {
    
    if (id === 1) {
      return `w-full md:w-1/2 lg:w-1/4 h-32 md:h-64 bg-gray-600 mb-2 flex justify-center items-center bg-tysf1 bg-center bg-cover bg-blend-multiply hover:bg-gray-400 px-8`
    }
    if (id === 2) {
      return `w-full md:w-1/2 lg:w-1/4 h-32 md:h-64 bg-gray-600 mb-2 flex justify-center items-center bg-tysf2 bg-center bg-cover bg-blend-multiply hover:bg-gray-400 px-8`
    }
    if (id === 3) {
      return `w-full md:w-1/2 lg:w-1/4 h-32 md:h-64 bg-gray-600 mb-2 flex justify-center items-center bg-tysf3 bg-center bg-cover bg-blend-multiply hover:bg-gray-400 px-8`
    }
    if (id === 4) {
      return `w-full md:w-1/2 lg:w-1/4 h-32 md:h-64 bg-gray-600 mb-2 flex justify-center items-center bg-tysf4 bg-center bg-cover bg-blend-multiply hover:bg-gray-400 px-8`
    }
    if (id === 5) {
      return `w-full md:w-1/2 lg:w-1/4 h-32 md:h-64 bg-gray-600 mb-2 flex justify-center items-center bg-tysf5 bg-center bg-cover bg-blend-multiply hover:bg-gray-400 px-8`
    }
    if (id === 6) {
      return `w-full md:w-1/2 lg:w-1/4 h-32 md:h-64 bg-gray-600 mb-2 flex justify-center items-center bg-tysf6 bg-center bg-cover bg-blend-multiply hover:bg-gray-400 px-8`
    }
    if (id === 7) {
      return `w-full md:w-1/2 lg:w-1/4 h-32 md:h-64 bg-gray-600 mb-2 flex justify-center items-center bg-tysf7 bg-center bg-cover bg-blend-multiply hover:bg-gray-400 px-8`
    }
  }
  
  console.log(Data)
  return (
    <section className="flex flex-col px-4 mt-24">
      <div>
        <h3 className="text-lg md:text-2xl lg:text-3xl font-extrabold text-blue-800 mb-3">Take your stay further</h3>
        <p className="text-gray-900 mb-4">Experience more with our exclusive offers and deals.</p>
      </div>
      <div>
        { !!Data ? 
          <div className="flex flex-col md:flex-row md:flex-wrap">{Data.map((text) => {
            return <div key={text.id}
              className={boxStyle(text.id)}
              onClick={(e) => modalOpener(e, text.id)}
            >
              <p className="font-bold text-white md:text-lg text-center">{text.text}</p>
            </div>
          })}</div> 
        : 
          <p>Loading...</p>
        }
      </div>
    </section>
  );
}
export default TakeYourStayFurther;