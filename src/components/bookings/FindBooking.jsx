import React, { useState } from "react"
import moment from "moment"
import { cancelBooking, getBookingByConfirmationCode } from "../utils/ApiFunctions"

const FindBooking = () => {
	const [confirmationCode, setConfirmationCode] = useState("")
	const [error, setError] = useState(null)
	const [successMessage, setSuccessMessage] = useState("")
	const [isLoading, setIsLoading] = useState(false)
	const [bookingInfo, setBookingInfo] = useState({
		id: "",
		bookingConfirmationCode: "",
		room: { id: "", roomType: "" },
		roomNumber: "",
		checkInDate: "",
		checkOutDate: "",
		guestName: "",
		guestEmail: "",
		numOfAdults: "",
		numOfChildren: "",
		totalNumOfGuests: ""
	})

	const emptyBookingInfo = {
		id: "",
		bookingConfirmationCode: "",
		room: { id: "", roomType: "" },
		roomNumber: "",
		checkInDate: "",
		checkOutDate: "",
		guestName: "",
		guestEmail: "",
		numOfAdults: "",
		numOfChildren: "",
		totalNumOfGuests: ""
	}
	const [isDeleted, setIsDeleted] = useState(false)

	const handleInputChange = (event) => {
		setConfirmationCode(event.target.value)
	}

	const handleFormSubmit = async (event) => {
		event.preventDefault()
		setIsLoading(true)

		try {
			const data = await getBookingByConfirmationCode(confirmationCode)
			setBookingInfo(data)
			setError(null)
		} catch (error) {
			setBookingInfo(emptyBookingInfo)
			if (error.response && error.response.status === 404) {
				setError(error.response.data.message)
			} else {
				setError(error.message)
			}
		}

		setTimeout(() => setIsLoading(false), 2000)
	}

	const handleBookingCancellation = async (bookingId) => {
		try {
			await cancelBooking(bookingId)
			setIsDeleted(true)
			setSuccessMessage("Booking has been cancelled successfully!")
			setBookingInfo(emptyBookingInfo)
			setConfirmationCode("")
			setError(null)
		} catch (error) {
			setError(error.message)
		}
		setTimeout(() => {
			setSuccessMessage("")
			setIsDeleted(false)
		}, 2000)
	}

	return (
		<>
			<div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
				<h2 className="text-center mb-4">Tìm kiếm phòng của tôi</h2>
				<form onSubmit={handleFormSubmit} className="col-md-6">
					<div className="input-group mb-3">
						<input
							className="form-control"
							type="text"
							id="confirmationCode"
							name="confirmationCode"
							value={confirmationCode}
							onChange={handleInputChange}
							placeholder="Nhập mã xác nhận đặt phòng"
						/>

						<button type="submit" className="btn btn-hotel input-group-text">
							Tìm phòng
						</button>
					</div>
				</form>

				{isLoading ? (
					<div>Tìm phòng của bạn...</div>
				) : error ? (
					<div className="text-danger">Lỗi: {error}</div>
				) : bookingInfo.bookingConfirmationCode ? (
					<div className="col-md-6 mt-4 mb-5">
						<h3>Thông tin phòng đặt</h3>
						<p className="text-success">Mã xác nhận: {bookingInfo.bookingConfirmationCode}</p>
						<p>Số phòng: {bookingInfo.room.id}</p>
						<p>Loại phòng: {bookingInfo.room.roomType}</p>
						<p>
							Ngày nhận phòng:{" "}
							{moment(bookingInfo.checkInDate).subtract(1, "month").format("MMM Do, YYYY")}
						</p>
						<p>
							Ngày trả phòng:{" "}
							{moment(bookingInfo.checkInDate).subtract(1, "month").format("MMM Do, YYYY")}
						</p>
						<p>Họ và tên: {bookingInfo.guestName}</p>
						<p>Email Address: {bookingInfo.guestEmail}</p>
						<p>Số lượng người lớn: {bookingInfo.numOfAdults}</p>
						<p>Số lượng trẻ nhỏ: {bookingInfo.numOfChildren}</p>
						<p>Tổng số người: {bookingInfo.totalNumOfGuests}</p>

						{!isDeleted && (
							<button
								onClick={() => handleBookingCancellation(bookingInfo.id)}
								className="btn btn-danger">
								Hùy đặt phòng
							</button>
						)}
					</div>
				) : (
					<div>Tìm kiếm phòng phù hợp</div>
				)}

				{isDeleted && <div className="alert alert-success mt-3 fade show">{successMessage}</div>}
			</div>
		</>
	)
}

export default FindBooking