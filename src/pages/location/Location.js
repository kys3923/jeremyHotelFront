import Hero from "./Hero";
import Map from "./Map";

import { locationsData } from "../../data/TextAndImage";

const Location = (props) => {
  return (
    <>
      <Hero />
      <Map locationsData={locationsData} />
    </>
  );
}
export default Location;