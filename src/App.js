import styled from "styled-components";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Page = styled.div``;

export default function App() {
  return (
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
  );
}
