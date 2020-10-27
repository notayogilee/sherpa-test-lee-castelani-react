import React, { useContext } from 'react';
import EventsContext from '../../context/events/eventsContext';

export default function Marketplace() {

  const { changeDisplay, display } = useContext(EventsContext);

  return (
    <div className="container-fluid">
      <div className="market-shrink container-fluid text-center bg-primary d-flex flex-column justify-content-center position-relative z-2" id={display === "home" ? "market-exit" : "market-enter"}>
        <a href="#!" onClick={() => changeDisplay("home")}>
          <span className="text-light">Marketplace</span>
        </a>
      </div>
    </div>
  )
}
