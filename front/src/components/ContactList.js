import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const { contacts, getContactId } = props;

  return (
    <div className="ui container" style={{ paddingTop: "100px" }}> 
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h1>Contact List</h1>
        <Link to="/add">
          <button className="ui button blue" style={{ marginLeft: "auto" , fontSize: "20px" }}>
            Add Contact
          </button>
        </Link>
      </div>

      <div className="ui relaxed divided list">
        {contacts.map((contact) => {
          return (
            <ContactCard
              key={contact.id}
              contact={contact}
              clickHander={getContactId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ContactList;
