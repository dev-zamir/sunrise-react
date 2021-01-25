import { Card, CardContent, Divider, List, ListItem, ListItemText, ListSubheader } from "@material-ui/core";

const StudentSectionCard = () => {
  return ( 
    <Card className="bg-light">
      <CardContent>
        <List component="nav" aria-label="main mailbox folders">
          <ListSubheader component="div" id="nested-list-subheader">
            Student Section
          </ListSubheader>
          <ListItem button>
            <ListItemText primary="Downloads (Books & Important Circulars)" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Academics" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Results" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
   );
}
 
export default StudentSectionCard;
