import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Navbar1 from "../Navbar/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";

const Home = () => {
  const [data, changeData] = useState([
    {
      _id: "692c01fab2ee2f6e0cfeeca0",
      brand: "Southern Choice",
      productName: "Southern Choice Brandy",
      category: "Brandy",
      currency: "INR",
      available: true,
      pricePerMl: [
        { ml: 750, price: 1550 },
        { ml: 375, price: 780 },
        { ml: 180, price: 350 },
      ],
      img: "https://i.ibb.co/RGMWTLsL/Liqr-bottle.jpg",
      createdAt: "2025-11-30T08:36:10.382Z",
      updatedAt: "2025-11-30T08:36:10.382Z",
      __v: 0,
    },
    {
      _id: "692c01fab2ee2f6e0cfeeca2",
      brand: "GB",
      productName: "Premium Brandy",
      category: "Brandy",
      currency: "INR",
      available: true,
      pricePerMl: [
        { ml: 750, price: 1380 },
        { ml: 375, price: 700 },
        { ml: 180, price: 340 },
        { ml: 500, price: 630 },
        { ml: 1000, price: 1260 },
      ],
      img: "https://i.ibb.co/RGMWTLsL/Liqr-bottle.jpg",
      createdAt: "2025-11-30T08:36:10.448Z",
      updatedAt: "2025-11-30T08:36:10.448Z",
      __v: 0,
    },
    {
      _id: "692c01fab2ee2f6e0cfeeca4",
      brand: "Southern Choice",
      productName: "Southern Choice Premium Brandy",
      category: "Brandy",
      currency: "INR",
      available: true,
      pricePerMl: [
        { ml: 750, price: 1920 },
        { ml: 375, price: 970 },
        { ml: 180, price: 420 },
      ],
      img: "https://i.ibb.co/RGMWTLsL/Liqr-bottle.jpg",
      createdAt: "2025-11-30T08:36:10.496Z",
      updatedAt: "2025-11-30T08:36:10.496Z",
      __v: 0,
    },
  ]);

  const fallbackImg = "https://i.ibb.co/RGMWTLsL/Liqr-bottle.jpg";

  return (
    <>
      <div>
        <Navbar1 />
      </div>
      <div style={{ backgroundColor: "#F9F8F6", minHeight: "100vh", paddingBottom: 32 }}>
        <br />
        <Container>
          <Row>
            {data.map((index, idx) => {
              const firstPrice = index.pricePerMl && index.pricePerMl.length ? index.pricePerMl[0] : null;

              return (
                <Col
                  key={index._id || idx}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={3}
                  xxl={3}
                  className="mb-4"
                >
                  <Card
                    className="singleCard"
                    style={{
                      backgroundColor: "#EFE9E3",
                      border: "none",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.03)";
                      e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.25)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src="https://i.ibb.co/RGMWTLsL/Liqr-bottle.jpg"
                      
                      style={{
                        height: "340px",
                        objectFit: "cover",
                        display: "block",
                        width: "100%",
                        backgroundColor: "#D9CFC7",
                      }}
                    />

                    <Card.Body
                      style={{
                        padding: "1.5rem",
                        backgroundColor: "#ffffffff",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        flex: 1,
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontSize: "0.85rem",
                            color: "#7d746b",
                            marginBottom: "0.4rem",
                            fontWeight: "500",
                          }}
                        >
                          Brand: {index.brand}
                        </div>

                        <Card.Title
                          style={{
                            fontSize: "1.1rem",
                            fontWeight: "700",
                            marginBottom: "1rem",
                            color: "#000000",
                            height: "48px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {index.productName}
                        </Card.Title>
                      </div>

                      <div style={{ marginTop: 8 }}>
                        <Dropdown drop="up">
                          <Dropdown.Toggle
                            style={{
                              color: "#F9F8F6",
                              backgroundColor: "#C9B59C",
                              border: "none",
                              fontWeight: 700,
                            }}
                            id={`dropdown-${idx}`}
                          >
                            {firstPrice ? `${firstPrice.ml} ml - ₹${Math.round(Number(firstPrice.price))}` : "No price"}
                          </Dropdown.Toggle>

                          <Dropdown.Menu
                            style={{
                              backgroundColor: "#C9B59C",
                              color: "#F9F8F6",
                              minWidth: 160,
                            }}
                          >
                            {index.pricePerMl && index.pricePerMl.length ? (
                              index.pricePerMl.map((item, i) => (
                                <Dropdown.Item
                                  key={i}
                                  style={{
                                    color: "#F9F8F6",
                                    backgroundColor: "#C9B59C",
                                    fontWeight: 600,
                                  }}
                                >
                                  {item.ml} ml - ₹{Math.round(Number(item.price))}
                                </Dropdown.Item>
                              ))
                            ) : (
                              <Dropdown.Item style={{ color: "#F9F8F6", backgroundColor: "#C9B59C" }}>
                                No options
                              </Dropdown.Item>
                            )}
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
