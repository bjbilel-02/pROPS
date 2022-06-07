import React from "react";
import PropTypes from "prop-types";

const Profil = (props) => {
  const handleName = (e) => {
    e.preventDefault();
    alert("Bjeoui MED Bilel");
  };
  return (
    <div>
      <img
        src={props.children}
        alt=""
        style={{
          width: "500px",
          height: "250px",
          display: "flex",
          margin: "auto",
          border: "5px solid #555",
        }}
      />
      <div style={{ color: "grey", textAlign: "center" }}>
        <h1>{props.fullName}</h1>
        <h3>{props.bio}</h3>
        <h4>{props.profession}</h4>
        <a href="/" onClick={handleName}>
          Click me
        </a>
      </div>
    </div>
  );
};
Profil.defaultProps = {
  fullName: "User",
  bio: "Hi! Im a user",
  profession: "Web Developper",
};

Profil.propTypes = {
  stringProp: PropTypes.string,
  functionProp: PropTypes.func,
};

export default Profil;