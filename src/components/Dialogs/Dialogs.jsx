import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import styles from "./Dialogs.module.css";
import React from "react";

function Dialogs(props) {
    let dialogsElements = props.dialogsPage.dialogs.map(d => <Dialog name={d.name} id={d.id} key={d.id} />);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id} />);
    let newMessageText = props.dialogsPage.newMessageText;

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    let onSendMessage = () => {
        props.sendMessage();
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs__title}>Dialogs</div>
            <div className={styles.dialogs__col}>
                <div className={styles.dialogs__list}>
                    {dialogsElements}
                </div>
                <div className={styles.messages}>
                    <div>{messagesElements}</div>
                    <div>
                        <textarea onChange={onMessageChange} value={newMessageText} placeholder="Enter your message..." />
                    </div>
                    <button onClick={onSendMessage} type="submit">Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;