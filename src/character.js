import React, { useState } from "react";

export default function Character(props) {
  const [details, setDetails] = useState(false);
  return (
    <li key={props.character.id.value}>
      <img
        src={props.character.picture.large}
        alt={props.character.name.first}
      />
      <h4>
        {props.character.name.first} {props.character.name.last}
      </h4>
      <button onClick={() => setDetails(!details)}>
        {details ? "hide details" : "show Details"}
      </button>

      {details ? (
        <div>
          <p>{props.character.dob.age}</p>
          <p>{props.character.id.name}</p>
          <p>{props.character.email}</p>
        </div>
      ) : null}
    </li>
  );
}
