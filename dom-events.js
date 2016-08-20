const most = require('most')

module.exports = function (store, event) {
  const d$ = most.of(event)
  const click$ = most.fromEvent('click', window)
    .filter(e => e.srcElement.tagName === 'A')
    .tap(e => e.preventDefault())
    .map(e => ({
      route: e.srcElement.pathname,
      hash: e.srcElement.hash || ''
    }))

  const pop$ = most.fromEvent('popstate', window)
    .map(e => ({
      route: window.location.pathname,
      hash: window.location.hash || ''
    }))

  // TODO: add default for form submit
  //
  const custom$ = most.fromEvent('send', store)
  return most.merge(d$, click$, pop$, custom$)
    .tap(event => {
      window.history.pushState(null, '', event.route + (event.hash || ''))
    })
}
