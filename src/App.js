import Header from "./components/Header";
import Homepage from "./pages/Homepage/Homepage";
import Footer from "./components/Footer";
import WrongPage from "./pages/Others/WrongPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<WrongPage />} />
        <Route path="/menu" element={<WrongPage />} />
        <Route path="/reservations" element={<WrongPage />} />
        <Route path="/order-online" element={<WrongPage />} />
        <Route path="/login" element={<WrongPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
