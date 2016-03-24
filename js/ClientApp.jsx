var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')

var MyFirstComponent = function () {
  return (
    <div>
      <MyTitle title="Check this thing out" color="rebeccapurple" />
      <MyTitle title="Check this guy out" color="peru" />
      <MyTitle title="Check this gal out" color="papayawhip" />
    </div>
  )
}

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
