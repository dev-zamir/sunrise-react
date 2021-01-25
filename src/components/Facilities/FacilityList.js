import { Card, CardContent, Divider, List, ListItem, ListItemText, ListSubheader } from "@material-ui/core";

const FacilityList = () => {
  return (
    <Card className="bg-light">
      <CardContent>
        <List component="nav" aria-label="main mailbox folders">
          <ListSubheader component="div" id="nested-list-subheader">
            Facilities
          </ListSubheader>
          <ListItem>
            <ListItemText primary="Beautiful, Spacious & New building amidst lush green pollution free and peacefull environment." />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Well designed airy and spacious with suitable furniture." />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="High-tech and latest study material is used to make the study interesting through plasma and projectors for all classes from 1 st onward." />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Hi-tech laboratories and advanced media room." />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Activity oriented,learning by doing concept of Nursery and Playway." />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="special block for junior students." />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Regular Parent's Teacher meeting." />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="School transport available within 35 kms. around the school." />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Good arrangement of RO for drinking water and generator facility etc." />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Large Playground and indoor games such as table tennis, cricket, football, volleyball, handball, chess, carrom etc." />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
 
export default FacilityList;