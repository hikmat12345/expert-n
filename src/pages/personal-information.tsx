import Img from "@/Components/Image/Image";
import { LoginContainer } from "@/styles/Container.styled";
import { Flex, Item } from "@/styles/Flex.styled";
import * as React from "react";
import styled from "styled-components";
import { Button } from "@/styles/Button.style";
import InputField from "@/Components/InputField";
import { useRouter } from "next/router";
import ImageUploadCard from "@/Components/UploadAvatar/UploadAvatar";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Checkbox,
} from "@mui/material";
import Link from "next/link";
import { PersonalVerifcationAction, UploadImage } from "@/helper";
import { Message } from "@/styles/message.style";
import Loader from "@/Components/Loaders/Loader";

function PersonalInformation() {
  const [errorMessage, setErrorMessage] = React.useState({
    type: false,
    message: "",
  });
  const [loader, setLoader] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [checkValue, setCheckValue] = React.useState(false);
  const [value, setValue] = React.useState("female");

  const radioBoxHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  const router = useRouter();
  const { userId } = router.query || {};

  const genderId = 1;
  const imagePath = "";
  const modifiedBy = 0;
  const handleClick = (e: any) => {
    e.preventDefault();
    if (checkValue == false) {
      setErrorMessage({
        type: false,
        message: "Please select the agreement of expert.",
      });
      return;
    }
    setLoader(true);
    PersonalVerifcationAction({
      userId: Number(userId),
      firstName,
      lastName,
      genderId,
      imagePath,
      modifiedBy,
    }).then((result) => {
      setLoader(false);
      if (result?.code === 0) {
        router.push({ pathname: "/add-email", query: { userId } });
      } else {
        setErrorMessage({ type: false, message: result?.message });
      }
    });
  };
  const onChangeFile = (e: any) => {
    e.preventDefault();
    UploadImage(userId, e.target.files[0], "preprod").then((result: any) => {
      setLoader(false);
      if (result?.code === 0) {
        setImageUrl(
          "https://1864597015.rsc.cdn77.org/consentformattachments/images/staging/" +
            result?.result?.imageURL
        );
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
          <form onSubmit={handleClick}>
            <div>
              <ImageUploadCard
                type="button"
                changeFile={onChangeFile}
                imgLink={imageUrl}
              />
              <br />
              <InputField
                indicateIcon="/assets/icons/person.svg"
                placeholder="Enter first name"
                passwordLabel="First Name"
                type="text"
                required={true}
                onChange={(e: any) => setFirstName(e.target.value)}
              />
              <br />
              <InputField
                indicateIcon="/assets/icons/person.svg"
                placeholder="Enter last name"
                passwordLabel="Last Name"
                type="text"
                required={true}
                onChange={(e: any) => setLastName(e.target.value)}
              />

              <FormControl
                style={{
                  width: "340px",
                  margin: "auto",
                  display: "block",
                  paddingTop: "10px",
                }}
              >
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={value}
                  onChange={radioBoxHandler}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
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
                        I agree to the Expert{" "}
                        <Link
                          href="/term-and-condition"
                          style={{
                            fontWeight: "bold",
                            color: "#6c6c6c",
                            textDecoration: "none",
                          }}
                        >
                          Terms of Services
                        </Link>{" "}
                        and{" "}
                        <Link
                          style={{
                            fontWeight: "bold",
                            color: "#6c6c6c",
                            textDecoration: "none",
                          }}
                          href="/term-and-condition"
                        >
                          Privacy Policy
                        </Link>
                      </p>
                    }
                  />
                </Item>
              </Flex>
              <Button type="submit" width="340px">
                {" "}
                Confirm{" "}
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
          </form>
          {/* <InputField /> */}
        </Item>
      </Flex>
    </LoginContainer>
  );
}

export default PersonalInformation;
