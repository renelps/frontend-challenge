import { FilterType } from "@/types/filter-types";
import { PriorityTypes } from "@/types/priority-types";

export function getCategoryByType(type: FilterType){
    if(type == FilterType.MUG) return "mugs"
    if(type == FilterType.SHIRT) return "t-shirts"
    return ""
}

export function getFieldByPriority(priority: PriorityTypes){
    if(priority === PriorityTypes.NEWS) return {field: "created_at", order: "ASC"}
    if(priority === PriorityTypes.BIGGEST_PRICE)  return {field: "price_in_cents", order: "ASC"}
    if(priority === PriorityTypes.MINOR_PRICE) return {field: "price_in_cents", order: "ASC"}
    return {field: "sales", order: "DSC"}
}

