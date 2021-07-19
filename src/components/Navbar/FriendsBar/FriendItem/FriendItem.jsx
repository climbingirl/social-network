import styles from "./FriendItem.module.css";

function FriendItem(props) {


    return (
        <div className={styles.friend}>
            <a href="#">
                <img src={props.photoSrc} />
                <span>{props.name}</span>
            </a>
        </div>
    );
}

export default FriendItem;