import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactCard = ({ contact, clickHander }) => {
  const { id, name, email } = contact;

  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        {/* Link to Contact Details */}
        <Link
          to={`/contact/${id}`}
          state={{ contact }}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>

      {/* Delete Icon */}
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px", cursor: "pointer" }}
        onClick={() => clickHander(id)}
      ></i>

      {/* Edit Icon */}
      <Link
        to="/edit"
        state={{ contact }}
      >
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px", cursor: "pointer" }}
        ></i>
      </Link>
    </div>
  );
};

export default ContactCard;
