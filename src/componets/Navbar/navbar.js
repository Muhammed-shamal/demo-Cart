import React, { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import "./navbar.css";
import { Cart, Person } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { AuthContext, FirebaseContext } from "../../store/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);

  return (
    <div className="p-4 mb-3">
      <header>
        <nav className="navbar navbar-expand-lg  d-flex justify-content-end">
          <div
            className="navbar-brand"
            onClick={() => {
              navigate("/");
            }}
          >
            PEE VEE Store
          </div>
          {/* need collapse button */}

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            {/* <ul className="navbar-nav mx-auto navbar-nav-scroll">
               
              <li className="nav-item">
                <a className="nav-link active" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  " href="#special">
                  Special
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  " href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul> */}

            <div className="ms-auto">
              {/* <Dropdown placement="right">
                <Dropdown.Toggle variant="light">
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <i style={{ cursor: "pointer" }}>
                        <Person className="mb-1" />
                      </i>{" "}
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          !user && navigate("/signUp");
                        }}
                      >
                        {user ? `${user.displayName}` : "Account"}
                      </span>
                    </Dropdown.Item>
                    <Dropdown.Item className="logout">
                      {user && (
                        <>
                          <span
                            onClick={() => {
                              firebase.auth().signOut();
                              navigate("/");
                            }}
                          >
                            <Person /> Logout
                          </span>
                        </>
                      )}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Toggle>
              </Dropdown> */}
              <i style={{ cursor: "pointer" }}>
                <Person className="mb-1" />
              </i>{" "}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  !user && navigate("/signUp");
                }}
              >
                {user ? `${user.displayName}` : "Account"}
              </span>
              {user ? (
                <span
                  className="ms-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    firebase.auth().signOut();
                    navigate("/");
                  }}
                >
                  <Person /> Logout
                </span>
              ) : (
                ""
              )}
              <i style={{ cursor: "pointer" }}>
                <Cart className="mb-1 ms-4" />
              </i>{" "}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/shoppingCart");
                }}
              >
                Cart
              </span>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
