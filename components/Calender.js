import styles from '../styles/Calender.module.css'

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MyDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div >
    <h5 className={styles.text}>Filter Notices</h5>
    <DatePicker className={styles.calender}
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="dd/MM/yyyy"
      placeholderText="Pick a date"
    />
    </div>
  );
};

export default MyDatePicker;

