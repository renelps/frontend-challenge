"use client"
import { useProducts } from "@/Hooks/useProducts"

interface ProductsListProps {

}

export function ProductsList(props: ProductsListProps) {
  const { data } = useProducts()
  return (
    <></>
  )
}