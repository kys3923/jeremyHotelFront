import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";

const LogoBox = ({LogoData}) => {

  console.log(LogoData)

  const divStyle = (id) => {
    if(id=== 27) {
      return <div className="h-24 w-48 bg-logo1 mr-4 bg-cover bg-center" />
    }
    if(id=== 28) {
      return <div className="h-24 w-48 bg-logo2 mr-4 bg-cover bg-center" />
    }
    if(id=== 29) {
      return <div className="h-24 w-48 bg-logo3 mr-4 bg-cover bg-center" />
    }
    if(id=== 30) {
      return <div className="h-24 w-48 bg-logo4 mr-4 bg-cover bg-center" />
    }
    if(id=== 31) {
      return <div className="h-24 w-48 bg-logo5 mr-4 bg-cover bg-center" />
    }
    if(id=== 32) {
      return <div className="h-24 w-48 bg-logo6 mr-4 bg-cover bg-center" />
    }
    if(id=== 33) {
      return <div className="h-24 w-48 bg-logo7 mr-4 bg-cover bg-center" />
    }
    if(id=== 34) {
      return <div className="h-24 w-48 bg-logo8 mr-4 bg-cover bg-center" />
    }
    if(id=== 35) {
      return <div className="h-24 w-48 bg-logo9 mr-4 bg-cover bg-center" />
    }
    if(id=== 36) {
      return <div className="h-24 w-48 bg-logo10 mr-4 bg-cover bg-center" />
    }
    if(id=== 37) {
      return <div className="h-24 w-48 bg-logo11 mr-4 bg-cover bg-center" />
    }
    if(id=== 38) {
      return <div className="h-24 w-48 bg-logo12 mr-4 bg-cover bg-center" />
    }
    if(id=== 39) {
      return <div className="h-24 w-48 bg-logo13 mr-4 bg-cover bg-center" />
    }
    if(id=== 40) {
      return <div className="h-24 w-48 bg-logo14 mr-4 bg-cover bg-center" />
    }
    if(id=== 41) {
      return <div className="h-24 w-48 bg-logo15 mr-4 bg-cover bg-center" />
    }
    if(id=== 42) {
      return <div className="h-24 w-48 bg-logo16 mr-4 bg-cover bg-center" />
    }
  }

  return (
    <section className="px-4 py-16 bg-gray-200 border-b border-gray-300">
      <h3 className="text-lg md:text-2xl lg:text-3xl font-extrabold text-blue-800 mb-3">Our Brands</h3>
      <div className="flex flex-row">
        {/* left arrow */}
        <div className="flex items-center mr-2">
          <MdOutlineArrowBackIosNew className="w-8 h-8 hover:text-blue-800 text-blue-600 hover:cursor-pointer" />
        </div>
        {/* logo box */}
        <div className="flex flex-row flex-nowrap overflow-x-auto">
          {LogoData.map((logo) => {
            return <div key={logo.id}>
              {divStyle(logo.id)}
            </div>
          })}
        </div>
        {/* right arrow */}
        <div className="flex items-center ml-2">
          <MdOutlineArrowForwardIos className="w-8 h-8 hover:text-blue-800 text-blue-600 hover:cursor-pointer" />
        </div>
      </div>
    </section>
  );
}
export default LogoBox;