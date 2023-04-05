import React from "react";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import { BiBuildings } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import Dashboard from "@/Components/Layout/Dashboard";

const Manageaddress = () => {
  const sideMenu: any = [
    {
      link: "/profile",
      text: "proifle",
      icon: "/assets/icons/user-white.svg",
      active: true,
    },
    {
      link: "/",
      text: "Addresses",
      icon: "/assets/icons/location-black.svg",
      active: false,
    },
    {
      link: "/",
      text: "Order",
      icon: "/assets/icons/down-black.svg",
      active: false,
    },
    {
      link: "/",
      text: "Setting",
      icon: "/assets/icons/go-black.svg",
      active: false,
    },
    {
      link: "/",
      text: "Logout",
      icon: "/assets/icons/down-black.svg",
      active: false,
    },
  ];
  return (
    <Dashboard sidebar={sideMenu}>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-md-12">
            {/* ===========create addres ssection============= */}
            <div className="card p-3">
              <div className="row d-flex justify-content-between">
                <div className="col-md-9">
                  <h4 className="manage-address">Manage Addresses</h4>
                  <p className="manage-address-detail">
                    Don't worry, your information is private and we will not
                    share this info with anyone outside Expert!
                  </p>
                  <a
                    href=""
                    className="Learn-more mt-5"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Create New Address
                    <AiOutlineRight />
                  </a>
                  {/* Modal */}
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog mt-5">
                      <div className="card p-3 pb-4 pt-4 rounded">
                        <p className="text-center">Select Address Type</p>
                        <div className="">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="card text-center p-2 rounded">
                                <div className="text-center">
                                  <span
                                    style={{ fontSize: "20px", top: "50px" }}
                                  >
                                    <BiBuildings />
                                  </span>
                                </div>
                                <p>Office Address</p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="card text-center p-2 ">
                                <span style={{ fontSize: "20px", top: "50px" }}>
                                  <BiBuildings />
                                </span>

                                <p>Home Address</p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="card text-center p-2">
                                <span style={{ fontSize: "20px", top: "50px" }}>
                                  <BiBuildings />
                                </span>

                                <p>Other</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <Image
                    src={"/assets/images/img2.png"}
                    height={110}
                    width={180}
                    alt="create account"
                    className="rounded-circle mx-auto d-block"
                  />
                </div>
              </div>
            </div>

            {/* =========create address section end============= */}
            {/* ===========input feilds section start================ */}
            <div className="card p-3 mt-4">
              <div className="d-flex bd-highlight">
                <div className="p-2 flex-grow-1 bd-highlight">
                  <span style={{ fontSize: "20px" }}>
                    <BiBuildings />
                  </span>
                  <span className="address-info">MR THOMAS CLARK</span>
                  <p className="Office">
                    Office 1897, 4th floor F-5 Islamabad, Pakistan (44000)
                  </p>
                </div>
                <div className="p-2 bd-highlight">
                  <div className="badge">New Added</div>
                  <span style={{ fontSize: "15px", color: "#ccd2d8" }}>
                    <BsThreeDotsVertical />
                  </span>
                </div>
              </div>

              <div className="icon-text">
                <span
                  style={{
                    marginRight: "10px",
                    marginLeft: "8px",
                    marginTop: "15px",
                    color: "#CCD2D8",
                  }}
                >
                  <AiOutlineInfoCircle />
                </span>

                <span>
                  Don't worry, your information is private and we will not share
                  this info with anyone outside Expert!
                </span>
              </div>
              <hr className="line-color" />
              {/* ============section2============= */}
              <div className="d-flex bd-highlight">
                <div className="p-2 flex-grow-1 bd-highlight">
                  <span style={{ fontSize: "20px" }}>
                    <BiBuildings />
                  </span>
                  <span className="address-info">Office</span>
                  <p className="Office">
                    Beck Hall, Cove Road Malham Yorkshire, United Kingdom (BD23
                    4DJ){" "}
                  </p>
                </div>
                <div className="p-2 bd-highlight">
                  <span style={{ fontSize: "15px", color: "#ccd2d8" }}>
                    <BsThreeDotsVertical />
                  </span>
                </div>
              </div>

              <hr className="line-color" />
              {/* ===============section3=================== */}
              <div className="d-flex bd-highlight">
                <div className="p-2 flex-grow-1 bd-highlight">
                  <span style={{ fontSize: "20px" }}>
                    <AiOutlineHome />
                  </span>
                  <span className="address-info">Home</span>
                  <p className="Office">
                    Beck Hall, Cove Road Malham Yorkshire, United Kingdom (BD23
                    4DJ)
                  </p>
                </div>
                <div className="p-2 bd-highlight">
                  <span style={{ fontSize: "15px", color: "#ccd2d8" }}>
                    <BsThreeDotsVertical />
                  </span>
                </div>
              </div>

              <div className="icon-text">
                <span
                  style={{
                    marginRight: "10px",
                    marginLeft: "8px",
                    marginTop: "15px",
                    color: "#CCD2D8",
                  }}
                >
                  <AiOutlineInfoCircle />
                </span>

                <span>
                  Don't worry, your information is private and we will not share
                  this info with anyone outside Expert!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default Manageaddress;
