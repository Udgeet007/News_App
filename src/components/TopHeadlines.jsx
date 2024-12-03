import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const TopHeadlines = () => {
  const [allHeadNews, setAllHeadNews] = useState([]);
  console.log(allHeadNews);
  async function getAllNews() {
   try{
    let res = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=a7a75732ba03418fa9abe248ebfa952f"
    );
    setAllHeadNews(res.data.articles);
   }catch(error){
    console.log(error.message);
   }
  }

  useEffect(() => {
    getAllNews();
  }, []);
  return (
    <div>
     {
      allHeadNews.map((news)=>{
        return news.urlToImage && <div key={news.index} className="border flex flex-col justify-between py-0 px-3 border-spacing-1 border-gray-400  lg:col-span-3  md:col-span-4 sm:col-span-6 col-span-12">
          <img src={news.urlToImage} alt="" />
          <h1 className="font-bold my-2">{news.title}</h1>
          <Link to={news.url} className="my-2 text-white hover:text-black bg-emerald-900 px-4 py-2 rounded-md hover:bg-emerald-500">View Full News</Link>
          </div>
     }) 
    }
    </div>
  )
}

export default TopHeadlines
