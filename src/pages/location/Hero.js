const Hero = (props) => {
  return (
    <section className="flex flex-col lg:items-center">
      <div className="w-full h-72 bg-slate-500 lg:w-11/12 lg:h-96 lg:mx-8 lg:rounded-md lg:mt-8 bg-location6 bg-cover bg-center flex justify-center items-center">
        <div className="bg-black p-10 rounded-md bg-opacity-50 flex flex-row">
          <div className="flex flex-col text-white font-extrabold">
            <p>FIND A HOTEL</p>
            <p>AND PLAN THE</p>
          </div>
          <div>
            <p>perfect getaway</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;