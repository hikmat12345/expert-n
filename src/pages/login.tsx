import Img from "@/Components/Image/Image";
import PhoneInputField from "@/Components/CountryPhoneInput/CountryPhoneInput";
import { LoginContainer } from "@/styles/Container.styled";
import { Flex, Item } from "@/styles/Flex.styled";
import InputField from "@/Components/InputField";

import { useRouter } from "next/router";
import * as React from "react";
import { Button } from "@/styles/Button.style";
import { CopyRight } from "@/styles/CopyRight.styled";
import { ForgetPasswordAction, SignInLoading } from "@/helper";
import { Message } from "@/styles/message.style";
import Loader from "@/Components/Loaders/Loader";
import { Checkbox, FormControlLabel } from "@mui/material";
import Link from "next/link";

function Login() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = React.useState(
    `${router.query.priamryMobile}`
  );
  const [password, setPassword] = React.useState("");
  const [loader, setLoader] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [checkValue, setCheckValue] = React.useState(false);

  const forgetPasswordHandler = (event: any) => {
    event.preventDefault();
    setLoader(true);
    setErrorMessage("");

    phoneNumber.length > 8
      ? ForgetPasswordAction(phoneNumber).then(async (result: any) => {
          setLoader(false);
          if (result?.code === 0) {
            router.push({
              pathname: "mobile-verification",
              query: { ...result?.result, recreatePassword: true },
            });
          } else {
            setErrorMessage(result?.message || "Invalid credentials");
          }
        })
      : setErrorMessage("Please Enter atleast your full mobile number.");
    setLoader(false);

    // router.push("/create-forget-password");
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    setLoader(true);
    setErrorMessage("");
    try {
      SignInLoading(phoneNumber, password).then(async (result: any) => {
        setLoader(false);
        if (result?.code === 0) {
          router.push({
            pathname: "/",
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

  return (
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
                value={phoneNumber}
                onChangeInput={setPhoneNumber}
                error={phoneNumber}
              />
              <InputField
                type="password"
                onChange={(e: any) => setPassword(e.target.value)}
                isPasswordField={true}
                indicateIcon="/assets/icons/lock.svg"
                placeholder="Enter Password"
                passwordLabel="Enter Password to Login"
              />

              <Flex
                style={{
                  backgroundColor: "#fff",
                  width: "340px",
                }}
              >
                <Item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkValue}
                        onChange={(e: any) => setCheckValue(e.target.checked)}
                        color="default"
                      />
                    }
                    label={
                      <p
                        style={{
                          textAlign: "left",
                          color: "#6c6c6c",
                        }}
                      >
                        Remember Me
                      </p>
                    }
                  />
                </Item>
                <Item>
                  <p
                    style={{
                      margin: "0px",
                      fontFamily: "Poppins",
                      fontSize: "14px",
                      fontWeight: "normal",
                      fontStretch: "normal",
                      fontStyle: "normal",
                      lineHeight: "normal",
                      letterSpacing: "normal",
                      textAlign: "right",
                      cursor: "pointer",
                      color: "#757677",
                    }}
                    onClick={forgetPasswordHandler}
                  >
                    Forgot Password?
                  </p>
                </Item>
              </Flex>

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
          {/* <Link
            style={{
              margin: "auto",
              display: "block",
              textAlign: "center",
              fontSize: "14px",
              color: "grey",
            }}
            href="/signup"
          >
            Create Account
          </Link> */}
          <CopyRight>
            Terms & Conditions • Privacy Policy • Copyright • Cookies Policy •
            Help © 2022 Selteq Ltd.
          </CopyRight>
          {/* <InputField /> */}
        </Item>
      </Flex>
    </LoginContainer>
  );
}

export default Login;
