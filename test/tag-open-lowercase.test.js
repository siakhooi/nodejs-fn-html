const util = require('util');
const tags = require('./tags.js')

var dummydata = "asdfjal;ksjf;lkasfaf";

tags.html.useLowerCase();

test.each(tags.OpenTagArray)("test open tag in lowercase", (tag, fc) => {
    var t = tag.toLowerCase();
    expect(fc(dummydata))
        .toBe(util.format("<%s>%s</%s>", t, dummydata, t));
});
