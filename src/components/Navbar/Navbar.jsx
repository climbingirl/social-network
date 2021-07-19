import styles from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import FriendsBar from "./FriendsBar/FriendsBar";

function Navbar(props) {
    return (
        <nav className={styles.menu}>
            <ul>
                <li>
                    <NavLink activeClassName={styles.active} to="/profile">Profile</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={styles.active} to="/dialogs">Messages</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={styles.active} to="/news">News</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={styles.active} to="/music">Music</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={styles.active} to="/users">Find users</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={styles.active} to="/settings">Settings</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={styles.active} to="/friends">Friends</NavLink>
                </li>
            </ul>
            {/*<FriendsBar friends={props.state.friends} />*/}
        </nav>
    );
}

export default Navbar;