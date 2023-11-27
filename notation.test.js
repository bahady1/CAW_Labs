const mean = require('./notation');

test('should calculate the mean for array', () => { 
   expect(mean([5,10,15,20])).toBe(12.5) 
 })