import {usersAPI} from "../api/api";

const ADD_POST = "ADD-POST",
    UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT",
    SET_USER_PROFILE = "SET-USER-PROFILE";

let initialState = {
    posts: [
        {id: 1, message: "Hi! I'm Lin.", likesCount: 15},
        {id: 2, message: "I live in New Zealand.", likesCount: 20},
        {id: 3, message: "I love nature.", likesCount: 17}
    ],
    newPostText: "",
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            }
            return  {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state;
    }
}

export const onAddPostCreator = () => ({type: ADD_POST})
export const onPostChangeCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfileData(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
}

export default profileReducer;