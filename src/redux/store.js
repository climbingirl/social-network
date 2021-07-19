import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi! I'm Lin.", likesCount: 15},
                {id: 2, message: "I live in New Zealand.", likesCount: 20},
                {id: 3, message: "I love nature.", likesCount: 17}
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Andrew"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Alex"},
                {id: 5, name: "Ivan"},
                {id: 6, name: "Kate"},
                {id: 7, name: "Max"},
                {id: 8, name: "Vlad"}
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Yo"},
                {id: 4, message: "Yo"}
            ],
            newMessageText: ""
        },
        sidebar: {
            friends: [
                {id: 1, name: "Ivan", photoSrc: "https://i.pinimg.com/236x/ee/f3/c6/eef3c691cbb655b00c17d59d32f7494b.jpg"},
                {id: 2, name: "Alex", photoSrc: "https://static10.stcont.com/datas/photos/800x800/3e/79/b61766de250438aba4649c94cfa3.jpg?0"},
                {id: 3, name: "Kate", photoSrc: "https://a.d-cd.net/7e7c764s-200.jpg"}
            ]
        }
    },
    _callSubscriber() {
        console.log("no subscribers (observers)")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);  // принимает ветку стейта и action,
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);  // изменяет, если надо стейт и возвращет преобразованный или нет стейт
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state); // редаксовский store, когда уведомляет подписчиков, не передает state в rerenderEntireTree в index.js
        // из-за чего state = undefined
    }
}

export default store;

window.store = store;




{
    id: 1,
        name: "Sveta",
    followed: true,
    status: "ke",
    photoUrl: "https://e7.pngegg.com/pngimages/165/652/png-clipart-businessperson-computer-icons-avatar-avatar-heroes-public-relations.png",
    location: {
    country: "Russia",
        city: "Sochi"
}
},
{
    id: 2,
        name: "Alex",
    followed: true,
    status: "ke",
    photoUrl: "https://e7.pngegg.com/pngimages/165/652/png-clipart-businessperson-computer-icons-avatar-avatar-heroes-public-relations.png",
    location: {
    country: "Russia",
        city: "Sochi"
}
},
{
    id: 3,
        name: "Targk",
    followed: false,
    status: "ke",
    photoUrl: "https://e7.pngegg.com/pngimages/165/652/png-clipart-businessperson-computer-icons-avatar-avatar-heroes-public-relations.png",
    location: {
    country: "Russia",
        city: "Sochi"
}
},