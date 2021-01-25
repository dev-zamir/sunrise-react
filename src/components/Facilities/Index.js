import FacilityList from "./FacilityList";
import FacilityCarousel from "./FacilityCarousel";

const Facilities = () => {
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