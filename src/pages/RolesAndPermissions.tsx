import React from "react";
import Image from "next/image";
import { BiBuildings } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import styles from "../styles/stylescss/Roles.module.css";
import Checkbox from "@mui/material/Checkbox";
import Dropdown from "@/Components/components/Dropdown";
import Dashboard from "@/Components/Layout/Dashboard";

const RolesAndPermissions = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
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
          <div className="col-md-3">
            <div className="card card-border">side bar</div>
          </div>
          <div className="col-md-9">
            {/* ===========create addres ssection============= */}
            <div className="card p-4">
              <div className="row d-flex justify-content-between">
                <div className="col-md-9">
                  <h4 className={styles.Roles}>Roles and premission</h4>
                  <p className={styles.rolesdetail}>
                    Your home and work addresses are used to personalize your
                    experiences across Expert Services, like showing search
                    results near your home, directions to work in Maps, and for
                    more relevant ads. You can remove them any time.
                  </p>
                  <Checkbox
                    {...label}
                    defaultChecked
                    sx={{
                      color: "dc0000",
                      padding: 0,
                      "&.Mui-checked": {
                        color: "#dc0000",
                      },
                    }}
                  />
                  <a href="" className={styles.terms_conditions}>
                    I agree{" "}
                    <span className={styles.red_section}>
                      Terms & Conditions
                    </span>
                  </a>
                </div>
                <div className="col-md-3">
                  <Image
                    src={"/assets/images/img3.png"}
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
            <div className="card p-4 mt-4">
              <div className="d-flex align-items-center">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                  alt=""
                  style={{ width: 60, height: 60, borderRadius: "8px" }}
                />
                <div className="">
                  <h5 className={styles.Username}>Muhammad Zeeshan</h5>
                </div>
              </div>
              <Dropdown />
              <hr className="line-color" />
              <p className={styles.Bookings}>Bookings</p>

              <div className={styles.buttonrow}>
                {/* ============button 1============== */}
                <div className={styles.Rectangle}>
                  <span className={styles.Create}>Create</span>

                  <div className={styles.Ellipse}>
                    <span style={{ color: "#db0406", cursor: "pointer" }}>
                      <MdCancel />
                    </span>
                  </div>
                </div>
                {/* ============button 2============== */}
                <div className={styles.Rectangle}>
                  <span className={styles.Create}>Edit</span>

                  <div className={styles.Ellipse_edit}>
                    <span style={{ color: "#db0406", cursor: "pointer" }}>
                      <MdCancel />
                    </span>
                  </div>
                </div>
                {/* ============button 3============== */}
                <div className={styles.Rectangle}>
                  <span className={styles.Create}>Cancel</span>

                  <div className={styles.Ellipse}>
                    <span style={{ color: "#db0406", cursor: "pointer" }}>
                      <MdCancel />
                    </span>
                  </div>
                </div>
              </div>
              {/* ================Legal (User will be able to deal with)================= */}
              <hr className="line-color" />
              <p className={styles.Bookings}>
                Legal (User will be able to deal with)
              </p>

              <div className={styles.buttonrow}>
                {/* ============button 1============== */}
                <div className={styles.Rectangle}>
                  <span className={styles.Create}>Personal Documents</span>

                  <div className={styles.Ellipse}>
                    <span
                      style={{
                        color: "#db0406",
                        cursor: "pointer",
                        marginLeft: "94px",
                      }}
                    >
                      <MdCancel />
                    </span>
                  </div>
                </div>
                {/* ============button 2============== */}
                <div className={styles.Rectangle}>
                  <span className={styles.Create}>Financial documents</span>

                  <div className={styles.Ellipse}>
                    <span
                      style={{
                        color: "#db0406",
                        cursor: "pointer",
                        marginLeft: "96px",
                      }}
                    >
                      <MdCancel />
                    </span>
                  </div>
                </div>
                {/* ============button 3============== */}
                <div className={styles.Rectangle}>
                  <span className={styles.Create}>Payments</span>

                  <div className={styles.Ellipse}>
                    <span
                      style={{
                        color: "#db0406",
                        cursor: "pointer",
                        marginLeft: "24px",
                      }}
                    >
                      <MdCancel />
                    </span>
                  </div>
                </div>
                {/* ============button 4============== */}
                <div className={styles.Rectangle}>
                  <span className={styles.Create}>Pictures</span>

                  <div className={styles.Ellipse}>
                    <span
                      style={{
                        color: "#db0406",
                        cursor: "pointer",
                        marginLeft: "14px",
                      }}
                    >
                      <MdCancel />
                    </span>
                  </div>
                </div>
              </div>

              {/* ================end legal section=========== */}
              {/* ==========Select the services you want to give access=========== */}
              <hr className="line-color" />
              <p className={styles.Bookings}>
                Select the services you want to give access
              </p>
              <div className={styles.texticon}>
                <p className={styles.Access_all_services}>
                  Access all services
                </p>

                <Checkbox
                  {...label}
                  defaultChecked
                  sx={{
                    color: "dc0000", // replace with your desired color value
                    "&.Mui-checked": {
                      color: "#dc0000", // replace with your desired color value when the checkbox is checked
                    },
                  }}
                />
              </div>
              {/* ==========Select the services end========== */}
              <hr className="line-color" />
              <div className={styles.texticon}>
                <p className={styles.Access_all_services}>
                  Dear User if you want to select multiple service so you can
                  click on select service.
                </p>
              </div>

              {/* =============================== */}
              <div className={styles.choose_section}>
                <div className={styles.left_section}>
                  <button className={styles.button_1}>Select Service</button>
                  <div className={styles.numbering_div}>
                    <p className="text-white p-1">0</p>
                  </div>
                </div>
                <div className={styles.right_section}>
                  <button className={styles.button_2}>Confirm Assign</button>
                </div>
              </div>
              {/* ================================== */}
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default RolesAndPermissions;
