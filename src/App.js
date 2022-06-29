import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import { useEffect, useState } from 'react';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  function fetchInitNews() {
    fetch(`https://newsapi.org/v2/top-headlines?country=${search.country}&apiKey=fef169e38cc44118b7b62f1dd75ebb9c`)
      .then(result => result.json())
      .then(data => {
        setIsLoading(false);
        setNews(data.articles);
      })
  }

  useEffect(fetchInitNews, []);

  const [news, setNews] = useState([]);
  const [search, setSearch] = useState({ country: 'in', keyword: '', topic: 'general' });


  function handleSearch({ search, country }) {
    fetch(`https://newsapi.org/v2/top-headlines?country=${country}&q=${search}&apiKey=fef169e38cc44118b7b62f1dd75ebb9c`)
      .then(result => result.json())
      .then(data => {
        setNews(data.articles);
        setSearch({ keyword: search, country });
      })
  }

  function handleKeyword(keyword) {
    setSearch({ ...search, keyword });
  }

  function handleTopic(topic) {
    fetch(`https://newsapi.org/v2/top-headlines?country=${search.country}&category=${topic}&apiKey=fef169e38cc44118b7b62f1dd75ebb9c`)
      .then(result => result.json())
      .then(data => {
        setNews(data.articles);
        setIsLoading(false);
        setSearch({ ...search, keyword: '', topic })
      })
  }

  return (
    <>
      <Header keyword={search.keyword} handleKeyword={handleKeyword} handleSearch={handleSearch} handleTopic={handleTopic} topic={search.topic} />
      <Body isLoading={isLoading} news={news} />
    </>
  );
}

export default App;