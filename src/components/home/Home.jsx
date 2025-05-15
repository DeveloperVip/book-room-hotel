import React, { useEffect, useState } from "react";
import MainHeader from "../layout/MainHeader";
import HotelService from "../common/HotelService";
import Parallax from "../common/Parallax";
import RoomCarousel from "../common/RoomCarousel";
import RoomSearch from "../common/RoomSearch";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// import { useAuth } from "../auth/AuthProvider"
const Home = () => {
  const location = useLocation();

  const message = location.state && location.state.message;
  const currentUser = localStorage.getItem("userId");
  const [showLoginAlert, setShowLoginAlert] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setShowLoginAlert(true);
      const timer = setTimeout(() => setShowLoginAlert(false), 3000); // 3 giây
      return () => clearTimeout(timer); // cleanup
    }
  }, [currentUser]);
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);
  return (
    <section data-aos="fade-down">
      {message && <p className="text-warning px-5">{message}</p>}
      {showLoginAlert && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-center mt-4"
          role="alert"
        >
          <strong className="font-bold">Đăng nhập thành công! </strong>
          <span className="block sm:inline">Chào mừng {currentUser}</span>
        </div>
      )}
      <MainHeader />
      <div className="container">
        <RoomSearch />
        <RoomCarousel />
        <Parallax />
        {/* <RoomCarousel /> */}
        <HotelService />
        {/* <Parallax /> */}
        {/* <RoomCarousel /> */}
      </div>
    </section>
  );
};

export default Home;
