import { Card, CardContent, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@material-ui/core";
import { useEffect } from "react";

const Career = () => {
  useEffect(() => {
    document.title = `Career`;
  });

  return (
    <div className="row px-2">
    <Card className="bg-light mt-2 col-lg-6 col-sm-12">
      <CardContent>
        <Typography variant="h5" component="h2">
          PGT
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableBody>
              <TableRow key="1">
                <TableCell component="th" scope="row">
                  <span>
                    Subject :
                  </span>
                </TableCell>
                <TableCell>
                  Maths, Biology, Physics, Chemistry, Commerce, Management, Physical  Eduction, Agriculture. 
                </TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell component="th" scope="row">
                  <span style={{whiteSpace: "nowrap"}}>
                    Eligibility :
                  </span>
                </TableCell>
                <TableCell>
                  Post Graduate with B. Ed
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
    <Card className="bg-light mt-2 col-lg-6 col-sm-12" >
      <CardContent>
        <Typography variant="h5" component="h2">
          TGT
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableBody>
              <TableRow key="1">
                <TableCell component="th" scope="row">
                  <span>
                    Subject :
                  </span>
                </TableCell>
                <TableCell>
                  English, Hindi, Maths, Social Science, Sanskrit, Science, Computer.
                </TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell component="th" scope="row">
                  <span style={{whiteSpace: "nowrap"}}>
                    Eligibility :
                  </span>
                </TableCell>
                <TableCell>
                  Post Graduate with B. Ed
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
    <Card className="bg-light mt-2 col-lg-6 col-sm-12" >
      <CardContent>
        <Typography variant="h5" component="h2">
          PRT
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableBody>
              <TableRow key="1">
                <TableCell component="th" scope="row">
                  <span>
                    Subject :
                  </span>
                </TableCell>
                <TableCell>
                  English, Hindi, Maths, Social Science, Sanskrit, Science, Computer.
                </TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell component="th" scope="row">
                  <span style={{whiteSpace: "nowrap"}}>
                    Eligibility :
                  </span>
                </TableCell>
                <TableCell>
                  Post Graduate with B. Ed
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
    <Card className="bg-light mt-2 col-lg-6 col-sm-12" >
      <CardContent>
        <Typography variant="h5" component="h2">
          PRE-PRIMARY TEACHER
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableBody>
              <TableRow key="1">
                <TableCell component="th" scope="row">
                  <span style={{whiteSpace: "nowrap"}}>
                    Eligibility :
                  </span>
                </TableCell>
                <TableCell align="left">
                  Montessori trained 
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
    <Card className="bg-light mt-2 col-lg-6 col-sm-12" >
      <CardContent>
        <span>
          Note: Fluency in English.Moderate knowledge of computer and experience would be preferred first.
        </span>
      </CardContent>
    </Card>
    </div>
  );
}
 
export default Career;