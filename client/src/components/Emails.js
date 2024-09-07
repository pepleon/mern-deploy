import { useOutletContext, useParams } from "react-router-dom";
import { API_URLS } from "../services/api.url";
import useApi from "../hooks/useApi";
import { useEffect } from "react";
import {  Box , List, ListItem} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import {DeleteOutlined, Padding} from '@mui/icons-material';
import Email from "./Email";
import { useState } from "react";
import NoMails from "./NoMails";
import { EMPTY_TABS } from "../Utils/constants";
const Emails = () => {
 


  const [selectedEmails, setSelectedEmails] = useState([]);
  const [refreshScreen, setRefreshScreen] = useState(false);
  const {type} = useParams();
  const getEmailsService = useApi(API_URLS.getemailFromType);
  const moveEmailsToBinService = useApi(API_URLS.moveEmailsToBin);
  const deleteEmailService = useApi(API_URLS.deleteEmail);


  useEffect(()=>{ getEmailsService.call({},type);},[type, refreshScreen]);


  const {openDrawer} = useOutletContext();

  const selectAllEmails = (e) =>{
       if (e.target.checked){
        const emails =  getEmailsService?.response?.map(email => email._id);
        setSelectedEmails(emails);
       }else {
        setSelectedEmails([]);

       }
  }


const deleteSelectedEmails = (e) =>{
      if (type === 'bin'){
        deleteEmailService.call(selectedEmails);

      }else {
        moveEmailsToBinService.call(selectedEmails);

      }
      setRefreshScreen(prevState => !prevState );

}


  return (



    <Box style={openDrawer?{marginLeft: 250} : {width: '100%'} }>
     <Box style={ {padding: '10px 20px 0 10px', display:'flex', alignItems: 'center'}}>
      <Checkbox onChange={(e) => selectAllEmails(e)}/> 
        <DeleteOutlined
        onClick={(e)=> deleteSelectedEmails(e)}
        /> 
  
      </Box>
  <List >
    {
      getEmailsService?.response?.map(email=>( 
         <Email
         email={email}
         key={email._id}
         selectedEmails={selectedEmails}
         setRefreshScreen = {setRefreshScreen}
         setSelectedEmails = {setSelectedEmails}
         />
         
      ))
    }
  </List>
{
  getEmailsService?.response?.length === 0 && 
  <NoMails message = {EMPTY_TABS[type]}/>


}





    </Box>
  )
}

export default Emails;