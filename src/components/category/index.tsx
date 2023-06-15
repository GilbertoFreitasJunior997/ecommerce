import { FC } from "react";
import { CategoryProps } from "./types";
import { useNavigate } from "react-router-dom";
import { CATEGORIES_ICONS, CategoriesIcons } from "../category-selector/consts";
import { Icon } from "../icon";

export const Category: FC<CategoryProps> = (props) => {
  const { name } = props;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`category/${name}`);
  };

  const icon = CATEGORIES_ICONS[name as keyof CategoriesIcons] || undefined;
  const displayText = name.replace(/\-/g, " ");

  return (
    <li
      onClick={handleClick}
      className="flex flex-col items-center justify-center w-full transition-all rounded cursor-pointer aspect-square bg-gray-50 hover:scale-105 hover:bg-emerald-600 group"
    >
      {icon && (
        <div className="text-emerald-600 group-hover:text-gray-50">
          <Icon name={icon} />
        </div>
      )}
      <div className="capitalize group-hover:text-gray-50">{displayText}</div>
    </li>
  );
};
