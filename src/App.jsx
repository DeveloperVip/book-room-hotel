import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import ExistingRooms from "./components/room/ExistingRooms";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./components/home/Home";
import EditRoom from "./components/room/EditRoom";
import AddRoom from "./components/room/AddRoom";
import Footer from "./components/layout/Footer";
import RoomListing from "./components/room/RoomListing";
import Bookings from "./components/bookings/Bookings";
import FindBooking from "./components/bookings/FindBooking";
import Login from "./components/auth/Login";
import Registration from "./components/auth/Registration";
import Profile from "./components/auth/Profile";
import { AuthProvider } from "./components/auth/AuthProvider";
import RequireAuth from "./components/auth/RequireAuth";
import NavBar from "./components/layout/NavBar";
import Admin from "./components/admin/Admin";
import Checkout from "./components/bookings/Checkout";
import BookingSuccess from "./components/bookings/BookingSuccess";
import FooterCommon from "./components/common/FooterCommon";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/about/About";
import ExistingUsers from "./components/admin/ExistingUsers";
import ExistingRoles from "./components/admin/ExistingRoles";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;

const AppRoutes = () => {
  const location = useLocation();

  return (
    <>
     <NavBar />
      <main>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/edit-room/:roomId" element={<EditRoom />} />
          <Route path="/add-room" element={<AddRoom />} />

          <Route
            path="/book-room/:roomId"
            element={
              <RequireAuth>
                <Checkout />
              </RequireAuth>
            }
          />

          <Route path="/browse-all-rooms" element={<RoomListing />} />

          <Route path="/admin" element={<Admin />}>
            <Route path="existing-bookings" element={<Bookings />} />
            <Route path="existing-rooms" element={<ExistingRooms />} />
            <Route path="existing-users" element={<ExistingUsers />} />
            <Route path="existing-roles" element={<ExistingRoles />} />
            <Route path="find-booking" element={<FindBooking />} />
          </Route>

          <Route path="/booking-success" element={<BookingSuccess />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<FindBooking />} />
        </Routes>

        {!location.pathname.startsWith("/admin") && (
          <div className="footer">
            <FooterCommon />
            <Footer />
          </div>
        )}
      </main>
    </>
  );
};
