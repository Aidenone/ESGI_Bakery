import React from 'react';
import BakeryList from '../components/BakeryList';
import {getBakeryList} from '../redux/actions/getInfoBakery';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
class BakeryContainer extends React.Component{
     
    constructor(props){
        super(props);
        props.dispatch(getBakeryList(props.dispatch));
    }
    render(){
        return(
            <Switch>
                <Route path='/bakery/' render={() => <BakeryList bakery={this.props.bakery}/>}/>
            </Switch>
        );
    }

    
}

const mapStateToProps = function(state, ownProps){
    const {bakery:{bakery}} = state;
    return{
        bakery
    }
}

export default connect(mapStateToProps)(BakeryContainer)