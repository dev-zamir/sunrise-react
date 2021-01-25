import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Instagram, LinkedIn, WhatsApp } from "@material-ui/icons";
import { useState } from "react";

const BottomBar = () => {
  const [value, setValue] = useState(0);
  return ( 
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        let url = ''
        if (newValue === 0)
          url = 'https://www.instagram.com/conscience.one/'
        else if (newValue === 1)
          url = 'https://www.linkedin.com/in/zamirmanihar/'
        else
          url = 'https://wa.me/7047576025'
        window.open(url, '_blank');
      }}
      showLabels
    >

      <BottomNavigationAction label="Instagram" icon={<Instagram />} />
      <BottomNavigationAction label="LinkedIn" icon={<LinkedIn />} />
      <BottomNavigationAction label="Whatsapp" icon={<WhatsApp />} />
    </BottomNavigation>
   );
}
 
export default BottomBar;