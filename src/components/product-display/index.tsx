import { FC } from "react";
import { ProductDisplayProps } from "./types";
import { Link, useNavigate } from "react-router-dom";

export const ProductDisplay: FC<ProductDisplayProps> = (props) => {
  const {
    label,
    product: { title, thumbnail, description, category, id },
  } = props;

  const navigate = useNavigate();

  const productUrl = `product/${id}`;
  const categoryUrl = `category/${category}`;

  const goToProduct = () => {
    navigate(productUrl);
  };

  return (
    <div className="w-full mt-5">
      <span className="text-xl">{label}</span>
      <div className="flex w-full gap-3 mt-2">
        <div>
          <img
            src={thumbnail}
            alt="Product image"
            className="transition-shadow rounded-lg shadow cursor-pointer hover:shadow-2xl"
            onClick={goToProduct}
          />
        </div>
        <div className="flex flex-col justify-between py-2">
          <div>
            <p className="flex items-center text-lg">
              {title}
              <Link
                className="px-1 ml-2 text-sm transition-all rounded-full bg-emerald-200 text-emerald-700 hover:bg-emerald-300 hover:text-emerald-800 hover:scale-105"
                to={categoryUrl}
              >
                {category}
              </Link>
            </p>
            <p className="">{description}</p>
          </div>
          <Link to={productUrl}> SEE </Link>
        </div>
      </div>
    </div>
  );
};
