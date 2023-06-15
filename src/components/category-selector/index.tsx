import { useGetCategories } from "../../api/service";
import { Category } from "../category";

export const CategorySelector = () => {
  const { data } = useGetCategories();

  return (
    <div className="mt-5">
      <h3 className="mb-2 text-xl">Categories</h3>
      <ul className="grid grid-cols-4 gap-1 md:grid-cols-5 lg:grid-cols-8 ">
        {data.map((category) => (
          <Category key={category} name={category} />
        ))}
      </ul>
    </div>
  );
};
