import { FC } from "react";
import { ProductDisplayProps } from "./types";

export const ProductDisplay: FC<ProductDisplayProps> = (props) => {
  const {
    label,
    product: { title, thumbnail, description },
  } = props;

  return (
    <div className="w-full mt-5">
      <span className="text-xl">{label}</span>
      <div className="flex w-full gap-3 mt-2">
        <div>
          <img
            src={thumbnail}
            alt="Product image"
            className="rounded-lg shadow"
          />
        </div>
        <div className="flex flex-col justify-between py-2">
          <div>
            <p className="text-lg">{title}</p>
            <p className="">{description}</p>
          </div>
          <div>SEE</div>
        </div>
      </div>
    </div>
  );
};
