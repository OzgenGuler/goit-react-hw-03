import React from "react";

const SearchBox = ({ search }) => {
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
      <label htmlFor="search">Find Contacts by Name </label>
      <input
        type="text"
        id="search"
        onChange={(evt) => search(evt.target.value)}
        placeholder="Search by name"
      />
    </div>
  );
};

export default SearchBox;
