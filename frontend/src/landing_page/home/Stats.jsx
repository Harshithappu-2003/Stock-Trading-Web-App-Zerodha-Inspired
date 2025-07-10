import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          {/* ...text content... */}
        </div>
        <div className="col-6 p-5">
          <img
            src="media/images/ecosystem.png"
            alt="Zerodha ecosystem illustration"
            style={{ width: "90%" }}
          />
          <div className="text-center mt-4 d-flex flex-column flex-md-row justify-content-center gap-4">
            <a href="#" className="text-decoration-none fw-semibold text-primary">
              Explore our products <FontAwesomeIcon icon={faArrowRightLong} />
            </a>
            <a href="#" className="text-decoration-none fw-semibold text-primary">
              Try Kite demo <FontAwesomeIcon icon={faArrowRightLong} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
