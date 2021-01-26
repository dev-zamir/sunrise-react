import { Card, CardContent } from "@material-ui/core";

const HomeIntroduction = () => {
  
  const intro = 'SUNSHINE ACADEMY JOBAT is a leading Co-Educational English Medium School, in Jobat. We are determined to our students many rich opportunities rather than focusing only on narrow basic skills. We aim to insure that the students are nurtured in the best possible environment of quality education and are ready to embrace a strong partnership with our diverse communities. That promoters a passionate commitment to Spartan Pride';

  // useEffect(() => {
  //   axios.get('http://localhost:3001/api/v1/schools')
  //   .then(response => {
  //     debugger  
  //     console.log('hey zamir')
  //     console.log(response)
  //     // setIntro(response.data[0].introduction)
  // })
  // .catch(error => {
  //   debugger
  //   console.log('hi manihar')
  //   console.log(error)
  // })
  // });

  return ( 
    <Card className="full-height vertical-center">
      <CardContent className="full-width">
        {
          intro
        }
      </CardContent>
    </Card>
   );
}
 
export default HomeIntroduction;