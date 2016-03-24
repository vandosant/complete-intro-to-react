var React = require('react')
var ReactDOM = require('react-dom')

const App = () => {
  return (
    <div className='app-container'>
      <div className='home-info'>
        <h1 className='title'>Svdeo</h1>
        <input className='search' type='text' placeholder='search' />
        <button className='browse-all'> or Browse All</button>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
