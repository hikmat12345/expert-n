import React, { Children } from 'react'
import styled from "styled-components"
 
const Buttons = styled.button`
font-family:"poppins"
  `
function Container({children}:{children:any}) {
    const Wrappertag=styled.div`
    font-family:'poppins';
   `
  return (
    <Wrappertag>
       {children}
    </Wrappertag>
  )
}

export default Container
