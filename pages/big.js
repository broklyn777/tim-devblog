/* eslint-disable prettier/prettier */
import { sv } from 'date-fns/locale'
import React, { useState } from 'react'
import DatePicker, { CalendarContainer } from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Big = () => {
  const [startDate, setStartDate] = useState(new Date())
  const MyContainer = ({ className, children }) => {
    return (
      <div className="bg-pink-100 p-2">
        <CalendarContainer className={className}>
          <div style={{ background: '#f0f0f0' }}>What is your favorite day?</div>
          <div style={{ position: 'relative' }}>{children}</div>
        </CalendarContainer>
      </div>
    )
  }
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      calendarContainer={MyContainer}
    />
  )
}

export default Big
