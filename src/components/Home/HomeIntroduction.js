import { Card, CardContent, CircularProgress } from "@material-ui/core";
import axios from "axios";
import API from '../../api';
import { useEffect, useState } from "react";

const HomeIntroduction = () => {
  
  
  const [intro, setIntro] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get('schoolDetails.json')
      .then(response => {
        debugger
        console.log(response)
        setIntro(response.data.introduction)
        setLoading(false)
    })
  .catch(error => {
    console.log(error)
  })
  });

  return ( 
    <Card className="full-height vertical-center">
      <CardContent className="full-width">
        {
          intro
        }
        {
          loading ? (
            <div className="col-lg-12">
              <CircularProgress />
            </div>) : ""
        }
      </CardContent>
    </Card>
   );
}
 
export default HomeIntroduction;