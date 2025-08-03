import PageHeading from "./PageHeading";
import products from "../data/products";
import ProductListings from "./ProductListings";

export default function Home() {
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
