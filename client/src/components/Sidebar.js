import { Drawer, styled } from "@mui/material";
import SideBarContent from "./SideBarContent";
const Sidebar = ({openDrawer}) => {
  return (
    <Drawer 
   anchor='left'
   open = {openDrawer}
   hideBackdrop= {true}
   ModalProps={{
    keepMounted: true
   }}

   variant="persistent"
   sx={{

     '& .MuiDrawer-paper': {
      marginTop: "64px",
      width: 250,
      borderRight: "none",
      background: "#F5F5F5",
      height: "cal(100vh-64px)"

     }

   }} >
 <SideBarContent/>
    </Drawer>
  
  )
}

export default Sidebar;