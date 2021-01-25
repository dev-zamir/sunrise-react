import { Card, CardContent, List, ListItem, ListItemText, ListSubheader } from "@material-ui/core";

const PhotoGallery = () => {
  return ( 
    <Card className="full-width bg-light">
      <CardContent>
        <List component="nav" aria-label="main mailbox folders">
          <ListSubheader component="div" id="nested-list-subheader">
            Photo Gallery
          </ListSubheader>
          <ListItem button>
            <ListItemText primary="Click here to see photo gallery" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
 
export default PhotoGallery;
