import styled from "styled-components";

export const InputTag = styled.input<{
  placeholder: string;
  padding?: string;
  width?: string;
  backgroundColor?: string;
}>`
  placeholder: ${({ placeholder }: { placeholder: string }) =>
    placeholder || "Please insert"};
  padding: ${({ padding }) => padding || "6.9px 10px 6px 54.5px;"};
  border-radius: 8px;
  background-color: #f1f6fa;
  borderradius: 8px;
  backgroundcolor: ${({ backgroundColor }) => backgroundColor || "#f1f6fa"};
  outline: none;
  border: initial;
  width: ${({ width }) => width || "340px"};
  height: 50px;
  border: none;
  position: relative;
  @media screen and (max-width: 600px) {
    font-size: 14px;

    ::after {
      --size: 6rem;
    }
  }
`;
