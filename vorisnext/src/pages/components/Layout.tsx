import { ReactElement } from "react";
import Navbar from "./Navbar"

const Layout = ({ children } : {children: ReactElement}) => {
    return (
      <div>
        <Navbar/>
        {children}
        <h1>Footer</h1>
      </div>
    );

  }
  export default Layout;