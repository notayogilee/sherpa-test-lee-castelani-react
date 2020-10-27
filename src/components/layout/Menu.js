import React, { useContext, useEffect } from 'react';
import EventsContext from '../../context/events/eventsContext';

export default function Menu() {

  const { menu, getMenuByContext, display } = useContext(EventsContext);

  useEffect(() => {
    getMenuByContext(display)
  }, [])

  return (

    <div className="row ml-2" id={display === "events" ? "menu-enter" : "menu-exit"} style={{ width: "15vw" }}>
      <div className="col">
        <div className="card p-4 d-flex flex-column bg-light justify-content-center br-4 up-5">
          {menu.map((item, index) =>
            <div key={index} className="card p-2 br-5 m-2">
              <h5 className="text-center mb-0">{item}</h5>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
