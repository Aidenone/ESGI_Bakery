import React from 'react';
import{Switch, Route} from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { connect } from 'react-redux';
import { login } from '../redux/actions/security';
import { register } from '../redux/actions/security';


class SecurityContainer extends React.Component{

    handleSubmitLogin = (data) => {
        console.log(data);
        this.props.login(data.username,data.password);
    }

    handleSubmitRegister = (data) => {
        console.log(data);
        this.props.register(data.user_name,data.password,data.email);
    }
     
    render(){
        return(           
            <Switch>
                <Route path="/security/login" render={() => <LoginForm onSubmit={this.handleSubmitLogin}/>}/>
                <Route path="/security/register" render={() => <RegisterForm onSubmit={this.handleSubmitRegister}/>}/>
                <Route path="/security/deconnexion" render={() => <RegisterForm onSubmit={this.handleSubmitDeconnexion}/>}/>
            </Switch>           
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => dispatch(login(username, password, dispatch)),
        register: (user_name, password, email) => dispatch(register(user_name, password, email, dispatch))
    }
}



export default connect(undefined, mapDispatchToProps)(SecurityContainer);