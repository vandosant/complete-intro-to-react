var React = require('react')

const Landing = () => {
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

module.exports = Landing
