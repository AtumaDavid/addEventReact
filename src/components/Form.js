import React, { useState } from "react";
import "./Form.css";

const Form = ({ addEvent }) => {
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputEvent = {
      subject: subject,
      date: date,
      id: Math.floor(Math.random() * 10000),
    };
    // console.log(inputEvent);

    addEvent(inputEvent);
  };

  return (
    <form className="modalForm" onSubmit={handleSubmit}>
      <label>
        <span>Event:</span>
        <input
          type="text"
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
        />
      </label>

      <label>
        <span>Event Date:</span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>

      <button className="btnAdd">Add</button>
    </form>
  );
};

export default Form;
