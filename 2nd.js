// const numberArray = [1,2,3];

// const sumOfArray = numberArray.reduce((acc,currrentValue)=>{
//     return acc + currrentValue;
// },0)

// const sortedArray = numberArray.sort((a,b)=> a-b)
//  console.log(sumOfArray);
//  console.log(sortedArray);

//  //truthy and falsey values in javascript
//  //false,0,'',undefined,null-falsey values
//  //-1,numbers other than 0,NaN,'abc',true-truthy values

//  if(-1){
//     console.log("truthy");
//  }

//  const age =21;
//  const canVote = age>18? true:false;

//  Boolean(-1);

 //asynchronous javascript

 const sumArray = (arr) => {
    return arr.reduce((acc,currentValue)=> acc+currentValue,0);
 }

 const getAverage = (arr)=>{
    const sumOfArray = sumArray(arr);
    return sumOfArray/ arr.length;
 }

 const numberArray = [21,23,41,56,65];

 console.log(getAverage(numberArray));

 setTimeout(()=>{
    console.log("Set Timeout")
 },0)

 console.log("Log execution");

 //callback hell
 //pyramid of doom

//  const getClassData = (cb) => {
//     setTimeout(()=>{
//         cb({id:1,name:"texas",semester:5})
//     },3000)
//  }

//  const getClassInformation = (cb)=>{
//     setTimeout(()=>{
//         cb({student:[]})
//     })
//  }

//  getClassData(getClassInformation(
//     processData()
//  ))


//Promise
//Async Await
