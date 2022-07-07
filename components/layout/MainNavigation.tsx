import classes from "./MainNavigation.module.css";
import Link from "next/link";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Show Case</Link>
      </div>
    </header>
  );
}

export default MainNavigation;
