import { React, useEffect, useState } from "react";
import "./styles/events.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import * as eventAPI from "./api/EventsAPI";
import Button from "react-bootstrap/Button";
import AddIcon from "@mui/icons-material/Add";
import CreateEventModal from "./components/CreateEventModal";
import ListGroup from "react-bootstrap/ListGroup";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EditModal from "./components/EditEventModal";

function App() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [events, setEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState();

  //create event and update events list with new event
  const createEvent = (event) => {
    eventAPI.createEvent(event).then((res) => {
      setEvents([...events, res]);
      setShowCreateModal(false);
    });
  };

  //update event and call list API to get updated value
  //TODO: update state using update result rather than recalling list API
  const updateEvent = (event) => {
    eventAPI.updateEvent(event).then(() => {
      listEvents();
      //close edit modal after update
      setShowEditModal(false);
    });
  };

  const listEvents = () => {
    eventAPI.listEvents().then((res) => {
      //update events state to match result from API call
      setEvents(res)
    });
  };

  //get list of events when page renders
  useEffect(() => {
    listEvents();
  }, []);

  return (
    <div className="events_page_wrapper">
      <div className="events_component">
        <div className="events_header">
          <h3>Events</h3>
          <Button
            id="primary_btn"
            size="sm"
            onClick={() => setShowCreateModal(true)}
          >
            <AddIcon />
          </Button>{" "}
        </div>
        <div className="events_list">
          <ListGroup>
            {events.map((event, index) => (
              <ListGroup.Item
                key={index}
                onClick={() => {
                  setCurrentEvent(event);
                  setShowEditModal(true);
                }}
                className="list_item"
              >
                {event.name} <ArrowForwardIosIcon />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <CreateEventModal
          show={showCreateModal}
          setShowCreateModal={setShowCreateModal}
          createEvent={createEvent}
        />
        {showEditModal && <EditModal
          event={currentEvent}
          show={showEditModal}
          setShowEditModal={setShowEditModal}
          updateEvent={updateEvent}
        />}
      </div>
    </div>
  );
}

export default App;
