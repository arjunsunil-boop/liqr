import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// Make sure Bootstrap CSS is imported somewhere once in your app:
// import "bootstrap/dist/css/bootstrap.min.css";

const AddLiq = () => {
  return (
    <div
      style={{
        minHeight: "100dvh",          // full viewport height (better on mobile than 100vh)
        display: "grid",              // simplest centering
        placeItems: "center",         // centers both ways
        padding: "16px",              // prevents edge hugging on small screens
        boxSizing: "border-box",
      }}
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
          e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.25)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
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
            ABSOLUT BLUE VODKA
          </Card.Title>

          <a
            href="#"
            style={{
              display: "inline-block",
              padding: "10px 18px",
              color: "black",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "500",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#007bff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
          >
            view pricing
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddLiq;
