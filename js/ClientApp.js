var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render () {
    return (
      div(null,
        h1(null, this.props.title)
      )
    )
  }
});

var MyTitleFact = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComponent = (
  div(null,
    MyTitleFact({title: "Checkout this thing out"}),
    React.createElement(MyTitle, {title: "Checkout this guy out"}),
    ce(MyTitle, {title: "Checkout this gal out"})
  )
)
