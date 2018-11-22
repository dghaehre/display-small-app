const DisplayApp = require('./index')

const initData = {
  page: 1
}

const display = DisplayApp({
  name: "Test",
  data: initData
})

setTimeout(() => {
  display.status("Fetching...")
}, 250)

setTimeout(() => {
  display.update({ page: 2})
}, 1000)

setTimeout(() => {
  display.error("Coulnd fetch bla bla")
}, 2000)

setTimeout(() => {
  display.error("Coulnd fetch bla bla")
}, 3000)

setTimeout(() => {
  display.report(`

  Report:

  Test = true
  `)
  display.finish("Finished")
}, 4000)

