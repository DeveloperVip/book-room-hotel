import React from "react";

const FooterCommon = () => {
  return (
    <div className="mb-0">
      <section id="subscribe" className="bg-light text-dark py-5">
        <div className="container text-center">
          <div className="mb-4" data-aos="fade-up">
            <h2 className="fw-bold">
              Đặt phòng nhanh chóng – Trải nghiệm liền tay!
            </h2>
            <p className="mb-4">
              Đăng ký ngay để nhận ưu đãi và cập nhật thông tin mới nhất từ
              chúng tôi
            </p>
            <form className="d-flex justify-content-center flex-wrap gap-2" method="POST" action="https://formspree.io/f/mvgaddwr">
              <input
                type="email"
                name="email"
                className="form-control w-50"
                placeholder="Nhập email của bạn"
                required
              />
              <button type="submit" className="btn btn-success px-4">
                Đăng ký ngay
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-footer text-black pt-5 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4" data-aos="fade-up">
              <div className="d-flex align-items-center mb-2">
                <img
                  src="https://www.arttravel.com.vn/images/icontieude.png"
                  alt="HotelEase Logo"
                  style={{ height: "40px", marginRight: "10px" }}
                />
                <h5 className="fw-bold text-black mb-0">RoyalNest Hotel</h5>
              </div>
              <p>
                Chuyên cung cấp dịch vụ đặt phòng khách sạn nhanh chóng, an toàn
                và tiện lợi trên toàn quốc.
              </p>
            </div>

            <div className="col-md-2 mb-4" data-aos="fade-up">
              <h6 className="text-uppercase fw-bold">Dịch vụ</h6>
              <ul className="list-unstyled">
                <li className="mb-2">Đặt phòng trực tuyến</li>
                <li className="mb-2">Ưu đãi khách sạn</li>
                <li className="mb-2">Tư vấn du lịch</li>
              </ul>
            </div>

            <div className="col-md-3 mb-4" data-aos="fade-up">
              <h6 className="text-uppercase fw-bold">Hỗ trợ</h6>
              <ul className="list-unstyled">
                <li className="mb-2">Trung tâm trợ giúp</li>
                <li className="mb-2">Chính sách bảo mật</li>
                <li className="mb-2">Điều khoản sử dụng</li>
              </ul>
            </div>

            <div className="col-md-3 mb-4" data-aos="fade-up">
              <h6 className="text-uppercase fw-bold">Liên hệ</h6>
              <ul className="list-unstyled">
                <li>
                  <i className="fas fa-phone me-2"></i> 0123 456 789
                </li>
                <li>
                  <i className="fas fa-envelope me-2"></i> support@RoyalNest.vn
                </li>
                <li>
                  <i className="fas fa-map-marker-alt me-2"></i> 123 Thanh trì, TP Hà Nội
                </li>
              </ul>
              <div className="mt-3">
                <a href="#" className="text-light me-3">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-light me-3">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-light">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterCommon;
