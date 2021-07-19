import styles from "./FriendsBar.module.css";
import FriendItem from "./FriendItem/FriendItem";

function FriendsBar(props) {

    const friendsBarItems = props.friends.map(f => <FriendItem name={f.name} photoSrc={f.photoSrc} key={f.id} />);

    return (
        <div className={styles.friends__bar}>
            {friendsBarItems}
        </div>
    );
}

export default FriendsBar;