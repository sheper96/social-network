import classes from "./Nav.module.css"
import {NavLink} from "react-router-dom";

function Nav() {
    return (

        <nav className={classes.nav}>
            <div className={classes.item}><NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink></div>
            <div className={classes.item}><NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink></div>
            <div className={classes.item}><NavLink to="/users" activeClassName={classes.activeLink}>Users</NavLink></div>
            <div className={classes.item}><a href="">News</a></div>
            <div className={classes.item}><a href="">Music</a></div>
            <div className={classes.item}><a href="">Settings</a></div>
        </nav>

    );
}

export default Nav;