import { useState, useEffect } from "react";
import "./App.css";

import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Contact from "./components/Contact";
import SearchBox from "./components/SearchBox";

function App() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    setContacts(storedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ContactForm
        contacts={contacts}
        setContacts={setContacts}
        selectedContact={selectedContact}
        setSelectedContact={setSelectedContact}
      />
      <ContactList
        contacts={contacts}
        searchTerm={searchTerm}
        setSelectedContact={setSelectedContact}
      />
      {selectedContact && (
        <Contact
          contact={selectedContact}
          setSelectedContact={setSelectedContact}
        />
      )}
    </div>
  );
}

export default App;
