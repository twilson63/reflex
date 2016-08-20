module.exports = function (render, transform) {

  const Emitter = require('events').EventEmitter
  const emitter = new Emitter()

  const domEvents = require('./dom-events')
  const update = require('./update')

  /*
    =----> domEvents ------=
    |                      |
  emitter               getState
    |                      |
    |                      |
    =- updateDom  <--------=
  */


  // window -> events
  domEvents(emitter, {route: '/'})
    .chain(transform)
    .observe(update(render(emitter)))

}
