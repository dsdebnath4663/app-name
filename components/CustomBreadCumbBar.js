import '../app/globals.css';
import './CustomBreadCumbBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Row, Col, Breadcrumb, Button, Container } from 'react-bootstrap';

const CustomBreadCumbBar = () => {
  return (
    < >
      <Row className='custom-row-two'>
        <Col xs={12} md={6}>
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
          <div className="d-flex flex-column align-items-end">
            <p className="mb-2">GKV mit Kostenübernahme?</p>
            <Button className='curve-button'>Preisoptionen</Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default CustomBreadCumbBar;
