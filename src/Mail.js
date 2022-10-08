import { ArrowBackIos } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import './Mail.css'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
function Mail() {
  const history = useNavigate();

  function handleSubmit(e){
    e.preventDefault();

    history('/')
  } 
  return (
    <div className='mail'>
      <div className='mail_tools'>
        <div className="tools_left">
   <IconButton onClick={handleSubmit}>
    <ArrowBackIcon/>
   </IconButton>
   <IconButton>
    <MoveToInboxIcon/>
   </IconButton>
    <IconButton>
    <ErrorIcon/>
   </IconButton>
   <IconButton>
    <DeleteIcon/>
   </IconButton>
   <IconButton>
    <EmailIcon/>
   </IconButton>
   <IconButton>
    <WatchLaterIcon/>
   </IconButton>
   <IconButton>
    <CheckCircleIcon/>
   </IconButton> 
   <IconButton>
    <LabelImportantIcon/>
   </IconButton>
    <IconButton>
    <MoreVertIcon/>
   </IconButton>
        </div>
        <div className='tools_right'>
        <IconButton>
    <UnfoldMoreIcon/>
   </IconButton> 
   <IconButton>
    <PrintIcon/>
   </IconButton>
    <IconButton>
    <ExitToAppIcon/>
   </IconButton>
        </div>
      </div>

<div className='mail_body'>
<div className='mail_mailHeader'>
 <h2>Subject</h2>
 <LabelImportantIcon className="mail_important" />
 <p className='mail_title'>Title</p>
 <p className='mail_time'>10pm</p>
</div>
<div className="mail_message">
<p>this  is a message
</p>
</div>
</div>
      </div>
  )
}

export default Mail