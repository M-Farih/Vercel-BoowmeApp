import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const Datepicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <DatePicker
        className="datepicker text-white w-full"
        showYearDropdown
        dateFormat="MM/dd/yyyy"
        selected={startDate}
        onChange={(date: Date) => {
          setStartDate(date!);
        }}
        dateFormatCalendar="MMMM"
        withPortal
        // showPopperArrow={false}
        // placeholderText="Click to select a date"
      />
    </>
  );
};
