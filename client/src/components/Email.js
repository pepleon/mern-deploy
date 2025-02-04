import {Box, Typography, styled } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import {Star, StarBorder} from '@mui/icons-material';
import { useNavigate, Link } from "react-router-dom";
import {routes} from "../routes/routes";
import useApi from '../hooks/useApi';
import { API_URLS } from '../services/api.url';

const Wrapper = styled(Box)(
{
   padding: "0 0 0 10px",
   background: "#f2f6fc",
   cursor: 'pointer',
   display: 'flex',
   alignItems: "center",
   '& > div': {
    display: 'flex',
    width: '100%',
       '& > p':{
        fontSize: 14,
       }
   },




}


)


const Indicator = styled(Typography)({
   fontSize: "12px !important",
   background: "#ddd",
   color: "#222",
   padding: "0 4px",
   borderRadius: 4,
   marginRight: 6,
});

const Date = styled(Typography)({
    marginLeft: 'auto',
    marginRight: 20,
    fontSize: 12,
    color:"#5f6368",
  

})




const Email = ({email, selectedEmails, setRefreshScreen, setSelectedEmails}) => {
  const navigate = useNavigate();
  const toggleStarredService = useApi(API_URLS.toggleStarredEmail)

  const toggleStarredMails = () => {
        
     toggleStarredService.call({id: email._id, value: !email.starred})
     setRefreshScreen(prevState => !prevState )
  }

const onValueChange = () => {
    if (selectedEmails.includes(email._id)){
      setSelectedEmails(prevState => prevState.filter(id => id != email._id));
    }
    else {
      setSelectedEmails(prevState => [...prevState, email._id]);
    }
}


  return (
   <Wrapper>
 <Checkbox 
  checked={selectedEmails.includes(email._id)}
 fontSize='small'
 onClick={()=> onValueChange()}
 />

 {
  email.starred ?  
  <Star fontSize='small' style={{marginRight: 10, color:'#FFF200'}} onClick={()=> toggleStarredMails()}/> :
  <StarBorder fontSize='small' style={{marginRight: 10}} onClick={()=> toggleStarredMails()}/>
 }
  


  <Box onClick={() => navigate(routes.view.path, {state: {email: email}})}>
  <Typography  style={{width: 200, overflow:"hidden" }}> {email.name} </Typography>
  <Indicator > Inbox </Indicator>
  <Typography > {email.subject}  {email.body && '-'} {email.body?.slice(0, 50)} </Typography>
  <Date>
    {(new window.Date(email.date)).getDate()}
    {(new window.Date(email.date)).toLocaleString('default', { month: 'long'})}
  </Date>
  </Box>

   </Wrapper>
  )
}

export default Email;



// onClick={navigate(routes.view.path)}