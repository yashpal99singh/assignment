// components/Calendar.js
import React, { useState } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useDispatch, useSelector } from 'react-redux';
import { addEvent, updateEvent, deleteEvent } from './Redux/calendarActions';

const localizer = momentLocalizer(moment);

function AppCalendar() {
  const {event,setEvent}=useState();
  const dispatch = useDispatch();
  const events = useSelector((state) => state.calendarEvents);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('Enter event title:');
    if (title) {
      const newEvent = {
        start,
        end,
        title,
        id: new Date().getTime(),
      };
      dispatch(addEvent(newEvent));
    }
  };

  const handleEventChange = (changedEvent) => {
    dispatch(updateEvent(changedEvent));
  };

  const  handleEventDelete= (event) => {
    dispatch(deleteEvent(event.id));
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelect}
        onSelectEvent={handleEventChange}
        onDoubleClickEvent={handleEventDelete}
      />
      <h1>Create Event</h1>
      <input placeholder='Event name'/>
      <button type="submit" onClick={handleSelect}>Click here to add event </button>
      <h1>My created event list</h1>
      <button onClick={handleEventChange}>update Event</button>
      <button onClick={ handleEventDelete}>Delete Event</button>
    </div>
  );
}

export default AppCalendar;
