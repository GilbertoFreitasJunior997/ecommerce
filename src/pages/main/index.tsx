import { useGetLimitProducts } from "../../api/service";
import { Banner } from "../../components/banner";
import { CategorySelector } from "../../components/category-selector";
import { ProductDisplay } from "../../components/product-display";

export const MainPage = () => {
  const { data: products } = useGetLimitProducts(1);

  return (
    <div>
      <Banner />
      {products?.[0] && (
        <ProductDisplay label="You may like" product={products[0]} />
      )}
      <CategorySelector />
    </div>
  );
};
