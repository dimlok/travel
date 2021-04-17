import styled from "styled-components";

interface InputProps {
  type?: string;
  size?: number;
  width?: number;
}

export const Input = styled.input.attrs((props: InputProps) => ({
  type: props.type || "text",
  size: props.size || 1,
  width: props.width || 200
}))`
  width: ${(props) => `${props.width}px`};
  margin: ${(props) => `${props.size}em`};
  padding: ${(props) => `${props.size}em`};
`;
