import { React, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PostContext } from "../../store/PostContext";
import "./view.css";
import { Col, Row, Card } from "react-bootstrap";
import { StarFill, StarHalf } from "react-bootstrap-icons";
import { AuthContext, FirebaseContext } from "../../store/AuthContext";
import { CartContext } from "../../store/addToCartContext";
import axios from "axios";

function View() {
  const { postDetails } = useContext(PostContext);
  const { firebase } = useContext(FirebaseContext);
  const [product, setProducts] = useState([]);
  const { setPostDetails } = useContext(PostContext);
  const { setItems } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${postDetails.category}`)
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  const handleCart = (items) => {
    if (user) {
      firebase
        .firestore()
        .collection("myCarts")
        .add({
          itemId: items.id,
          itemName: items.title,
          itemPrice: items.price,
          itemCategory: items.category,
          itemImage: items.image,
        })
        .then(() => {
          navigate("/shoppingCart");
        });
    } else {
      navigate("/login");
    }
  };

  const navigate = useNavigate();
  const date = new Date().toLocaleDateString();

  return (
    <>
      <Row className="py-5">
        <Col xl="4">
          <Card.Img
            src={postDetails.image}
            style={{ marginBottom: "3em", width: "250px" }}
          />
        </Col>

        <Col>
          <Card style={{ transform: "scale(1)" }}>
            <Card.Body>
              <Card.Title as={"h2"}>{postDetails.title}</Card.Title>
              <small className="text-muted">{postDetails.description}</small>
              <Card.Text>{date}</Card.Text>
              <div className="text-warning">
                <StarFill />
                <StarFill />
                <StarFill />
                <StarFill />
                <StarHalf />
              </div>

              <div className="price-action mb-2">
                <Card.Title as="h4">${postDetails.price}</Card.Title>
              </div>

              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleCart(postDetails)}
                >
                  Add to Cart
                </button>
                <button className="btn btn-outline-primary btn-sm">
                  Buy Now
                </button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Row className="d-flex justify-content-center mt-5">
          <Col>
            <div className="fullCard">
              <div>
                <h2 className="text-muted">Related items</h2>
              </div>
              {product
                .filter((products) => products.id !== postDetails.id)
                .map((value, index) => {
                  return (
                    <Card
                      onClick={() => {
                        setPostDetails(value);
                        navigate("/view");
                      }}
                    >
                      <div>
                        <Card.Img
                          src={value.image}
                          style={{ width: "100px" }}
                        />
                      </div>
                      <Card.Body>
                        <Card.Title>$ {value.price}</Card.Title>
                        <Card.Text>{value.title}</Card.Text>
                      </Card.Body>
                    </Card>
                  );
                })}
            </div>
          </Col>
        </Row>
      </Row>
    </>
  );
}

export default View;
