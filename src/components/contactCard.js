import React from "react"
import Buttoni from "./button"

const ContactCard = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <form role="form">
            <div className="form-group">
              <input
                name="fullname"
                type="text"
                className="form-control"
                id="fullname"
                placeholder="Your Name"
                maxLength="30"
              />
            </div>
            <div className="form-group">
              <input
                name="email"
                type="text"
                className="form-control"
                id="email"
                placeholder="Your Email"
                maxLength="30"
              />
            </div>
            <div className="form-group">
              <input
                name="subject"
                type="text"
                className="form-control"
                id="subject"
                placeholder="Your Subject"
                maxLength="40"
              />
            </div>
            <div>
              <Buttoni text={"Send Message"} classNames={"btn btn-primary"} />
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <div className="txtarea">
            <textarea
              name="message"
              rows="10"
              className="form-control"
              id="message"
            ></textarea>
          </div>
        </div>
        <div className="col-md-3">
          <div className="addr">
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <ul>
              <li>
                <i className="fa fa-map-marker"></i>450 Aenean ut sagittis 11220
              </li>
              <li>
                <i className="fa fa-mobile-phone"></i>010-020-0120
              </li>
              <li>
                <i className="fa fa-globe"></i>
                <a rel="nofollow" href="http://www.example.com">
                  www.example.com
                </a>
              </li>
              <li>
                <i className="fa fa-envelope"></i>info@company.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactCard
