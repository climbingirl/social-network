import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import axios from "axios";

function Users(props) {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={s.users}>
            {
                pages.map(p => <span className={ props.currentPage === p && s.activePage }
                                     onClick={ (e) => props.onChangePage(p) }>{p}</span>)
            }
            <div className={s.users__inner}>
                {
                    props.users.map(u => <div className={s.user} key={u.id}>
                            <div className={s.user__info}>
                                <NavLink to={"/profile/" + u.id}>
                                    <img className={s.user__photo} src={ u.photos.small != null ? u.photos.small : userPhoto } />
                                </NavLink>
                                {
                                    u.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () => {
                                        props.toggleFollowingProgress(true, u.id);
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                            {withCredentials: true,
                                                headers: {"API-KEY": "c0534878-40b3-45b4-914f-ed2dbbe9515b"}})
                                            .then(response => {
                                                if(response.data.resultCode == 0){
                                                    props.unfollow(u.id);
                                                }
                                                props.toggleFollowingProgress(false, u.id);
                                            });
                                    }}>
                                        Unfollow
                                    </button>
                                    : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () => {
                                        props.toggleFollowingProgress(true, u.id);
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                            {withCredentials: true,
                                                headers: {"API-KEY": "c0534878-40b3-45b4-914f-ed2dbbe9515b"}})
                                            .then(response => {
                                                if(response.data.resultCode == 0) {
                                                    props.follow(u.id);
                                                }
                                                props.toggleFollowingProgress(false, u.id)
                                            });
                                    }}>
                                        Follow
                                    </button>
                                }
                            </div>
                            <div className={s.user__content}>
                                <div>
                                    <div className={s.user__name}>
                                        {u.name}
                                    </div>
                                    <div className={s.user__status}>
                                        {u.status}
                                    </div>
                                </div>
                                <div>
                                    <div className={s.user__country}>
                                        {"u.location.country"}
                                    </div>
                                    <div className={s.city}>
                                        {"u.location.city"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
}

export default Users;