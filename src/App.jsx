// import { useEffect, useState } from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  // const localStorageContacts = JSON.parse(localStorage.getItem("contacts")) ||
  const [contacts, setContacts] = useState([
    { id: nanoid(), name: "Rosie Simpson", number: "459-12-56" },
    { id: nanoid(), name: "Hermione Kline", number: "443-89-12" },
    { id: nanoid(), name: "Eden Clements", number: "645-17-79" },
    { id: nanoid(), name: "Annie Copeland", number: "227-91-26" },
    { id: nanoid(), name: "Rosie Kline ", number: "459-12-57" },
    { id: nanoid(), name: "Hermione Simpson", number: "443-89-13" },
    { id: nanoid(), name: "Eden Copeland", number: "645-17-78" },
    { id: nanoid(), name: "Annie Clements", number: "227-91-25" },
  ]);
  const [filter, setFilter] = useState("");

  const handleAddContact = ({ name, number }) => {
    const exists = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (exists) {
      alert(`${name} is already in contacts`);
      return;
    }

    setContacts((prev) => [...prev, { id: nanoid(), name, number }]);
  };

  const handleDeleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ padding: 20 }}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </div>
    // const [contacts, setContacts] = useState(localStorageContacts);
    // const [search, setSearch] = useState("");

    // const addContact = (contact) => {
    //   setContacts((prevContact) => {
    //     return [...prevContact, contact];
    //   });
    // };
    // // setContacts([...contacts, { ...contacts, id: nanoid() }]);

    // const deleteContactByID = (id) => {
    //   setContacts((prevContacts) => {
    //     return prevContacts.filter((contact) => contact.id !== id);
    //   });
    // };

    // const SearchContact = (name) => {
    //   setSearch(name);
    // };
    // useEffect(() => {
    //   localStorage.setItem("contacts", JSON.stringify(contacts));
    // }, [contacts]);

    // return (
    //   <div className="app">
    //     <h1>Phone-Book</h1>
    //     <ContactForm addConstact={addContact} />
    //     <SearchBox
    //       value={SearchContact}
    //       onChange={(e) => setSearch(e.target.value)}
    //     />
    //     <ContactList
    //       Contacts={contacts}
    //       Search={search}
    //       DeleteContact={deleteContactByID}
    // />
    // </div>
    // );
  );
}

export default App;
