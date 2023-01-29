import { BlueButton } from "../../components/Buttons";

const FindYourStay = (props) => {
  return (
    <section className="flex flex-col lg:items-center">
      <div className="w-full h-72 bg-slate-500 lg:w-11/12 lg:h-96 lg:mx-8 lg:rounded-md lg:mt-8 bg-carousel bg-cover bg-center"  />
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-blue-800 text-4xl my-4">Get the most from your stay</h3>
        <p className="mb-4 text-lg">Book a new adventure in the new year with Hilton.</p>
        <BlueButton text='Find Your Stay' />
      </div>
    </section>
  );
}
export default FindYourStay;