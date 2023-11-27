const { default: expect } = require('expect');
const conction = require('./p3');

test('should turn array to string', () => { 
   expect(conction(["Red", "Green", "White", "Black"])).toEqual("Red Green White Black");
 })