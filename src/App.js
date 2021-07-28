import {Route} from "react-router-dom";
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";


function App(props) {
    return (
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar /*state={props.state.sidebar}*/ />
                <section className="app-wrapper__content">
                    <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                    <Route path="/dialogs" render={() => <DialogsContainer />} />
                    <Route path="/news" component={News} />
                    <Route path="/music" component={Music} />
                    <Route path="/users" render={() => <UsersContainer />} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/friends" component={Friends} />
                    <Route path="/login" render={() => <Login />} />
                </section>
            </div>
    );
}

export default App;