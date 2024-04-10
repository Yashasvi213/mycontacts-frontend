import React, {useState} from 'react';
import './App.css';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
function App() {
  const [contacts, setContacts]=useState([]);
  //I m taking contact in props 
  // const AddContactHandler= (contact)=>{
  //   console.log(contact);
  // }
  //AddContactHandler={AddContactHandler}

  return (
    <div className="ui container">
      <Header/>
      <AddContact />
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
