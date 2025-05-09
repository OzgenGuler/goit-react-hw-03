import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <div
      style={{
        margin: "20px",
        border: "1px solid #ccc",
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <label>Find Contacts by Name </label>
      <input
        type="text"
        id="search"
        value={value}
        onChange={onChange}
        placeholder="Search by name"
      />
    </div>
  );
};

export default SearchBox;
