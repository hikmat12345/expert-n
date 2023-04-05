//libs
import { VerificationInput } from "@/@types/Input";
import dynamic from "next/dynamic";
import ReactCodeInput, { ReactCodeInputProps } from "react-code-input";
import React from "react";
//scss
interface PinCodeProps extends Omit<ReactCodeInputProps, "value"> {
  value?: string;
  id?: any;
}

export const FAECodeInput = ({
  // justify,
  // align,
  // className = "",
  // type = "numeric",
  // fields = 6,
  // inputStyle,
  // getValue = () => {},
  id = "kkk",
  type,
  isValid,
  fields,
  onChange,
  name,
  inputMode,
  value,
}: PinCodeProps) => {
  return (
    <div style={{ textAlign: "center" }}>
      {/* <ReactCodeInput
        className="fae--code-input"
        inputStyle={{
          ...inputStyle,
          border: "none",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
          backgroud: "white",
          margin: "4px",
          outline: "none",
          textAlign: "center",
          height: "60px",
          paddingLeft: "7px",
          width: "60px",
          borderRadius: "5px",
        }}
        type={"number"}
        fields={fields}
        onChange={getValue}
      /> */}
      <ReactCodeInput
        type={type}
        isValid={isValid}
        fields={fields}
        onChange={onChange}
        name={name}
        inputMode={inputMode}
        value={value}
      />
    </div>
  );
};
