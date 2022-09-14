//javascript objects are always in key value pair

let obj = {

};
console.log();

let person ={
    name:"Rashid",
    age: 23,
    phone: 8450348403,
    gender:"male",
    height:"170cm"
};
console.log(person);
console.log(`hey  ${person.name} Thank you for signing Up!`)

let str  = "hello";
console.log(str.length);// dot notation
console.log(str["length"]);//square bracket notation


let captainAmerica ={
    firstName:"steve",
    secondName:"Roagers",
    friends:["Bucky","tommy","brue banner"],
    age:34,
    isAvenger:true,
    address:{
        state:"Manthan",
        city:"New York",
        Country:"USA"
    },
    sayHi: function (){
       console.log(`hey my name is ${this.firstName}`);
    }
};

console.log(captainAmerica);
console.log(captainAmerica.friends[0]);
console.log(captainAmerica["friends"][0])//accessing bracket notation 
console.log(captainAmerica.friends);
captainAmerica.sayHi(); // method accessing


// for loop
// in keyword is js is used to get keys from that objects
for(let hathi in captainAmerica){
    console.log(hathi);
// hathi jo variable hai uske ander meri key ki value padi huyee hai
// variable k ander jo binded value hai wo chahiye
console.log(captainAmerica[hathi]);//bracket notaion usage
console.log(`${hathi} : ${captainAmerica[hathi]}`);
}


// method -> objects k ander function
// consol.log(str.toUpperCase) ->toUpperCase is a method

