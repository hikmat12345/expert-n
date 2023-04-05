// components/Layout.js
import Header from "../Header/Header";
import GlobalStyles from "../../styles/Global";

export const Layout = ({ children }: { children: any }) => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      {children}
    </div>
  );
};
