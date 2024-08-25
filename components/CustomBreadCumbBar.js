import '../app/globals.css';
import './CustomBreadCumbBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importing Bootstrap Icons CSS

import { Row, Col, Breadcrumb, Button, Container } from 'react-bootstrap';

const CustomBreadCumbBar = () => {
  return (
    < >
      <Row>
        <Col xs={12} md={6}>
          {/* Left Side: Breadcrumbs with Arrows */}
          <Breadcrumb>
            <Breadcrumb.Item href="#">
              Home
            </Breadcrumb.Item>

            <Breadcrumb.Item >
              <i className="bi bi-arrow-right"></i> Livebestand
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              <i className="bi bi-arrow-right"></i> Cannabis Blüten
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col xs={12} md={6}>
          {/* Right Side: Inner Div */}
          <div className="d-flex flex-column align-items-end">
            {/* Top: Text */}
            <p className="mb-2">GKV mit Kostenübernahme?</p>
            {/* Down: Button */}
            <Button className='curve-button'>Preisoptionen</Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default CustomBreadCumbBar;
