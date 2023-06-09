import "./BookingPage.css";
import BookingForm from "./BookingForm";

function BookingPage() {
  return (
    <div className="booking-page-container">
      <h1 className="booking-page-title">Reserve a table</h1>
      <BookingForm />
    </div>
  );
}

export default BookingPage;
