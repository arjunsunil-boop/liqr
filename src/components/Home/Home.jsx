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
      title: "SOUTHERN CHOICE BRANDY",
      items: [
        {
          ml: "750",
          price: "1550.00",
        },
        {
          ml: "375",
          price: "780.00",
        },
        {
          ml: "180",
          price: "350.00",
        },
      ],
    },
    {
      title: "GB PREMIUM BRANDY",
      items: [
        {
          ml: "750",
          price: "1380.00",
        },
        {
          ml: "375",
          price: "700.00",
        },
        {
          ml: "180",
          price: "340.00",
        },
        {
          ml: "500",
          price: "630.00",
        },
        {
          ml: "1000",
          price: "1260.00",
        },
      ],
    },
    {
      title: "SOUTHERN CHOICE PREMIUM BRANDY",
      items: [
        {
          ml: "750",
          price: "1920.00",
        },
        {
          ml: "375",
          price: "970.00",
        },
        {
          ml: "180",
          price: "420.00",
        },
      ],
    },
    {
      title: "SPI M GOLD INDIAN BRANDY",
      items: [
        {
          ml: "750",
          price: "1060.00",
        },
        {
          ml: "375",
          price: "570.00",
        },
        {
          ml: "180",
          price: "300.00",
        },
        {
          ml: "500",
          price: "800.00",
        },
        {
          ml: "1000",
          price: "1360.00",
        },
      ],
    },
    {
      title: "SPI METRO SPECIAL INDIAN BRANDY",
      items: [
        {
          ml: "750",
          price: "1060.00",
        },
        {
          ml: "375",
          price: "570.00",
        },
        {
          ml: "180",
          price: "300.00",
        },
        {
          ml: "500",
          price: "800.00",
        },
        {
          ml: "1000",
          price: "1360.00",
        },
      ],
    },
    {
      title: "SPI METRO SPECIAL LIVE INDIAN BRANDY",
      items: [
        {
          ml: "750",
          price: "1060.00",
        },
        {
          ml: "375",
          price: "570.00",
        },
        {
          ml: "180",
          price: "300.00",
        },
        {
          ml: "500",
          price: "800.00",
        },
        {
          ml: "1000",
          price: "1360.00",
        },
      ],
    },
    {
      title: "SPI M GOLD LIVE INDIAN BRANDY",
      items: [
        {
          ml: "750",
          price: "1060.00",
        },
        {
          ml: "375",
          price: "570.00",
        },
        {
          ml: "180",
          price: "300.00",
        },
        {
          ml: "500",
          price: "800.00",
        },
        {
          ml: "1000",
          price: "1360.00",
        },
      ],
    },
    {
      title: "CB CHARLZ N BEAVER BRANDY",
      items: [
        {
          ml: "750",
          price: "1380.00",
        },
        {
          ml: "375",
          price: "700.00",
        },
        {
          ml: "180",
          price: "330.00",
        },
        {
          ml: "500",
          price: "630.00",
        },
        {
          ml: "1000",
          price: "1260.00",
        },
      ],
    },
    {
      title: "CB CHARLZ N BEAVER WHITE BRANDY",
      items: [
        {
          ml: "750",
          price: "1380.00",
        },
        {
          ml: "375",
          price: "700.00",
        },
        {
          ml: "180",
          price: "330.00",
        },
        {
          ml: "500",
          price: "630.00",
        },
        {
          ml: "1000",
          price: "1260.00",
        },
      ],
    },
    {
      title: "SOUTHERN CHOICE LIVE BRANDY",
      items: [
        {
          ml: "750",
          price: "1550.00",
        },
        {
          ml: "375",
          price: "780.00",
        },
        {
          ml: "180",
          price: "350.00",
        },
      ],
    },
    {
      title: "SOUTHERN CHOICE WHITE BRANDY",
      items: [
        {
          ml: "750",
          price: "1550.00",
        },
        {
          ml: "375",
          price: "780.00",
        },
        {
          ml: "180",
          price: "350.00",
        },
      ],
    },
    {
      title: "SOUTHERN CHOICE PREMIUM LIVE BRANDY",
      items: [
        {
          ml: "750",
          price: "1920.00",
        },
        {
          ml: "375",
          price: "970.00",
        },
      ],
    },
    {
      title: "180 48",
      items: [
        {
          ml: "50",
          price: "420.00",
        },
        {
          ml: "180",
          price: "420.00",
        },
        {
          ml: "330",
          price: "250.00",
        },
        {
          ml: "500",
          price: "490.00",
        },
        {
          ml: "1000",
          price: "990.00",
        },
        {
          ml: "750",
          price: "280.00",
        },
        {
          ml: "500",
          price: "700.00",
        },
        {
          ml: "1000",
          price: "1300.00",
        },
      ],
    },
    {
      title: "NICOL'S BLACK & GOLD FRENCH BRANDY VSOP",
      items: [
        {
          ml: "750",
          price: "1360.00",
        },
        {
          ml: "375",
          price: "700.00",
        },
        {
          ml: "180",
          price: "350.00",
        },
        {
          ml: "500",
          price: "830.00",
        },
        {
          ml: "1000",
          price: "1630.00",
        },
      ],
    },
    {
      title: "NICOL'S XCEL RESERVE FRENCH BRANDY",
      items: [
        {
          ml: "750",
          price: "1290.00",
        },
        {
          ml: "375",
          price: "650.00",
        },
        {
          ml: "180",
          price: "330.00",
        },
        {
          ml: "1000",
          price: "1670.00",
        },
      ],
    },
    {
      title: "SPI METRO SPECIAL WHISKY",
      items: [
        {
          ml: "750",
          price: "1060.00",
        },
        {
          ml: "375",
          price: "570.00",
        },
        {
          ml: "180",
          price: "300.00",
        },
        {
          ml: "500",
          price: "800.00",
        },
        {
          ml: "1000",
          price: "1360.00",
        },
      ],
    },
    {
      title: "SPI M GOLD WHISKY",
      items: [
        {
          ml: "750",
          price: "1060.00",
        },
        {
          ml: "375",
          price: "570.00",
        },
        {
          ml: "180",
          price: "300.00",
        },
        {
          ml: "500",
          price: "800.00",
        },
        {
          ml: "1000",
          price: "1360.00",
        },
      ],
    },
    {
      title: "CB CHARLZ N BEAVER WHISKY",
      items: [
        {
          ml: "750",
          price: "1380.00",
        },
        {
          ml: "375",
          price: "700.00",
        },
        {
          ml: "180",
          price: "330.00",
        },
        {
          ml: "500",
          price: "630.00",
        },
        {
          ml: "1000",
          price: "1260.00",
        },
      ],
    },
    {
      title: "SOUTHERN CHOICE WHISKY",
      items: [
        {
          ml: "750",
          price: "1550.00",
        },
        {
          ml: "375",
          price: "780.00",
        },
        {
          ml: "180",
          price: "350.00",
        },
      ],
    },
    {
      title: "SOUTHERN CHOICE PREMIUM WHISKY",
      items: [
        {
          ml: "750",
          price: "1920.00",
        },
        {
          ml: "375",
          price: "970.00",
        },
        {
          ml: "180",
          price: "420.00",
        },
      ],
    },
    {
      title: "1943 BLACK & GOLD RARE PREMIUM WHISKY",
      items: [
        {
          ml: "750",
          price: "1450.00",
        },
        {
          ml: "375",
          price: "720.00",
        },
        {
          ml: "180",
          price: "350.00",
        },
      ],
    },
    {
      title: "SOUTHERN CHOICE WHITE RUM",
      items: [
        {
          ml: "750",
          price: "1550.00",
        },
        {
          ml: "375",
          price: "780.00",
        },
        {
          ml: "180",
          price: "350.00",
        },
      ],
    },
    {
      title: "SPI METRO RUM",
      items: [
        {
          ml: "750",
          price: "1060.00",
        },
        {
          ml: "375",
          price: "570.00",
        },
        {
          ml: "180",
          price: "300.00",
        },
        {
          ml: "1000",
          price: "1360.00",
        },
      ],
    },
    {
      title: "500 18",
      items: [
        {
          ml: "90",
          price: "800.00",
        },
        {
          ml: "375",
          price: "450.00",
        },
        {
          ml: "1000",
          price: "880.00",
        },
      ],
    },
    {
      title: "SPI M GOLD RUM",
      items: [
        {
          ml: "750",
          price: "1060.00",
        },
        {
          ml: "375",
          price: "570.00",
        },
        {
          ml: "180",
          price: "300.00",
        },
        {
          ml: "500",
          price: "800.00",
        },
        {
          ml: "1000",
          price: "1360.00",
        },
      ],
    },
    {
      title: "CB CHARLZ N BEAVER RUM",
      items: [
        {
          ml: "750",
          price: "1380.00",
        },
        {
          ml: "375",
          price: "700.00",
        },
        {
          ml: "180",
          price: "330.00",
        },
        {
          ml: "500",
          price: "630.00",
        },
        {
          ml: "1000",
          price: "1260.00",
        },
      ],
    },
    {
      title: "CB CHARLZ N BEAVER WHITE RUM",
      items: [
        {
          ml: "750",
          price: "1380.00",
        },
        {
          ml: "375",
          price: "700.00",
        },
        {
          ml: "180",
          price: "330.00",
        },
        {
          ml: "500",
          price: "630.00",
        },
        {
          ml: "1000",
          price: "1260.00",
        },
      ],
    },
    {
      title: "SOUTHERN CHOICE RUM",
      items: [
        {
          ml: "750",
          price: "1550.00",
        },
        {
          ml: "375",
          price: "780.00",
        },
        {
          ml: "180",
          price: "350.00",
        },
      ],
    },
    {
      title: "SOUTHERN CHOICE LIVE WHITE RUM",
      items: [
        {
          ml: "750",
          price: "1550.00",
        },
        {
          ml: "375",
          price: "780.00",
        },
        {
          ml: "180",
          price: "350.00",
        },
      ],
    },
    {
      title: "SOUTHERN CHOICE LEMON RUM",
      items: [
        {
          ml: "750",
          price: "1550.00",
        },
        {
          ml: "375",
          price: "780.00",
        },
        {
          ml: "180",
          price: "350.00",
        },
      ],
    },
    {
      title: "SOUTHERN CHOICE PREMIUM RUM",
      items: [
        {
          ml: "750",
          price: "1920.00",
        },
        {
          ml: "375",
          price: "970.00",
        },
        {
          ml: "180",
          price: "420.00",
        },
      ],
    },
    {
      title: "SOUTHERN CHOICE PREMIUM WHITE RUM",
      items: [
        {
          ml: "750",
          price: "1920.00",
        },
        {
          ml: "375",
          price: "970.00",
        },
        {
          ml: "180",
          price: "420.00",
        },
      ],
    },
    {
      title: "NICOL'S COCO CARIB COCONUT RUM",
      items: [
        {
          ml: "750",
          price: "1380.00",
        },
        {
          ml: "375",
          price: "710.00",
        },
        {
          ml: "180",
          price: "370.00",
        },
      ],
    },
    {
      title: "NICOL'S BLACK BANDIT ORIGINAL SPICED RUM",
      items: [
        {
          ml: "750",
          price: "1380.00",
        },
        {
          ml: "375",
          price: "710.00",
        },
        {
          ml: "180",
          price: "370.00",
        },
      ],
    },
    {
      title: "CB CHARLZ N BEAVER GIN",
      items: [
        {
          ml: "750",
          price: "1300.00",
        },
        {
          ml: "375",
          price: "660.00",
        },
        {
          ml: "180",
          price: "310.00",
        },
        {
          ml: "500",
          price: "580.00",
        },
        {
          ml: "1000",
          price: "1160.00",
        },
      ],
    },
    {
      title: "SOUTHERN CHOICE GIN",
      items: [
        {
          ml: "750",
          price: "1470.00",
        },
        {
          ml: "375",
          price: "740.00",
        },
        {
          ml: "180",
          price: "330.00",
        },
      ],
    },
    {
      title: "SOUTHERN CHOICE VODKA",
      items: [
        {
          ml: "750",
          price: "1550.00",
        },
        {
          ml: "375",
          price: "780.00",
        },
        {
          ml: "180",
          price: "350.00",
        },
      ],
    },
    {
      title: "SPI METRO SPECIAL VODKA",
      items: [
        {
          ml: "750",
          price: "1060.00",
        },
        {
          ml: "375",
          price: "570.00",
        },
        {
          ml: "180",
          price: "300.00",
        },
        {
          ml: "500",
          price: "800.00",
        },
        {
          ml: "1000",
          price: "1360.00",
        },
      ],
    },
    {
      title: "SPI METRO SPECIAL ORANGE VODKA",
      items: [
        {
          ml: "750",
          price: "1060.00",
        },
        {
          ml: "375",
          price: "570.00",
        },
        {
          ml: "180",
          price: "300.00",
        },
        {
          ml: "500",
          price: "800.00",
        },
        {
          ml: "1000",
          price: "1360.00",
        },
      ],
    },
    {
      title: "SPI M GOLD VODKA",
      items: [
        {
          ml: "750",
          price: "1060.00",
        },
        {
          ml: "375",
          price: "570.00",
        },
        {
          ml: "180",
          price: "300.00",
        },
        {
          ml: "500",
          price: "800.00",
        },
        {
          ml: "1000",
          price: "1360.00",
        },
      ],
    },
    {
      title: "SPI M GOLD ORANGE VODKA",
      items: [
        {
          ml: "750",
          price: "1060.00",
        },
        {
          ml: "375",
          price: "570.00",
        },
        {
          ml: "180",
          price: "300.00",
        },
        {
          ml: "500",
          price: "800.00",
        },
        {
          ml: "1000",
          price: "1360.00",
        },
      ],
    },
    {
      title: "CB CHARLZ N BEAVER VODKA",
      items: [
        {
          ml: "750",
          price: "1380.00",
        },
        {
          ml: "375",
          price: "700.00",
        },
        {
          ml: "180",
          price: "330.00",
        },
        {
          ml: "500",
          price: "630.00",
        },
        {
          ml: "1000",
          price: "1260.00",
        },
      ],
    },
    {
      title: "CB CHARLZ N BEAVER ORANGE VODKA",
      items: [
        {
          ml: "750",
          price: "1380.00",
        },
        {
          ml: "375",
          price: "700.00",
        },
        {
          ml: "180",
          price: "330.00",
        },
        {
          ml: "500",
          price: "630.00",
        },
        {
          ml: "1000",
          price: "1260.00",
        },
      ],
    },
    {
      title: "SOUTHERN CHOICE LIVE VODKA",
      items: [
        {
          ml: "750",
          price: "1550.00",
        },
        {
          ml: "375",
          price: "780.00",
        },
        {
          ml: "180",
          price: "350.00",
        },
      ],
    },
    {
      title: "SOUTHERN CHOICE ORANGE VODKA",
      items: [
        {
          ml: "750",
          price: "1550.00",
        },
        {
          ml: "375",
          price: "780.00",
        },
        {
          ml: "180",
          price: "350.00",
        },
      ],
    },
    {
      title: "SOUTHERN CHOICE PREMIUM VODKA",
      items: [
        {
          ml: "750",
          price: "1920.00",
        },
        {
          ml: "375",
          price: "970.00",
        },
        {
          ml: "180",
          price: "420.00",
        },
      ],
    },
    {
      title: "SOUTHERN CHOICE PREMIUM ORANGE VODKA",
      items: [
        {
          ml: "750",
          price: "1920.00",
        },
        {
          ml: "375",
          price: "970.00",
        },
      ],
    },
    {
      title: "NICOL'S V VODKA PREMIUM GRAIN",
      items: [
        {
          ml: "750",
          price: "1290.00",
        },
        {
          ml: "375",
          price: "660.00",
        },
        {
          ml: "180",
          price: "340.00",
        },
      ],
    },
    {
      title: "MOOD MAKER BRANDY",
      items: [
        {
          ml: "750",
          price: "630.00",
        },
        {
          ml: "375",
          price: "300.00",
        },
        {
          ml: "180",
          price: "160.00",
        },
        {
          ml: "500",
          price: "390.00",
        },
        {
          ml: "1000",
          price: "580.00",
        },
      ],
    },
    {
      title: "SUPERMAN BRANDY",
      items: [
        {
          ml: "750",
          price: "570.00",
        },
        {
          ml: "375",
          price: "290.00",
        },
        {
          ml: "180",
          price: "160.00",
        },
        {
          ml: "500",
          price: "380.00",
        },
        {
          ml: "1000",
          price: "700.00",
        },
      ],
    },
    {
      title: "JAMES MC GILL BRANDY",
      items: [
        {
          ml: "750",
          price: "700.00",
        },
        {
          ml: "375",
          price: "350.00",
        },
        {
          ml: "180",
          price: "180.00",
        },
        {
          ml: "500",
          price: "440.00",
        },
        {
          ml: "1000",
          price: "850.00",
        },
      ],
    },
    {
      title: "LEMOUNT WHITE BRANDY",
      items: [
        {
          ml: "750",
          price: "990.00",
        },
      ],
    },
    {
      title: "375 24",
      items: [
        {
          ml: "200",
          price: "490.00",
        },
        {
          ml: "180",
          price: "250.00",
        },
        {
          ml: "500",
          price: "590.00",
        },
        {
          ml: "1000",
          price: "1100.00",
        },
        {
          ml: "250",
          price: "600.00",
        },
        {
          ml: "180",
          price: "300.00",
        },
        {
          ml: "500",
          price: "670.00",
        },
        {
          ml: "1000",
          price: "1300.00",
        },
        {
          ml: "500",
          price: "650.00",
        },
        {
          ml: "180",
          price: "330.00",
        },
        {
          ml: "500",
          price: "870.00",
        },
        {
          ml: "1000",
          price: "1710.00",
        },
      ],
    },
    {
      title: "LEMOUNT GOLDEN BRANDY",
      items: [
        {
          ml: "750",
          price: "900.00",
        },
        {
          ml: "375",
          price: "440.00",
        },
        {
          ml: "180",
          price: "230.00",
        },
        {
          ml: "500",
          price: "570.00",
        },
        {
          ml: "1000",
          price: "990.00",
        },
      ],
    },
    {
      title: "WELLINGTON ISLAND INDIAN BRANDY",
      items: [
        {
          ml: "750",
          price: "900.00",
        },
        {
          ml: "375",
          price: "420.00",
        },
        {
          ml: "180",
          price: "200.00",
        },
        {
          ml: "500",
          price: "480.00",
        },
        {
          ml: "1000",
          price: "950.00",
        },
      ],
    },
    {
      title: "BOMBAY SPECIAL DOCTORS BRANDY",
      items: [
        {
          ml: "750",
          price: "490.00",
        },
        {
          ml: "375",
          price: "280.00",
        },
        {
          ml: "180",
          price: "170.00",
        },
        {
          ml: "500",
          price: "400.00",
        },
        {
          ml: "1000",
          price: "720.00",
        },
      ],
    },
    {
      title: "JAMAICAN MAGIC RUM",
      items: [
        {
          ml: "750",
          price: "630.00",
        },
        {
          ml: "375",
          price: "300.00",
        },
        {
          ml: "180",
          price: "160.00",
        },
        {
          ml: "500",
          price: "390.00",
        },
        {
          ml: "1000",
          price: "580.00",
        },
      ],
    },
    {
      title: "SUPERMAN RUM",
      items: [
        {
          ml: "750",
          price: "570.00",
        },
        {
          ml: "375",
          price: "290.00",
        },
        {
          ml: "180",
          price: "160.00",
        },
        {
          ml: "500",
          price: "380.00",
        },
        {
          ml: "1000",
          price: "700.00",
        },
      ],
    },
    {
      title: "JAMES MC GILL RUM",
      items: [
        {
          ml: "750",
          price: "700.00",
        },
        {
          ml: "375",
          price: "200.00",
        },
        {
          ml: "180",
          price: "100.00",
        },
        {
          ml: "500",
          price: "260.00",
        },
        {
          ml: "1000",
          price: "550.00",
        },
      ],
    },
  ]);
  return (
    <div>
      <Navbar1 />
      <Container>
        <Row>
          {data.map((index, idx) => {
            return (
              <Col
                key={idx}
                xs={12}
                sm={6}
                md={4}
                lg={2}
                xl={2}
                xxl={2}
                className="mb-4"
              >
                <Card
                  style={{
                    width: "18rem",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                    textAlign: "center",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    willChange: "transform",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.03)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 25px rgba(0,0,0,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 20px rgba(0,0,0,0.15)";
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="image.png"
                    style={{
                      height: "340px",
                      objectFit: "cover",
                      display: "block", // removes tiny inline-gap
                      width: "100%",
                    }}
                  />

                  <Card.Body style={{ padding: "1.5rem" }}>
                    <Card.Title
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        marginBottom: "1rem",
                        color: "#333",
                      }}
                    >
                      {index.title}
                    </Card.Title>

                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {index.items[0].ml} ml  -  ₹{Math.round(Number(index.items[0].price))}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {index.items.map((item, i) => (
                          <Dropdown.Item key={i}>
                            {item.ml} ml   -  ₹{Math.round(Number(item.price))}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
