import styled from "styled-components";

export const Button = styled.button<{
  width?: string;
  height?: string;
  bg?: string;
  mt?: string;
}>`
  width: ${(props) => props.width || "35px"};
  height: ${(props) => props.height || "50px"};
  margin: auto;
  border-radius: 8px;
  box-shadow: 0 0 6px 0 rgba(0; 0; 0; 0.16);
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  border: none;
  margin: auto;
  cursor: pointer;
  transition: 0.4s;
  display: block;
  margin-top: ${(props) => props.mt || "30px"};
  background-color: ${({ bg }: { bg?: string }) => bg || "#dc0000"};
  color: ${({ color }) => color || "#fff"};
  @media screen and (max-width: 378px) {
    width: 276px;
  }
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
