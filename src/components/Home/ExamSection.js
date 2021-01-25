import { Card, CardContent, List, ListItem, ListItemText, ListSubheader } from "@material-ui/core";

const ExamSection = () => {
  return ( 
    <Card className="full-width bg-light">
      <CardContent>
        <List component="nav" aria-label="main mailbox folders">
          <ListSubheader component="div" id="nested-list-subheader">
            Exam Section
          </ListSubheader>
          <ListItem button>
            <ListItemText primary="Exam Form" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
 
export default ExamSection;