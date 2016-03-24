var React = require('react')
var ReactDOM = require('react-dom')
const Landing = require('./Landing')
const { Router, Route, hashHistory } = require('react-router')

const App = () => {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={Landing} />
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
