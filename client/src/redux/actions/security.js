export const  logUser = (data) => {
       return {
        type: 'LOGIN',
        payload: data
    }
}

export const login = (username, password, dispatch) => {
    const data = {username, password};
    let myHeaders = new Headers();
    myHeaders.append("Content-type", "application/json");
        fetch ('http://localhost:3000/login_check',
        {
            method:'POST',
            mode: "cors",
            headers : myHeaders,
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => dispatch(logUser(data,dispatch)))
        .catch(error => console.log(error));
        

        return{
            type: "REQUEST_LOGIN",
            payload: {}
        }
}; 

export const register = (user_name, password, email, dispatch) => {
    const data = {
        user_name, 
        password,
        email
    };
    console.log(JSON.stringify(data));
    let myHeaders = new Headers();
    myHeaders.append("Content-type", "application/json");
    myHeaders.append("Authorization", "Bearer "+localStorage.getItem('tokenJWT'));
        fetch ('http://localhost:3000/user',
        {
            method:'POST',
            mode: "cors",
            headers : myHeaders,
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .catch(error => console.log(error));

        //appeler login ?
        

        return{
            type: "REQUEST_REGISTER",
            payload: {}
        }
}; 