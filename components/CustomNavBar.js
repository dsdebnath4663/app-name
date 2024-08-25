import '../app/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importing Bootstrap Icons CSS
import './CustomBreadCumbBar'

import { Navbar, Nav, Form, FormControl, Container, Breadcrumb, Button, Row, Col } from 'react-bootstrap';
import CustomBreadCumbBar from './CustomBreadCumbBar';

const CustomNavBar = () => {
  return (

    <><Navbar bg="" expand="lg">
      <Container fluid>
        <Form className="custom-form">
          <FormControl
            type="search"
            placeholder="Search"
            className="custom-form-control me-2"
            aria-label="Search" />

          <Button variant="outline-success">
            <i className="bi bi-search"></i>
          </Button>
        </Form>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav className="me-auto-custom my-2 my-lg-0" navbarScroll>

            <Nav.Link href="#link3" className="nav-link-with-icon">
              <div className="custom-div custom-div-color"></div>
              <p className='p-color'>Rezept einlösen</p>
            </Nav.Link>
            <Nav.Link href="#link3" className="nav-link-with-icon">
              <div className="custom-div"></div>
              <p>Live Bestand</p>
            </Nav.Link>
            <Nav.Link href="#link3" className="nav-link-with-icon">
              <div className="custom-div"></div>
              <p>Videosprechstunde</p>
            </Nav.Link>
            <Nav.Link href="#link3" className="nav-link-with-icon">
              <div className="custom-div"></div>
              <p>FAQs</p>
            </Nav.Link>
            <Nav.Link href="#link3" className="nav-link-with-icon">
              <div className="custom-div"></div>
              <p>Kontakt</p>
            </Nav.Link>




          </Nav>


          <div className="d-flex">
            <Nav.Link
              href="#profile"
              className='nav-link-custom-one'


            >
              <img src="/icons/Cart.png" alt="Profile" width="30" height="30" />
            </Nav.Link>
            <Nav.Link
              href="#cart"
              className='nav-link-custom-two'
            >
              Anmelden
            </Nav.Link>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
      <CustomBreadCumbBar />
    </>
  );
};

export default CustomNavBar;
