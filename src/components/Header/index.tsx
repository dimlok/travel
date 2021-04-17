import styled from "styled-components";
import { Wrapper } from "../../style/baseReact.tsx";
import { ReactComponent as LogoSvg } from "../../shared/svg/odigologo.svg";
import Navigation from "./components/Navigation";
import ListItemJson from "./components/ListItem";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const HeaderWrapper = styled.div`
  padding-top: 56px;
  display: flex;
  justify-content: space-between;
  color: white;
  justify-items: center;
  align-items: center;
`;

const Logo = styled(LogoSvg)``;
interface HeaderProps {}

export default function Header(props: HeaderProps) {
  return (
    <Container>
      <Wrapper>
        <HeaderWrapper>
          <Logo />
          <Navigation data={ListItemJson} />
        </HeaderWrapper>
      </Wrapper>
    </Container>
  );
}
