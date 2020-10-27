import React, { useContext, Fragment } from 'react';
import Marketplace from './Marketplace';
import Hero from './Hero';
import Menu from './Menu';
import Events from '../Events';
import EventsContext from '../../context/events/eventsContext';

export default function Meetings() {

  const { display, meetings, event } = useContext(EventsContext);

  return (
    <Fragment>
      {display === "home" &&
        <div className="container-fluid bg-secondary position-relative" style={{ height: "100vh", width: "100%" }}>
          <div className="row">
            <Marketplace />
          </div>

          <div className="row">

            <Hero />

            <Menu />
            <Events />
          </div>
        </div>
      }
      {display === "events" &&
        <div className="container-fluid bg-secondary position-relative" style={{ height: "100vh", width: "100%" }}>
          <div className="row">
            <Marketplace />
          </div>

          <div className="row">
            <Hero />
            <Menu />
            <Events />
            <div className="container position-absolute center-all" >
              <h1>Featured Meetings</h1>
              <div className="row d-flex justify-content-around align-items-middle" >
                {meetings.map((meeting, index) =>
                  <div key={index}>
                    <div className="card d-flex flex-column justify-content-around align-items-center border-thick bg-dark br-5 o-8 position-relative" style={{ height: "35vh", width: "15vw" }}>
                      <h5>{`Meeting ${(index + 1)}`}</h5>
                      <p>{meeting.start}</p>
                      <p>{meeting.end}</p>
                    </div>
                  </div>
                )
                }
              </div>
            </div>
          </div>
        </div>
      }
    </Fragment>
  )
}
