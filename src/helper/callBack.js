import axios from 'axios';

let arrayOfMessages = [
    {message: 'message1'},
    {message: 'message2'}
];

export const getMessage = () => {
    console.log("getMessage");
    setTimeout( () => {
        arrayOfMessages.map( (item) => {console.log(item.message)} )
    }, 1000)
};

const addMessage = (callBack) => {
    // setTimeout( () => {arrayOfMessages.push(callBack)
    //     //callBack();
    // }, 2000);

    return new Promise((resolve,reject) => {
        setTimeout(() => {arrayOfMessages.push(callBack)
        resolve()
        reject('addMessage Error');}, 2000)
    })
};

const executePromise =()=>{
    return new Promise((resolve,reject) => {
        if(true){resolve();}
        else {reject();}
    });
}

export const callAxios = (url) => {
    console.log(url);
    return axios.get(url).then((response) => console.log(response.data))
}

export const executeFunction = async (url) => {
    return callAxios('https://jsonplaceholder.typicode.com/users');
    //axios.get('https://jsonplaceholder.typicode.com/users').then((response) => console.log(response.data))

    // await addMessage({message: 'message3'});
    // getMessage();

    //executePromise().then( ()=>{console.log("resolved promise")})
    //addMessage({message: 'message3'}).then( ()=> getMessage() ).catch( (error) => {console.log(error)});
   // addMessage(getMessage);
}