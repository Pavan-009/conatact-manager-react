import React from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList'; // Corrected typo
import {useState} from 'react';
import './App.css';

function App() {
  const [contacts,setContact] = useState([]);

  const addContactHandler = (contact)=>{
   setContact([...contacts,contact]);
   
  }

  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler = {addContactHandler}/>
      <ContactList contacts= {contacts}/>
    
    </div>
  );
}

export default App;