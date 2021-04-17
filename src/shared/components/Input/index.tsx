import { ReactNode } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
`;

interface InputElementProps {
  type?: string;
  size?: number;
  width?: number;
}

const InputElement = styled.input.attrs((props: InputElementProps) => ({
  type: props.type || "text",
  size: props.size || 1,
  width: props.width || 200
}))`
  background-color: transparent;
  border: 0px;
  color: white;
  border-bottom: 1px solid white;
  width: ${(props) => `${props.width}px`};
  margin: ${(props) => `${props.size}em`};
  padding: ${(props) => `${props.size}em`};
`;

interface InputProps {
  icon?: ReactNode;
  placeholder: string;
}
export default function Input({ icon, placeholder }: InputProps) {
  return (
    <InputContainer>
      {icon}
      <InputElement placeholder={placeholder} />
    </InputContainer>
  );
}
