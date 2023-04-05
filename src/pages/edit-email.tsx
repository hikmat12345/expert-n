import Dashboard from "@/Components/Layout/Dashboard";
import { updateEmails } from "@/helper";
import { Button } from "@/styles/Button.style";
import { useRouter } from "next/router";
import React from "react";

function EditEmail() {
  const [loader, setLoader] = React.useState(false);
  const sideMenu: any = [
    {
      link: "/profile",
      text: "proifle",
      icon: "/assets/icons/user-white.svg",
      active: true,
    },
    {
      link: "/",
      text: "Addresses",
      icon: "/assets/icons/location-black.svg",
      active: false,
    },
    {
      link: "/",
      text: "Order",
      icon: "/assets/icons/down-black.svg",
      active: false,
    },
    {
      link: "/",
      text: "Setting",
      icon: "/assets/icons/go-black.svg",
      active: false,
    },
    {
      link: "/",
      text: "Logout",
      icon: "/assets/icons/down-black.svg",
      active: false,
    },
  ];
  const router = useRouter();
  const [email, setemail] = React.useState("");

  const updateEmailHandler = (e: any) => {
    e.preventDefault();
    updateEmails(8, email, 1, "ModifiedBy").then((result) => {
      setLoader(false);
      if (result?.code === 0) {
        router.push({
          pathname: "/personal-information",
        });
        // Cookies.set("token", result?.token, { expires: 7 });
      } else {
      }
    });
  };
  return (
    <Dashboard sidebar={sideMenu}>
      <form onSubmit={updateEmailHandler}>
        <input
          style={{
            height: "50px",
            margin: "20px 0",
            padding: "7px 19px 7px 20px",
            borderRadius: "8px",
            border: "solid 1px grey",
            backgroundColor: "white",
            width: "100%",
            color: "black",
          }}
          value={email}
          onChange={(e: any) => setemail(e.target.value)}
          placeholder="Enter Email"
        />

        <button
          style={{
            width: "200px",
            height: "50px",
            borderRadius: "8px",
            boxShadow: "0 0 6px 0 rgba(0;0;0;0.16)",
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: "500",
            border: "none",
            cursor: "pointer",
            transition: "0.4s",
            display: "block",
            marginTop: "1px",
            backgroundColor: "#dc0000",
            color: "#fff",
            marginLeft: "auto",
          }}
          type="submit"
          className="Buttonstyle__Button-sc-1kmktzo-0 ehzAcw"
        >
          {" "}
          Save{" "}
        </button>
      </form>
    </Dashboard>
  );
}

export default EditEmail;
