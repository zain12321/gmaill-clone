import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { Button, IconButton } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox';
import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import { useDispatch } from 'react-redux';
import { openSendMessageIsOpen } from './features/mailSlice';

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <div className='sidebar'>
        <Button  onClick={() => dispatch(openSendMessageIsOpen())} startIcon={<CreateOutlinedIcon fontSize='large' 
        className='text-gray-500' /> } className="sidebar_compose "
       >
        <p className='text-gray-500 font-medium'>Compose</p>
        </Button>
        <SidebarOption Icon={InboxIcon} title='Inbox' number={54} selected={true}/>
        <SidebarOption Icon={StarBorderIcon} title='Starred' number={2} />
        <SidebarOption Icon={AccessTimeIcon} title='Starred' number={13} />
         <SidebarOption Icon={LabelImportantIcon} title='Starred' number={43} /> 
        <SidebarOption Icon={NearMeIcon} title='Starred' number={67} />
        <SidebarOption Icon={NoteIcon} title='Starred' number={1} />
        <SidebarOption Icon={ExpandMoreIcon} title='Starred' number={89} />
      <div className='sidebar_footer'>
        <div className='sidebar_footerIcons'>
     <IconButton>
          <PersonIcon />
     </IconButton>
     <IconButton>
          <DuoIcon />
     </IconButton>
      <IconButton>
          <PhoneIcon />
     </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Sidebar