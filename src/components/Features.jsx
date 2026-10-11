import styled from "styled-components";

const Section = styled.section`
  width: min(${({ theme }) => theme.layout.maxWidth}, calc(100% - 64px));
  margin: auto;
  padding-bottom: 130px;
  @media (max-width: 760px) {
    width: calc(100% - 38px);
    padding-bottom: 75px;
  }
`;
const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 28px;
  color: #c69cff;
  font: 500 10px ${({ theme }) => theme.fonts.mono};
  letter-spacing: 0.16em;
  p {
    margin: 0;
    color: #aba1b8;
    letter-spacing: 0.1em;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  gap: 14px;
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;
const Card = styled.article`
  min-height: 345px;
  padding: 26px;
  position: relative;
  overflow: hidden;
  background: ${({ featured }) => (featured ? "linear-gradient(135deg, #A356F1, #4E197D 54%, #1B0B2A)" : "linear-gradient(145deg, #21122F, #100A18)")};
  border: 1px solid #6e46963f;
  &::after {
    content: "";
    position: absolute;
    width: 230px;
    height: 230px;
    right: -110px;
    bottom: -135px;
    border-radius: 50%;
    background: radial-gradient(circle, #7231c977, transparent 66%);
  }
  small {
    color: #e4ccff;
    font: 500 10px ${({ theme }) => theme.fonts.mono};
    letter-spacing: 0.15em;
  }
  .icon {
    height: 48px;
    margin-top: 46px;
    color: #fff;
    font: 600 40px ${({ theme }) => theme.fonts.accent};
  }
  .icon span {
    color: #d4b4ff;
    font-size: 30px;
  }
  h3 {
    position: relative;
    z-index: 1;
    margin: 48px 0 12px;
    font-size: 25px;
    line-height: 1.08;
    letter-spacing: -0.05em;
  }
  p {
    position: relative;
    z-index: 1;
    max-width: 250px;
    margin: 0;
    color: #d9cbe9;
    font-size: 12px;
    line-height: 1.65;
  }
  @media (max-width: 760px) {
    min-height: 280px;
    .icon {
      margin-top: 25px;
    }
    h3 {
      margin-top: 30px;
    }
  }
`;
const programmes = [
  {
    icon: (
      <>
        A<span>α</span>
      </>
    ),
    title: (
      <>
        Англійська
        <br />
        поглиблено
      </>
    ),
    text: "Посилене вивчення англійської мови — ключова спеціалізація закладу.",
    featured: true,
  },
  {
    icon: (
      <>
        A<span>Б</span>
      </>
    ),
    title: "Друга іноземна",
    text: "Французька або німецька мова — для ширшого діалогу зі світом.",
  },
  {
    icon: "✦",
    title: (
      <>
        Українська
        <br />
        освіта
      </>
    ),
    text: "Навчання здійснюється українською мовою в міському освітньому середовищі.",
  },
];
function Features() {
  return (
    <Section id="education">
      <Heading>
        <span>02 / НАВЧАННЯ</span>
        <p>Освітні орієнтири</p>
      </Heading>
      <Grid>
        {programmes.map((programme, index) => (
          <Card featured={programme.featured} key={programme.text}>
            <small>0{index + 1}</small>
            <div className="icon">{programme.icon}</div>
            <h3>{programme.title}</h3>
            <p>{programme.text}</p>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
export default Features;
