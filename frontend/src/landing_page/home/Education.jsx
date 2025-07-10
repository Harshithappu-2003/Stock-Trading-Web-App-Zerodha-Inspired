import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function Education() {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src="media/images/education.svg"
            alt="Market Education Illustration"
            className="img-fluid"
            style={{ maxWidth: "70%" }}
          />
        </div>

        {/* Right Text */}
        <div className="col-md-6">
          <h2 className="fs-2 fw-bold mb-3">Free and open market education</h2>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" className="text-decoration-none text-primary fw-semibold">
            Varsity <FontAwesomeIcon icon={faArrowRightLong} className="ms-1" />
          </a>

          <p className="mt-4">
            TradingQ&A, the most active trading and investment community in India
            for all your market-related queries.
          </p>
          <a href="#" className="text-decoration-none text-primary fw-semibold">
            TradingQ&A <FontAwesomeIcon icon={faArrowRightLong} className="ms-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Education;
