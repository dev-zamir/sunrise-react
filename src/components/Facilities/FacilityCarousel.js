import { Card, CardContent } from "@material-ui/core";
import { Carousel } from "react-bootstrap";
import BuildingPhoto from '../../images/BuildingPhoto.jpg';
import facility1 from '../../images/facility1.jpg';
import facility2 from '../../images/facility2.jpg';
import facility3 from '../../images/facility3.jpeg';
import facility4 from '../../images/facility4.jpeg';
import facility5 from '../../images/facility5.jpeg';

const FacilityCarousel = () => {
  return (
    <Card className="bg-light">
      <CardContent>
        <h5>
          <bold>
            Facilities
          </bold>
        </h5>
        <br/>
        <Carousel indicators={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={BuildingPhoto}
              alt="First slide"
              height="300px"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={facility1}
              alt="Third slide"
              height="300px"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={facility2}
              alt="Third slide"
              height="300px"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={facility3}
              alt="First slide"
              height="300px"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={facility4}
              alt="First slide"
              height="300px"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={facility5}
              alt="First slide"
              height="300px"
            />
          </Carousel.Item>
        </Carousel>
      </CardContent>
    </Card>
  );
}
 
export default FacilityCarousel;