const first = require('./p1');

describe('should get the first 3 element in array', () => { 

    it("return an empty array if the input array is null or n<=0", ()=>{
        expect(first(null, 2)).toEqual([]);
        expect(first([2,3,5], -1)).toEqual([]);
    })

    it("return the first element if n not provided", ()=>{
        expect(first([2,3,5])).toEqual(2);
    })

    it("return the first n elements in the array", ()=>{
        expect(first([2,3,5],2)).toEqual([2,3]);
    })

 })