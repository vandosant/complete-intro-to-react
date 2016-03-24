var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render () {
    return (
      div(null,
        h1({style: {color: this.props.color}}, this.props.title)
      )
    )
  }
});

var MyTitleFact = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComponent = (
  div(null,
    MyTitleFact({title: "Checkout this thing out", color: "rebeccapurple"}),
    React.createElement(MyTitle, {title: "Checkout this guy out", color: "peru"}),
    ce(MyTitle, {title: "Checkout this gal out", color: "papayawhip"})
  )
)
