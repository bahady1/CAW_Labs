function chunk(array, size){
    var chunkedArr = [];
    var index = 0;
    while (index < array.length) {
        chunkedArr.push(array.slice(index, size + index));
        index += size;
    }
    return chunkedArr;
}

module.exports = chunk;

//console.log(chunk([5,6,8,9,4,4,4,4],3));