import Emails from "./Emails";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const Main = () => {
 
  const [openDrawer, setOpenDrawer ] = useState(true);

  const toggleDrawer = () => {
    setOpenDrawer(prevState => !prevState);
  }


  return (
    <>

   <Header toggleDrawer={toggleDrawer} />
   <Box>
   <Sidebar openDrawer ={openDrawer}/>
   <Suspense>
    <Outlet context={{openDrawer}}/>
    </Suspense>
    </Box>
    </>
  )
}

export default Main;