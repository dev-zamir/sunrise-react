import { Card, CardContent } from "@material-ui/core";
import { Carousel } from "react-bootstrap";
import s1 from "../../images/s1.jpeg";
import s2 from "../../images/s2.jpeg";
import s3 from "../../images/s3.jpeg";
import s4 from "../../images/s4.jpeg";
import s5 from "../../images/s5.jpeg";

const TopperList = () => {
  return (
    <Card>
      <CardContent>
        <h5>
          <bold>
            Academy Topper List
          </bold>
        </h5>
        <br/>
        <Carousel interval={500} controls={false} indicators={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={s1}
              alt="First slide"
              height="200px"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={s2}
              alt="Third slide"
              height="200px"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={s3}
              alt="Third slide"
              height="200px"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={s4}
              alt="First slide"
              height="200px"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={s5}
              alt="First slide"
              height="200px"
            />
          </Carousel.Item>
        </Carousel>
      </CardContent>
    </Card>
   );
}
 
export default TopperList;