import { ProductsFetchResponse } from "@/types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import { FilterType } from "@/types/filter-types";
import { getCategoryByType, getFieldByPriority } from "@/utils/graphql-filters";  //getCategoryByType, getFieldByPriority
import { PriorityTypes } from "@/types/priority-types";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;
const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(API_URL, { query })
}

export const mountQuery = (type: FilterType, priority: PriorityTypes) => {
  if(type === FilterType.ALL && priority === PriorityTypes.POPULARITY) return `query {
      allProducts(sortField: "sales", sortOrder: "DSC") {
        id
        name
        price_in_cents
        image_url
      }
    }
  `
  const sortSettings = getFieldByPriority(priority)
  const categoryFilter = getCategoryByType(type)
  return `
  query {
      allProducts(sortField: "${sortSettings.field}", sortOrder: "${sortSettings.order}", ${categoryFilter ? `filter: { category: "${categoryFilter}"}`: ''}) {
        id
        name
        price_in_cents
        image_url
        category
      }
    }
  `
}
export function useProducts() {
  const { type, priority } = useFilter();
  const query = mountQuery(type, priority);

  const { data } = useQuery({
    queryFn: () => fetcher(query),
    queryKey: ['products', type, priority]    
  })
  return {
    data: data?.data?.data?.allProducts
  }
}