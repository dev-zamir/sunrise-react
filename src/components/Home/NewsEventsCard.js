import { Card, CardContent, Divider, List, ListItem, ListItemText, ListSubheader } from "@material-ui/core";

const NewsEventsCard = () => {
  return ( 
    <>
      <Card className="bg-light">
        <CardContent>
          <List component="nav" aria-label="main mailbox folders">
            <ListSubheader component="div" id="nested-list-subheader">
              NEWS & Events
            </ListSubheader>
            <marquee direction="up">
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
            </marquee>
          </List>
        </CardContent>
      </Card>
    </>
  );
}
 
export default NewsEventsCard;
