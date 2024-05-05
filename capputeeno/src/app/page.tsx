"use client"
import styles from "./page.module.css";
import { FilterBar } from "@/components/filter-bar";
import { ProductsList } from "@/components/products-list";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import styled from "styled-components";

const FilterContainer = styled.main`
  display: flex;
  width: 100%;
  align-items: start;
`
export default function Home() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <main className={styles.main}>
        <FilterBar />
        <ProductsList />
      </main>
    </QueryClientProvider>

  );
}
