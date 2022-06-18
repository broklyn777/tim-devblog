/* eslint-disable prettier/prettier */
// import React, { useState } from "react";

// const StateTutorial = () => {
//     const [inputValue, setInputValue] = useState("Björn");

//     let onChange = (event) => {
//         const newValue = event.target.value;
//         setInputValue(newValue);
//     };

//     return (
//         <div>
//             <input placeholder="enter something..." onChange={onChange} />
//             {inputValue}
//         </div>
//     );
// };

// export default StateTutorial;

/* eslint-disable prettier/prettier */
import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
const localizer = momentLocalizer(moment)
const myEventsList = [{ start: new Date(), end: new Date(), title: 'special event' }]
export default function App() {
  return (
    <div className="App">
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  )
}
