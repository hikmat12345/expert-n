import React from 'react' 
import styled, { css } from 'styled-components'

 

function Button({children}:{children:any}) {
 
  const Button = styled.button`
  background: red;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: '#fff';
  margin: 0 1em;
  padding: 0.25em 1em;
  font-family:'poppins';
  ${props => props &&
    css`
      background: red;
      color: white;
    `};
`
  return (
    <Button>
      {children}
    </Button>
  )
}

export default Button

