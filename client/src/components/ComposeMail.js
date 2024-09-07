import { Dialog, Box, Typography, styled, InputBase, TextField, Button, easing} from "@mui/material";
import { Close ,DeleteOutline } from "@mui/icons-material";
import { useRef, useState } from "react";
import useApi from '../hooks/useApi';
import { API_URLS } from "../services/api.url";

const ComposeMail = ({openDialog, setOpenDialog}) => {
const sentEmailService = useApi(API_URLS.saveSentEmail);
const saveDraftEmailService = useApi(API_URLS.saveDraftEmails);
const[data,setData] = useState({
  to: "",
  subject: "",
  body: "",
});


const to = useRef("");

const config = {
        Host : "smtp.elasticemail.com",
        Username : "godlikewebsite123@gmail.com",
        Password : "6603F70C6F80FC6DB6D4215AD69B3728B9CF",
        Port: 2525,
      
}



const Header = styled(Box) (
{
 display: 'flex',
 justifyContent: "space-between",
 padding: '10px 15px',
 background: '#f2f6fc',
 '& > p': {
    fontSize: 14,
    fontWeight: 500,
    
 }

}


);

const RecipientsWrapper = styled (Box)(
 
{
    display: 'flex',
    flexDirection: 'column',
    padding: '0 15px',
    '& > div': {
     fontSize: 14,
     borderBottom: '1px solid #f5f5f5',
     marginTop: 10,


    }
}

);







const Footer = styled (Box)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: "10px 15px ",
  alignItems: 'center',
});

const SendButton  = styled (Button)({
  background: '#0B57D0',
  color: '#fff',
  fontWeight: 'none',
  textTransform: 'none',
  borderRadius: 18,
  width: 100,

})


const dailogStyle = {
    height: '90%',
    width: '80%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    borderRadius: '10px 10px 0 0'
}

const closeComposeMail =(e) =>{
  e.preventDefault();
   
 const payload = {
  to:data.to,
  from: "godlikewebsite123@gmail.com",
  subject: data.subject,
  body: data.body,
  date: new Date(),
  image: '',
  name: 'Aman Hussain',
  starred: false,
  type: 'draft'
 }

  saveDraftEmailService.call(payload);
   if (!saveDraftEmailService.error){
    setOpenDialog(false);
    setData({
      to: "",
      subject: "",
      body: "",
    });
   }
 


  
 setData({
  to: "",
  subject: "",
  body: "",
});
setOpenDialog(false);
}

const sendMail =(e) =>{
    e.preventDefault();
  if(window.Email)   {
    window.Email.send({
        ...config,
        To : data.to,
        From : "godlikewebsite123@gmail.com",
        Subject : data.subject,
        Body : data.body
    }).then(
      message => alert(message)

      
    );  }
 
   

 const payload = {
  to:data.to,
  from: "godlikewebsite123@gmail.com",
  subject: data.subject,
  body: data.body,
  date: new Date(),
  image: '',
  name: 'Aman Hussain',
  starred: false,
  type: 'sent'
 }

  sentEmailService.call(payload);
   if (!sentEmailService.error){
    setOpenDialog(false);
    setData({
      to: "",
      subject: "",
      body: "",
    });
   }
 


  
 setData({
  to: "",
  subject: "",
  body: "",
});
setOpenDialog(false);
}


const closeCompose = (e) =>{
  e.preventDefault();
    setOpenDialog(false);
}

const onValueChange = (e) =>{
  setData({...data, [e.target.name]: e.target.value})
  console.log(data);
  
}


 const onValueChangeTo = (e) =>{
  e.preventDefault();
  to.current.focus();
  console.log(to);
}



  return (
    <Dialog open={openDialog} 
    PaperProps={{sx: 
        dailogStyle
    }}
    >
   <Header>
 <Typography>New Message</Typography>
 <Close fontSize="small" onClick={ (e)=>closeComposeMail(e)}/>

   </Header>
  
   
  
    <InputBase sx={{ fontSize: 14,marginTop: 1, borderBottom: '3px solid #f5f5f5', paddingLeft: '15px', paddingRight: '15px' }} placeholder="Recipients" name="to" value = {data.to} onChange={onValueChange }/>
    <InputBase  sx={{  fontSize: 14,marginTop: 1, borderBottom: '3px solid #f5f5f5', paddingLeft: '15px', paddingRight: '15px' }} placeholder="Subject" name="subject" onChange={(e)=>onValueChange(e)} value={data.subject}/>

  
   
     <TextField
      onChange={ (e)=>onValueChange(e)}
      multiline
      rows={18}
      sx={{ '& .MuiOutlinedInput-notchedOutline': {border: 'none'}}}
      name="body"
      
     />
      <Footer> <SendButton onClick={ (e)=>sendMail(e)}>Send</SendButton>
      <DeleteOutline onClick={ (e)=>closeCompose(e)}/></Footer>
      
    </Dialog>
  )
}

export default ComposeMail;