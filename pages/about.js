/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable prettier/prettier */
import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

function Synaxarion() {
  function sägHej() {
    alert(
      'I de tidigaste versionerna av synaxarier ingick det i de första synaxarierna lektionärsynaxarier med index över bibliska och andra lektioner, det vill säga bibliska lektionärsperikoper som skulle läsas i kyrkan. Ofta var dessa förteckningar i enlighet med kalenderåret och påskcykeln. '
    )
  }
  const [date, setDate] = useState(new Date())

  // State for date selected by user
  const [selectedDate, setSelectedDate] = useState()

  // State for text above calander
  const [calendarText, setCalendarText] = useState(`No Date is selected`)
  return (
    <>
      <div>synaxarion</div>
      <div className="app">
        <h1 className="text-center text-xl">Ortodox Kalender</h1>
        <div className="calendar-container">
          <Calendar
            onChange={setDate}
            value={date}
            onClickDay={sägHej}
            tileContent={calendarText}
            // defaultView="month"
            // nextLabel='Nästa'
            // prevLabel='Föregående'
            // onClick={"hello", "world"} onChange
            showWeekNumbers
          />
        </div>
        <p className="text-center">
          <span className="bold">Valt datum:</span> {date.toLocaleDateString('sv-SV')}
        </p>
      </div>
    </>
  )
}

export default Synaxarion
