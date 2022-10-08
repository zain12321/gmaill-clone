
import { Checkbox, IconButton } from '@mui/material';
import React from 'react';
import './EmailRow.css'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import { useNavigate } from "react-router-dom";

function EmailRow({ id, title, subject, description, time }) {
  const history = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        history('/mail');
    }
	return (
    <div onClick={handleSubmit} className="emailRow">
     <div className='emailRow_options'>
        <Checkbox/>
        <IconButton>
          <StarBorderOutlinedIcon/>
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon/>
        </IconButton>
     </div>
     <div className='emailRow_title em'>
         {title}
     </div>
     <div className='emailRow_message em'>
                <h4>
                  {subject} {" "}
                  <span className='emailRow_description'>{description}</span>
                  </h4>
</div>
<p className='emailRow_time em'>
{time}
</p>
    </div>
)}

export default EmailRow;
