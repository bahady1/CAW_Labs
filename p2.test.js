const last = require('./p2');

describe('should get the last n element in array', () => { 

    it("return an empty array if the input array is null", ()=>{
        expect(last(null, 2)).toEqual([]);
    })

    it("return the last element if n not provided", ()=>{
        expect(last([2,3,5])).toEqual(5);
    })

    it("return the last n elements in the array", ()=>{
        expect(last([2,3,4,5,6,8,9],2)).toEqual([8,9]);
    })

 })


