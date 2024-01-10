import { ReactElement } from "react";
import Navbar from "./Navbar"
import Footer from "./Footer"
import style from "@/styles/App.module.css"

const Layout = ({ children } : {children: ReactElement}) => {
    return (
      <div className={style.main}>
        <Navbar/>
        {children}
        <Footer/>
      </div>
    );

  }
  export default Layout;