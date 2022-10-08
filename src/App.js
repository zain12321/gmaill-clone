import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { useSelector } from 'react-redux';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  return (
    <Router>
 <div className="App">
   <Header/>
   <div className='app_body'>
<Sidebar/>
<Routes>
<Route  path='/mail' element={<Mail />}></Route>
 <Route  path='/' element={<EmailList />}></Route>
</Routes>
</div>
{sendMessageIsOpen && <SendMail />}
    </div>
    </Router>
   
  );
}

export default App;