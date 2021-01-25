import FacilityList from "./FacilityList";
import FacilityCarousel from "./FacilityCarousel";
import { useEffect } from "react";

const Facilities = () => {
  useEffect(() => {
    document.title = `Facilities`;
  });

  return (
    <>
      <div className="row">
        <div className="col-lg-4">
          <FacilityList/>
        </div>
        <div className="col-lg-8">
          <FacilityCarousel/>
        </div>
      </div>
    </>
  );
}
 
export default Facilities;