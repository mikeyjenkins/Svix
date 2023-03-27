import { React, useEffect, useState } from "react";
import "./styles/events.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import * as eventAPI from "./api/EventsAPI";
import Button from "react-bootstrap/Button";
import AddIcon from "@mui/icons-material/Add";
import CreateEventModal from "./components/CreateEventModal";

function App() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [events, setEvents] = useState([]);

  const createEvent = (event) => {
    eventAPI.createEvent(event).then(() => {});
  };

  const listEvents = () => {
    eventAPI.listEvents().then((res) => {
      //update events state to match result from API call
      setEvents(res);
    })
  }
  
  //get list of events when page renders
  useEffect(() => {
    listEvents();
  }, [])

  return (
    <div className="App">
      <Button
        id="primary_btn"
        size="sm"
        onClick={() => setShowCreateModal(true)}
      >
        <AddIcon />
      </Button>{" "}
      <CreateEventModal
        show={showCreateModal}
        setShowCreateModal={setShowCreateModal}
        createEvent={createEvent}
      />
    </div>
  );
}

export default App;
