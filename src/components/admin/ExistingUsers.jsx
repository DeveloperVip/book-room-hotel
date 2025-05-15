import React, { useEffect, useState } from 'react';
import { getAllUsers, getUserByEmail, deleteUser } from '../utils/ApiFunctions';

const ExistingUsers = () => {
  const [users, setUsers] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [userDetail, setUserDetail] = useState(null);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    getAllUsers()
      .then(data => {
        setUsers(data);
        setError(null);
      })
      .catch(() => {
        setError('Failed to fetch users');
      });
  };

  const handleSelectUser = (email) => {
    setSelectedEmail(email);
    getUserByEmail(email)
      .then(data => {
        setUserDetail(data);
        setError(null);
      })
      .catch(() => {
        setUserDetail(null);
        setError('User not found or error');
      });
  };

  const handleDeleteUser = (email) => {
    if (window.confirm(`Are you sure you want to delete user ${email}?`)) {
      deleteUser(email)
        .then(() => {
          setMessage(`User ${email} deleted successfully.`);
          setSelectedEmail(null);
          setUserDetail(null);
          fetchUsers();
        })
        .catch(() => {
          setError(`Failed to delete user ${email}`);
        });
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Existing Users</h2>

      {error && <div className="alert alert-danger">{error}</div>}
      {message && <div className="alert alert-success">{message}</div>}

      <div className="row">
        <div className="col-md-6">
          <table className="table table-hover">
            <thead className="table-light">
              <tr>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.email}>
                  <td>{user.email}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-primary me-2"
                      onClick={() => handleSelectUser(user.email)}
                    >
                      View
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDeleteUser(user.email)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan="2">No users found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {userDetail && (
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5>User Details</h5>
              </div>
              <div className="card-body">
                <p><strong>Email:</strong> {userDetail.email}</p>
                <p><strong>First Name:</strong> {userDetail.firstName}</p>
                <p><strong>Last Name:</strong> {userDetail.lastName}</p>
                {/* Add more user fields here if needed */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExistingUsers;
