import styled from "styled-components";

const Container = styled.footer`
  width: min(${({ theme }) => theme.layout.maxWidth}, calc(100% - 64px));
  margin: auto;
  padding: 40px 0 25px;
  border-top: 1px solid ${({ theme }) => theme.colors.line};
  .top,
  .bottom {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  .brand {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 10px;
    font-weight: 800;
    line-height: 1.23;
    letter-spacing: 0.15em;
  }
  .mark {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    border: 1px solid #b887ff;
    border-radius: 50%;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 11px;
    letter-spacing: -1px;
  }
  p {
    margin: 0;
    color: #c7bbd7;
    font: 600 16px/1.4 ${({ theme }) => theme.fonts.accent};
  }
  .bottom {
    margin-top: 66px;
    color: #837993;
    font: 500 9px ${({ theme }) => theme.fonts.mono};
    letter-spacing: 0.08em;
  }
  .bottom a {
    color: #bca6da;
    text-decoration: none;
  }
  @media (max-width: 760px) {
    width: calc(100% - 38px);
    .bottom {
      align-items: flex-start;
      flex-direction: column;
      gap: 18px;
      margin-top: 45px;
    }
  }
`;
function Footer() {
  return (
    <Container>
      <div className="top">
        <a className="brand" href="#top">
          <span className="mark">159</span>
          <span>
            ШКОЛА
            <br />
            КИЄВА
          </span>
        </a>
        <p>
          Навчаємось сьогодні,
          <br />
          щоб змінювати завтра.
        </p>
      </div>
      <div className="bottom">
        <span>© {new Date().getFullYear()} Спеціалізована школа №159</span>
        <a href="https://school159.kiev.ua/" target="_blank" rel="noreferrer">
          school159.kiev.ua ↗
        </a>
      </div>
    </Container>
  );
}
export default Footer;
