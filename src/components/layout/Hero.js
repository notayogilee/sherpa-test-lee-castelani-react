import React, { useContext } from 'react';
import EventsContext from '../../context/events/eventsContext';

export default function Hero() {
  const { display } = useContext(EventsContext);

  return (
    <div className="container-fluid">

      {display === "home" &&
        <div className="hero-exit pt-2 container-fluid bg-warning text-center d-flex flex-column position-relative" style={{ height: "30vh" }}>
          <h1>Hero</h1>
          <h4>Content - Image</h4>
        </div>
      }
      {display === "events" &&
        <div className="hero-enter pt-2 container-fluid bg-warning text-center d-flex flex-column position-relative" >
          <h1>Hero</h1>
          <h4>Content - Image</h4>
        </div>
      }

    </div>
  )
}
