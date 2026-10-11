import styled from "styled-components";

const Container = styled.header`
  width: min(${({ theme }) => theme.layout.maxWidth}, calc(100% - 64px));
  margin: auto;
  height: 102px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  position: relative;
  z-index: 2;
  @media (max-width: 760px) {
    width: calc(100% - 38px);
    height: 76px;
  }
`;
const Brand = styled.a`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 10px;
  font-weight: 800;
  line-height: 1.23;
  letter-spacing: 0.15em;
  span:first-child {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    border: 1px solid #b887ff;
    border-radius: 50%;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 11px;
    letter-spacing: -1px;
    box-shadow: inset 0 0 13px #8f3fff80;
  }
`;
const Navigation = styled.nav`
  display: flex;
  gap: 34px;
  a,
  + a {
    color: #d8d0e5;
    text-decoration: none;
    font-size: 12px;
    font-weight: 600;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.violet};
  }
  @media (max-width: 760px) {
    display: none;
  }
`;
const ExternalLink = styled.a`
  color: #d8d0e5;
  text-decoration: none;
  font-size: 12px;
  font-weight: 600;
  &:hover {
    color: ${({ theme }) => theme.colors.violet};
  }
  @media (max-width: 760px) {
    display: none;
  }
`;

function Header() {
  return (
    <Container>
      <Brand href="#top">
        <span>159</span>
        <span>
          ШКОЛА
          <br />
          КИЄВА
        </span>
      </Brand>
      <Navigation aria-label="Основна навігація">
        <a href="#about">Про школу</a>
        <a href="#education">Навчання</a>
        <a href="#contacts">Контакти</a>
      </Navigation>
      <ExternalLink
        href="https://school159.kiev.ua/"
        target="_blank"
        rel="noreferrer"
      >
        Офіційний сайт ↗
      </ExternalLink>
    </Container>
  );
}

export default Header;
