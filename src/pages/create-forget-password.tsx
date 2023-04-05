import Img from "@/Components/Image/Image";
import InputField from "@/Components/InputField";
import Loader from "@/Components/Loaders/Loader";
import { PasswordAction } from "@/helper";
import { Button } from "@/styles/Button.style";
import { LoginContainer } from "@/styles/Container.styled";
import { CopyRight } from "@/styles/CopyRight.styled";
import { Flex, Item } from "@/styles/Flex.styled";
import { Message } from "@/styles/message.style";

import { useRouter } from "next/router";
import React, { useState } from "react";

function CreateForgetPassword() {
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
            margin: "auto",
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
            width: "332px",
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
      PasswordAction(query.id, passwordValue, true).then((result) => {
        setLoader(false);
        if (result?.code === 0) {
          setErrorMessage({ type: false, message: result?.message });
          setTimeout(() => {
            router.push({
              pathname: "/login",
            });
          }, 2000);
        } else {
          setErrorMessage({ type: false, message: result?.message });
        }
      });
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
          <div style={{}}>
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
              Create <span style={{ color: "#dc0000" }}>Password</span>
            </h3>
            <form onSubmit={handleClick}>
              <br />
              <InputField
                type="password"
                onChange={(e: any) => setPassword(e.target.value)}
                isPasswordField={true}
                indicateIcon="/assets/icons/lock.svg"
                placeholder="Password"
                passwordLabel="Enter Password"
              />
              {passwordValue && renderRequirementMessage()}

              <br />
              <InputField
                type="password"
                onChange={(e: any) => {
                  setConfirm(e.target.value);
                  confirmPassword !== passwordValue &&
                    setConfirmMessage("Your password is not matching!");
                }}
                isPasswordField={true}
                indicateIcon="/assets/icons/lock.svg"
                message={
                  confirmPassword !== passwordValue ? confirmMessage : ""
                }
                placeholder="Confirm Password"
                passwordLabel="Repeat Password"
              />
              <Button type="submit" width="340px">
                {" "}
                Save & Continue{" "}
              </Button>
              {loader ? (
                <Loader status={loader} />
              ) : (
                <Message type={errorMessage.type}>
                  {" "}
                  {errorMessage.message}{" "}
                </Message>
              )}
            </form>
          </div>

          {/* <InputField /> */}
          <CopyRight>
            Terms & Conditions • Privacy Policy • Copyright • Cookies Policy •
            Help © 2022 Selteq Ltd.
          </CopyRight>
        </Item>
      </Flex>
    </LoginContainer>
  );
}

export default CreateForgetPassword;
