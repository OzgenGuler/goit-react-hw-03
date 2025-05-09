import React from "react";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul style={{ paddingLeft: 0, listStyle: "none" }}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};
// const ContactList = ({ Contacts, SearchName, DeleteContact }) => {
// const handleContactDelete = (contact) => {
//   DeleteContact(contact.id);
// };
// const MapFilterContacts = (Contacts, SearchName) => {
//   if (!SearchName) {
//     return Contacts;
//   }
//   return Contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(SearchName.toLowerCase())
//   );
// };

// return (
//   <div>
//     {MapFilterContacts(Contacts, SearchName).map((contacts) => (
//       <Contact
//         key={contacts.id}
//         id={contacts.id}
//         name={contacts.name}
//         number={contacts.number}
//         handleContactDelete={handleContactDelete}
//       />
//     ))}
//   </div>
// );

export default ContactList;
