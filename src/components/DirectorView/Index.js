import { useEffect } from "react";
import { Card } from "react-bootstrap";
import DirectorImage from "../../images/DirectorImage.jpg"

const DirectorView = () => {
  useEffect(() => {
    document.title = `Director's view`;
  });

  return (
    <div className="row">
      <div className="col-lg-1"></div>
      <div className="col-lg-10">
        <Card bg="light">
          <Card.Img variant="top" src={DirectorImage} />
          <Card.Body>
            <Card.Title>Director&rsquo;s View</Card.Title>
            <Card.Text>
              It's my pleasure and previlege to function as the Director not only because it's my mission but also because I enjoythe company of my talented students and zealous teachers who keep me energized all the time. I firmly believe in qualitative journey of education and students undoubtedly represents the hopes, dreams and future   of the Nation. The Management, parents, students and the teaching fraternity are a team and complement each other's efforts. Education is not just process of imparting knowledge and skills but a lifelong process which creates an understanding of ethical values to guide and make our students morally responsible citizens of the Nation. 
            </Card.Text>
            <span className="float-right">
              <h5>
                - Mr. Asadullah Manihar
              </h5>
            </span> 
          </Card.Body>
        </Card>
      </div>
      <div className="col-lg-1"></div>
    </div>
  );
}
 
export default DirectorView;