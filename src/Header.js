import React from 'react';
import  './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
 
  return (
    <div className='header'>  
    <div className='header_left'>
    <IconButton>
    <MenuIcon />
  </IconButton>
  <img src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png' alt='logo' />
    </div>
     <div className='header_middle '>
      <SearchIcon />
      <input type='search' placeholder='Search mail' required />
      <ArrowDropDownIcon className='header-inputCaret ' />
     </div>
     <div className='header_right flex  items-center'>
   <IconButton>
    <AppsIcon/>
   </IconButton>
   <IconButton>
    <NotificationsIcon/>
   </IconButton>
   {/* <Avatar/> */}
   <img className='h-8 w-8 rounded-full' src='https://lh3.googleusercontent.com/ogw/AOh-ky2V1FbH12DjgBh0gbBeq00CYywNBpS1pflHQUIs=s32-c-mo' alt='' />
     </div>
  </div>
  )
} 

export default Header



