import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }: { theme: any }) => "#fff"};
    color: hsl(192, 100%, 9%);
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
  }
  p {
    opacity: 0.6;
    line-height: 1.5;
  }
  input{
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal; 
    color: #4a4a4a;
  }
  .react-tel-input .country-list .country{
    text-align:left;
  }
  img {
    max-width: 100%;
  }
  .react-tel-input .flag-dropdown { 
    background-color: #f1f6fa;
    border: 0px solid #cacaca;
    border-radius: 3px 0 0 3px;
  }
  .react-tel-input .form-control {
    
    background: #f1f6fa;
    border: 0px solid #CACACA;
    border-radius: 5px;
    line-height: 25px;
    height: 35px;
    width: 300px;
    outline: none;
  }
  .react-tel-input .selected-flag:hover, .react-tel-input .selected-flag:focus {
    background-color: #f1f6fa;
   }
  .react-tel-input .flag-dropdown.open .selected-flag {
    background: #f1f6fa;
    border-radius: 3px 0 0 0;
  }

  input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
     -webkit-appearance: none;
    margin: 0;  
}

input[type=number] {
    -moz-appearance:textfield;  
}
@media(max-width:380px){
  .react-tel-input .form-control { 
     width: 228px !important; 
  }
  .react-tel-input {
      width: 100% !important;  
      padding: 10.9px 21px 13px 15px !important;  
  }
}
`;

export default GlobalStyles;
