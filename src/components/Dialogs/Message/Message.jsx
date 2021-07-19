import styles from "./Message.module.css";

function Message(props) {
    return(
        <div className={styles.message}>
            <div className={styles.message__item}>
                {props.message}
            </div>

        </div>
    );
}

export default Message;