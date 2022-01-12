import React, {useState} from "react";
import './SearchBar.css'

// const products = [
//   "tooth paste",
//   "tooth brush",
//   "mouth wash",
//   "dental floss",
//   "mouth guard"
// ]

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("")

  const handleInputChange = (event) => {
    setSearchValue(event.target.value)
  }

  const handleClearClick = () => {
    setSearchValue("") //state
  }

  const shouldDisplayButton = searchValue.length > 0

  const filteredProducts = props.products.filter((product) => {
      return product.includes(searchValue)
  })

  return (
    <div>
        <input type="text" value={searchValue} onChange={handleInputChange}/>
        {shouldDisplayButton && <button onClick={handleClearClick}>clear</button>} {/*short circuiting/conditional rendering*/}

        <ol>
        {filteredProducts.map((product)=>{
          return <li key={product}>{product}</li>
        })}
        </ol>
    </div>
  )
}

export default SearchBar