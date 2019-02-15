import React from 'react';

export default class BakeryForm extends React.Component{

    state = {
        name:"",
        address: {
            city:""
        }
    }

    handleKeyUp = (event,field) => {
        const input = event.currentTarget;
        if(field.startsWith("address")) {
             field = field.replace("address.", "");
             this.setState({
                  address: {
                      ...this.state.address,  
                     [field] : input.value  
                  }  
              });
         } else {
        this.setState({
            [field] : input.value
        });
    }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }
     
    render(){
        return(
          <form onSubmit={this.handleSubmit}>
              <label>Name</label>
              <input onKeyUp={(event) => this.handleKeyUp(event, 'name')}/>
              <label>Address</label>
              <input onKeyUp={(event) => this.handleKeyUp(event, 'address.city')}/>
              <button type="submit" >Submit</button>             
          </form>        
        );
    }
}