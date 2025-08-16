import React, { useState } from "react";
import ProductCard from "./ProductCard";
import SearchBox from "./SearchBox";
import Dropdown from "./Dropdown";

const sortList = ["Popularity", "Price Low to High", "Price High to Low"];

export default function ProductListings({ products }) {
  const [searchText, setSearchText] = useState(""); // handles changes in input search
  const [sortType, setPopularity] = useState("Popularity"); // handles changes in filter sort by

  function handleSearchChange(inputSearch) {
    setSearchText(inputSearch);
    console.log(inputSearch);
  }

  function handleSortChange(sortType) {
    setPopularity(sortType);
    console.log(sortType);
  }

  let filteredAndSortedProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchText.toLowerCase()) ||
      product.description.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  switch (sortType) {
    case "Price Low to High":
      filteredAndSortedProducts = filteredAndSortedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      break;
    case "Price High to Low":
      filteredAndSortedProducts = filteredAndSortedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      break;
    case "Popularity":
    default:
      filteredAndSortedProducts = filteredAndSortedProducts.sort((a, b) => parseInt(a.popularity) - parseInt(b.popularity));
      break;
  }

  return (
    <div className="product-listings-container">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-12">
        <SearchBox
          label="Search  "
          placeholder="Search products..."
          value={searchText}
          handleSearchChange={(value) => handleSearchChange(value)}
        />
        <Dropdown
          label="Sort by  "
          options={sortList}
          handleSortChange={(value) => handleSortChange(value)}
        />
      </div>
      <div className="product-listings-grid">
        {filteredAndSortedProducts.length > 0 ? (
          filteredAndSortedProducts.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))
        ) : (
          <p className="page-listings-empty"> No products found</p>
        )}
      </div>
    </div>
  );
}
