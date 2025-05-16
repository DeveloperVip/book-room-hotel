import axios from "axios"

export const api = axios.create({
    baseURL:"https://be-web-hotel.onrender.com"
})

export const getHeader = () => {
	const token = localStorage.getItem("token")
	return {
		Authorization: `Bearer ${token}`,
		"Content-Type": "application/json"
	}
}

/* This function adds a new room room to the database */
export async function addRoom(photo, roomType, roomPrice) {
	const formData = new FormData()
	formData.append("photo", photo)
	formData.append("roomType", roomType)
	formData.append("roomPrice", roomPrice)

	const response = await api.post("/rooms/add/new-room", formData)
	if (response.status === 201) {
		return true
	} else {
		return false
	}
}

/* This function gets all room types from thee database */
export async function getRoomTypes() {
	try {
		const response = await api.get("/rooms/room/types")
		return response.data
	} catch (error) {
        console.log(error);
        
		throw new Error("Error fetching room types")
	}
}
/* This function gets all rooms from the database */
export async function getAllRooms() {
	try {
		const result = await api.get("/rooms/all-rooms")
		return result.data
	} catch (error) {
        console.log(error);
        
		throw new Error("Error fetching rooms")
	}
}

/* This function deletes a room by the Id */
export async function deleteRoom(roomId) {
	try {
		const result = await api.delete(`/rooms/delete/room/${roomId}`, {
			headers: getHeader()
		})
		return result.data
	} catch (error) {
		throw new Error(`Error deleting room ${error.message}`)
	}
}
/* This function update a room */
export async function updateRoom(roomId, roomData) {
	const formData = new FormData()
	formData.append("roomType", roomData.roomType)
	formData.append("roomPrice", roomData.roomPrice)
	formData.append("photo", roomData.photo)
	const response = await api.put(`/rooms/update/${roomId}`, formData,{
		headers: getHeader()
	})
	return response
}

/* This funcction gets a room by the id */
export async function getRoomById(roomId) {
	try {
		const result = await api.get(`/rooms/room/${roomId}`)
		return result.data
	} catch (error) {
		throw new Error(`Error fetching room ${error.message}`)
	}
}

/* This function saves a new booking to the databse */
export async function bookRoom(roomId, booking) {
	try {
		const response = await api.post(`/bookings/room/${roomId}/booking`, booking)
		return response.data
	} catch (error) {
		if (error.response && error.response.data) {
			throw new Error(error.response.data)
		} else {
			throw new Error(`Error booking room : ${error.message}`)
		}
	}
}

/* This function gets alll bokings from the database */
export async function getAllBookings() {
	try {
		const result = await api.get("/bookings/all-bookings", {
			headers: getHeader()
		})
		return result.data
	} catch (error) {
		throw new Error(`Error fetching bookings : ${error.message}`)
	}
}

/* This function get booking by the cnfirmation code */
export async function getBookingByConfirmationCode(confirmationCode) {
	try {
		const result = await api.get(`/bookings/confirmation/${confirmationCode}`)
		return result.data
	} catch (error) {
		if (error.response && error.response.data) {
			throw new Error(error.response.data)
		} else {
			throw new Error(`Error find booking : ${error.message}`)
		}
	}
}

/* This is the function to cancel user booking */
export async function cancelBooking(bookingId) {
	try {
		const result = await api.delete(`/bookings/booking/${bookingId}/delete`)
		return result.data
	} catch (error) {
		throw new Error(`Error cancelling booking :${error.message}`)
	}
}

/* This function gets all availavle rooms from the database with a given date and a room type */
export async function getAvailableRooms(checkInDate, checkOutDate, roomType) {
	const result = await api.get(
		`rooms/available-rooms?checkInDate=${checkInDate}
		&checkOutDate=${checkOutDate}&roomType=${roomType}`
	)
	return result
}

/* This function register a new user */
export async function registerUser(registration) {
	try {
		const response = await api.post("/auth/register-user", registration)
		return response.data
	} catch (error) {
		if (error.reeponse && error.response.data) {
			throw new Error(error.response.data)
		} else {
			throw new Error(`User registration error : ${error.message}`)
		}
	}
}

/* This function login a registered user */
export async function loginUser(login) {
	try {
		const response = await api.post("/auth/login", login)
		if (response.status >= 200 && response.status < 300) {
			return response.data
		} else {
			return null
		}
	} catch (error) {
		console.error(error)
		return null
	}
}

/*  This is function to get the user profile */
export async function getUserProfile(userId, token) {
	console.log("🚀 ~ getUserProfile ~ token:", token)
	try {
		const response = await api.get(`users/profile/${userId}`, {
			headers: getHeader()
		})
		return response.data
	} catch (error) {
        console.log(error);
        
		throw error
	}
}

/* This isthe function to delete a user */
export async function deleteUser(userId) {
	try {
		const response = await api.delete(`/users/delete/${userId}`, {
			headers: getHeader()
		})
		return response.data
	} catch (error) {
		return error.message
	}
}

/* This is the function to get a single user */
export async function getUser(userId, token) {
	console.log("🚀 ~ getUser ~ token:", token)
	try {
		const response = await api.get(`/users/${userId}`, {
			headers: getHeader()
		})
		return response.data
	} catch (error) {
        console.log(error);
        
		throw error
	}
}

/* This is the function to get user bookings by the user id */
export async function getBookingsByUserId(userId, token) {
	console.log("🚀 ~ getBookingsByUserId ~ token:", token)
	try {
		const response = await api.get(`/bookings/user/${userId}/bookings`, {
			headers: getHeader()
		})
		return response.data
	} catch (error) {
		console.error("Error fetching bookings:", error.message)
		throw new Error("Failed to fetch bookings")
	}
}

export const getAllRoles = () =>
  api.get(`/api/roles/all-roles`, {
    headers: getHeader()
  }).then(res => res.data);


export const createRole = (roleData) =>
  api.post(`/api/roles/create-new-role`, roleData, {
    headers: getHeader()
  })
  .then(res => res.data)
  .catch(err => {
    if (err.response?.status === 409) {
      throw new Error("Role already exists: " + err.response.data);
    }
    throw err;
  });


export const deleteRole = (roleId) =>
  api.delete(`/api/roles/delete/${roleId}`, {
    headers: getHeader()
  }).then(() => true);


export const removeAllUsersFromRole = (roleId) =>
  api.post(`/api/roles/remove-all-users-from-role/${roleId}`, null, {
    headers: getHeader()
  }).then(res => res.data);


export const removeUserFromRole = (userId, roleId) =>
  api.post(`/api/roles/remove-user-from-role`, null, {
    headers: getHeader(),
    params: { userId, roleId }
  }).then(res => res.data);


export const assignUserToRole = (userId, roleId) =>
  api.post(`/api/roles/assign-user-to-role`, null, {
    headers: getHeader(),
    params: { userId, roleId }
  }).then(res => res.data);
// Lấy danh sách tất cả user (chỉ admin mới có quyền)
export const getAllUsers = () =>
  api.get('/users/all', {
    headers: getHeader(),
  }).then(res => res.data);

// Lấy user theo email (user hoặc admin mới có quyền)
export const getUserByEmail = (email) =>
  api.get(`/users/${encodeURIComponent(email)}`, {
    headers: getHeader(),
  }).then(res => res.data);
