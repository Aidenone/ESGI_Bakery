export const  receiveBakery = (data) => {
    return {
     type: 'RECEIVE_BAKERY',
     payload: data
 }
}

export const getBakeryList = (dispatch) => {
   
    var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer "+localStorage.getItem('tokenJWT'));
        fetch('http://127.0.0.1:3000/bakery',
            {
                method: 'GET',
                mode: "cors",
                headers: myHeaders
            }).then(response => response.json())
            .then(data => dispatch(receiveBakery(data,dispatch)))
            .catch(error => console.log(error));
            
    
            return{
                type: "REQUEST_BAKERY",
                payload: {}
            }
        
}; 