import { ReactElement } from "react";
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children } : {children: ReactElement}) => {
    return (
      <div>
        <Navbar/>
        {children}
        <Footer/>
      </div>
    );

  }
  export default Layout;