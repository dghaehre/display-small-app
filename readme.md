# Simple display for quick node programs


# Usage

```
npm install display-small-app
```


```js
const DisplayApp = require('display-small-app')

const display = DisplayApp({
  name: "Name of program",
  data: { counter: 0 }
})

display.status("Fetching likes..")

display.update({counter: 1})

let likes = display.get('counter')

display.error(`${likes} is not enough likes")

display.report("Program report: Test = true")

display.finish("Program finished")

```

