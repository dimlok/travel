import styled from "styled-components";

export const Button = styled.button.attrs((props) => ({
  type: "type" in props ? props.type : "button"
}))`
  appearance: none;
  padding: 0;
  margin: 0;
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-weight: inherit;
  font-style: inherit;
  font-size: inherit;
  color: inherit;
  text-transform: inherit;
  line-height: inherit;
`;
