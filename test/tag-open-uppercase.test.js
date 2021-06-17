const util = require('util');
const tags = require('./tags.js')

var dummydata = "asdfjal;ksjf;lkasfaf";

tags.html.useUpperCase();

test.each(tags.OpenTagArray)("test open tag in uppercase", (tag, fc) => {
    var t = tag.toUpperCase();
    expect(fc(dummydata))
        .toBe(util.format("<%s>%s</%s>", t, dummydata, t));
});
