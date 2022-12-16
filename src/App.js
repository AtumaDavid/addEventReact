import "./App.css";
import { useState } from "react";
import EventList from "./components/EventList";
import Modal from "./components/Modal";
import Form from "./components/Form";

function App() {
  //event list
  const [events, setEvents] = useState([]);

  const [showModal, setShowModal] = useState(false);

  //add event/subject
  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });
    setShowModal(false);
  };

  //eventList delete
  const deleteEvent = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  };

  // console.log(events);

  //close button modal
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <EventList events={events} deleteEvent={deleteEvent} />

      {showModal && (
        <Modal handleClose={handleClose}>
          <Form addEvent={addEvent} />
        </Modal>
      )}

      {!showModal && (
        <button className="addBtn" onClick={() => setShowModal(true)}>
          Add new event
        </button>
      )}
    </div>
  );
}

export default App;
