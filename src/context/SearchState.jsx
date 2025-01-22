/* eslint-disable react/prop-types */

import { useState } from "react"
import SearchContext from "./SearchContext"

const SearchState = (props) => {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <SearchContext.Provider value={{search,setSearch}}>
      {props.children}
    </SearchContext.Provider>
  )
}

export default SearchState
