import "./BookingForm.css";
import { useState } from "react";

function BookingForm() {
  const [date, setDate] = useState(new Date().getDate());
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  return (
    <div>
      <form className="booking-form">
        <label htmlFor="res-date">Choose date</label>
        <br />
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <br />
        <label htmlFor="res-time">Choose time</label>
        <br />
        <select
          id="res-time"
          value={availableTimes}
          onChange={(e) => setAvailableTimes(e.target.value)}
        >
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        <br />
        <label htmlFor="guests">Number of guests</label>
        <br />
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
        <br />
        <label htmlFor="occasion">Occasion</label>
        <br />
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </div>
  );
}

export default BookingForm;
