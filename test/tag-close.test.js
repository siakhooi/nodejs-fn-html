const util = require('util');
const tags = require('./tags.js');


test.each(tags.CloseTagArray)("test close tag", (tag, fc) => {
    expect(fc())
        .toBe(util.format("<%s>", tag));
});
