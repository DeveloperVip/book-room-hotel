import React from "react";
import { Link, Outlet } from "react-router-dom";

const Admin = () => {
  const currentUser = localStorage.getItem("userRole");

  return (
    currentUser && (
      <section className="container mt-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Chào mừng đến với Bộ phận Quản lý</h2>
          <p className="text-muted">Chọn một danh mục để tiếp tục</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-3 mb-3">
            <Link to="/admin/existing-users" className="btn btn-primary w-100">
              👤 Quản lý người dùng
            </Link>
          </div>
          <div className="col-md-3 mb-3">
            <Link to="/admin/existing-rooms" className="btn btn-success w-100">
              🏨 Quản lý các phòng
            </Link>
          </div>
          <div className="col-md-3 mb-3">
            <Link to="/admin/existing-bookings" className="btn btn-warning w-100 text-dark">
              📅 Quản lý đặt phòng
            </Link>
          </div>
          <div className="col-md-3 mb-3">
            <Link to="/admin/existing-roles" className="btn btn-dark w-100">
              🛡️ Quản lý vai trò
            </Link>
          </div>
        </div>
		<Outlet />
      </section>
    )
  );
};

export default Admin;
