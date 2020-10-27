import React, { useEffect, useReducer } from 'react';
import EventsContext from './eventsContext';
import EventsReducer from './eventsReducer';
import {
  GET_EVENTS,
  GET_EVENT,
  GET_EVENT_MEETINGS,
  GET_MENU,
  DISPLAY
} from '../types';

const EventsState = props => {
  const initialState = {
    events: [],
    event: {},
    meetings: [],
    menu: [],
    logo: {},
    display: "home"
  }

  const [state, dispatch] = useReducer(EventsReducer, initialState);

  // Get Events
  const getEvents = async () => {
    try {
      const res = await fetch('https://tt-sherpa-backend.herokuapp.com/events');
      const events = await res.json();

      dispatch({
        type: GET_EVENTS,
        payload: events
      });
    } catch (err) {
      console.log(err);
    }
  }

  // Get Event
  const getEventById = async (id) => {
    try {
      const res = await fetch(`https://tt-sherpa-backend.herokuapp.com/events/${id}`);
      const event = await res.json();
      dispatch({
        type: GET_EVENT,
        payload: event
      });
    } catch (err) {
      console.log(err);
    }
  }

  // Get Meetings for Event
  const getEventMeetings = async (eventId) => {
    try {
      const res = await fetch(`https://tt-sherpa-backend.herokuapp.com/events/${eventId}/meetings`);
      const meetings = await res.json();
      dispatch({
        type: GET_EVENT_MEETINGS,
        payload: meetings
      });
    } catch (err) {
      console.log(err);
    }
  }

  // Get Menu
  const getMenuByContext = async (context) => {
    try {
      const res = await fetch(`https://tt-sherpa-backend.herokuapp.com/menu/${context}`);
      const menu = await res.json();
      dispatch({
        type: GET_MENU,
        payload: menu
      });
    } catch (err) {
      console.log(err);
    }
  }

  // Set Display
  const changeDisplay = (display) => {

    dispatch({
      type: DISPLAY,
      payload: `${display}`
    })
  }

  useEffect(() => {
    getEvents();
  }, [])

  return <EventsContext.Provider
    value={{
      events: state.events,
      event: state.event,
      meetings: state.meetings,
      menu: state.menu,
      display: state.display,
      getMenuByContext,
      getEventById,
      getEventMeetings,
      changeDisplay
    }}
  >
    {props.children}
  </EventsContext.Provider>
}

export default EventsState;

