"use client"
import styled from "styled-components";
import { FilterByPriority } from "./filter-by-priority";
import { FilterByType } from "./filter-by-type";

interface FilterBarProps {

}
const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
  justify-content: space-between;
`

export function FilterBar(props: FilterBarProps) {
  return (
    <FilterContainer>
      <FilterByType />
      <FilterByPriority />
    </FilterContainer>
  )
}