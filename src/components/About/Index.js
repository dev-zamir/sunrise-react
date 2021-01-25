import AboutUs from "./AboutUs";
import Vision from "./Vision"
import Mission from "./Mission"

const About = () => {
  return ( 
    <div className="row">
      <div className="col-lg-4 col-sm-12 mt-2">
        <AboutUs/>
      </div>
      <div className="col-lg-4 col-sm-12 mt-2">
        <Vision/>
      </div>
      <div className="col-lg-4 col-sm-12 mt-2">
        <Mission/>
      </div>
    </div>
  );
}
 
export default About;