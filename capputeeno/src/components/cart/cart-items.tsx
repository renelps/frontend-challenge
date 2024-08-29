import { ProductInCart } from "@/types/product"
import { formatPrice } from "@/utils/format-price"
import styled from "styled-components"

interface CartItemsProps {
  product: ProductInCart
}

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 210px;

  border-radius: 8px;
  background-color: white;
  img {
    max-height: 100%;
    width: 256px;
    border-radius: 8px 0 0 8px;
  }
  > div {
    display: flex;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    flex-direction: column;
    padding: 16px 24px;
    line-height: 150%;
    color: var(--text-dark-2);
    h4 {
      font-weight: 300;
      font-size: 20px;
    }
    
    p {
      font-weight: 150%;
      font-size: 12px;
    }
    div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        font-weight: 600;
        font-size: 16px;
        color: var(--shapes-dark);
      }
    }
  }
`

export function CartItems({ product }: CartItemsProps){
  return (
    <Item>
      <img src={product.image_url}/>
      <div>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <div>
          <select>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <span>{formatPrice(product.price_in_cents)}</span>
        </div>
      </div>
    </Item>
  )
}