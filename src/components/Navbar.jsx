import { useContext, useRef, useState } from "react";
import SearchContext from "../context/SearchContext";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const searchRef = useRef();
  const ctx = useContext(SearchContext);
  const ctx1 = useContext(UserContext);
  console.log(ctx1.logout);
  let login = ctx1.user.login;

  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the large screen menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for the mobile menu

  const handleSearch = () => {
    const value = searchRef.current.value;
    ctx.setSearch(value);
  };

  const toggleLargeMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <nav className="fixed left-0 top-0 z-50  bg-orange-300 w-full flex justify-between items-center mx-auto px-8 h-20">
        <div className="inline-flex">
          <h1 className="font-bold text-xl">AIR News</h1>
        </div>
        {/* Search bar */}
        <div className="hidden md:block flex-shrink flex-grow-0 justify-start px-2 mx-auto">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center max-w-full">
              <input
                type="text"
                ref={searchRef}
                className="border-2 rounded-md py-2 px-3 outline-none border-gray-400"
                placeholder="search a news...."
              />
              <button
                onClick={handleSearch}
                className="bg-green-800 text-white hover:text-black px-4 py-2 rounded-md hover:bg-green-500 mx-2"
              >
                search
              </button>
            </div>
          </div>
        </div>
        {/* Categories */}
        <div className="mx-auto md:block hidden">
          <ul className="flex gap-4">
            <li
              onClick={() => ctx.setSearch("crime")}
              className="font-bold hover:underline cursor-pointer"
            >
              Crime
            </li>
            <li
              onClick={() => ctx.setSearch("finance")}
              className="font-bold  hover:underline cursor-pointer"
            >
              Finance
            </li>
            <li
              onClick={() => ctx.setSearch("sports")}
              className="font-bold  hover:underline cursor-pointer"
            >
              Sports
            </li>
            <li
              onClick={() => ctx.setSearch("entertainment")}
              className="font-bold  hover:underline cursor-pointer"
            >
              Entertainment
            </li>
          </ul>
        </div>
        <div className="block relative">
          <button
            type="button"
            className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full relative "
          >
            <div className="flex items-center h-5">
              <div className="_xpkakx">
                <svg
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: "block",
                    height: 16,
                    width: 16,
                    fill: "currentcolor",
                  }}
                >
                  <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z" />
                </svg>
              </div>
            </div>
          </button>
        </div>
        {/* Large screen toggle menu */}

        <div className="relative hidden md:block">
          <button onClick={toggleLargeMenu}>
            <div className="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  height: "100%",
                  width: "100%",
                  fill: "currentcolor",
                }}
              >
                <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z" />
              </svg>
            </div>
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
              <ul className="py-2">
                {login === true && (
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link to={"/dashboard"}> Dashboard</Link>
                  </li>
                )}

                {login === false && (
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link to={"/register"}> Signup</Link>
                  </li>
                )}

                {login === false && (
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link to={"/login"}> Login</Link>
                  </li>
                )}

                {login === true && (
                  <li
                    onClick={() => ctx1.logout()}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <Link to={"/login"}> Logout</Link>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
        {/* Mobile menu toggle */}
        <div className="md:hidden block relative">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex items-center px-2 border rounded-full hover:shadow-lg"
          >
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                fill: "none",
                height: 16,
                width: 16,
                stroke: "currentcolor",
                strokeWidth: 3,
                overflow: "visible",
              }}
            >
              <g fill="none" fillRule="nonzero">
                <path d="m2 16h28" />
                <path d="m2 24h28" />
                <path d="m2 8h28" />
              </g>
            </svg>
          </button>
          {mobileMenuOpen && (
            <div className="absolute left-0 top-full w-full p-3 bg-green-500">
              <div className="flex sm:flex-row flex-col items-center max-w-full mx-auto">
                <input
                  type="text"
                  ref={searchRef}
                  className="border-2 rounded-md py-2 px-3 outline-none border-gray-400"
                  placeholder="search a news...."
                />
                <button
                  onClick={handleSearch}
                  className="bg-green-800 text-white hover:text-black px-4 py-2 rounded-md hover:bg-green-500 mx-2"
                >
                  search
                </button>
              </div>
              <ul className="flex flex-col gap-4 mt-4">
                <li
                  onClick={() => ctx.setSearch("crime")}
                  className="text-center border-b-2 border-gray-400 font-bold cursor-pointer"
                >
                  Crime
                </li>
                <li
                  onClick={() => ctx.setSearch("finance")}
                  className="text-center border-b-2 border-gray-400 font-bold cursor-pointer"
                >
                  Finance
                </li>
                <li
                  onClick={() => ctx.setSearch("sports")}
                  className="text-center border-b-2 border-gray-400 font-bold cursor-pointer"
                >
                  Sports
                </li>
                <li
                  onClick={() => ctx.setSearch("entertainment")}
                  className="text-center border-b-2 border-gray-400 font-bold cursor-pointer"
                >
                  Entertainment
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;


