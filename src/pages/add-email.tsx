import Img from "@/Components/Image/Image";
import { LoginContainer } from "@/styles/Container.styled";
import { Flex, Item } from "@/styles/Flex.styled";
import * as React from "react";
import styled from "styled-components";
import { CopyRight } from "@/styles/CopyRight.styled";
import { useRouter } from "next/router";
import { Button } from "@/styles/Button.style";
import InputField from "@/Components/InputField";
import { AddUserEmailAction } from "@/helper";
import { Message } from "@/styles/message.style";
import Loader from "@/Components/Loaders/Loader";

function AddEmail() {
  const [errorMessage, setErrorMessage] = React.useState({
    type: false,
    message: "",
  });
  const [loader, setLoader] = React.useState(false);

  const router = useRouter();
  const query = router.query;
  const [email, setEmail] = React.useState("");
  const handleClick = (e: any) => {
    setLoader(true);
    e.preventDefault();
    AddUserEmailAction({
      userId: Number(query?.userId),
      text: email,
      modifiedBy: 0,
    }).then((result) => {
      setLoader(false);
      if (result?.code === 0) {
        router.push({
          pathname: "/email-verification-code",
          query: { ...query, email: email },
        });
      } else {
        setErrorMessage({ type: false, message: result?.message });
      }
    });
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
                margin: " 0 0 5.8px",
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
              Email <span style={{ color: "#dc0000" }}>Verification</span>
            </h3>
            <p
              style={{
                margin: "0.6px 33px 40px 0.9px",
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
              Please enter your Email Address
            </p>
            <form onSubmit={handleClick}>
              <InputField
                type="email"
                onChange={(e: any) => setEmail(e.target.value)}
                indicateIcon="/assets/icons/mail-icon.svg"
                placeholder="Enter email Address"
                passwordLabel=""
              />
              <Button width="340px">Next</Button>
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

export default AddEmail;
