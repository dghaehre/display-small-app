'use strict'
const cliCursor = require('cli-cursor');
cliCursor.hide();

const displayErrors = (s, e) => `${s}\n\n${e}`

const green = "\x1b[32m%s\x1b[0m" 

const red = "\x1b[31m%s\x1b[0m"

const cyan = "\x1b[36m%s\x1b[0m" 

const loader = [
  ".",
  "·",
  "˙",
  "·"
]

const displayData = s => 
  s.substring(1, s.length - 1)
  .replace(/"/g, "")

class Display {
  constructor(init) {
    this.name = init.name
    this.data = init.data
    this.reportmessage = ""
    this.errors = []
    this.statusmessage = ""
    this.loadindex = 0
    this.timer = setInterval(() => this.write(), 150)
  }
  write(finish="") {
    if(this.loadindex == loader.length - 1) {
      this.loadindex = 0
    } else {
      this.loadindex = this.loadindex + 1
    }
    console.clear()
    console.log(green, loader[this.loadindex] + "    " + this.name)
    console.log("\n")
    console.log(cyan, finish !== "" ? finish : this.statusmessage)
    console.log(displayData(JSON.stringify(this.data, null, 2)))
    console.log(green, this.reportmessage)
    console.log(red, this.errors.reduce(displayErrors, ""))
    console.log("\n\n")
  }
  update(data) {
    this.data = Object.assign({}, this.data, data)
  }
  status(s) {
    this.statusmessage = s
  }
  error(e) {
    this.errors = this.errors.concat([e])
  }
  finish(end) {
    clearTimeout(this.timer)
    this.write(end)
  }
  report(r) {
    this.reportmessage = r
  }
}


module.exports = init => new Display(init)
