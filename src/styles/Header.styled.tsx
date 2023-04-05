import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: ${({ theme }:any) =>  "#fff"};
  height: 65px;
  padding: 0 0 7px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.16);
 `

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`

export const Logo = styled.img` 
  width: 123px;
  height: 50px;
  margin: 8px 30px 0 67px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  } 
`

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`