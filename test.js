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
  let page = display.get('page')
  display.update({ page: page + 1 })

}, 1000)

setTimeout(() => {
  display.error("Coulnd fetch bla bla")
}, 2000)

setTimeout(() => {
  display.error("Coulnd fetch bla bla")
}, 3000)

setTimeout(() => {
  let data = display.get()
  let page = display.get('page')
  display.report(`

  data: ${JSON.stringify(data, null, 2)}
  page: ${page}

  Report:

  Test = true
  `)
  display.finish("Finished")
}, 4000)

