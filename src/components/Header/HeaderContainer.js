import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {getAuthUserDAta} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserDAta();
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect (mapStateToProps, {getAuthUserDAta}) (HeaderContainer);