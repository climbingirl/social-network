import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <a href="#">
                <img src="https://templates.joomlaworks.net/sites/anagram/images/banner1.png" alt="Logo"/>
            </a>
        </header>
    );
}

export default Header;