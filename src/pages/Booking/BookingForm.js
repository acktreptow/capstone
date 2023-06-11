import "./BookingForm.css";
import { useState } from "react";

function BookingForm({ availableTimes, dispatch }) {
  const [date, setDate] = useState(new Date().getDate());
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  return (
    <div>
      <form className="booking-form">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={availableTimes}
          onClick={() => dispatch({ type: "selected date" })}
          required
        >
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Reserve Table" />
      </form>
    </div>
  );
}

export default BookingForm;
