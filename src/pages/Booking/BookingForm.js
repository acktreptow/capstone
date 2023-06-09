import "./BookingForm.css";

function BookingForm() {
  return (
    <div>
      <form className="booking-form">
        <label htmlFor="res-date">Choose date</label>
        <br />
        <input type="date" id="res-date" />
        <br />
        <label htmlFor="res-time">Choose time</label>
        <br />
        <select id="res-time">
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>{" "}
        <br />
        <label htmlFor="guests">Number of guests</label>
        <br />
        <input type="number" placeholder="1" min="1" max="10" id="guests" />
        <br />
        <label htmlFor="occasion">Occasion</label>
        <br />
        <select id="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </div>
  );
}

export default BookingForm;
