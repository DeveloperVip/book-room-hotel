import React from "react";

const AboutUs = () => {
  const stats = [
    { id: 1, number: "99+", label: "Dự án đang hoàn thiện" },
    { id: 2, number: "305+", label: "Phòng sang trọng" },
    { id: 3, number: "68+", label: "Bãi biển" },
    { id: 4, number: "10.000+", label: "Khách thường xuyên" },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Michael S. Stewart",
      role: "Giám đốc điều hành và người sáng lập",
      image: "https://demo031181.web30s.vn/datafiles/45826/upload/images/banner/member1.jpg?t=1705459145",
    },
    {
      id: 2,
      name: "Jackie D. McGahey",
      role: "Quản lý cấp cao",
      image: "https://demo031181.web30s.vn/datafiles/45826/upload/images/banner/member2.jpg?t=1705459145",
    },
    {
      id: 3,
      name: "Richard A. Brooks",
      role: "Quản lý cấp dưới",
      image: "https://demo031181.web30s.vn/datafiles/45826/upload/images/banner/member3.jpg?t=1705459145",
    },
    {
      id: 4,
      name: "Victoria K. Velasquez",
      role: "Tư vấn kinh doanh",
      image: "https://demo031181.web30s.vn/datafiles/45826/upload/images/banner/member4.jpg?t=1705459145",
    },
  ];
  const images = [
    {
      id: 1,
      url: "https://demo031181.web30s.vn/datafiles/45826/upload/images/album/mon-an-tai-khach-san.jpg?t=1704274804",
      link: "https://demo031181.web30s.vn/mon-an-tai-khach-san",
    },
    {
      id: 2,
      url: "https://demo031181.web30s.vn/datafiles/45826/upload/images/album/khong-gian-nha-hang-buffet.jpg?t=1704274804",
      link: "https://demo031181.web30s.vn/khong-gian-nha-hang-buffet",
    },
    {
      id: 3,
      url: "https://demo031181.web30s.vn/datafiles/45826/upload/images/album/giuong-phong-deluxe-sang-trong-1.jpg?t=1704274805",
      link: "https://demo031181.web30s.vn/giuong-phong-deluxe-sang-trong",
    },
    {
      id: 4,
      url: "https://demo031181.web30s.vn/datafiles/45826/upload/images/album/cau-go-bai-bien-dep-1.jpg?t=1704274805",
      link: "https://demo031181.web30s.vn/cau-go-bai-bien-dep",
    },
    {
      id: 5,
      url: "https://demo031181.web30s.vn/datafiles/45826/upload/images/album/ghe-nam-ho-boi-thu-gian-khach-san-1.jpg?t=1704274806",
      link: "https://demo031181.web30s.vn/ghe-nam-ho-boi-thu-gian-khach-san",
    },
  ];

  return (
    <div className="px-5 py-5">
      {/* Giới thiệu */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img
            src="https://demo031181.web30s.vn/datafiles/45826/upload/images/banner/about.png?t=1705309271"
            className="img-fluid rounded"
            alt="Hotel Overview"
          />
        </div>
        <div className="col-md-6">
          <a
            href="https://demo031181.web30s.vn/lien-he"
            className="btn btn-danger mb-3"
          >
            <i className="fas fa-play me-2"></i>Xem video mới nhất
          </a>
          <h5 className="text-muted">Giới thiệu về công ty</h5>
          <h2 className="fw-bold mb-3">
            Khách sạn & Nhà hàng sang trọng đẳng cấp thế giới gần thành phố
          </h2>
          <p>
            Khách sạn Hotel RoyalNest tọa lạc tại trung tâm thành phố Hồ Chí Minh, gần các điểm tham quan nổi tiếng như Nhà thờ Đức Bà, Bưu điện Thành phố và Chợ Bến Thành. Khách sạn có 220 phòng và căn hộ, được trang bị đầy đủ tiện nghi hiện đại.
          </p>
          <ul className="list-unstyled">
            <li className="mb-2">
              <i className="fas fa-check text-success me-2"></i>
              Đối tác đáng tin cậy, cung cấp dịch vụ chất lượng cao
            </li>
            <li>
              <i className="fas fa-check text-success me-2"></i>
              Dịch vụ cao cấp, tiện nghi với giá cả hợp lý
            </li>
          </ul>
        </div>
      </div>

      {/* Đội ngũ */}
      <div className="text-center mb-5">
        <p className="text-secondary mb-1">Gặp đội của chúng tôi</p>
        <h2 className="fw-bold">Chúng tôi có đội ngũ chuyên nghiệp</h2>
      </div>
      <div className="row g-4 mb-5">
        {teamMembers.map(({ id, name, role, image }) => (
          <div key={id} className="col-md-3 col-sm-6">
            <div className="card h-100 text-center border-0 shadow-sm">
              <img src={image} className="card-img-top" alt={name} />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text text-muted">{role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Thống kê */}
      <div className="px-5 py-5">
        <div className="row text-center">
          {stats.map(({ id, number, label }) => (
            <div key={id} className="col-md-3 col-6 mb-4">
              <h3 className="fw-bold">{number}</h3>
              <p className="text-muted">{label}</p>
            </div>
          ))}
        </div>
      </div>
      <section id="gallery" className="py-5 bg-light">
      <div className="">
        <h2 className="text-center fw-bold mb-4">Thư viện ảnh</h2>
        <div className="d-flex g-4">
          {images.map((img) => (
            <div key={img.id} className="col" style={{ flex: "0 0 20%", maxWidth: "20%" }}>
              <a href={img.link} target="_blank" rel="noopener noreferrer">
                <div className="card border-0 shadow-sm h-100">
                  <img
                    src={img.url}
                    className="card-img-top img-fluid"
                    alt={`Ảnh ${img.id}`}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default AboutUs;
