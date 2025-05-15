import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Header from "./Header";
import {
  FaClock,
  FaCocktail,
  FaParking,
  FaSnowflake,
  FaTshirt,
  FaUtensils,
  FaWifi,
} from "react-icons/fa";

const HotelService = () => {
  return (
    <>
      <div className="mb-2" data-aos="fade-down">
        <Header title={"Our Services"} />

        <Row className="mt-4">
          <h4 className="text-center">
            Đặt dịch vụ tại <span className="hotel-color"> RoyalNest - </span>
            Hotel
            <span className="gap-2 text-center ms-2">
              <FaClock className="pb-1" />
              luôn phục vụ 24 giờ
            </span>
          </h4>
        </Row>
        <hr />

        <Row xs={1} md={2} lg={3} className="g-4 mt-2">
          <Col>
            <Card className="h-100 shadow-lg border-0">
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaWifi /> WiFi
                </Card.Title>
                <Card.Text>Luôn kết nối với Internet tốc độ cao.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 shadow-lg border-0">
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaUtensils /> Bữa sáng
                </Card.Title>
                <Card.Text>
                  Bắt đầu ngày mới với bữa sáng tự chọn ngon miệng.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 shadow-lg border-0">
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaTshirt /> Giặt sấy
                </Card.Title>
                <Card.Text>
                  Giữ quần áo của bạn sạch sẽ và thơm tho với dịch vụ giặt là
                  của chúng tôi.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 shadow-lg border-0">
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaCocktail /> Mini-bar
                </Card.Title>
                <Card.Text>
                  Thưởng thức đồ uống giải khát hoặc đồ ăn nhẹ từ quầy bar mini
                  trong phòng của chúng tôi.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 shadow-lg border-0">
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaParking /> Đỗ xe
                </Card.Title>
                <Card.Text>
                  Đỗ xe thuận tiện tại bãi đậu xe ngay trong khuôn viên của
                  chúng tôi.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 shadow-lg border-0">
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaSnowflake /> Điều hòa
                </Card.Title>
                <Card.Text>
                  Luôn mát mẻ và thoải mái với hệ thống điều hòa không khí của
                  chúng tôi.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <hr />
    </>
  );
};

export default HotelService;
