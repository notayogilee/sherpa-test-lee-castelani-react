import React, { useContext, Fragment } from 'react';
import EventsContext from '../context/events/eventsContext';

export default function Events() {

  const { events, getEventMeetings, getEventById, event, changeDisplay, display } = useContext(EventsContext);

  const handleSelectedEvent = (id) => {
    changeDisplay("events");
    getEventById(id);
    getEventMeetings(id);
  }

  return (
    <Fragment>
      <div className="container position-absolute center-all" >
        <div className="row d-flex justify-content-around align-items-middle" >
          {display === "home" && events &&
            events.map(event =>
              <div key={event.id}>
                <a href="#!" onClick={() => { handleSelectedEvent(event.id) }} className="card d-flex flex-column justify-content-around align-items-center border-thick bg-dark br-5 o-8 position-relative" style={{ height: "35vh", width: "15vw" }}>
                  <img src={`https://tt-sherpa-backend.herokuapp.com${event.logo}`} width="100 %" alt={`logo ${event.id}`} />
                  <h5>{event.title}</h5>
                  <p>{event.detail}</p>
                </a>
              </div>
            )
          }
        </div>
      </div>
      <div className="container position-absolute">
        {display === "events" && event &&
          <div className="card d-flex flex-column justify-content-around align-items-center border-thick bg-dark br-5 o-8 position-relative" style={{ height: "25vh", width: "15vw" }}>
            <img src={`https://tt-sherpa-backend.herokuapp.com${event.logo}`} width="100 %" alt={`logo ${event.id}`} />
            <h5>{event.title}</h5>
          </div>
        }
      </div>
    </Fragment>

  )
}
