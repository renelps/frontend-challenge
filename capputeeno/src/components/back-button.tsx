import styled from "styled-components";
import { BackIcon } from "./icons/back-icon";
import { useRouter } from "next/navigation";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px; 
  background: transparent;
  border: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  color: var(--secundary-text);
  cursor: pointer;
`
interface BtnProps {
  navigate: string
}

export function BackBtn({ navigate }: BtnProps) {
  const router = useRouter();
  const handleNavigate = () => {
    router.push(navigate)
  }
  return (
    <Button onClick={handleNavigate}>
      <BackIcon />
      Voltar
    </Button>
  )
}