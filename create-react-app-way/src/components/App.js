import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import CountButton from "./CountButton/CountButton";
import Button from "./Button/Button";

// const products = [
//   "tooth paste",
//   "tooth brush",
//   "mouth wash",
//   "dental floss",
//   "mouth guard"
// ]
const App = () => {
	const [productsState, setProductsState] = useState([]);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products") //fetching data from API
			.then((res) => res.json())
			.then((productsArray) => {
				const newProductsState = productsArray.map((product) => {
					return product.title;
				});
				setProductsState(newProductsState);
			});

		// setTimeout(() => {
		//     setProductsState([
		//         "tooth paste",
		//         "tooth brush",
		//         "mouth wash",
		//         "dental floss",
		//         "mouth guard",
		//     ])
		// }, 2000)
	}, []);

	const hasProducts = productsState.length > 0;

	return (
		<div>
			{/* TURINARY OPERATOR BELOW.. instead of loading you can put loading giff there*/}
			{hasProducts ? <SearchBar products={productsState} /> : "Loading..."}

			{/* <SearchBar products={[
                "hat",
                "gloves",
                "scarf"
            ]}/> */}

			<CountButton incrementBy={1} buttonColor={"blue"} />
			<CountButton incrementBy={5} buttonColor={"green"} />
			<CountButton incrementBy={7} buttonColor={"yellow"} />
			<Button>Subscribe</Button>
			<Button>Post</Button>
			<Button>Send</Button>
		</div>
	);
};

export default App;

//props is a value that you pass into a component to inform what it does e.g. incrementBy
