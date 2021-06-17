const util = require('util');
const tags = require('./tags.js');

tags.html.useUpperCase();

test.each(tags.CloseTagArray)("test close tag in uppercase", (tag, fc) => {
    var t = tag.toUpperCase();
    expect(fc())
        .toBe(util.format("<%s>", t));
});
