import React from 'react';
import BakeryList from '../components/BakeryList';

import{Switch, Route} from 'react-router-dom';
import BakeryForm from './BakeryForm';
import { connect } from 'react-redux';
import { add_bakery } from '../redux/actions/bakery';


class BakeryContainer extends React.Component{

    handleSubmit = (data) => {
        console.log(data);
        this.props.add_bakery(data.name,data.address, this.props.dispatch);        
        }
     
    render(){
        return(           
            <Switch>
                <Route path="/bakery" render={() => <BakeryForm onSubmit={this.handleSubmit}/>}/>
            </Switch>           
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add_bakery: (name, address) => dispatch(add_bakery(name,address, dispatch))
    }
}



export default connect(undefined, mapDispatchToProps)(BakeryContainer);