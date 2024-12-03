import axios from "axios";
import { useEffect, useState } from "react";
import Newscomponent from "../components/Newscomponent";
import TopHeadlines from "../components/TopHeadlines";

const Home = () => {
  const [allNews, setAllNews] = useState([]);
  console.log(allNews);
  async function getAllNews() {
    let res = await axios.get(
      "https://newsapi.org/v2/everything?q=world&apiKey=a7a75732ba03418fa9abe248ebfa952f"
    );
    // console.log(res.data.articles);
    setAllNews(res.data.articles);
    // let data = await res.json();
  }

  useEffect(() => {
    getAllNews();
  }, []);
  return (
    <div className="px-5 grid grid-cols-12  gap-3">
      {/* <h1>This is Home Page! </h1> */}
      <div className=" px-5 col-span-9">
        <Newscomponent AllNews={allNews} />
      </div>
      <div className="bg-red-300 col-span-3 rlative">
        <div className="topHeadlines absolute">
          <TopHeadlines />
        </div>
      </div>
    </div>
  );
};

export default Home;
