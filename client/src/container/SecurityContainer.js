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
        this.props.register(data.username,data.password,data.city);
    }
     
    render(){
        return(           
            <Switch>
                <Route path="/security/login" render={() => <LoginForm onSubmit={this.handleSubmitLogin}/>}/>
                <Route path="/security/register" render={() => <RegisterForm onSubmit={this.handleSubmitRegister}/>}/>
            </Switch>           
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => dispatch(login(username, password, dispatch)),
        register: (username, password, city) => dispatch(register(username, password, city, dispatch))
    }
}



export default connect(undefined, mapDispatchToProps)(SecurityContainer);