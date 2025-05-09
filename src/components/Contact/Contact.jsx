import React from "react";

const Contact = ({ contact, onDelete }) => {
  // const Contact = ({ id, name, number, handleContactDelete }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <p>
          <strong>👤 {contact.name}</strong>
        </p>
        <p>📞 {contact.number}</p>
      </div>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
      {/* <div>
        <p>
          <strong>👤{name}</strong>
        </p>
        <p>📞 {number}</p>
      </div>
      <button onClick={() => handleContactDelete(id, name, number)}>
        Delete
      </button> */}
    </div>
  );
};

export default Contact;
