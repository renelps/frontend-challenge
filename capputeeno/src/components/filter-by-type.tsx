"use client"
import { useFilter } from "@/Hooks/useFilter";
import { FilterType } from "@/types/filter-types";
import styled from "styled-components"

interface FilterItemsProps {
  selected: boolean;
}

const FilterList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  justify-content: center;
  gap: 40px;
`
const FilterItem = styled.li<FilterItemsProps>`
    font-family: inherit;
    font-weight: ${props => props.selected ? '600' : '400'};
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    text-transform: uppercase;
    color: var(--text-dark);
    cursor: pointer;

    border-bottom: ${props => props.selected ? '4px solid var(--orange-low)' : ''};

    @media (min-width: ${props => props.theme.desktopBreakPoint}) {
      font-size: 16px;
      line-height: 22px;
    }

`
export function FilterByType(){
  const {type, setType} = useFilter()

  const handleChangeType = (value: FilterType) => {
    setType(value)
  }
  return (
    <FilterList>
      <FilterItem selected={type === FilterType.ALL} 
        onClick={() => handleChangeType(FilterType.ALL)}
        >
          Todos os produtos
      </FilterItem>
      <FilterItem selected={type === FilterType.SHIRT} 
      onClick={() => handleChangeType(FilterType.SHIRT)}
      >
        Camisetas
      </FilterItem>
      <FilterItem selected={type === FilterType.MUG} 
      onClick={() => handleChangeType(FilterType.MUG)}
      >
        Canecas
      </FilterItem>
    </FilterList>
  )
}
