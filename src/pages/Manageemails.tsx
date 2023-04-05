import React from "react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import styles from "../styles/stylescss/Manage-emails.module.css";
import { AiOutlineRight } from "react-icons/ai";
import { IoMdInformationCircle } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Dashboard from "@/Components/Layout/Dashboard";
const Manageemails = () => {
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
            <a href="" className={styles.back}>
              <span style={{ marginRight: "7px" }}>
                <IoIosArrowBack />
              </span>
              Back
            </a>
            <div className="card p-4 mt-2">
              <div className="row d-flex justify-content-between">
                <div className="col-md-9">
                  <h4 className={styles.manage_emails}>Manage Emails</h4>
                  <p className="manage-address-detail">
                    Don't worry, your information is private and we will not
                    share this info with anyone outside Expert!
                  </p>
                </div>
                <div className="col-md-3">
                  <Image
                    src={"/assets/images/img6.png"}
                    height={100}
                    width={100}
                    alt="create account"
                    className="rounded-circle mx-auto d-block "
                  />
                </div>
              </div>
            </div>

            {/* =========create address section end============= */}
            {/* ===========input feilds section start================ */}
            <div className="card p-3 mt-4">
              <div className="d-flex bd-highlight">
                <div className="p-2 flex-grow-1 bd-highlight">
                  <span className={styles.email}>Expert Account Email</span>

                  <div className="icon-text">
                    <span>
                      The email used to identify your Expert Account to you. You
                      can’t change this address.
                    </span>
                  </div>
                  <p className={styles.email_address}>
                    malik.zeeshan7458@gmail.com
                  </p>
                </div>
                <div className="p-2 bd-highlight">
                  <span style={{ fontSize: "15px", color: "#ccd2d8" }}>
                    <BsThreeDotsVertical />
                  </span>
                </div>
              </div>

              <hr className="line-color" />
              {/* ============section2============= */}
              <div className="d-flex bd-highlight">
                <div className="p-2 flex-grow-1 bd-highlight">
                  <span className={styles.email}>Recovery Email</span>
                  <div className="icon-text">
                    <span>
                      The email where expert can contact you if there’s unusual
                      activity in your account.
                    </span>
                  </div>
                  <p className={styles.email_address}>
                    malik.zeeshan268@gmail.com
                  </p>
                  <a
                    href=""
                    className="Learn-more mt-5"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Verify Now
                    <AiOutlineRight />
                  </a>
                </div>
                <div className="p-2 bd-highlight">
                  <div className={styles.badge}>
                    <span
                      style={{
                        fontSize: "16px",
                        color: "#F6AE35",
                        marginRight: "6px",
                      }}
                    >
                      <IoMdInformationCircle />
                    </span>
                    Unverified
                  </div>
                  <span style={{ fontSize: "15px", color: "#ccd2d8" }}>
                    <BsThreeDotsVertical />
                  </span>
                </div>
              </div>

              <hr className="line-color" />
              {/* ===============section3=================== */}
              <div className="d-flex bd-highlight">
                <div className="p-2 flex-grow-1 bd-highlight">
                  <span className={styles.email}>Contact email</span>
                  <div className="icon-text">
                    <span>
                      The email where you get information about most of the
                      expert services that you use with this account.
                    </span>
                  </div>
                  <p className={styles.email_address}>
                    malik.zeeshan7458@gmail.com
                  </p>
                </div>
                <div className="p-2 bd-highlight">
                  <span style={{ fontSize: "15px", color: "#ccd2d8" }}>
                    <BsThreeDotsVertical />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default Manageemails;
