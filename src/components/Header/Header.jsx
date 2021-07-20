import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header className={s.header}>
            <div className={s.header__inner}>
                <div>
                    <a href="#">
                        <img src="https://templates.joomlaworks.net/sites/anagram/images/banner1.png" alt="Logo"/>
                    </a>
                </div>
                <div>
                    { props.isAuth ? props.login : <NavLink className={s.btn__login} to="/login">Login</NavLink> }

                </div>
            </div>

        </header>
    );
}

export default Header;