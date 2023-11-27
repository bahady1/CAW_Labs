const chunk = require('./p4');

test('should devide an arry to multy arraies', () => { 
    expect(chunk([1,2,3,1,2,3,4,9],3)).toEqual([[1,2,3],[1,2,3],[4,9]]);
 })