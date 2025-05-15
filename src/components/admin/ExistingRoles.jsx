import React, { useEffect, useState } from "react";
import {
  getAllRoles,
  createRole,
  deleteRole,
  removeAllUsersFromRole,
  removeUserFromRole,
  assignUserToRole,
} from "../utils/ApiFunctions";

const ExistingRoles = () => {
  const [roles, setRoles] = useState([]);
  const [newRoleName, setNewRoleName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Dùng để chọn role thao tác với user
  const [selectedRoleId, setSelectedRoleId] = useState("");
  const [userId, setUserId] = useState("");

  // Load roles
  const fetchRoles = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getAllRoles();
      setRoles(data);
    } catch {
      setError("Lỗi khi tải danh sách role");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  // Tạo role mới
  const handleCreateRole = async () => {
    if (!newRoleName.trim()) return alert("Tên role không được để trống");
    setError("");
    try {
      await createRole({ name: newRoleName.trim() });
      setNewRoleName("");
      await fetchRoles();
      alert("Tạo role thành công");
    } catch (err) {
      setError(err.message || "Lỗi tạo role");
    }
  };

  // Xóa role
  const handleDeleteRole = async (roleId) => {
    if (!window.confirm("Bạn có chắc muốn xóa role này?")) return;
    setError("");
    try {
      await deleteRole(roleId);
      setRoles(roles.filter((r) => r.id !== roleId));
      alert("Xóa role thành công");
    } catch {
      setError("Lỗi khi xóa role");
    }
  };

  // Xóa tất cả user khỏi role
  const handleRemoveAllUsers = async () => {
    if (!selectedRoleId) return alert("Chọn role trước");
    if (!window.confirm("Bạn có chắc muốn xóa tất cả user khỏi role này?")) return;
    try {
      await removeAllUsersFromRole(selectedRoleId);
      alert("Đã xóa tất cả user khỏi role");
    } catch {
      alert("Lỗi khi xóa user khỏi role");
    }
  };
  console.log("dataaaaa",roles);
  

  // Gán user vào role
  const handleAssignUser = async () => {
    if (!selectedRoleId || !userId.trim()) return alert("Chọn role và nhập userId");
    try {
      await assignUserToRole(userId.trim(), selectedRoleId);
      alert("Gán user vào role thành công");
      setUserId("");
    } catch {
      alert("Lỗi khi gán user vào role");
    }
  };

  // Xóa user khỏi role
  const handleRemoveUser = async () => {
    if (!selectedRoleId || !userId.trim()) return alert("Chọn role và nhập userId");
    try {
      await removeUserFromRole(userId.trim(), selectedRoleId);
      alert("Xóa user khỏi role thành công");
      setUserId("");
    } catch {
      alert("Lỗi khi xóa user khỏi role");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Quản lý Roles hiện có</h2>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Tên role mới"
          value={newRoleName}
          onChange={(e) => setNewRoleName(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={handleCreateRole}>
          Thêm role mới
        </button>
      </div>

      {loading && <p>Đang tải...</p>}
      {error && <p className="text-danger">{error}</p>}

      <ul className="list-group mb-4">
        {roles.length === 0 && !loading && <li className="list-group-item">Không có role nào</li>}
        {roles.map((role) => (
          <li
            key={role.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {role.name}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDeleteRole(role.id)}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>

      {/* Quản lý user trong role */}
      <div className="mb-3">
        <h5>Quản lý user trong role</h5>
        <select
          className="form-select mb-2"
          value={selectedRoleId}
          onChange={(e) => setSelectedRoleId(e.target.value)}
        >
          <option value="">Chọn role</option>
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          className="form-control mb-2"
          placeholder="Nhập userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />

        <div className="d-flex gap-2">
          <button className="btn btn-success" onClick={handleAssignUser}>
            Gán user vào role
          </button>
          <button className="btn btn-warning" onClick={handleRemoveUser}>
            Xóa user khỏi role
          </button>
          <button className="btn btn-danger" onClick={handleRemoveAllUsers}>
            Xóa tất cả user khỏi role
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExistingRoles;
