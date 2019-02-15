import React from 'react';

export default class RegisterForm extends React.Component{

    state = {
        username:"",
        password:"",
        address: {
        	city:""
        }
    }

    handleKeyUp = (event,field) => {
        const input = event.currentTarget;
        // if(field.startsWith("address")) {
        // 	field = field.replace("address.", "");
        // 	this.setState({
	       //      address: {
	       //      	...this.state.address,
        //     		[field] : input.value
	       //      }
	       //  });
        // } else {
        	this.setState({
	            [field] : input.value
	        });
        //}

    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }
     
    render(){
        return(
          <form onSubmit={this.handleSubmit}>
              <label>Username</label>
              <input onKeyUp={(event) => this.handleKeyUp(event,'username')}/>
              <label>Password</label>
              <input type="password" onKeyUp={(event) => this.handleKeyUp(event,'password')}/>
              <label>Email</label>
              <input type="email" onKeyUp={(event) => this.handleKeyUp(event,'email')}/>
              <button type="submit" >Submit</button>             
          </form>        
        );
    }
}