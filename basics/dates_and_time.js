let mydate=new Date();
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleString());


let mydate2=new Date("2023-01-14")
console.log(mydate2.toLocaleString())


let mydate3=new Date("01-14-2023")
console.log(mydate3.toLocaleString())

//Date.now and getTime are used to get time in milliseconds
let createdDate=new Date("01-14-2023")

let mytime=Date.now()
console.log(mytime)

console.log(createdDate.getTime())

//convert current time to seconds
console.log(Math.floor(Date.now()/1000))


mytime.toLocaleString('default',{
    weekday:"long"
})