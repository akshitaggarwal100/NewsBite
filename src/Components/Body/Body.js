import './body.css'
import Spinner from './spinner.gif';
import { GoAlert } from 'react-icons/go'

function Body(props) {
  const newsCards = props.news.map(newsA => newsA.urlToImage && <div className="card" key={newsA.publishedAt + newsA.author}>
    <div className="content">
      <h3>{newsA.title}</h3>
      <p>{newsA.content ? newsA.content.slice(0, 197) : newsA.description.slice(0, 197)} <a href={newsA.url} target='_blank'>Read More...</a></p>
    </div>
    <img src={newsA.urlToImage} alt={newsA.title} className='img' />
  </div>)
  return (
    // props.isLoading ? <img src={Spinner} className='spinner' /> : <main id='newsContainer'>{newsCards.length ? newsCards : <GoAlert className='noNews' />}</main>
    props.isLoading ? <img src={Spinner} className='spinner' /> : newsCards.length ? <main id='newsContainer'>{newsCards}</main> :
      <div className='noNewsWrapper'>
        <div className='noNews'>
          <GoAlert className='noNewsIcon' />
          <h1 className='noNewsHeading'>no news available</h1>
        </div>
      </div>
  )
}

export default Body;