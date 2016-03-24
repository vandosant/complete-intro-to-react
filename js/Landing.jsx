var React = require('react')
const { Link } = require('react-router')

const Landing = () => {
  return (
    <div className='home-info'>
      <h1 className='title'>Svdeo</h1>
      <input className='search' type='text' placeholder='search' />
      <Link to='/search' className='browse-all'> or Browse All</Link>
    </div>
  )
}

module.exports = Landing
