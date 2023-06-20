import React, { useContext, useEffect, useState } from "react";
import { Heart, StarFill, StarHalf } from "react-bootstrap-icons";
import "./postCard.css";
import axios from "../../Main-Part/axios";
import { useNavigate } from "react-router-dom";
import { PostContext } from "../../store/PostContext";
import BarLoading from "../../Loading/BarLoading";

export default function PostCards({ title, url }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const { setPostDetails } = useContext(PostContext);

  useEffect(() => {
    setLoading(true);
    axios.get(url).then((response) => {
      setProduct(response.data);
    });
    setLoading(false);
  }, [url]);

  return (
    <div className="row align-items-start">
      <div className="col-md-12 order-4">
        {loading ? (
          <BarLoading />
        ) : (
          <div className="postCard p-3 text-capitalize mb-4 ">
            <h5 className="mb-3">{title}</h5>
            {product &&
              product.map((value, index) => (
                <>
                  <div
                    key={index}
                    className="card me-3"
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
                </>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
