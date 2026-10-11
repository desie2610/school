import styled from "styled-components";

const Section = styled.section`
  width: min(${({ theme }) => theme.layout.maxWidth}, calc(100% - 64px));
  margin: auto;
  padding-bottom: 120px;
  @media (max-width: 760px) {
    width: calc(100% - 38px);
    padding-bottom: 75px;
  }
`;
const Label = styled.div`
  color: #c69cff;
  font: 500 10px ${({ theme }) => theme.fonts.mono};
  letter-spacing: 0.16em;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 120px;
  margin-top: 29px;
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;
const Intro = styled.div`
  h2 {
    margin: 0 0 24px;
    font-size: clamp(37px, 4.2vw, 58px);
    line-height: 1.08;
    letter-spacing: -0.055em;
  }
  h2 span {
    color: ${({ theme }) => theme.colors.violet};
    font-family: ${({ theme }) => theme.fonts.accent};
  }
  p {
    max-width: 420px;
    margin: 0;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 15px;
    line-height: 1.8;
  }
`;
const Details = styled.address`
  margin: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.line};
  font-style: normal;
  a {
    min-height: 104px;
    display: grid;
    grid-template-columns: 1fr auto;
    align-content: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.line};
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    transition: 0.2s;
  }
  a:hover {
    padding-left: 10px;
    color: ${({ theme }) => theme.colors.violet};
  }
  small {
    grid-column: 1;
    margin-bottom: 8px;
    color: #a794ba;
    font: 500 9px ${({ theme }) => theme.fonts.mono};
    letter-spacing: 0.14em;
  }
  strong {
    font-size: 15px;
    line-height: 1.55;
    letter-spacing: -0.025em;
  }
  span {
    grid-column: 2;
    grid-row: 1 / 3;
    align-self: center;
    font-size: 17px;
  }
`;
function Contact() {
  return (
    <Section id="contacts">
      <Label>03 / КОНТАКТИ</Label>
      <Grid>
        <Intro>
          <h2>
            Завітайте у<br />
            <span>свій новий</span> світ.
          </h2>
          <p>
            Питання щодо навчання, вступу або роботи школи? Напишіть або
            зателефонуйте нам.
          </p>
        </Intro>
        <Details>
          <a
            href="https://maps.google.com/?q=Київ,+вул.+Андрія+Мельника,+22"
            target="_blank"
            rel="noreferrer"
          >
            <small>Адреса</small>
            <strong>
              03058, м. Київ
              <br />
              вул. Андрія Мельника, 22
            </strong>
            <span>↗</span>
          </a>
          <a href="tel:+380444570974">
            <small>Телефон</small>
            <strong>044 457 09 74</strong>
            <span>↗</span>
          </a>
          <a href="mailto:159school@kmda.gov.ua">
            <small>Електронна пошта</small>
            <strong>159school@kmda.gov.ua</strong>
            <span>↗</span>
          </a>
        </Details>
      </Grid>
    </Section>
  );
}
export default Contact;
