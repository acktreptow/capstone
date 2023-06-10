import "./BookingPage.css";
import BookingForm from "./BookingForm";
import { useState, useReducer } from "react";

function BookingPage() {
  const updateTimes = (date) => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  };

  const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  return (
    <div className="booking-page-container">
      <h1 className="booking-page-title">Reserve a table</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
}

export default BookingPage;
