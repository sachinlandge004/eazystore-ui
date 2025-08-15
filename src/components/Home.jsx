import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
import apiClient from "../api/apiClient"; 
import { useEffect, useState } from "react";

export default function Home() {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  },[])

  const fetchProducts = async () => {
    try {
      const response = await apiClient.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="home-container">
      <PageHeading title="Expolre Eazy Stickers!">
        Add touch of creativity to your sapce with our wide range of fun and
        unique stickers. Perfect for any occasion.
      </PageHeading>

      <ProductListings products={products} />
    </div>
  );
}
