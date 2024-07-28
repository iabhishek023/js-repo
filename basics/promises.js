const promiseOne=new Promise(function(resolve,reject){
    //Do any sync function
    //Do DB calls,cryptography

    setTimeout(function(){
        console.log("Async complete");
        resolve()
    },1000)
});

promiseOne.then(function(){
    console.log("Done")
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Second promise");
        resolve()
    },1000)
}).then(function(){
    console.log("Second promise done");
})


//Data consumption by promise
const promisethree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Abhishek",email:"iabhishek023@gmail.com"})
    })

})
promisethree.then(function(user){
    console.log(user)
})



//Fetching of userdata by promise and use of reject and finally

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"abhishek",email:"iabhishek023@gmail.com"})
        }
        else{
            reject("Error Something went wrong")

        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
   console.log(username)
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>
console.log("something happend"))

//promisefive using try and catch block

const promisefive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"abhishek",email:"iabhishek023@gmail.com"})
        }
        else{
            reject("Error Something went wrong")

        }
    },1000)
});

async function consumepromisefive(){
    try{
          const response= await promisefive
          console.log(response)
    }
    catch(error){
        console.log(error)

    }
}
consumepromisefive()


//data from json file

async function getAllUsers(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        const data =await response.json() 
        console.log(data);
    }
    catch(error){
        console.log("E:",error)
    }
}

getAllUsers()


//using fetch
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()

})
.then((data)=>{
    console.assert.log(data);
})
.catch((error)=>
    console.log("E: ",error)
)
