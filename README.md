# Reflex

Simple Reactive Framework

This library or framework takes a render function that must return a
virtual-dom tree and a simple function that takes an event and returns state,
it is called a transform function.

## Example

```
const app = require('reflex')

const render = function (emitter) {
  return function (state) {
    return h('h1', [state.title])
  }
}

const transform = function (event) {
  var state = {}
  return state 
}

app(render, transform)


```
