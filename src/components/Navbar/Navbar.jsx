import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar1() {
  useEffect(() => {
    const styles = `
      .liq-navbar {
        background: #e8e2dddc;
        box-shadow: 0 6px 18px #63585033;
        padding: 0.7rem 2rem;
      }

      .liq-navbar .navbar-brand {
        font-weight: 800;
        letter-spacing: 0.6px;
        color: #4b443d !important;
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .liq-brand-badge {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: #D9CFC7;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: #4b443d;
        font-weight: 900;
        font-size: 18px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.12) inset;
      }

      .liq-navbar .nav-link {
        color: #4b443d !important;
        font-weight: 600;
      }

      .liq-navbar .nav-link:hover {
        color: #C9B59C !important;
      }

      .liq-navbar .dropdown-menu {
        background-color: #D9CFC7;
        border: none;
        min-width: 200px;
        padding: 0.35rem 0;
      }

      .liq-navbar .dropdown-item {
        color: #4b443d;
        padding: 0.5rem 1rem;
        font-weight: 600;
      }

      .liq-navbar .dropdown-item:hover,
      .liq-navbar .dropdown-item:focus {
        background-color: #C9B59C;
        color: #FFF9E5;
      }

      .liq-navbar .dropdown-divider {
        border-top: 1px solid rgba(0,0,0,0.1);
      }

      .liq-search .form-control {
        background: #F9F8F6;
        border: 1px solid #D9CFC7;
        color: #4b443d;
        padding: 0.45rem 0.6rem;
        border-radius: 999px;
        width: 220px;
        transition: width 220ms ease;
      }

      .liq-search .form-control::placeholder {
        color: #8e847c;
      }

      .liq-search .form-control:focus {
        width: 300px;
        box-shadow: 0 6px 18px rgba(0,0,0,0.12);
        background: #FFF9E5;
        color: #4b443d;
      }

      .liq-search .btn-outline-success {
        border-radius: 999px;
        border: 1px solid #C9B59C;
        color: #4b443d;
        background: #D9CFC7;
      }

      .liq-search .btn-outline-success:hover {
        background: #C9B59C;
        color: #FFF9E5;
      }

      @media (max-width: 767px) {
        .liq-search .form-control {
          width: 140px;
        }

        .liq-navbar .navbar-brand {
          font-size: 1.05rem;
        }
      }
    `;

    const styleTag = document.createElement('style');
    styleTag.setAttribute('data-liq-navbar', 'true');
    styleTag.innerHTML = styles;
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <Navbar expand="lg" className="liq-navbar">
      <Container fluid>
        <Navbar.Brand href="">
          <span className="liq-brand-badge">Q</span>
          <span style={{ color: '#4b443d' }}>LiQr</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown title="Sort by" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Price: High to Low</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Price: Low to High</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Best Sellers</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form className="d-flex liq-search" role="search">
            <Form.Control
              type="search"
              placeholder="Search products, brands..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
