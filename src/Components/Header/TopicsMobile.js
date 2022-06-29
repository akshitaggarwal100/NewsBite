function TopicsMobile() {
  return (
    <div className='topicsWrapper'>
      <ul id='topics'>
        <li className='topic' onClick={() => handleChange('general')}>Top News</li>
        <li className='topic' onClick={() => handleChange('technology')}>Technology</li>
        <li className='topic' onClick={() => handleChange('business')}>Business</li>
        <li className='topic' onClick={() => handleChange('science')}>Science</li>
        <li className='topic' onClick={() => handleChange('entertainment')}>Entertainment</li>
        <li className='topic' onClick={() => handleChange('sports')}>Sports</li>
      </ul>
    </div>
  )
}

export default TopicsMobile;