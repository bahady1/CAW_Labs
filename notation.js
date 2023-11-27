function mean(arr) {
    var total = 0;

    for (let i = 0; i < arr.length; i++) {
        total =total + arr[i];
        
    }
    m = total/arr.length;
    return m
}

module.exports = mean;

//mean([1,5,2,3,6,9]);