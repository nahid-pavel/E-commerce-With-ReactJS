import React from "react";

import "./About.style.scss";

function About() {
  return (
    <div className="container mt-3 p-3">
      <h1> About Us</h1>
      <div className="divider"></div>
      <p class="lead">
        We are one of leading computer supplier and distributor for more than 10
        years. We have special delivery system all over the country.
      </p>
      <div className="about_details">
        <div className="col">
          <div className="row">
            <div className="col-md-4">
              <img
                alt="img1"
                src="https://img.over-blog-kiwi.com/2/60/57/46/20171227/ob_2dda9d_door-to-door-courier.jpg"
              />
              <div className="description">
                <h2>Easy Delivery</h2>
                <p className="lead">Delivery fast as possible</p>
              </div>
            </div>
            <div className="col-md-4">
              <img
                alt="img2"
                src="https://www.seekpng.com/png/detail/269-2695182_best-quality-png-transparent-images-logo-best-quality.png"
              />
              <div className="description">
                <h2>Best Quality Products</h2>
                <p className="lead">
                  We always provide best quality products available in the
                  market{" "}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img
                alt="img3"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyX8hvUyGoT0C8SQdfpxAV2TyMelxqJdWgcw&usqp=CAU"
              />
              <div className="description">
                <h2>Low Price</h2>
                <p className="lead">Great Products within budget</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
