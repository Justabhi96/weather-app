
//resolve or reject can be called only once and only one of them 
//will be called. whichever is called first respective callback
//function will be called.
//the best thing about promises is that you will never end up
//calling your callbacks twice.and there will not be a lot of
//'if' and 'else' statements.
// var promise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         //resolve('hey! it worked');
//         reject('Sorry! it failed');
//     },2000);
// });

// promise.then((msg) => {
//     console.log('Success: ',msg);
// },
// (errorMsg) => {
//     console.log('Error: ',errorMsg);
// })

//here we will be defining an aync function which will take 
//input and return promise

var asyncAdd = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(typeof(a)==='number' && typeof(b)==='number'){
                resolve(a+b);
            }
            else{
                reject('Inputs should be numbers');
            }
        },1500);
    })
}

asyncAdd(2,4).then((result) => {
    console.log("Result: ",result);
    return asyncAdd(result,33);
}).then((res) => {
    console.log("result: ",res);
}).catch((errorMsg) => {
    console.log('arguments must be numbers');
})