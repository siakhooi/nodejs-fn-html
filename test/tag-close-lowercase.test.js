const util = require('util')
const tags = require('./tags.js')

tags.html.useLowerCase()

test.each(tags.CloseTagArray)('test close tag in lowercase', (tag, fc) => {
  const t = tag.toLowerCase()
  expect(fc())
    .toBe(util.format('<%s>', t))
})
