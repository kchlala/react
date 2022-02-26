import React, { useEffect, useState } from 'react'
import storeApi from '../api/storeApi'

const Home = () => {
    const [news, setNews] = useState(null)
    useEffect(() => {
        storeApi.getNews().then(l=>setNews(l))
  }, [])
    
    console.log(news);

  return (
    <div>   
{
    news!==null && news.articles.length>0 ? (
        news.articles.map(m=>(
            <div className=" container-fluid ">
         <div className="d-flex justify-content-between">
             <div className="col-lg-4">
            <h4>{m.title}</h4>
            <img src={m.urlToImage} alt="" className='img-fluid' />
            </div>
            </div>
            </div>
        ))
    ) : (null)
}

    </div>
  )
}

export default Home