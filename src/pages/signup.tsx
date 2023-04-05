import Img from "@/Components/Image/Image";
import PhoneInputField from "@/Components/CountryPhoneInput/CountryPhoneInput";
import { LoginContainer } from "@/styles/Container.styled";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { Flex, Item } from "@/styles/Flex.styled";
import { useRouter } from "next/router";
import * as React from "react";
import styled from "styled-components";
import { Button } from "@/styles/Button.style";
import { CopyRight } from "@/styles/CopyRight.styled";
import { LoadAction } from "@/helper";
import { Message } from "@/styles/message.style";
import Loader from "@/Components/Loaders/Loader";

function SignUp() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = React.useState(0);
  const [error, setError] = React.useState("");
  const [loader, setLoader] = React.useState(false);
  const [authToken, setAuthToken] = React.useState("");
  const [tokenRefresh, setTokebRefresh] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [loadToken, setLoadToken] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setLoadToken(!loadToken);
    }, 20000);
    return () => clearInterval(interval);
  }, [loadToken]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setLoader(true);
    setErrorMessage("");
    try {
      LoadAction(phoneNumber, authToken).then(async (result: any) => {
        setLoader(false);
        setTokebRefresh((r) => !r);
        if (result?.code === 0) {
          router.push({
            pathname: "/mobile-verification",
            query: { ...result?.result },
          });
        } else if (result?.code === 3) {
          router.push({
            pathname: "/login",
            query: { ...result?.result },
          });
        } else if (result?.code === 1) {
          router.push({
            pathname: "/password",
            query: { ...result?.result, mobileNumber: phoneNumber },
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

  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LdbmQMlAAAAAI0uG7ZSF6Uhf8gpPfoG6f9bjpCK">
      <GoogleReCaptcha onVerify={handleToken} refreshReCaptcha={tokenRefresh} />
      <LoginContainer>
        <Flex
          style={{
            backgroundColor: "#fff",
          }}
        >
          <Item width={"35%"}>
            <Img
              inlineCss={{
                height: "84vh",
                width: "100%",
              }}
              src={`/assets/images/LoginBg.png`}
            />
            <Img
              inlineCss={{
                position: "absolute",
                width: "15rem",
                top: "21rem",
                bottom: "0",
              }}
              src={`/assets/images/logoOnbanner.png`}
            />
          </Item>
          <Item width={"65%"}>
            <form onSubmit={handleSubmit}>
              <>
                <h3
                  style={{
                    margin: " 0 0 10.8px",
                    fontFamily: "Poppins",
                    fontSize: "30px",
                    fontWeight: "600",
                    fontStretch: "normal",
                    fontStyle: "normal",
                    lineHeight: "normal",
                    letterSpacing: "normal",
                    textAlign: "center",
                    color: "#22272e",
                  }}
                >
                  Welcome to <span style={{ color: "#dc0000" }}>Expert!</span>
                </h3>
                <p
                  style={{
                    margin: "0.6px 0px 41px 0.9px",
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: "normal",
                    fontStretch: "normal",
                    fontStyle: "normal",
                    lineHeight: "normal",
                    letterSpacing: "normal",
                    textAlign: "center",
                    color: "#757677",
                  }}
                >
                  Please Enter your Mobile Number
                </p>
                <PhoneInputField
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
                <Button type="submit" width="340px">
                  Next
                </Button>
                {loader ? (
                  <Loader status={loader} />
                ) : (
                  <Message> {errorMessage} </Message>
                )}
              </>
            </form>
            <CopyRight>
              Terms & Conditions • Privacy Policy • Copyright • Cookies Policy •
              Help © 2022 Selteq Ltd.
            </CopyRight>
            {/* <InputField /> */}
          </Item>
        </Flex>
      </LoginContainer>
    </GoogleReCaptchaProvider>
  );
}

export default SignUp;
