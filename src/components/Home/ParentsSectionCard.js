import { Card, CardContent, Divider, List, ListItem, ListItemText, ListSubheader } from "@material-ui/core";

const ParentsSectionCard = () => {
  return ( 
    <Card className="bg-light">
      <CardContent>
        <List component="nav" aria-label="main mailbox folders">
          <ListSubheader component="div" id="nested-list-subheader">
            Parents Corner
          </ListSubheader>
          <ListItem button>
            <ListItemText primary="Admission Procedure(Under Process)
" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Admission Form" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Age Criteria for Admission in class Nursary to First" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="RTE" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
   );
}
 
export default ParentsSectionCard;
