import React from "react";
import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

type Props =  {
  children: JSX.Element;
}

const Layout: React.FC<Props> = (props) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
