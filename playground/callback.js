var getUser = (id, callback) => {
    var user = {
        id,
        name:'abhishek'
    }
    setTimeout(() => {
        callback(user);
    }, 2000);
}

getUser(31, (userData) => {
    console.log(userData);
})