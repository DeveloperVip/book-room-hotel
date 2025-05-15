import React from "react";

const MainHeader = () => {
  return (
    <header className="header-banner">
      <div className="overlay"></div>
      <div className="animated-texts overlay-content">
        <h1 className="display-4 fw-bold">
          Chào mừng tới{" "}
          <span className="custom-green hotel-color display-4 fw-bold">Hotel RoyalNest</span>
        </h1>
        <h4 className="fw-bold display-6 text-center py-3">
          Trải nghiệm dịch vụ đặt phòng khách sạn tốt nhất tại đây
        </h4>
      </div>
    </header>
  );
};

export default MainHeader;
