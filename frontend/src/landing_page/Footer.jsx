import React from "react";

function Footer() {
  return (
    <footer className="bg-light border-top mt-5 pt-5">
      <div className="container">
        <div className="row pb-5">
          {/* Logo + Copy */}
          <div className="col-md-3 mb-4">
            <img
              src="media/images/logo.svg"
              alt="Zerodha Logo"
              className="img-fluid mb-3"
              style={{ maxWidth: "140px" }}
            />
            <p className="text-muted small mb-0">
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          {/* Footer Links */}
          <div className="col-md-3 mb-4">
            <p className="fw-bold">Company</p>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-decoration-none text-muted">About</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Products</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Pricing</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Referral programme</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Careers</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Zerodha.tech</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Press & media</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Zerodha cares (CSR)</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <p className="fw-bold">Support</p>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-decoration-none text-muted">Contact</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Support portal</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Z-Connect blog</a></li>
              <li><a href="#" className="text-decoration-none text-muted">List of charges</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Downloads & resources</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <p className="fw-bold">Account</p>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-decoration-none text-muted">Open an account</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Fund transfer</a></li>
              <li><a href="#" className="text-decoration-none text-muted">60 day challenge</a></li>
            </ul>
          </div>
        </div>

        {/* Legal & Disclosure */}
        <div className="row">
          <div className="col">
            <div className="text-muted small" style={{ lineHeight: "1.6" }}>
              <p>
                Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.: INZ000031633.
                CDSL: Depository services through Zerodha Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015.
                Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.: INZ000038238.
              </p>
              <p>
                Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony,
                Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
              </p>
              <p>
                For complaints: <strong>complaints@zerodha.com</strong>, DP: <strong>dp@zerodha.com</strong>.
                Please read the Risk Disclosure Document as prescribed by SEBI | ICF.
              </p>
              <p>
                Procedure to file a complaint on SEBI SCORES: Register on SCORES portal.
                Mandatory details: Name, PAN, Address, Mobile Number, E-mail ID.
              </p>
              <p>
                Investments in securities market are subject to market risks. Read all related documents carefully before investing.
              </p>
              <p>
                "Prevent unauthorized transactions in your account. Update your contact details with your broker. You will receive SMS/email updates at the end of the day."
              </p>
              <p>
                Zerodha does not provide stock tips or authorize anyone to trade on your behalf.
                If someone contacts you claiming otherwise, please raise a ticket.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
