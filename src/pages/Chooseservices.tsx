import React from "react";

// import img1 from "../public/assets/images/img7.png";
import { AiOutlineRight } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
// import styles from "../../styles/stylescss/Choose-services.module.css";
const Chooseservices = () => {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-md-3">
            <div className="card card-border">side bar</div>
          </div>
          <div className="col-md-9">
            {/* ===========create addres ssection============= */}
            <div className="card p-3">
              <div className="row d-flex justify-content-between">
                <div className="col-md-9">
                  <h4 className="create-address">Manage Users</h4>
                  <p className="address-detail">
                    Don't worry, your information is private and we will not
                    share this info with anyone outside Expert!
                  </p>
                  <a href="" className="Learn-more">
                    Add New User
                    <AiOutlineRight />
                  </a>
                </div>
                <div className="col-md-3">
                  {/* <Image
                    src={img1}
                    height={100}
                    width={200}
                    alt="create account"
                    className="rounded-circle mx-auto d-block "
                  /> */}
                </div>
              </div>
            </div>

            {/* =========choose services section end============= */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Chooseservices;
