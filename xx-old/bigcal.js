/* eslint-disable react/no-unknown-property */
/* eslint-disable prettier/prettier */
// import React from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
// import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
// import "react-big-calendar/lib/css/react-big-calendar.css"; const localizer = momentLocalizer(moment); const events = [{ start: new Date(), end: new Date(), title: "special event" }]; const DnDCalendar = withDragAndDrop(Calendar); class App extends React.Component {
//     state = {
//         events
//     }; onEventResize = (data) => {
//         const { start, end } = data; this.setState((state) => {
//             state.events[0].start = start;
//             state.events[0].end = end;
//             return { events: state.events };
//         });
//     }; onEventDrop = (data) => {
//         console.log(data);
//     }; render() {
//         return (
//             <div className="App">
//                 <DnDCalendar
//                     defaultDate={moment().toDate()}
//                     defaultView="month"
//                     events={this.state.events}
//                     localizer={localizer}
//                     onEventDrop={this.onEventDrop}
//                     onEventResize={this.onEventResize}
//                     resizable
//                     style={{ height: "30vh" }}
//                 />
//             </div>
//         );
//     }
// } export default App;

import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

function App() {
  // Array to store month string values
  const allMonthValues = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  // State for date selected by user
  const [selectedDate, setSelectedDate] = useState()

  // State for text above calander
  const [calendarText, setCalendarText] = useState(`No Date is selected`)

  // Function to update selected date and calander text
  const handleDateChange = (value) => {
    setSelectedDate(value)
    setCalendarText(`The selected Date is ${value.toLocaleDateString('sv-SV')}`)
  }

  // Function to handle selected Year change
  const handleYearChange = (value) => {
    const yearValue = value.getFullYear()
    setCalendarText(`${yearValue} Year  is selected`)
  }

  // Function to handle selected Month change
  const handleMonthChange = (value) => {
    const monthValue = allMonthValues[value.getMonth()]
    setCalendarText(`${monthValue} Month  is selected`)
  }

  return (
    <div className="app">
      <h2 className="calander-details">{calendarText}</h2>
      <Calendar
        onClickMonth={handleMonthChange}
        onClickYear={handleYearChange}
        onChange={handleDateChange}
        value={selectedDate}
      />
    </div>
  )
}

export default App
