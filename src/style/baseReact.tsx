import styled, {css} from "styled-components";

export const Wrapper = styled.div`
  max-width: 1060px;
  margin: 0 auto;
`;

export const rootFontSize = css`
  html {
    font-size: 10px;
  }
  @media only screen and (max-width: 750px) {
    html {
      font-size: 8.6px;
    }
  }
`;
