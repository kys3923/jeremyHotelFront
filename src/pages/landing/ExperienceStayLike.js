const ExperienceStayLike = ({ Data, setModalId, setIsModalOpen }) => {
  
  const modalOpener = (e, id) => {
    e.preventDefault();
    setModalId(id);
    setIsModalOpen(true);
  }

  const boxStyle = (id) => {
    if (id === 20) {
      return `w-full md:w-1/2 lg:w-1/4 h-32 md:h-64 bg-gray-600 mb-2 flex justify-center items-center bg-esl1 bg-center bg-cover bg-blend-multiply hover:bg-gray-400 px-8`
    }
    if (id === 21) {
      return `w-full md:w-1/2 lg:w-1/4 h-32 md:h-64 bg-gray-600 mb-2 flex justify-center items-center bg-esl2 bg-center bg-cover bg-blend-multiply hover:bg-gray-400 px-8`
    }
    if (id === 22) {
      return `w-full md:w-1/2 lg:w-1/4 h-32 md:h-64 bg-gray-600 mb-2 flex justify-center items-center bg-esl3 bg-center bg-cover bg-blend-multiply hover:bg-gray-400 px-8`
    }
  }

  return (
    <section className="p-4">
      <div>
        <h3 className="text-lg md:text-2xl lg:text-3xl font-extrabold text-blue-800 mb-3">Experience a stay like no other</h3>
        <p className="text-gray-900 mb-4">Stay warm in our hottest destinations.</p>
      </div>
      <div>
        { !!Data ? 
          <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center">{Data.map((text) => {
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
export default ExperienceStayLike;