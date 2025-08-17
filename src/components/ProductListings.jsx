import React, { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import SearchBox from "./SearchBox";
import Dropdown from "./Dropdown";

const sortList = ["Popularity", "Price Low to High", "Price High to Low"];

export default function ProductListings({ products }) {
  const [searchText, setSearchText] = useState(""); // handles changes in input search
  const [sortType, setPopularity] = useState("Popularity"); // handles changes in filter sort by

  let filteredAndSortedProducts =  useMemo(() => {
    let filteredProducts = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchText.toLowerCase()) ||
        product.description.toLowerCase().includes(searchText.toLowerCase())
      );
    });

    return filteredProducts.slice().sort((a, b) => {
      switch (sortType) {
        case "Price Low to High":
          return parseFloat(a.price) - parseFloat(b.price);
        case "Price High to Low":
          return parseFloat(b.price) - parseFloat(a.price);
        case "Popularity":
        default:
          return parseInt(b.popularity) - parseInt(a.popularity);
      }
    });
  }, [products, searchText, sortType]);

  function handleSearchChange(inputSearch) {
    setSearchText(inputSearch);
    console.log(inputSearch);
  }

  function handleSortChange(sortType) {
    setPopularity(sortType);
    console.log(sortType);
  }


  return (
    <div className="product-listings-container">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-12">
        <SearchBox
          label="Search  "
          placeholder="Search Stickers..."
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
