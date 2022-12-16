import React from "react";
import styles from "./EventsList.module.css";

const EventList = ({ events, deleteEvent }) => {
  return (
    <div>
      {events.map((inputEvent) => (
        <div className={styles.card} key={inputEvent.id}>
          <h1>{inputEvent.subject}</h1>
          <p>{inputEvent.date}</p>

          <button
            onClick={() => {
              deleteEvent(inputEvent.id);
            }}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default EventList;
