import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
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

  const [search, setSearch] = useState("");

  const addContact = (newContact) => {
    const isExist = contacts.find(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isExist) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    setContacts([...contacts, { ...newContact, id: nanoid() }]);
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const handlesearchContact = (e) => {
    setSearch(e.target.value);
  };

  const Contacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Phone-Book</h1>
      <ContactForm addConstact={addContact} />
      <SearchBox searchContact={handlesearchContact} />
      <ContactList
        contacts={Contacts}
        deleteContact={deleteContact}
        search={search}
      />
    </div>
  );
}

export default App;
