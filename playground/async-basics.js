//this is for showing the asynchronous behaviour of javascript
console.log("Starting app");

setTimeout(() => {
    console.log("inside of callback");
},2000)
setTimeout(() => {
    console.log("inside of second callback");
},0)
console.log("finishing app");
