import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import API from "../../api";
import DirectorImage from "../../images/DirectorImage.jpg"

const DirectorView = () => {
  useEffect(() => {
    document.title = `Director's view`;
  });

  const [director, setDirector] = useState({name: '', message: ''});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get('schoolDetails.json')
      .then(response => {
        debugger
        console.log(response)
        setDirector({...director, name: response.data.director, message: response.data.director_message})
        setLoading(false)
    })
  .catch(error => {
    console.log(error)
  })
  });

  return (
    <div className="row">
      <div className="col-lg-1"></div>
      <div className="col-lg-10">
        <Card bg="light">
          { loading ? (<div className="col-lg-12">
              <CircularProgress />
            </div>) : (<>
              <Card.Img variant="top" src={DirectorImage} />
                <Card.Body>
                  <Card.Title>Director&rsquo;s View</Card.Title>
                  <Card.Text>
                    {
                      director.message
                    }
                  </Card.Text>
                  <span className="float-right">
                    <h5>
                      - Mr. {director.name}
                    </h5>
                  </span> 
                </Card.Body></>)}
              </Card>
      </div>
      <div className="col-lg-1"></div>
    </div>
  );
}
 
export default DirectorView;