import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

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
                                     onClick={ (eZ) => props.onChangePage(p) }>{p}</span>)
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
                                        ? <button onClick={ () => {props.unfollow(u.id)} }>Unfollow</button>
                                        : <button onClick={ () =>{props.follow(u.id)} }>Follow</button>
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