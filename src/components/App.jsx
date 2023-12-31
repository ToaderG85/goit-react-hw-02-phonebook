import React, { useState } from "react";
import { nanoid } from "nanoid";
import ContactFilter from "./ContactFilter/ContactFilter";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";

export const App = () => {
  const [contacts,setContacts] = useState([
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
  ])

  const [filter,setFilter] = useState('');

  const onSubmitHandler = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const existentName = contacts.find(user => user.name === contact.name);
    if (existentName) {
      alert(`${contact.name} is already in contacts`);
    } else {
      setContacts(prevContacts => [contact, ...prevContacts]);
    }
  };

  const handleChange = event => {
    const {value} = event.target;
    setFilter(value);
  };

  const handleDelete = id => {
    const newContactList = contacts.filter(contact => contact.id !== id);
    setContacts(newContactList);
  };

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div
      style={{
        height: '100vh',       
        fontSize: 40,
        color: '#010101',
        margin: 20,
        width: 400
      }}
    >
      <h2 
        style={{color: '#fff'}}>Phonebook</h2>
      <ContactForm onSubmit={onSubmitHandler}/>
      <ContactFilter value={filter} onChange={handleChange}/>
      <ContactList contacts={filterContacts} onDelete={handleDelete}/>      
    </div>
  );
};
