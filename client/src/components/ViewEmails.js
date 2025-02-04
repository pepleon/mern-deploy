import { useOutletContext, useLocation } from "react-router-dom";
import {Box , Container, Typography, styled} from "@mui/material";
import { ArrowBack, Delete } from "@mui/icons-material";
import { emptyProfilePic } from "../Utils/constants";
import useApi from '../hooks/useApi';
import { API_URLS } from '../services/api.url';

const IconWrapper = styled(Box)({
  padding:15,
  

});


const Subject = styled(Typography)({

fontSize: 22,
margin: "10px 0 20px 75px",
display: 'flex',

});

const Indicator = styled(Box)({
   fontSize: 12,
   background: '#ddd',
   color: "#222",
   padding: "2px 4px",
   marginLeft: 6,
   borderRadius: 4,
   alignSelf: 'center',

});


const ContainerB = styled(Box)({
 marginLeft: 15,
 width: '100%',
 '& > div':{
  display:'flex',
      '& > p > span ':{
        fontSize: 12,
        color: "#5E5E5E"
               }
 }
});


const Wrapper = styled(Box)({
// width: '100%',
display:'flex',
'& > p > span ':{
  fontSize: 12,
  color: "#5E5E5E"
}


});

const DateB = styled(Box)({

  margin: "0 50px 0 auto",
  fontSize: 12,
  color: "#5E5E5E"

});


const Image = styled("img")({
  borderRadius: "50%",
  width: 40,
  height: 40,
  margin: '5px 10px 0 10px',
  background: "#cccccc",

});




const ViewEmails = () => {

  const moveEmailsToBinService = useApi(API_URLS.moveEmailsToBin);

  const deleteEmail = () => {
  
      moveEmailsToBinService.call([email._id]);
  
     window.history.back();
  }
  








  const {state} = useLocation();
  const {email} = state;
   
const {openDrawer} = useOutletContext();    
  return (
    <Box style={openDrawer?{marginLeft: 250} : {width: '100%'} }>
    <IconWrapper>
      <ArrowBack onClick={() => window.history.back()} color="action" fontSize="small"/>
      <Delete  color="action" fontSize="small" style={{marginLeft: 40}}  onClick={()=> deleteEmail ()}/>
    </IconWrapper>
    <Subject>
     {email?.subject}  <Indicator component="span">Inbox</Indicator>
    </Subject>
    <Box style={{display: 'flex'}}>
       <Image src={emptyProfilePic} alt="dp" />
       <ContainerB>
        <Box>
         <Typography  style={{marginTop: 10,}}>{email.name}
         <Box component="span">{"<"+email.to+">"}</Box>
         </Typography>
      <DateB>
      {(new window.Date(email.date)).getDate()}
      {(new window.Date(email.date)).toLocaleString('default', { month: 'long'})}
      {(new window.Date(email.date)).getFullYear()}
      </DateB>
        </Box>
   <Typography>{email.body}</Typography> 
       </ContainerB>
    </Box>
    
    
    </Box>
  )
}

export default ViewEmails;