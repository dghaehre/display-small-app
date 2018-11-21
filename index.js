'use strict'
const cliCursor = require('cli-cursor');
cliCursor.hide();

const displayErrors = (s, e) => `${s}\n\n${e}`

const green = "\x1b[32m%s\x1b[0m" 

const red = "\x1b[31m%s\x1b[0m"

const cyan = "\x1b[36m%s\x1b[0m" 

const displayData = s => 
  s.substring(1, s.length - 1)
  .replace(/"/g, "")

class Display {
  constructor(init) {
    this.name = init.name
    this.data = init.data
    this.errors = []
    this.statusmessage = ""
    this.write()
  }
  write(finish="") {
    console.clear()
    console.log(green, "---- " + this.name + " ----")
    console.log("\n")
    console.log(cyan, finish !== "" ? finish : this.statusmessage)
    console.log(displayData(JSON.stringify(this.data, null, 2)))
    console.log(red, this.errors.reduce(displayErrors, ""))
    console.log("\n\n")
  }
  update(data) {
    this.data = Object.assign({}, this.data, data)
    this.write()
  }
  status(s) {
    this.statusmessage = s
    this.write()
  }
  error(e) {
    this.errors = this.errors.concat([e])
    this.write()
  }
  finish(end) {
    this.write(end)
  }
}


module.exports = init => new Display(init)
