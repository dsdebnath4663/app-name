"use client"; // Add this at the top of your file
import "./CustomFooter.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // Importing Bootstrap Icons CSS

const CustomFooter = () => {
  return (
    <footer className="bg-teal text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-2 text-right">
            <ul className="list-unstyled">
            {/* margin-top: 96px; */}

              <li>
                <a href="/" className="text-white">
                  AGB
                </a>
              </li>
              <li>
                <a href="/" className="text-white">
                  Impressum
                </a>
              </li>
              <li>
                <a href="/" className="text-white">
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <div className="top-div">
              <ul className="inline-list">
                <li>
                  <a
                    href="#link3"
                    data-rr-ui-event-key="#link3"
                    className="nav-link-with-icon-footer nav-link"
                  >
                    <div className="custom-div custom-div-color-margin"></div>
                    <p className="p-tag">Rezept einlösen</p>
                  </a>
                </li>

                <li>
                  <a
                    href="#link3"
                    data-rr-ui-event-key="#link3"
                    className="nav-link-with-icon-footer nav-link"
                  >
                    <div className="custom-div custom-div-color-margin"></div>
                    <p className="p-tag">Videosprechstunde</p>
                  </a>
                </li>
              </ul>
            </div>

            <div className="bootom-div">
              <ul className="inline-list">
                <li>
                  <a
                    href="#link3"
                    data-rr-ui-event-key="#link3"
                    className="nav-link-with-icon-footer nav-link"
                  >
                    <div className="custom-div custom-div-color-margin"></div>
                    <p className="p-tag">Live Bestand</p>
                  </a>
                </li>
                <li>
                  <a
                    href="#link3"
                    data-rr-ui-event-key="#link3"
                    className="nav-link-with-icon-footer nav-link"
                  >
                    <div className="custom-div custom-div-color-margin"></div>
                    <p className="p-tag">FAQs</p>
                  </a>
                </li>
                <li>
                  <a
                    href="#link3"
                    data-rr-ui-event-key="#link3"
                    className="nav-link-with-icon-footer nav-link"
                  >
                    <div className="custom-div custom-div-color-margin"></div>
                    <p className="p-tag">Kontakt</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 text-center">
            <p className="mb-01 captions">Standort</p>
            <p className="p-tag p-tag-dimension p-tag-dimension-margin-37">Bergstraße 49 - 57 69469 Weinheim (3 Glocken Quartier)</p>
          </div>
          <div className="col-md-2 text-center">
            <p className="mb-01 captions">Telefon</p>
            <p className="p-tag p-tag-dimension p-tag-dimension-margin-37">0223 545 5250</p>
          </div>


          <div className="col-md-2 text-right">
            <p className="p-tag captions">Öffnungszeiten</p>
            <p className="p-tag captions">Mo-Fr:</p>
            <p className="p-tag p-tag-dimension p-tag-dimension-margin-zero"> 09:00 - 18:00 Uhr</p>
            <p className="p-tag captions">Sa</p>
            <p className="p-tag p-tag-dimension p-tag-dimension-margin-zero"> 09:00 - 14:00 Uhr</p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;
