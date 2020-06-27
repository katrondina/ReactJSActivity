function sum(a,b){
    return a + b;
}

function myFunc(callbackFunction){
    let newSum = callbackFunction(5,2);
    return newSum;
}

console.log(myFunc(sum));
console.log(myFunc( (a,b) => a+b) );

function myMap(list,cb){
    let newList = [];

    for(let i=0; i<list.length; i++){
        let num = cb( list[i] );
        newList.push(num);
    }
    return newList;
}

function addBy1(number){
    return number+1;
}

let list= [2,6,3];
let list2 = myMap(list,addBy1);

console.log("list: " + list);
console.log("list2: " +list2);
//example of callback function
console.log("using callbackfunction: " + list.map(addBy1));
// callback using long method
console.log("using callbackmethod: " + list.map( (num) => num+1));

function myFilter(list,cb){
    let newList = [];

    for(let i=0; i<list.length; i++){
        if(cb (list[i]) == true)
            newList.push(list[i]);
    }
    return newList;
}

let newList = myFilter(list, (num) => num % 2 === 0);
console.log(list);
console.log(list.filter( (num) => num % 2 === 0));
console.log(newList);