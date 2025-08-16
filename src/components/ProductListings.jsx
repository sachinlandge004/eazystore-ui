import React, { useState } from "react";
import ProductCard from "./ProductCard";
import SearchBox from "./SearchBox";
import Dropdown from "./Dropdown";

const sortList = ["Popularity", "Price Low to High", "Price High to Low"];

export default function ProductListings({ products }) {

  const [searchText, setSearchText] = useState('');// handles changes in input search

  function handleSearchChange(inputSearch) {
    setSearchText(inputSearch);
    console.log(inputSearch);

  }

  let filteredAndSortedProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchText.toLowerCase()) ||
           product.description.toLowerCase().includes(searchText.toLowerCase());
  });

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
