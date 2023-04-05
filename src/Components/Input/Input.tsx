// components/Layout.js
import { InputTag } from "../../styles//Input.style";
import React, { useState } from "react";
import { InputProps } from "@/@types/Input";
import { Label } from "@/styles/Label.styled";

export const InputField = ({
  label = "",
  primary = false,
  type,
  placeholder = "text",
  value = "",
  getValue = () => {},
  error = () => {},
  errorMessage,
  isRequired = false,
  ...rest
}: InputProps) => {
  const [initialValue, setInitialValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInitialValue(e.target.value);
    getValue(e.target.value);
  };

  return (
    <>
      {primary ? (
        <div style={{ display: "block", margin: "auto", width: "37%" }}>
          <Label>{label}</Label>
          <InputTag
            //   error={error(initialValue)}
            //   helperText={error(initialValue) && errorMessage}
            value={initialValue}
            onChange={handleChange}
            placeholder={placeholder}
            type={type}
            {...rest}
          />
        </div>
      ) : (
        <div style={{ display: "block", margin: "auto", width: "37%" }}>
          <Label>{label}</Label>
          <InputTag
            // error={error(initialValue)}
            // helperText={error(initialValue) && errorMessage}
            value={initialValue}
            onChange={handleChange}
            placeholder={placeholder}
            type={type}
            {...rest}
          />
        </div>
      )}
    </>
  );
};
