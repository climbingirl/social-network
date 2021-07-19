import styles from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

function Dialog(props) {
    let path = "/dialogs/" + props.id;

    return(
        <div className={styles.dialog}>
            <NavLink activeClassName={styles.active} to={path}>
                {props.name}
            </NavLink>
        </div>
    );
}

export default Dialog;