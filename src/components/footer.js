import React from "react"
import { Link } from "gatsby"
import image1 from "../images/feed/image1.jpg"
import image2 from "../images/feed/image2.jpg"
import image3 from "../images/feed/image4.jpg"
import image4 from "../images/feed/image4.jpg"
import image5 from "../images/feed/image5.jpg"
import image6 from "../images/feed/image6.jpg"

const Footer = () => {
  return (
    <footer className="footer" id="foo">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="info1">
              <h4>Powerful Info</h4>
              <div className="addr">
                <p>
                  Etiam non tellus facilisis, scelerisque est sed, aliquet
                  metus. In arcu sapien, hendrerit eu lectus et, interdum
                  fringilla urna. Validate{" "}
                  <a
                    href="http://validator.w3.org/check?uri=referer"
                    rel="nofollow"
                  >
                    XHTML
                  </a>{" "}
                  &amp;{" "}
                  <a
                    href="http://jigsaw.w3.org/css-validator/check/referer"
                    rel="nofollow"
                  >
                    CSS
                  </a>
                  .
                </p>
                <ul>
                  <li>
                    <i className="fa fa-map-marker"></i>450 Aenean ut sagittis
                    11220
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
          <div className="col-md-4">
            <div className="info2">
              <h4>Flickr Feed</h4>
              <div className="row">
                <div className="col-xs-4">
                  <Link to="#">
                    <img className="img-responsive" alt="flickr" src={image1} />
                  </Link>
                </div>
                {/*<div className="col-xs-4">*/}
                {/*  <Link to="#">*/}
                {/*    <img className="img-responsive" alt="flickr" src={image2} />*/}
                {/*  </Link>*/}
                {/*</div>*/}
                {/*<div className="col-xs-4">*/}
                {/*  <Link to="#">*/}
                {/*    <img className="img-responsive" alt="flickr" src={image3} />*/}
                {/*  </Link>*/}
                {/*</div>*/}
                {/*<div className="col-xs-4">*/}
                {/*  <Link to="#">*/}
                {/*    <img className="img-responsive" alt="flickr" src={image4} />*/}
                {/*  </Link>*/}
                {/*</div>*/}
                {/*<div className="col-xs-4">*/}
                {/*  <Link to="#">*/}
                {/*    <img className="img-responsive" alt="flickr" src={image5} />*/}
                {/*  </Link>*/}
                {/*</div>*/}
                {/*<div className="col-xs-4">*/}
                {/*  <Link to="#">*/}
                {/*    <img className="img-responsive" alt="flickr" src={image6} />*/}
                {/*  </Link>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info3">
              <h4>Stay Tuned</h4>
              <p>
                You may sign up our monthly newsletter to receive updates or
                news from our team.
              </p>
              <form role="form">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email_newsletter"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <button type="button" className="btn btn-primary">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
