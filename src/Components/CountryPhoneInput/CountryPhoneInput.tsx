import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styled from "styled-components";

const Input = (
  props: any,
  { onChangeInput = () => {} }: { onChangeInput: any }
) => {
  const [phone, setPhone] = useState("32");
  const PhoneBox = styled.div``;
  return (
    <div style={{ margin: "auto" }}>
      <PhoneInput
        style={{
          width: props.width ? props.width : "340px",
          position: "relative",
          fontSize: "14px",
          fontFamily: "Poppine",
          letterSpacing: ".01rem",
          marginTop: "0 !important",
          marginBottom: "0 !important",
          border: "initial",
          paddingLeft: "48px",
          marginRight: "auto",
          marginLeft: "auto",
          lineHeight: "25px",
          height: "54px",
          padding: "10.9px 123px 13px 15px",
          borderRadius: "8px",
          backgroundColor: "#f1f6fa",
          outline: "none",
          textAlign: "center",
        }}
        country={"gb"}
        value={props.value}
        defaultCountry={"gb"}
        onChange={onChangeInput}
        inputStyle={{
          borderColor: props.touched && props.error && "red",
        }}
        {...props}
      />
      {props.touched && props.error && (
        <p
          style={{ color: "red" }}
          className="MuiFormHelperText-root MuiFormHelperText-contained Mui-error MuiFormHelperText-filled MuiFormHelperText-marginDense"
        >
          {props.error}
        </p>
      )}
    </div>
  );
};

const PhoneInputField = (props: any) => {
  return (
    <Input
      label={"Mobile Phone"}
      req={true}
      value={props.value}
      helperText={""}
      error={props.error}
      onChange={props.onChangeInput}
      isSelect={false}
      {...props.input}
      {...props.meta}
      {...props.custom}
    />
  );
};

export default PhoneInputField;
