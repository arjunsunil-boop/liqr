import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Login.css";

function BasicExample() {
  return (
    <div className="cardContainer">
       <Card className="Card" style={{ width: "40rem" }}>
         <Card.Body style={{ textAlign: "center" }}>

  <Card.Title style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
    Admin Login
  </Card.Title>

  <p style={{ fontStyle: "italic", color: "#555", marginBottom: "1.5rem" }}>
    welcome to liqr
  </p>

  <div style={{ marginBottom: "1rem" }}>
    <label style={{ display: "block", marginBottom: "0.3rem", fontWeight: "500" }}>
      e-mail
    </label>
    <input
      type="text"
      style={{
        width: "100%",
        padding: "10px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        outline: "none",
        fontSize: "1rem",
      }}
    />
  </div>

  <div style={{ marginBottom: "1.5rem" }}>
    <label style={{ display: "block", marginBottom: "0.3rem", fontWeight: "500" }}>
      password
    </label>
    <input
      type="password"
      style={{
        width: "100%",
        padding: "10px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        outline: "none",
        fontSize: "1rem",
      }}
    />
  </div>

  <Button variant="primary" style={{ width: "100%", padding: "10px", borderRadius: "8px" }}>
    Login
  </Button>

</Card.Body>

        </Card>
    </div>
  );
}

export default BasicExample;
