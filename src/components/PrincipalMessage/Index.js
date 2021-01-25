import { Card } from "react-bootstrap";
import principalImg from "../../images/principalImg.jpg"

const PrincipalMessage = () => {
  return ( 
    <div className="row">
      <div className="col-lg-1"></div>
      <div className="col-lg-10">
        <Card bg="light">
          <Card.Img variant="top" src={principalImg} />
          <Card.Body>
            <Card.Title>Principal&rsquo;s Message</Card.Title>
            <Card.Text>
              Our School is the place where children get platform to shape their future to become lifelong learners and better citizens of the nation,our philosophy of education has always been focusing on the    multi-dimensional development of children and therefore we are committed to leave no stone unturnes as far as qualitative education is concerned.Aristotle once said, "Educating the mind without educating the heart is no education ar all. -"therefore, our focus as educationalist is to educate both heart and mind which will result in transforming students into better human resource.  We believe in "वसुधैव कुटुम्बकम् "whereby world is a faimily and as a member of this family, it is our responsibility to teach each other in the benefit and betterment of the world.
            </Card.Text>
            <span className="float-right">
              <h5>
                - Mr. Name Surname
              </h5>
            </span> 
          </Card.Body>
        </Card>
      </div>
      <div className="col-lg-1"></div>
    </div>
  );
}
 
export default PrincipalMessage;