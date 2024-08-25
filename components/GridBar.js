import '../app/globals.css';
import './GridBar.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importing Bootstrap Icons CSS

import { Navbar, Nav, Form, FormControl, Button, Container, Dropdown } from 'react-bootstrap';

const GridBar = () => {
  return (

    <Navbar bg="" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            {/* Add navigation links here if needed */}
          </Nav>
          <Form className="custom-form d-flex align-items-center">
            <FormControl
              type="search"
              placeholder="Suchen"
              className="custom-form-control me-2"
              aria-label="Suchen"
            />

            <Button variant="outline-success" className="me-2">
              <i className="bi bi-search"></i>
            </Button>
          </Form>


          <Dropdown className="me-2">
            <Dropdown.Toggle
              className="custom-dropdown-toggle"
              id="dropdown-basic"
            >
              Sortieren nach
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#action/1">Action</Dropdown.Item>
              <Dropdown.Item href="#action/2">Another action</Dropdown.Item>
              <Dropdown.Item href="#action/3">Something else here</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <div className="custom-dropdown-toggle-3"
          >
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Verfügbarkeit"
              className="custom-switch "
            />
          </div>
          <Button variant="outline-success" className="me-2 custom-dropdown-toggle-2">
            <i className="bi bi-list-task"></i>
          </Button>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default GridBar;
