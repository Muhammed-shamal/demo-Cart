import React, { useContext, useEffect, useState } from "react";
import "./banner.css";
import fashionMan from "../../assets/photos/fashion-polo-shirt-men.png";
import shirt from "../../assets/photos/Isolated_black_t_shirt_opened.jpg";
import mobiles from "../../assets/photos/0a0243119f02f7a5.webp";
import jewelery from "../../assets/photos/na-cultured-2-rajvadi-set-tonolika-original-imagna5yfg5dwpnj.webp";
import tv from "../../assets/photos/7a9da987f315df35.webp";
import { useNavigate } from "react-router-dom";
import dress from "../../assets/photos/sweater-isolated.jpg";

export default function Banner() {
  const navigate = useNavigate();

  return (
    <section className="m-4">
      <div className="row mb-5">
        <div className="bannerImg d-flex justify-content-between  ">
          <div className="col-md-6 btnImg">
            <h1 className="bannerText fs-2 mb-3">
              Grap up to <span style={{ color: "black" }}>50%</span> Off On
              Selected Headphones
            </h1>
            <div>
              <button className="btn btn-secondary btn-sm">Buy Now</button>
            </div>
          </div>

          <div className="d-flex mx-auto">
            <img src={fashionMan} alt="bannerImg" />
          </div>
        </div>
      </div>

      <section className="section-two">
        <div className="row">
          <div className="">
            <div className="category_display mt-2">
              <ul className="list-unstyled ">
                {/* <div> to set the item up + down
                  <div>
                    <img src={all} alt="all menu" className="d-block" />
                  </div>
                  <li className="me-auto">All Category</li>
                </div> */}

                <img src={tv} alt="tv" />
                <li
                  className="me-auto"
                  onClick={() => {
                    navigate("/electronicDevices");
                  }}
                >
                  TV & Appliances
                </li>
                {/* <img src={mobiles} alt="mobiles" />
                <li className="me-auto">Mobiles & Laptops</li> */}

                <img src={dress} alt="fashion" />
                <li
                  className="me-auto"
                  onClick={() => {
                    navigate("/womenfashion");
                  }}
                >
                  Women's Fashion
                </li>

                <img src={shirt} alt="all menu" />
                <li
                  className="me-auto"
                  onClick={() => {
                    navigate("/menfashion");
                  }}
                >
                  Men's Fashion
                </li>

                <img src={jewelery} alt="jewelery" />
                <li
                  className="me-auto"
                  onClick={() => {
                    navigate("/jewelery");
                  }}
                >
                  Jwellery
                </li>
                {/* <img src={kitchen} alt="all menu" />
                <li className="mx-auto">Kitchen Items</li>
                <img src={furniture} alt="mobiles" />
                <li className="mx-auto">Furniture</li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
