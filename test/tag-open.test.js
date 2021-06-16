const util = require('util');
const tags = require('./tags.js')

var dummydata = "asdfjal;ksjf;lkasfaf";

test.each(tags.OpenTagArray)("test open tag", (tag, fc) => {
    expect(fc(dummydata))
        .toBe(util.format("<%s>%s</%s>", tag, dummydata, tag));
});
