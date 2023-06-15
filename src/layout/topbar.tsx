import { Icon } from "../components/icon";

export const Topbar = () => {
  return (
    <header className="flex items-center justify-between w-full px-5 py-3 shadow bg-gray-50 text-emerald-600">
      <div className="text-2xl font-bold tracking-wide text-inherit">
        E-Commerce
      </div>
      <div className="h-6 text-inherit">
        <Icon name="shopping_cart" />
      </div>
    </header>
  );
};
