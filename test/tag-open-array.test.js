const util = require('util')
const tags = require('./tags.js')

const dummydata = ['ABC', 'hello', 'world', 3, 5]

test.each(tags.OpenTagArray)('test open tag with children in array', (tag, fc) => {
  expect(fc(dummydata))
    .toBe(util.format('<%s>%s</%s>', tag, dummydata.join(''), tag))
})
