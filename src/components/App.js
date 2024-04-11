import React, {useEffect, useState} from 'react';
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
    setContacts([...contacts, contact]);
    //...contacts refers to old contact
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
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
