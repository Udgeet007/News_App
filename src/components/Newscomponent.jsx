/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"


const Newscomponent = (props) => {

  return (
    <div>
        <div className="grid grid-cols-12 gap-5">
      {
        props.AllNews.map((news)=>{
          return news.urlToImage && <div key={news.index} className="border flex flex-col justify-between py-0 px-3 border-spacing-1 border-gray-400  lg:col-span-3  md:col-span-4 sm:col-span-6 col-span-12">
            <img src={news.urlToImage} alt="" />
            <h1 className="font-bold my-2">{news.title}</h1>
            <h1 className="my-1">Author:<small>{news.author}</small></h1>
            <h1 className="my-1 ">Published: <span>{news.publishedAt}</span></h1>
            <Link to={news.url} className="my-2 text-white hover:text-black bg-emerald-900 px-4 py-2 rounded-md hover:bg-emerald-500">View Full News</Link>
          </div>
        })
      }
      </div> 
    </div>
  )
}

export default Newscomponent
