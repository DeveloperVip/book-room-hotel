import React, { useState, useEffect } from "react";
import moment from "moment";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const BookingSummary = ({ booking, payment, isFormValid, onConfirm }) => {
  const checkInDate = moment(booking.checkInDate);
  const checkOutDate = moment(booking.checkOutDate);
  const numberOfDays = checkOutDate.diff(checkInDate, "days");
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const navigate = useNavigate();

  const handleConfirmBooking = () => {
    setIsProcessingPayment(true);
    setTimeout(() => {
      setIsProcessingPayment(false);
      setIsBookingConfirmed(true);
      onConfirm();
    }, 3000);
  };

  useEffect(() => {
    if (isBookingConfirmed) {
      navigate("/booking-success");
    }
  }, [isBookingConfirmed, navigate]);

  return (
    <div className="row">
      <div className="col-md-6"></div>
      <div className="card card-body mt-5">
        <h4 className="card-title hotel-color">Tóm tắt đặt chỗ</h4>
        <p>
          Tên: <strong>{booking.guestFullName}</strong>
        </p>
        <p>
          Email: <strong>{booking.guestEmail}</strong>
        </p>
        <p>
          Ngày nhận phòng:{" "}
          <strong>{moment(booking.checkInDate).format("MMM Do YYYY")}</strong>
        </p>
        <p>
         Ngày trả phòng:{" "}
          <strong>{moment(booking.checkOutDate).format("MMM Do YYYY")}</strong>
        </p>
        <p>
          Số lượng ngày đã đặt: <strong>{numberOfDays}</strong>
        </p>

        <div>
          <h5 className="hotel-color">Số lượng khách</h5>
          <strong>
            Người lớn{booking.numOfAdults > 1 ? "s" : ""} : {booking.numOfAdults}
          </strong>
          <strong>
            <p>Trẻ em : {booking.numOfChildren}</p>
          </strong>
        </div>

        {payment > 0 ? (
          <>
            <p>
              Tổng thanh toán: <strong>${payment}</strong>
            </p>

            {isFormValid && !isBookingConfirmed ? (
              <Button variant="success" onClick={handleConfirmBooking}>
                {isProcessingPayment ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm mr-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Đã xác nhận đặt phòng, đang chuyển hướng tới mục thanh toán...
                  </>
                ) : (
                  "Xác nhận đặt phòng và tiến hành thanh toán"
                )}
              </Button>
            ) : isBookingConfirmed ? (
              <div className="d-flex justify-content-center align-items-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            ) : null}
          </>
        ) : (
          <p className="text-danger">
            Ngày trả phòng phải sau ngày nhận phòng.
          </p>
        )}
      </div>
    </div>
  );
};

export default BookingSummary;
