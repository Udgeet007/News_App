import axios from "axios";
import "../App.css";
import { useContext, useEffect, useState } from "react";
import Newscomponent from "../components/Newscomponent";
import TopHeadlines from "../components/TopHeadlines";
import SearchContext from "../context/SearchContext";
import Pagination from "../components/Pagination";

const Home = () => {
  let ctx = useContext(SearchContext);
  console.log(ctx.search);

  const [allNews, setAllNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const itemsPerPage = 8; // Number of items per page

  async function getAllNews() {
    // Use environment variable for API key
    const apiKey = import.meta.env.VITE_NEWS_API_KEY;

    console.log(apiKey); // Debug to check if API key is loaded
    try {
      let res = await axios.get(
        `https://newsapi.org/v2/everything?q=${
          ctx.search ? ctx.search : "world"
        }&apiKey=${apiKey}`
      );
      setAllNews(res.data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  }

  useEffect(() => {
    getAllNews();
  }, [ctx.search]);

  // Pagination logic
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentNews = allNews.slice(firstIndex, lastIndex);

  return (
    <div className="px-5 grid grid-cols-12 gap-3">
      <div className="px-5 sm:col-span-9 col-span-12">
        <Newscomponent AllNews={currentNews} />
      </div>

      <div className="bg-red-500 col-span-3 md:w-auto max-h-screen w-[250px] sm:block hidden relative overflow-hidden">
        <h1 className="absolute top-0 left-0 bg-black w-full p-3 text-center font-bold overflow-hidden text-white z-10">
          Top Headlines
        </h1>
        <div className="topHeadlines absolute">
          <TopHeadlines />
        </div>
      </div>
      <div className="col-span-12 flex justify-center my-5">
        <Pagination
          newsArr={allNews}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Home;



// import axios from "axios";
// import "../App.css";
// import { useContext, useEffect, useState } from "react";
// import Newscomponent from "../components/Newscomponent";
// import TopHeadlines from "../components/TopHeadlines";
// import SearchContext from "../context/SearchContext";
// import Pagination from "../components/Pagination";
// import dotenv from "dotenv";
// dotenv.config();


// const Home = () => {
//   let ctx = useContext(SearchContext);
//   console.log(ctx.search);
//   const [allNews, setAllNews] = useState([]);
//   console.log(allNews);
//   const [currentPage,setCurrentPage] = useState(1); //Track the current Page
//   const itemsPerPage = 8;  //Number of Items Per Page. 
//   // console.log("arrSize:",allNews.length);
//   async function getAllNews() {
//     const apiKey = import.meta.env.VITE_NEWS_API_KEY;

//     console.log(apiKey)
//     let res = await axios.get(
//       `https://newsapi.org/v2/everything?q=${
//         ctx.search ? ctx.search : "world"
//       }&apiKey=${apiKey}`
//     );
//     // console.log(res.data.articles);
//     setAllNews(res.data.articles);
//     // let data = await res.json();
//   }

//   useEffect(() => {
//     getAllNews();
//   }, [ctx.search]);

//   // Pagination Logic: Determine the news to display on the current Page.
//   const lastIndex = currentPage*itemsPerPage;
//   console.log(lastIndex);
//   const firstIndex = lastIndex - itemsPerPage;
//   console.log(firstIndex);
//   const currentNews = allNews.slice(firstIndex, lastIndex);
//   // console.log(currentNews);
//   return (
//     <div className="px-5 grid grid-cols-12  gap-3">
//       {/* <h1>This is Home Page! </h1> */}
//       <div className=" px-5 sm:col-span-9 col-span-12">
//         <Newscomponent AllNews={currentNews} />
//       </div>

//       <div className="bg-red-500 col-span-3 md:w-auto max-h-screen w-[250px]  sm:block hidden relative overflow-hidden">
//         <h1 className="absolute top-0 left-0 bg-black w-full p-3 text-center font-bold overflow-hidden text-white z-10">
//           Top Headlines
//         </h1>
//         <div className="topHeadlines absolute">
//           <TopHeadlines />
//         </div>
//       </div>
//       <div className="col-span-12 flex justify-center my-5">
//         <Pagination  newsArr={allNews} itemsPerPage={itemsPerPage} onPageChange={setCurrentPage}/>
//       </div>
//     </div>
//   );
// };

// export default Home;
