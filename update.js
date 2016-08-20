const create = require('update-dom')

// simple pure compose method
const compose = function (a, b) {
  return function (c) {
    return a(b(c))
  }
}

module.exports = function(render) {
  var oldState = {}
  const update = create(render({}))
  const renderThenUpdate = compose(update, render)

  return function (state) {
    oldState.leaving = true
    renderThenUpdate(oldState)

    setTimeout(function () {
      renderThenUpdate(state)
      oldState = state
    }, 60)
  }
}
