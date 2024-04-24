import React, {useEffect, useState} from 'react';
import { v4 as uuid } from "uuid";
import './App.css';

import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
function App() {
  const [contacts, setContacts]=useState([]);
//we will also do set contcats
  const LOCAL_STORAGE_KEY= "contacts";
  // I m taking contact in props  contact of ContactCard 
  const AddContactHandler= (contact)=>{
    console.log(contact);
    setContacts([...contacts, {id:uuid(),...contact}]);
    //...contacts refers to old contact
  }

  const removeContactHandler =(id)=>{
    const newContactList= contacts.filter((contact)=>{
      return contact.id !=id;
    });
    //if it is true then the particular contact is included otherwise it is not
    setContacts(newContactList);
  }

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);
  

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) {
      setContacts(retrieveContacts);
    }
  }, []);
  
  


  

  return (
    <div className="ui container">
      <Header/>
      <AddContact AddContactHandler = {AddContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
