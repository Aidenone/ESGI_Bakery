export const add_bakery = (name, address, dispatch) => {
    const data = {name, address};
    console.log("les datas sont:"+JSON.stringify(data));
    let myHeaders = new Headers();
    myHeaders.append("Content-type", "application/json");
    myHeaders.append("Authorization", "Bearer "+localStorage.getItem('tokenJWT'));
        fetch ('http://localhost:3000/bakery',
        {
            method:'POST',
            mode: "cors",
            headers : myHeaders,
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .catch(error => console.log(error));
        
        return{
            type: "ADD_BAKERY",
            payload: {}
        }
}; 