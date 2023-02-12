import React from 'react'

const SearchBox=(props)=>{
  return (
    <input onChange={props.data} onKeyPress={props.data} className="search-box" type="text" maxLength="20" placeholder="Search for items!"/>
  )
}
export default SearchBox;
