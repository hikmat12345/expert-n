import styled from "styled-components";

export const Flex = styled.div<{ width?: string }>`
  display: flex;
  align-items: center;
  width: ${({ width }) => width};
  margin: auto;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
    width: 100%;
  }
`;
export const Item = styled.div`
  width: ${({ width }: { width?: string }) => width || ""};
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 20px;
    :nth-child(1) {
      display: none;
    }
  }
`;
