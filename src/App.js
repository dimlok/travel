import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled, { createGlobalStyle } from 'styled-components';
import {rootFontSize} from "./style/baseReact";

const Page = styled.div``;
const Style = createGlobalStyle`
  ${rootFontSize}
`;
export default function App() {
  return (
      <>
      <Style/>
      <Page>
        <Router>
          <Header />
          <Content />
          <Footer />
          <Route exact path="/" component={() => <div>test/</div>} />
          <Route path="/articles" component={() => <div>Article/</div>} />
          <Route path="/locations" component={() => <div>locations</div>} />
        </Router>
      </Page>
      </>
  );
}
