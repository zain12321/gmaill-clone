import React from 'react';
import './EmailList.css';
import { Checkbox, IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import Section from './Section';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmailRow from './EmailRow';

function EmailList() {
	return (
		<div className="emailList">
			<div className="emailList_settings">
				<div className="emailList_settingsLeft" >
                <Checkbox />
                <IconButton>
                    <ArrowDropDownIcon/>
                </IconButton>
                <IconButton>
                    <RedoIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
			</div>
            <div className="emailList_settingsLeft" >
                <IconButton>
                    <ChevronLeftIcon/>
                </IconButton>
                <IconButton>
                    <ChevronRightIcon/>
                </IconButton>
                <IconButton>
                    <KeyboardHideIcon/>
                </IconButton>
                <IconButton>
                    <SettingsIcon/>
                </IconButton>
			</div>
       </div>
       <div className='emailList_section'>
               <Section Icon={InboxIcon} title="Primary" color="red" selected />
               <Section Icon={PeopleIcon} title="Social" color="#1A73EB"  />
               <Section Icon={LocalOfferIcon} title="Promotion" color="green"  />

        </div>
        <div className='emailList_list'>
   <EmailRow
    title='Twitch'
    subject='Hey fellow streamer'
    description='this is a test'
    time='10am'

   /><EmailRow
  title='Twitch'
  subject='Hey fellow streamer'
  description='this is a test this is a test this is a testthis is a testthis is a testthis is a testthis is a test'
  time='10am'



 />











<EmailRow
    title='Twitch'
    subject='Hey fellow streamer'
    description='this is a test'
    time='10am'

   /><EmailRow
  title='Twitch'
  subject='Hey fellow streamer'
  description='this is a test this is a test this is a testthis is a testthis is a testthis is a testthis is a test'
  time='10am'

 />   <EmailRow
 title='Twitch'
 subject='Hey fellow streamer'
 description='this is a test'
 time='10am'

/><EmailRow
title='Twitch'
subject='Hey fellow streamer'
description='this is a test this is a test this is a testthis is a testthis is a testthis is a testthis is a test'
time='10am'

/>   <EmailRow
    title='Twitch'
    subject='Hey fellow streamer'
    description='this is a test'
    time='10am'

   /><EmailRow
  title='Twitch'
  subject='Hey fellow streamer'
  description='this is a test this is a test this is a testthis is a testthis is a testthis is a testthis is a test'
  time='10am'

 />   <EmailRow
 title='Twitch'
 subject='Hey fellow streamer'
 description='this is a test'
 time='10am'

/><EmailRow
title='Twitch'
subject='Hey fellow streamer'
description='this is a test this is a test this is a testthis is a testthis is a testthis is a testthis is a test'
time='10am'

/>   <EmailRow
    title='Twitch'
    subject='Hey fellow streamer'
    description='this is a test'
    time='10am'

   /><EmailRow
  title='Twitch'
  subject='Hey fellow streamer'
  description='this is a test this is a test this is a testthis is a testthis is a testthis is a testthis is a test'
  time='10am'

 />   <EmailRow
 title='Twitch'
 subject='Hey fellow streamer'
 description='this is a test'
 time='10am'

/><EmailRow
title='Twitch'
subject='Hey fellow streamer'
description='this is a test this is a test this is a testthis is a testthis is a testthis is a testthis is a test'
time='10am'

/>   <EmailRow
    title='Twitch'
    subject='Hey fellow streamer'
    description='this is a test'
    time='10am'

   /><EmailRow
  title='Twitch'
  subject='Hey fellow streamer'
  description='this is a test this is a test this is a testthis is a testthis is a testthis is a testthis is a test'
  time='10am'

 />   <EmailRow
 title='Twitch'
 subject='Hey fellow streamer'
 description='this is a test'
 time='10am'

/><EmailRow
title='Twitch'
subject='Hey fellow streamer'
description='this is a test this is a test this is a testthis is a testthis is a testthis is a testthis is a test'
time='10am'

/>   <EmailRow
    title='Twitch'
    subject='Hey fellow streamer'
    description='this is a test'
    time='10am'

   /><EmailRow
  title='Twitch'
  subject='Hey fellow streamer'
  description='this is a test this is a test this is a testthis is a testthis is a testthis is a testthis is a test'
  time='10am'

 />   <EmailRow
 title='Twitch'
 subject='Hey fellow streamer'
 description='this is a test'
 time='10am'

/><EmailRow
title='Twitch'
subject='Hey fellow streamer'
description='this is a test this is a test this is a testthis is a testthis is a testthis is a testthis is a test'
time='10am'

/>   <EmailRow
    title='Twitch'
    subject='Hey fellow streamer'
    description='this is a test'
    time='10am'

   /><EmailRow
  title='Twitch'
  subject='Hey fellow streamer'
  description='this is a test this is a test this is a testthis is a testthis is a testthis is a testthis is a test'
  time='10am'

 />   <EmailRow
 title='Twitch'
 subject='Hey fellow streamer'
 description='this is a test'
 time='10am'

/><EmailRow
title='Twitch'
subject='Hey fellow streamer'
description='this is a test this is a test this is a testthis is a testthis is a testthis is a testthis is a test'
time='11:24 PM'

/>
        </div>
		</div>
	);
}

export default EmailList;
