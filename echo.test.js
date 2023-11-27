const exf = require('./echo');

test('print s n times', () => { 
    expect(exf(5 ,5)).toBe("55555");
});