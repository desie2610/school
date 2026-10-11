import styled from "styled-components";

const Section = styled.section`
  position: relative;
  isolation: isolate;
  width: min(${({ theme }) => theme.layout.maxWidth}, calc(100% - 64px));
  margin: auto;
  padding: 140px 0 122px;
  display: grid;
  grid-template-columns: 190px minmax(0, 1fr);
  gap: 65px;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 110px;
    right: -90px;
    width: 360px;
    height: 360px;
    border-radius: 50%;
    background: rgba(113, 49, 210, 0.09);
    filter: blur(100px);
    pointer-events: none;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 140px minmax(0, 1fr);
    gap: 35px;
  }

  @media (max-width: 760px) {
    width: calc(100% - 38px);
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 82px 0;
  }
`;

const Label = styled.div`
  position: sticky;
  top: 110px;
  align-self: start;
  color: #c69cff;
  font: 500 10px ${({ theme }) => theme.fonts.mono};
  letter-spacing: 0.16em;
  padding-top: 12px;

  &::after {
    content: "";
    display: block;
    width: 42px;
    height: 1px;
    margin-top: 18px;
    background: linear-gradient(90deg, #b77aff, transparent);
  }

  @media (max-width: 760px) {
    position: static;
    padding: 0;

    &::after {
      margin-top: 12px;
    }
  }
`;

const Content = styled.div`
  min-width: 0;
  max-width: 850px;

  h2 {
    max-width: 760px;
    font-size: clamp(38px, 5.2vw, 70px);
    line-height: 1.04;
    letter-spacing: -0.06em;
    margin: 0 0 30px;
    color: #f6f0ff;
  }

  h2 span {
    color: ${({ theme }) => theme.colors.violet};
    font-family: ${({ theme }) => theme.fonts.accent};
    text-shadow: 0 0 35px rgba(166, 104, 255, 0.2);
  }

  p {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 14px;
    line-height: 1.9;
    max-width: 680px;
    margin: 0 0 18px;
  }

  a {
    color: #eee8fa;
    text-decoration: none;
    font-size: 12px;
    font-weight: 700;
    transition: color 0.3s ease;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.violet};
  }
`;

const Intro = styled.div`
  position: relative;
  padding-bottom: 34px;
  border-bottom: 1px solid rgba(198, 156, 255, 0.14);

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: #bba0df;
    font: 500 10px ${({ theme }) => theme.fonts.mono};
    letter-spacing: 0.14em;
    margin-bottom: 24px;
  }

  .dot {
    width: 6px;
    height: 6px;
    flex-shrink: 0;
    border-radius: 50%;
    background: #b77aff;
    box-shadow: 0 0 14px #9b58ff;
  }

  .lead {
    color: #c9bddb;
    font-size: 16px;
    line-height: 1.85;
    max-width: 680px;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin: 30px 0 34px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

const InfoCard = styled.div`
  position: relative;
  min-height: 190px;
  overflow: hidden;
  padding: 25px;
  border: 1px solid rgba(176, 117, 255, 0.17);
  border-radius: 17px;

  background:
    radial-gradient(
      circle at 100% 0%,
      rgba(130, 64, 255, 0.15),
      transparent 55%
    ),
    linear-gradient(145deg, #110d20 0%, #0b0913 75%);

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    right: -35px;
    bottom: -55px;
    width: 115px;
    height: 115px;
    border-radius: 50%;
    background: rgba(137, 72, 255, 0.08);
    filter: blur(28px);
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(198, 156, 255, 0.55);
    box-shadow: 0 15px 40px rgba(106, 46, 209, 0.13);
  }

  .number {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #bd8bff;
    font-size: 10px;
    font-family: ${({ theme }) => theme.fonts.mono};
    letter-spacing: 0.12em;
    margin-bottom: 25px;
  }

  .number::before {
    content: "";
    width: 18px;
    height: 1px;
    background: #a76bff;
  }

  h3 {
    color: #f1eaff;
    font-size: 17px;
    letter-spacing: -0.025em;
    margin: 0 0 12px;
  }

  p {
    color: #a69ab9;
    font-size: 12px;
    line-height: 1.85;
    margin: 0;
  }
