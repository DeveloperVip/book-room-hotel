import React, { useState } from "react";
import { registerUser } from "../utils/ApiFunctions";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [registration, setRegistration] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    setRegistration({ ...registration, [e.target.name]: e.target.value });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const result = await registerUser(registration);
      setSuccessMessage(result);
      setErrorMessage("");
      setRegistration({ firstName: "", lastName: "", email: "", password: "" });
      navigate("/login");
    } catch (error) {
      setSuccessMessage("");
      setErrorMessage(`Registration error : ${error.message}`);
    }
    setTimeout(() => {
      setErrorMessage("");
      setSuccessMessage("");
    }, 5000);
  };

  return (
    <section className="container col-6 mt-5 mb-5">
      {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
      {successMessage && (
        <p className="alert alert-success">{successMessage}</p>
      )}

      <h2>Đăng ký</h2>
      <form onSubmit={handleRegistration}>
        <div className="mb-3 row">
          <label htmlFor="firstName" className="col-sm-2 col-form-label">
            Họ
          </label>
          <div className="col-sm-10">
            <input
              id="firstName"
              name="firstName"
              type="text"
              className="form-control"
              value={registration.firstName}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="lastName" className="col-sm-2 col-form-label">
            Tên
          </label>
          <div className="col-sm-10">
            <input
              id="lastName"
              name="lastName"
              type="text"
              className="form-control"
              value={registration.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              id="email"
              name="email"
              type="email"
              className="form-control"
              value={registration.email}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="password" className="col-sm-2 col-form-label">
            Mật khẩu
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={registration.password}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mb-3 text-center">
          <button
            type="submit"
            className="btn btn-hotel btn-success"
            style={{ marginRight: "10px" }}
          >
            Đăng ký
          </button>
          <span style={{ marginLeft: "10px", margin:"auto" }} className="text-center">
            Bạn đã có tài khoản ? <Link to={"/login"}>Đăng nhập</Link>
          </span>
        </div>
      </form>
    </section>
  );
};

export default Registration;
