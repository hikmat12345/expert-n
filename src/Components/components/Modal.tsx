import React from "react";
import img1 from "../public/assets/images/img1.jpg";
import img2 from "../public/assets/images/img4.png";
import img3 from "../public/assets/images/img5.png";

import Image from "next/image";
const Modal = () => {
  return (
    <>
      <div>
        {/* Button trigger modal */}
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog p-3">
            <div className="modal-content">
              <Image
                src={img1}
                height={90}
                width={90}
                alt="create account"
                className="rounded-circle mx-auto d-block mt-3"
              />
              <div className="text-center">
                <h5 className="mt-2">Muhammad Zeeshan</h5>
                <p className="grey-text">Personal Account</p>
                <div className="card create-account">
                  <p className="mt-2">Create Business Account</p>
                </div>
              </div>
              <hr className="line-color" />

              {/* ==========start list========= */}
              <div className="container">
                <ul className="list-group list-group-light">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <img
                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                        alt=""
                        style={{ width: 50, height: 50 }}
                        className="rounded-circle"
                      />
                      <div className="ms-3">
                        <h5 className=" mb-1">Muhammad Zeeshan</h5>
                        <p className="mb-0">Personal</p>
                      </div>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        defaultValue="option1"
                      />
                    </div>
                  </li>
                  <hr className="line-color" />
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <Image
                        src={img2}
                        className="rounded-circle"
                        alt=""
                        style={{ width: 50, height: 50 }}
                      />
                      <div className="ms-3">
                        <h5 className="mb-1">Expert Services</h5>
                        <p className="mb-0">Director</p>
                      </div>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        defaultValue="option1"
                      />
                    </div>
                  </li>
                  <hr className="line-color" />
                  <li className="list-group-item d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                      <Image
                        src={img3}
                        className="rounded-circle"
                        alt=""
                        style={{ width: 50, height: 50 }}
                      />
                      <div className="ms-3">
                        <h5 className="mb-1">Plexaar IT Company</h5>
                        <p className="mb-0">Director</p>
                      </div>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        defaultValue="option1"
                      />
                    </div>
                    {/* <input type="radio" id="html" name="fav_language" defaultValue="HTML"  className="form-check"/> */}
                  </li>
                </ul>
              </div>

              {/* ===========end list========== */}
            </div>
          </div>
        </div>
      </div>
      {/* ============================address info========================== */}
    </>
  );
};

export default Modal;
