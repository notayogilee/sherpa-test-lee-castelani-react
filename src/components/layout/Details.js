import React, { useContext } from 'react';
import EventsContext from '../../context/events/eventsContext';

export default function Details() {

  const { event, display } = useContext(EventsContext);

  return (
    <div className="row" id={display === "events" ? "details-enter" : "details-exit"}>
      <div className="card p-2 br-4">
        <h2>{event.detail}</h2>
      </div>
    </div>
  )
}
