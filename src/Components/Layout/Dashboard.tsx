import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
const SideBarWrapper = styled.div`
  width: 280px;
`;
const MainBody = styled.div`
  width: 790px;
`;
const ProfileContainer = styled.div`
  width: 100%;
  margin: auto;
  padding-top: 30px;
  gap: 45px;
  display: flex;
`;
const LinkText = styled.li`
  padding: 9px 73px 9px 10px;
  border-radius: 8px;
  list-style: none;
  color: ${({ active }: { active?: boolean }) => (active ? "#fff" : "#4a4a4a")};
  background-color: ${({ active }: { active?: boolean }) =>
    active ? "#db0406" : "#fff"};
`;
export default function Dashboard({
  sidebar,
  children,
}: {
  sidebar: any;
  children: any;
}) {
  console.log(sidebar, "sidebar");
  return (
    <div style={{ display: "block", margin: "auto", width: "73%" }}>
      <ProfileContainer>
        <SideBarWrapper>
          {sidebar?.map(
            ({
              link,
              text,
              icon,
              active,
            }: {
              link: string;
              text: string;
              icon: string;
              active?: boolean;
            }) => {
              return (
                <Link href={link} style={{ textDecoration: "none" }}>
                  <LinkText active={active}>
                    <Image
                      alt="Picture of the icon"
                      src={icon}
                      width={20}
                      height={20}
                    />
                    <span
                      style={{ position: "relative", top: "-2px", left: "4px" }}
                    >
                      {text}
                    </span>
                  </LinkText>
                </Link>
              );
            }
          )}
        </SideBarWrapper>
        <MainBody>{children}</MainBody>
      </ProfileContainer>
    </div>
  );
}
