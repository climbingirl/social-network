import s from "./ProfileInfo.module.css";
import Preloader from "../../coomon/Preloader/Preloader";

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.profileInfo}>
            <div className={s.banner}>
                <img src="https://www.mineplex.com/data/covers/61/61256.jpg?t=1566577047" alt="Banner"/>
            </div>
            <div className={s.profileInfo__inner}>
                <div>
                    {/*<img src="https://sun9-30.userapi.com/c834402/v834402281/4a794/VRoqSBlEPvE.jpg" alt="Ava"/>*/}
                    <img src={props.profile.photos.large} alt="Ava"/>
                </div>
                <div>
                    <div className={s.profile__name}>{props.profile.fullName}</div>
                    <div>{props.profile.aboutMe}</div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;