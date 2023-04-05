import React, { useEffect, useState } from "react";
import style from "../styles/stylescss/Profile.module.css";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { HiBadgeCheck } from "react-icons/hi";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import Dashboard from "@/Components/Layout/Dashboard";
import { GoPrimitiveDot } from "react-icons/go";
import { useRouter } from "next/router";
import { getUserDetail, UploadUserImage } from "@/helper";
import ImageUploadCard from "@/Components/UploadAvatar/UploadAvatar";

const Profile_page = () => {
  const router = useRouter();
  const [profileData, setProfileData] = useState<any>([]);
  const [loader, setLoader] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState({
    type: false,
    message: "",
  });
  function BasicInfo() {
    router.push("/edit-personal-information");
    // window.open('/', '_blank');
  }
  // function ContactInfo() {
  //   router.push('/');
  // }
  function Phone() {
    router.push("/phone-number-update");
    // window.open('/', '_blank');
  }
  function Password() {
    router.push("/update-password");
    // window.open('/', '_blank');
  }
  function PersonalDocuments() {
    router.push("/personal-docs");
    // window.open('/', '_blank');
  }
  function editEmail(email: any) {
    router.push({
      pathname: "/edit-email",
      query: { email: email, userId: 8 },
      // window.open('/', '_blank');
    });
  }

  useEffect(() => {
    getUserDetail(8).then((res) => {
      setProfileData(res?.result);
    });
  }, []);

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

  const onChangeFile = (e: any) => {
    e.preventDefault();
    UploadUserImage(8, e.target.files[0]).then((result: any) => {
      setLoader(false);
      if (result?.code === 0) {
        setImageUrl(result?.result?.imageURL);
      } else {
        setErrorMessage({ type: false, message: result?.message });
      }
    });
  };
  return (
    <Dashboard sidebar={sideMenu}>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-md-12">
            {/* ===========card 1=========== */}
            <div className="card p-4">
              <div className={style.section_content}>
                <div>
                  <ImageUploadCard
                    type="button"
                    changeFile={onChangeFile}
                    imgLink={imageUrl}
                  />
                </div>
                <div>
                  <h3 className={style.heading}>
                    Hi, {profileData?.firstName}
                  </h3>
                  <p className={style.details}>Personal Account</p>
                  <Link href="" className={style.redtext}>
                    Switch Account
                  </Link>
                </div>
              </div>
            </div>
            {/* ===========card 2=========== */}
            <div
              className="card p-4 mt-3"
              onClick={BasicInfo}
              style={{
                marginTop: "20px",
                border: "1px solid #ede6e6c7",
                padding: "10px 10px 10px 10px",
                borderRadius: "9px",
              }}
            >
              <h3 className={style.basic_info}>Basic Info</h3>
              <div className={style.wrapper_Text}>
                <div>
                  <p className={style.left_text}>First Name</p>
                </div>
                <div className={style.style_left_text}>
                  <p className={style.right_text}>{profileData?.firstName}</p>
                  <span style={{ marginBottom: "-2px", color: "#ccd2d8" }}>
                    <IoIosArrowForward />
                  </span>
                </div>
              </div>
              <hr
                style={{ margin: "0px", border: "0.6px solid #f1f1f1" }}
                className="line-color"
              />
              <div className={style.wrapper_Text}>
                <div>
                  <p className={style.left_text}>Last Name</p>
                </div>
                <div className={style.style_left_text}>
                  <p className={style.right_text}>{profileData?.lastName}</p>
                  <span style={{ marginBottom: "-2px", color: "#ccd2d8" }}>
                    <IoIosArrowForward />
                  </span>
                </div>
              </div>
              <hr
                style={{ margin: "0px", border: "0.6px solid #f1f1f1" }}
                className="line-color"
              />
              <div className={style.wrapper_Text}>
                <div>
                  <p className={style.left_text}>Gender</p>
                </div>
                <div className={style.style_left_text}>
                  <p className={style.right_text}>
                    {profileData?.genderId == 0 ? "Male" : "Female"}
                  </p>
                  <span style={{ marginBottom: "-2px", color: "#ccd2d8" }}>
                    <IoIosArrowForward />
                  </span>
                </div>
              </div>
              <hr
                style={{ margin: "0px", border: "0.6px solid #f1f1f1" }}
                className="line-color"
              />
              <div className={style.wrapper_Text}>
                <div>
                  <p className={style.left_text}>Date of Birth</p>
                </div>
                <div className={style.style_left_text}>
                  <p className={style.right_text}>
                    {profileData?.dob?.split("T")[0]}
                  </p>
                  <span style={{ marginBottom: "-2px", color: "#ccd2d8" }}>
                    <IoIosArrowForward />
                  </span>
                </div>
              </div>
              <hr
                style={{ margin: "0px", border: "0.6px solid #f1f1f1" }}
                className="line-color"
              />
            </div>
            {/* ===========card 3=========== */}
            {/* <div className="card p-4 mt-3" onClick={ContactInfo} style={{ cursor: 'pointer' }}> */}

            <div
              className="card p-4 mt-3"
              style={{
                cursor: "pointer",
                marginTop: "20px",
                border: "1px solid #ede6e6c7",
                padding: "10px 10px 10px 10px",
                borderRadius: "9px",
              }}
            >
              <h3 className={style.basic_info}>Contact Info</h3>

              {/* <p className={style.right_email}>junaidahmed999@gmail.com</p> */}
              {/* ======row 1========= */}
              <div className={style.row_two}>
                <div className={style.emails}>.</div>
                <div className={style.right_section}>
                  <div className={style.right_elements}>
                    <p className={style.right_email11}>.</p>

                    <span style={{ marginBottom: "-2px", color: "#ccd2d8" }}>
                      .
                    </span>
                  </div>
                </div>
              </div>
              {/* ========row 2========== */}

              <div className={style.row_two}>
                <div className={style.emails}>
                  <p>Emails</p>
                </div>
                <div className={style.right_section}>
                  <div className={style.right_elements} onClick={editEmail}>
                    <p className={style.right_email13}>
                      malik.zeeshan7458@gmail.com
                    </p>
                    <span style={{ marginBottom: "-2px", color: "#ccd2d8" }}>
                      <IoIosArrowForward />
                    </span>
                  </div>
                </div>
              </div>
              {/* =========row 3========== */}
              <div className={style.row_two}>
                <div className={style.emails}></div>
                <div className={style.right_section}>
                  {profileData?.primaryEmail && (
                    <>
                      <div className={style.right_elements}>
                        <div className={style.badge}>
                          {profileData?.primaryEmailVerify == true && (
                            <span
                              style={{
                                fontSize: "16px",
                                color: "#5fdf5a",
                                marginRight: "3px",
                                paddingBottom: "15px",
                              }}
                            >
                              <HiBadgeCheck />
                              verified
                            </span>
                          )}
                        </div>
                        <p className={style.right_email12}>
                          {profileData?.primaryEmail}
                        </p>

                        <span
                          style={{ marginBottom: "-2px", color: "#ccd2d8" }}
                        ></span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <hr
                style={{ margin: "0px", border: "0.6px solid #f1f1f1" }}
                className="line-color"
              />
              <div className={style.wrapper_Text}>
                <div>
                  <p className={style.left_text}>Phone</p>
                </div>
                <div
                  className={style.style_left_text}
                  onClick={Phone}
                  style={{ cursor: "pointer" }}
                >
                  <p className={style.right_text}>
                    {profileData?.primaryMobile}
                  </p>
                  <span style={{ marginBottom: "-2px", color: "#ccd2d8" }}>
                    <IoIosArrowForward />
                  </span>
                </div>
              </div>
            </div>
            {/* ===========card 4=========== */}
            <div
              className="card p-4 mt-3"
              onClick={Password}
              style={{
                marginTop: "20px",
                border: "1px solid #ede6e6c7",
                padding: "10px 10px 10px 10px",
                borderRadius: "9px",
              }}
            >
              <h3 className={style.basic_info}>Password</h3>

              <div className={style.wrapper_Text}>
                <div>
                  <p className={style.left_text}>Password</p>
                </div>
                <div className={style.style_left_text}>
                  <p className={style.right_text}>
                    <span style={{ marginRight: "-3px" }}>
                      <GoPrimitiveDot />
                    </span>
                    <span style={{ marginRight: "-3px" }}>
                      <GoPrimitiveDot />
                    </span>
                    <span style={{ marginRight: "-3px" }}>
                      <GoPrimitiveDot />
                    </span>
                    <span style={{ marginRight: "-3px" }}>
                      <GoPrimitiveDot />
                    </span>
                    <span style={{ marginRight: "-3px" }}>
                      <GoPrimitiveDot />
                    </span>
                    <span style={{ marginRight: "-3px" }}>
                      <GoPrimitiveDot />
                    </span>
                    <span style={{ marginRight: "-3px" }}>
                      <GoPrimitiveDot />
                    </span>
                    <span style={{ marginRight: "-3px" }}>
                      <GoPrimitiveDot />
                    </span>
                  </p>
                  <span style={{ marginBottom: "-2px", color: "#ccd2d8" }}>
                    <IoIosArrowForward />
                  </span>
                </div>
              </div>
            </div>
            {/* ===========card 5=========== */}
            <div
              className="card p-4 mt-3"
              onClick={PersonalDocuments}
              style={{
                marginTop: "20px",
                border: "1px solid #ede6e6c7",
                padding: "10px 10px 10px 10px",
                borderRadius: "9px",
                marginBottom: "25px",
              }}
            >
              <h3 className={style.basic_info}>Personal Documents</h3>
              <div className={style.wrapper_Text}>
                <div>
                  <p className={style.left_text}>National Identity Card</p>
                </div>
                <div className={style.style_left_text}>
                  <p className={style.right_text}>{profileData?.firstName}</p>
                  <span style={{ marginBottom: "-2px", color: "#ccd2d8" }}>
                    <IoIosArrowForward />
                  </span>
                </div>
              </div>
              <hr
                style={{ margin: "0px", border: "0.6px solid #f1f1f1" }}
                className="line-color"
              />
              <div className={style.wrapper_Text}>
                <div>
                  <p className={style.left_text}>Educational documents</p>
                </div>
                <div className={style.style_left_text}>
                  <p className={style.right_text}>{profileData?.lastName}</p>
                  <span style={{ marginBottom: "-2px", color: "#ccd2d8" }}>
                    <IoIosArrowForward />
                  </span>
                </div>
              </div>
              <hr
                style={{ margin: "0px", border: "0.6px solid #f1f1f1" }}
                className="line-color"
              />
              <div className={`${style.wrapper_Text}`}>
                <div>
                  <p className={style.left_text}>Medical documents</p>
                </div>
                <div className={style.style_left_text}>
                  <p className={style.right_text}>Male</p>
                  <span style={{ marginBottom: "-2px", color: "#ccd2d8" }}>
                    <IoIosArrowForward />
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

export default Profile_page;
