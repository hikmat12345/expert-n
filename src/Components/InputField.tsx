import { InputTag } from "@/styles/Input.style";
import { Label } from "@/styles/Label.styled";
import { useRef, useState } from "react";
import styled from "styled-components";

export default function InputField({
  onChange = () => {},
  passwordLabel = "Please enter your password",
  placeholder = "Please enter",
  indicateIcon = "",
  required = false,
  isPasswordField = false,
  type = "text",
  message = "",
  width,
  widthInput,
  backgroundColor,
}: {
  onChange?: any;
  passwordLabel?: string;
  placeholder: string;
  indicateIcon: string;
  required?: boolean;
  width?: string;
  isPasswordField?: boolean;
  type?: string;
  message?: string;
  widthInput?: string;
  backgroundColor?: string;
}) {
  const [passwordIcon, setPasswordIcon] = useState(false);
  const ref: any = useRef();
  const passwordViewHandle = () => {
    setPasswordIcon(!passwordIcon);
    !passwordIcon
      ? (ref.current.type = "text")
      : (ref.current.type = "password");
  };
  const InputBox = styled.div`
    margin: auto;
    display: block;
    width: 340px;
    position: relative;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  `;
  return (
    <>
      <div
        style={{
          margin: "auto",
          display: "block",
          width: width ? width : "340px",
          position: "relative",
        }}
      >
        <Label style={{ margin: 0 }}>{passwordLabel} </Label>
        {indicateIcon && (
          <img
            src={indicateIcon}
            style={{
              position: "absolute",
              left: "2px",
              bottom: "1px",
              zIndex: "999",
              backgroundColor: backgroundColor ? backgroundColor : "#f1f6fa",
              height: "46px",
              borderRadius: "12px 0px 0px 6px",
              width: "46px",
              padding: "11px",
            }}
          />
        )}
        <InputTag
          width={widthInput}
          padding="6.9px 40px 6px 54.5px"
          ref={ref}
          backgroundColor={backgroundColor}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          required={required}
          name="login-password"
          className="login-password"
          id="login-password"
        />
        {message && (
          <div
            style={{
              position: "absolute",
              width: "100%",
              color: "red",
              fontSize: "12px",
              paddingTop: "4px",
            }}
          >
            {message}
          </div>
        )}
        {isPasswordField && (
          <>
            {passwordIcon && (
              <img
                src="/assets/icons/password-show.svg"
                onClick={passwordViewHandle}
                style={{
                  position: "absolute",
                  right: "15px",
                  bottom: "17px",
                  cursor: "pointer",
                }}
              />
            )}
            {!passwordIcon && (
              <img
                src="/assets/icons/password-hide.svg"
                onClick={passwordViewHandle}
                style={{
                  position: "absolute",
                  right: "15px",
                  bottom: "17px",
                  cursor: "pointer",
                }}
              />
            )}
          </>
        )}
      </div>
    </>
  );
}

// import { InputTag } from "@/styles/Input.style";
// import { Label } from "@/styles/Label.styled";
// import { useRef, useState } from "react";
// import styled from "styled-components";

// export default function InputField({
//   onChange = () => {},
//   passwordLabel = "Please enter your password",
//   placeholder = "Please enter",
//   indicateIcon = "",
//   required = false,
//   isPasswordField = false,
//   type = "text",
//   message = "",

// }: {
//   onChange?: any;
//   required?: boolean;
//   passwordLabel?: string;
//   placeholder: string;
//   indicateIcon: string;
//   isPasswordField?: boolean;
//   type?: string;
//   message?: string;
// }) {
//   const [passwordIcon, setPasswordIcon] = useState(false);
//   const ref: any = useRef();
//   const passwordViewHandle = () => {
//     setPasswordIcon(!passwordIcon);
//     !passwordIcon
//       ? (ref.current.type = "text")
//       : (ref.current.type = "password");
//   };
//   const InputBox = styled.div`
//     margin: auto;
//     display: block;
//     width: 340px;
//     position: relative;
//     @media screen and (max-width: 768px) {
//       width: 100%;
//     }
//   `;
//   return (
//     <>
//       <InputBox>
//         <Label style={{ margin: 0 }}>{passwordLabel} </Label>
//         {indicateIcon && (
//           <img
//             src={indicateIcon}
//             style={{
//               position: "absolute",
//               left: "2px",
//               bottom: "1px",
//               zIndex: "999",
//               backgroundColor: "#f1f6fa",
//               height: "46px",
//               borderRadius: "12px 0px 0px 6px",
//               width: "46px",
//               padding: "11px",
//             }}
//           />
//         )}
//         <InputTag
//           padding="6.9px 40px 6px 54.5px"
//           ref={ref}
//           placeholder={placeholder}
//           type={type}
//           onChange={onChange}
//           name="login-password"
//           className="login-password"
//           id="login-password"
//         />
//         {message && (
//           <div
//             style={{
//               position: "absolute",
//               width: "100%",
//               color: "red",
//               fontSize: "12px",
//               paddingTop: "4px",
//             }}
//           >
//             {message}
//           </div>
//         )}
//         {isPasswordField && (
//           <>
//             {passwordIcon && (
//               <img
//                 src="/assets/icons/password-show.svg"
//                 onClick={passwordViewHandle}
//                 style={{
//                   position: "absolute",
//                   right: "15px",
//                   bottom: "17px",
//                   cursor: "pointer",
//                 }}
//               />
//             )}
//             {!passwordIcon && (
//               <img
//                 src="/assets/icons/password-hide.svg"
//                 onClick={passwordViewHandle}
//                 style={{
//                   position: "absolute",
//                   right: "15px",
//                   bottom: "17px",
//                   cursor: "pointer",
//                 }}
//               />
//             )}
//           </>
//         )}
//       </InputBox>
//     </>
//   );
// }
