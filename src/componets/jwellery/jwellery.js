import React, { useContext, useEffect, useState } from "react";
import { Heart, StarFill, StarHalf } from "react-bootstrap-icons";
import axios from "../../Main-Part/axios";
import "./jwellery.css";
import { PostContext } from "../../store/PostContext";
import { useNavigate } from "react-router-dom";

export default function Jwelery() {
  const [product, setProduct] = useState([]);
  const { setPostDetails } = useContext(PostContext);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("/category/jewelery").then((response) => {
      setProduct(response.data);
    });
  }, []);

  console.log(product);

  return (
    <div className="mt-5 row text-capitalize">
      <div className="col-md-6">
        <h1 className="fs-2 mt-3 mb-5">
          <span style={{ color: "black" }}> Sparkle and twinkle </span> as often
          as possible.
        </h1>
        {product.map((value, index) => (
          <div
            className="card me-3"
            key={index}
            onClick={() => {
              setPostDetails(value);
              navigate("/view");
            }}
          >
            <div className="favorite">
              <Heart />
            </div>
            <div className="image">
              <img src={value.image} alt="" />
            </div>
            <div className="content">
              <p className="rate mb-1 mt-2">&#x20B9; {value.price}</p>
              <span className="category">{value.title}</span>
              <p className="name"> {}</p>
              <small className="name"> {value.price}</small>

              <div className="d-flex justify-content-between">
                <div className="ratingStar text-warning">
                  <StarFill />
                  <StarFill />
                  <StarFill />
                  <StarHalf />
                </div>

                <small>{value.rating.count}</small>
              </div>

              <button
                type="button"
                className="mt-2 btn btn-outline-dark btn-sm btn-rounded"
                data-mdb-ripple-color="dark"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
