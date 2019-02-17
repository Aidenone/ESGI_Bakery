const reducer = function( state = {
   bakery:[]
},action){
    switch(action.type){
        case 'RECEIVE_BAKERY':                 
                return Object.assign({}, state, {
                bakery: action.payload
            });            
            
        default:
            return state;            
    }    
}

export default reducer;