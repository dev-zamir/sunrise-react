import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Instagram, LinkedIn, WhatsApp } from "@material-ui/icons";
import { useState } from "react";

const BottomBar = () => {
  const [value, setValue] = useState(0);
  return ( 
    <BottomNavigation
      value={value}
    >

      <BottomNavigationAction label="Instagram" value={0} onClick={() => window.open('https://www.instagram.com/conscience.one/', '_blank')} icon={<Instagram />} style={{ color: "#517fa4" }} />

      <BottomNavigationAction label="LinkedIn" value={0} onClick={() => window.open('https://www.linkedin.com/in/zamirmanihar/', '_blank')} icon={<LinkedIn />} style={{ color: "#007bb6" }} />

      <BottomNavigationAction label="Whatsapp" value={0} onClick={() => window.open('https://wa.me/+917047576025')}  icon={<WhatsApp />} style={{ color: "#25d366" }} />
    </BottomNavigation>
   );
}
 
export default BottomBar;