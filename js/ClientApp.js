var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')

var div = React.DOM.div

var MyTitleFact = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComponent = (
  div(null,
    MyTitleFact({title: 'Check this thing out', color: 'rebeccapurple'}),
    React.createElement(MyTitle, {title: 'Check this guy out', color: 'peru'}),
    ce(MyTitle, {title: 'Check this gal out', color: 'papayawhip'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
