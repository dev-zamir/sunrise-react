import { Card, CardContent, Divider, List, ListItem, ListItemText, ListSubheader } from "@material-ui/core";

const TeacherSectionCard = () => {
  return ( 
    <Card className="bg-light">
      <CardContent>
        <List component="nav" aria-label="main mailbox folders">
          <ListSubheader component="div" id="nested-list-subheader">
            Teacher Section (DEPARTMENT)
          </ListSubheader>
          <ListItem button>
            <ListItemText primary="PGT Course Staff Details" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="PRT Course Staff Details" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Adminstration Staff Details" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
 
export default TeacherSectionCard;