`;

const Quote = styled.div`
  position: relative;
  overflow: hidden;
  padding: 32px;
  margin: 34px 0;
  border: 1px solid rgba(176, 117, 255, 0.16);
  border-radius: 17px;
  background:
    radial-gradient(
      ellipse at 100% 0%,
      rgba(142, 72, 255, 0.18),
      transparent 55%
    ),
    linear-gradient(120deg, #171027, #0b0913 80%);

  .quote-label {
    color: #bd8bff;
    font: 500 10px ${({ theme }) => theme.fonts.mono};
    letter-spacing: 0.14em;
    margin-bottom: 18px;
  }

  p {
    position: relative;
    color: #e4d6fa;
    font-size: clamp(17px, 2vw, 21px);
    line-height: 1.75;
    letter-spacing: -0.02em;
    max-width: 600px;
    margin: 0;
  }

  @media (max-width: 520px) {
    padding: 23px;
  }
`;

const BottomSection = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(240px, 0.8fr);
  gap: 22px;
  margin-top: 38px;
  align-items: stretch;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Mission = styled.div`
  padding: 25px 0;

  .number {
    color: #bd8bff;
    font: 500 10px ${({ theme }) => theme.fonts.mono};
    letter-spacing: 0.14em;
    margin-bottom: 20px;
  }

  h3 {
    color: #f1eaff;
    font-size: 23px;
    line-height: 1.35;
    letter-spacing: -0.04em;
    margin: 0 0 16px;
  }

  p {
    font-size: 13px;
    line-height: 1.9;
  }
`;

const ContactBox = styled.div`
  align-self: stretch;
  padding: 25px;
  border: 1px solid rgba(176, 117, 255, 0.2);
  border-radius: 17px;
  background:
    radial-gradient(
      circle at 100% 0%,
      rgba(130, 64, 255, 0.14),
      transparent 60%
    ),
    #0d0a17;

  .contact-label {
    color: #bd8bff;
    font: 500 10px ${({ theme }) => theme.fonts.mono};
    letter-spacing: 0.12em;
    margin-bottom: 20px;
  }

  h3 {
    color: #eee8fa;
    font-size: 19px;
    letter-spacing: -0.03em;
    margin: 0 0 23px;
  }

  p {
    font-size: 12px;
    line-height: 1.8;
    overflow-wrap: anywhere;
    margin-bottom: 13px;
  }

  strong {
    display: block;
    color: #c69cff;
    font-weight: 600;
    margin-bottom: 3px;
  }

  a {
    display: inline-block;
    margin-top: 10px;
    line-height: 1.8;
  }
`;

function About() {
  return (
    <Section id="about">
      <Label>01 / ПРО НАС</Label>

      <Content>
        <Intro>
          <div className="eyebrow">
            <span className="dot" />
            EDUCATION · KYIV · UKRAINE
          </div>

          <h2>
            Місце, де мова стає <span>ключем</span> до світу.
          </h2>

          <p className="lead">
            Спеціалізована школа №159 - заклад загальної середньої
            освіти міста Києва, розташований у Солом'янському районі.
            Це простір, де учні здобувають знання, розвивають здібності
            та поступово відкривають власні можливості.
          </p>

          <p>
            Навчання відбувається українською мовою. Один із напрямів
            школи - поглиблене вивчення англійської. Також передбачена
            можливість вивчення другої іноземної мови, зокрема
            французької або німецької.
          </p>
        </Intro>

        <InfoGrid>
          <InfoCard>
            <span className="number">01 / LANGUAGE</span>
            <h3>Мови без кордонів</h3>
            <p>
              Вивчення іноземних мов, розвиток комунікації та
              можливість краще розуміти культуру інших країн.
            </p>
          </InfoCard>

          <InfoCard>
            <span className="number">02 / KNOWLEDGE</span>
            <h3>Знання та мислення</h3>
            <p>
              Шкільні дисципліни, логічне мислення, самостійність
              і навички роботи з інформацією.
            </p>
          </InfoCard>

          <InfoCard>
            <span className="number">03 / COMMUNITY</span>
            <h3>Спільнота учнів</h3>
            <p>
              Спільні заходи, освітні ініціативи та проєкти,
              які об'єднують учнів і дають простір для ідей.
            </p>
          </InfoCard>

          <InfoCard>
            <span className="number">04 / ACTIVITIES</span>
            <h3>Розвиток талантів</h3>
            <p>
              Позакласна активність, творчість і можливість
              відкривати нові інтереси поза уроками.
            </p>
          </InfoCard>
        </InfoGrid>

        <Quote>
          <div className="quote-label">OUR PHILOSOPHY / 01</div>

          <p>
            Освіта - це не просто відповіді на запитання.
            Це здатність ставити нові запитання, знаходити рішення
            та самостійно відкривати незвідані горизонти.
          </p>
        </Quote>

        <p>
          Шкільне життя охоплює не лише навчання, а й тематичні
          ініціативи. Серед прикладів - проєкт «Україна вишивана»
          та заходи, присвячені протидії насильству. Такі активності
          допомагають розвивати творчість, повагу до української
          культури та відповідальне ставлення одне до одного.
        </p>

        <BottomSection>
          <Mission>
            <div className="number">05 / НАША ІДЕЯ</div>

            <h3>
              Знання сьогодні.
              <br />
              Можливості завтра.
            </h3>

            <p>
              Школа - це важливий етап у формуванні особистості,
              пошуку власного шляху та підготовці до майбутнього.
              Кожен навчальний день дає можливість дізнатися більше,
              спробувати нове й зробити ще один крок уперед.
            </p>

            <a
              href="https://school159.kiev.ua/"
              target="_blank"
              rel="noreferrer"
            >
              Офіційний сайт школи ↗
            </a>
          </Mission>

          <ContactBox>
            <div className="contact-label">CONTACT / 159</div>

            <h3>Зв'язок зі школою</h3>

            <p>
              <strong>Місто</strong>
              Київ, Україна
            </p>

            <p>
              <strong>Район</strong>
              Солом'янський
            </p>
            <p>
              <strong>Телефон</strong>
                <a href="tel:+380444570974">+38 (044) 457-09-74</a>
            </p>

            <p>
              <strong>Email</strong>
              <a href="mailto:159school@kmda.gov.ua">
                159school@kmda.gov.ua
              </a>
            </p>

            <a
              href="https://school159.kiev.ua/"
              target="_blank"
              rel="noreferrer"
            >
              Відвідати офіційний сайт ↗
            </a>
          </ContactBox>
        </BottomSection>
      </Content>
    </Section>
  );
}

export default About;