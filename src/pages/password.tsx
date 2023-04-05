import Img from "@/Components/Image/Image";
// import { InputField } from '@/Components/Input/Input';
import InputField from "@/Components/InputField";
import Loader from "@/Components/Loaders/Loader";
import { SignIn } from "@/helper";
import { Button } from "@/styles/Button.style";
import { LoginContainer } from "@/styles/Container.styled";
import { Flex, Item } from "@/styles/Flex.styled";
import { Message } from "@/styles/message.style";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useRouter } from "next/router";
import * as React from "react";
import Image from "next/image";

function Password() {
  const [errorMessage, setErrorMessage] = React.useState({
    type: false,
    message: "",
  });
  const [confirmMessage, setConfirmMessage] = React.useState("");
  const router = useRouter();
  const query = router.query || {};
  const [passwordValue, setPassword] = React.useState("");
  const [loader, setLoader] = React.useState(false);
  const [checkValue, setCheckValue] = React.useState(false);

  const handleClick = (e: any) => {
    e.preventDefault();
    setLoader(true);
    SignIn(query?.mobileNumber, passwordValue).then((result) => {
      setLoader(false);
      if (result?.code === 0 && result?.error === false) {
        localStorage.setItem("token", result?.token);
        router.push({ pathname: "/", query: { ...query } });
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
          <Image
            width="100"
            alt=""
            style={{
              height: "84vh",
              width: "100%",
            }}
            src={`/assets/images/LoginBg.png`}
          />
          <Image
            width="100"
            alt=""
            style={{
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
              +44 789 947 3099
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
              Is already registered.
            </p>
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
                    color: "#757677",
                  }}
                >
                  Forgot Password?
                </p>
              </Item>
            </Flex>
            <Button onClick={handleClick} width="340px">
              {" "}
              Login{" "}
            </Button>
            {loader ? (
              <Loader status={loader} />
            ) : (
              <Message type={errorMessage.type}>
                {" "}
                {errorMessage.message}{" "}
              </Message>
            )}
          </div>

          {/* <InputField /> */}
        </Item>
      </Flex>
    </LoginContainer>
  );
}

export default Password;
