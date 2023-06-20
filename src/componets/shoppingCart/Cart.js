import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../store/addToCartContext";
import { Arrow90degDown, FileMinus, Plus, Trash } from "react-bootstrap-icons";
import { FirebaseContext } from "../../store/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    setLoading(true);
    firebase
      .firestore()
      .collection("myCarts")
      .get("")
      .then((response) => {
        response.forEach((doc) => {
          //setItems((x) => [...x, doc]);
          setItems((x) => [...x, doc.data()]);
          console.log(doc.data());
        });
      });
    setLoading(false);
  }, []);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
    if (count <= 0) {
      setCount(0);
    }
  };

  // const handleDlt = (id) => {
  //   const dlt = items.filter((value) => {
  //     return value.id !== id;
  //   });

  //   firebase
  //     .firestore()
  //     .collection("myCarts")
  //     .doc(id)
  //     .delete()
  //     .then(() => {
  //       console.log("Document successfully deleted!");
  //     })
  //     .catch((error) => {
  //       console.error("Error removing document: ", error);
  //     });
  //   setItems(dlt);
  // };

  return (
    <div className="mt-5">
      {items.map((item, index) => (
        <section class="h-100" style={{ background: "#eee" }}>
          <div class="container h-100 py-5">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-10">
                <div class="d-flex justify-content-between align-items-center mb-4">
                  <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
                  <div>
                    <p class="mb-0">
                      <span class="text-muted">Sort by:</span>{" "}
                      <a href="#!" class="text-body">
                        price{" "}
                        <i>
                          <Arrow90degDown />
                        </i>
                      </a>
                    </p>
                  </div>
                </div>

                <div
                  style={{ transform: "scale(1)" }}
                  class="card rounded-3 mb-4"
                  key={index}
                >
                  <div class="card-body p-4">
                    <div class="row d-flex justify-content-between align-items-center">
                      <div class="col-md-2 col-lg-2 col-xl-2">
                        <img
                          src={item.itemImage}
                          class="img-fluid rounded-3"
                          alt="Cotton T-shirt"
                        />
                      </div>
                      <div class="col-md-3 col-lg-3 col-xl-3">
                        <p class="lead fw-normal mb-2">{item.itemName}</p>
                        <p>
                          <span class="text-muted"> {item.itemCategory}: </span>
                          <span class="text-muted">Size: </span>M
                        </p>
                      </div>
                      <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                        <button className="btn" onClick={decrementCount}>
                          <FileMinus />
                        </button>

                        <input
                          id="form1"
                          min="0"
                          name="quantity"
                          value={count}
                          type="number"
                          class="form-control form-control-sm"
                        />

                        <button className="btn" onClick={incrementCount}>
                          <Plus />
                        </button>
                      </div>
                      <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                        <h5 class="mb-0">${count * item.itemPrice}</h5>
                      </div>
                      {/* <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                        <a href="#!" class="text-danger">
                          <i>
                            <Trash onClick={() => handleDlt(item.id)} />
                          </i>
                        </a>
                      </div> */}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="mt-4 btn btn-warning w-100"
                    onClick={() => {
                      alert("Your Order Placed successfully");
                      navigate("/");
                    }}
                  >
                    Proceed to Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
