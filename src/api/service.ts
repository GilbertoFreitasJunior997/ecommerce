import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./axios";
import { ApiResponse } from "./api-responses";
import { CATEGORIES } from "./categories";

const productsQueryKey = ["products"];

const fetchAllProducts = async () =>
  (await axiosInstance.get<ApiResponse>("")).data.products;
export const useGetAllProducts = () => {
  return useQuery({
    queryFn: fetchAllProducts,
    queryKey: productsQueryKey,
  });
};

const fetchLimitProducts = async (limit: number) =>
  (await axiosInstance.get<ApiResponse>(`?limit=${limit || 0}`)).data.products;
export const useGetLimitProducts = (limit: number) => {
  return useQuery({
    queryFn: ({ queryKey }) => fetchLimitProducts(parseInt(`${queryKey[1]}`)),
    queryKey: [...productsQueryKey, limit],
  });
};

const PAGE_SIZE = 10;

const fetchPaginatedProducts = async (page: number) =>
  (
    await axiosInstance.get<ApiResponse>(
      `?limit=${PAGE_SIZE}&skip=${(page - 1) * PAGE_SIZE}`
    )
  ).data;
export const useGetPaginatedProducots = (page: number) => {
  return useQuery({
    queryFn: () => fetchPaginatedProducts(page),
    queryKey: [...productsQueryKey, page],
  });
};

const categoriesQueryKey = ["categories"];

const fetchCategories = async () =>
  (await axiosInstance.get<string[]>("/categories")).data;
export const useGetCategories = () => {
  return useQuery({
    queryFn: fetchCategories,
    queryKey: categoriesQueryKey,
    initialData: [...CATEGORIES],
  });
};

const fetchProductsByCategory = async (category: string) =>
  (await axiosInstance.get<ApiResponse>(`/category/${category}`)).data.products;
export const useGetProductsByCategory = (category: string) => {
  return useQuery({
    queryFn: () => fetchProductsByCategory(category),
    queryKey: [...categoriesQueryKey, category],
  });
};
