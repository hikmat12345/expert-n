import PhoneInputField from "@/Components/CountryPhoneInput/CountryPhoneInput";
import { useRouter } from "next/router";
import * as React from "react";
import { Button } from "@/styles/Button.style";
import { LoadAction, updateMobile } from "@/helper";
import { Message } from "@/styles/message.style";
import Loader from "@/Components/Loaders/Loader";
import Dashboard from "@/Components/Layout/Dashboard";
import style from "../styles/stylescss/update-password.module.css";

function PhoneNumberUpdate() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [error, setError] = React.useState("");
  const [loader, setLoader] = React.useState(false);
  const [authToken, setAuthToken] = React.useState("");
  const [tokenRefresh, setTokebRefresh] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [loadToken, setLoadToken] = React.useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setLoader(true);
    setErrorMessage("");
    try {
      updateMobile(8, phoneNumber).then(async (result: any) => {
        setLoader(false);
        if (result?.code === 0) {
          router.push({
            pathname: "/profile",
            query: { ...result?.result },
          });
        } else {
          setErrorMessage(result?.message || "Invalid credentials");
        }
      });
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred");
    }
  };

  // /////////////////////////  functions
  const handleToken = React.useCallback(
    (token: any) => {
      setAuthToken(token);
    },
    [loadToken]
  );
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
      <form className={style.updatePhone} onSubmit={handleSubmit}>
        <>
          <PhoneInputField
            width="100%"
            style={{
              margin: "auto",
              width: "100%",
              fontFamily: "Poppins",
              fontSize: "30px",
              fontWeight: "600",
              fontStretch: "normal",
              fontStyle: "normal",
              textAlign: "center",
              color: "#22272e",
            }}
            onChangeInput={setPhoneNumber}
            error={phoneNumber}
          />
          <button
            style={{
              width: "120px",
              height: "40px",
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
              margin: "auto",
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
            <Message> {errorMessage} </Message>
          )}
        </>
      </form>
    </Dashboard>
  );
}

export default PhoneNumberUpdate;
