/* eslint-disable prettier/prettier */
import { sv } from 'date-fns/locale'
import React, { useState } from 'react'
import DatePicker, { CalendarContainer } from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

const Big = () => {
  const [startDate, setStartDate] = useState(new Date())
  const MyContainer = ({ className, children }) => {
    return (
      <div className="bg-teal-100 p-1">
        <CalendarContainer className={className}>
          <div className="container"></div>
          <div style={{ position: 'relative' }}>{children}</div>
        </CalendarContainer>
      </div>
    )
  }
  return (
    <DatePicker
      dateFormat="yyyy/MM/dd"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      calendarContainer={MyContainer}
      monthsShown={1} // add this prop
      // isClearable
      // placeholderText="I have been cleared!"
      className="rounded-xl border-teal-700"
      showWeekNumbers
      locale={sv}
    />
  )
}

export default Big
