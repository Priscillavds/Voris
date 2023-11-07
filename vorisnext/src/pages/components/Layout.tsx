import { ReactElement } from "react";

const Layout = ({ children } : {children: ReactElement}) => {
    return (
      <div>
        <h1>Header</h1>
        {children}
        <h1>Footer</h1>
      </div>
    );
  }
  
  export default Layout;