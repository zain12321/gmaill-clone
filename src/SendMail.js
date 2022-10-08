import React from 'react';
import './SendMail.css';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import {useForm}  from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessageIsOpen } from './features/mailSlice';
// import firebase from './firebase';
// import {db} from "./firebase"

function SendMail() {
	const { register, handleSubmit, watch, errors } = useForm();
   const dispatch = useDispatch();
   
	const onSubmit = (formData) => {
		console.log(formData);
		// db.collection("emails").add({
		// 		to:formData.to,
		// 		subject:formData.subject,
		// 		message:formData.message,
		// 		timestamp: firebase.firestore.FieldValue.serverTimeStamp()
		// 	});

		// 	dispatch(closeSendMessageIsOpen());
	};
	
	return (
		<div className="sendMail">
			<div className="sendMail_header">
				<h3>Send Message</h3>
				<CloseIcon className="sendMail_close" onClick={() => dispatch(closeSendMessageIsOpen())}/>
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input name="to" placeholder="To" type="email" 
  ref={register({ required: true })} 
          />
		   {errors.to && <span className='sendMail_errors'>to is required</span>}
				<input name="subject" placeholder="Subject" type="text" className='mail_subject' 
  ref={register({ required: true })}  
      />
		   {errors.subject && <span className='sendMail_errors'>subject is required</span>}

				<input name="message" placeholder="Message" type="text" className="sendMail_message" 
  ref={register({ required: true })} 
          />
				   {errors.message && <span className='sendMail_errors'> message is required</span>}

				<div className="sendmail_options">
					<Button className="sendMail_send" variant="contained" color="primary" type="submit" >
						Send
					</Button>
				</div>
			</form>
		</div>
	);
}

export default SendMail;
