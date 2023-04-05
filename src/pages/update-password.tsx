import InputField from "@/Components/InputField";
import Dashboard from "@/Components/Layout/Dashboard";
import Loader from "@/Components/Loaders/Loader";
import { PasswordAction } from "@/helper";
import { Message } from "@/styles/message.style";
import style from "../styles/stylescss/update-password.module.css";
// import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useState } from "react";

function Updatepassword() {
  const [errorMessage, setErrorMessage] = React.useState({
    type: false,
    message: "",
  });
  const [loader, setLoader] = React.useState(false);

  const [confirmMessage, setConfirmMessage] = React.useState("");
  const router = useRouter();
  const query = router.query || {};
  const { recreatePassword } = query;
  const [passwordValue, setPassword] = useState("");
  const [confirmPassword, setConfirm] = useState();

  const validatePassword = () => {
    const regex = /^(?=.*\d)(?=.*[!\"£$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    return regex.test(passwordValue);
  };
  const messages = [
    {
      text: "At least one number",
      regex: /^(?=.*\d)/,
    },
    {
      text: "At least eight characters",
      regex: /^.{8,}$/,
    },
    {
      text: 'At least one symbol (!"£$%^&*)',
      regex: /^(?=.*[!\"£$%^&*])/,
    },
  ];
  const invalidMessages = messages.filter(
    ({ regex }) => !regex.test(passwordValue)
  );
  const renderRequirementMessage = () => {
    if (validatePassword()) {
      return (
        <div
          style={{
            fontSize: "14px",
            marginRight: "auto",
            marginLeft: "40px",
            display: "block",
            width: "332px",
            listStyle: "none",
            paddingLeft: "0",
            paddingTop: "6px",
            color: "green",
          }}
        >
          Password meets requirements
        </div>
      );
    }

    return (
      <div style={{ color: "red" }}>
        <ul
          style={{
            fontSize: "14px",
            margin: "auto",
            display: "block",
            width: "90%",
            listStyle: "none",
            paddingLeft: "0",
            paddingTop: "6px",
          }}
        >
          {invalidMessages.map(({ text }) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
      </div>
    );
  };

  const handleClick = (e: any) => {
    e.preventDefault();

    if (confirmPassword !== passwordValue) {
      setConfirmMessage("Please confirm your password");
    } else if (invalidMessages.length !== 0) {
      return;
    } else if (passwordValue == "") {
      setConfirmMessage("Please confirm your password");
    } else {
      setLoader(true);
      PasswordAction(query.id, passwordValue).then((result) => {
        setLoader(false);
        if (result?.code === 0) {
          recreatePassword == "true"
            ? router.push("/login")
            : router.push({
                pathname: "/personal-information",
                query: { ...query },
              });
          // Cookies.set("token", result?.token, { expires: 7 });
        } else {
          setErrorMessage({ type: false, message: result?.message });
        }
      });
    }
  };

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
      <div className={style.updatePassword}>
        <form onSubmit={handleClick}>
          <br />
          <InputField
            width="90%"
            widthInput="100%"
            type="password"
            onChange={(e: any) => setPassword(e.target.value)}
            isPasswordField={true}
            indicateIcon="/assets/icons/lock.svg"
            placeholder="Password"
            passwordLabel=""
          />
          {passwordValue && renderRequirementMessage()}

          <br />
          <InputField
            width="90%"
            widthInput="100%"
            type="password"
            onChange={(e: any) => {
              setConfirm(e.target.value);
              confirmPassword !== passwordValue &&
                setConfirmMessage("Your password is not matching!");
            }}
            isPasswordField={true}
            indicateIcon="/assets/icons/lock.svg"
            message={confirmPassword !== passwordValue ? confirmMessage : ""}
            placeholder="Confirm Password"
            passwordLabel=""
          />
          <button
            style={{
              width: "150px",
              height: "45px",
              borderRadius: "8px",
              boxShadow: "0 0 6px 0 rgba(0;0;0;0.16)",
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: "500",
              border: "none",
              cursor: "pointer",
              transition: "0.4s",
              display: "block",
              marginTop: "30px",
              backgroundColor: "#dc0000",
              color: "#fff",
              marginRight: "40px",
              marginLeft: "auto",
            }}
            type="submit"
            className="Buttonstyle__Button-sc-1kmktzo-0 ehzAcw"
          >
            {" "}
            Save{" "}
          </button>
          {loader ? (
            <Loader status={loader} />
          ) : (
            <Message type={errorMessage.type}> {errorMessage.message} </Message>
          )}
        </form>
      </div>
    </Dashboard>
  );
}

export default Updatepassword;
