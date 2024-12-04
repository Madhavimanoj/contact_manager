import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditContact = ({ updateContactHandler }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve contact info from location.state
  const contact = location.state?.contact;

  // Initialize state with contact details
  const [editedContact, setEditedContact] = useState(contact || {});

  const update = (e) => {
    e.preventDefault();
    if (!editedContact.name || !editedContact.email) {
      alert("All fields are mandatory!");
      return;
    }
    updateContactHandler(editedContact);
    navigate("/");
  };

  return (
    <div
      className="ui main"
      style={{
        maxWidth: "600px",
        margin: "50px auto",
        padding: "30px",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#333",
          marginBottom: "30px",
          fontSize: "24px",
        }}
      >
        Edit Contact
      </h2>
      <form className="ui form" onSubmit={update}>
        <div className="field" style={{ marginBottom: "15px" }}>
          <label
            style={{
              fontWeight: "bold",
              color: "#555",
              marginBottom: "8px",
            }}
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={editedContact.name}
            onChange={(e) =>
              setEditedContact({ ...editedContact, name: e.target.value })
            }
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              boxSizing: "border-box",
              marginBottom: "10px",
            }}
          />
        </div>
        <div className="field" style={{ marginBottom: "15px" }}>
          <label
            style={{
              fontWeight: "bold",
              color: "#555",
              marginBottom: "8px",
            }}
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={editedContact.email}
            onChange={(e) =>
              setEditedContact({ ...editedContact, email: e.target.value })
            }
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              boxSizing: "border-box",
              marginBottom: "10px",
            }}
          />
        </div>
        <button
          className="ui button blue"
          type="submit"
          style={{
            backgroundColor: "#4CAF50",
            color: "#fff",
            padding: "10px 20px",
            fontSize: "16px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            width: "100%",
            transition: "background-color 0.3s",
          }}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditContact;
