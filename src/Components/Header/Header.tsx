import { Logo, StyledHeader } from "@/styles/Header.styled";
import Link from "next/link";
import React from "react";

export default function Header(props: any) {
  return (
    <StyledHeader>
      <Link href="/">
        <Logo src="/assets/images/expert_logo.png" />{" "}
      </Link>
    </StyledHeader>
  );
}
