const util = require('util');
const h = require('../index.js')



test("test hello world", () => {
    var s = h.html([
        h.head(h.title("Hello World")),
        h.body(h.h1("Hello World!"))
    ]);
    expect(s)
        .toBe("<HTML><HEAD><TITLE>Hello World</TITLE></HEAD><BODY><H1>Hello World!</H1></BODY></HTML>");
});
