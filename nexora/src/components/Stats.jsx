import styled from "styled-components";
const Section = styled.section`
  width: min(${({ theme }) => theme.layout.maxWidth}, calc(100% - 64px));
  margin: 0 auto 136px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid ${({ theme }) => theme.colors.line};
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  @media (max-width: 760px) {
    width: calc(100% - 38px);
    grid-template-columns: 1fr;
    margin-bottom: 80px;
  }
`;
const Item = styled.div`
  padding: 33px 25px 37px;
  border-right: 1px solid ${({ theme }) => theme.colors.line};
  &:last-child {
    border: 0;
  }
  span {
    display: block;
    margin-bottom: 16px;
    color: #a794ba;
    font: 500 9px ${({ theme }) => theme.fonts.mono};
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }
  strong {
    font-size: 16px;
    line-height: 1.35;
    letter-spacing: -0.03em;
  }
  @media (max-width: 760px) {
    border-right: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.line};
    &:last-child {
      border-bottom: 0;
    }
  }
`;
const facts = [
  [
    "Тип закладу",
    <>
      Ліцей
      <br />з гімназією
    </>,
  ],
  ["Форма власності", "Комунальна"],
  [
    "Підпорядкування",
    <>
      Управління освіти
      <br />
      Солом’янської РДА
    </>,
  ],
];
function Stats() {
  return (
    <Section>
      {facts.map(([label, value]) => (
        <Item key={label}>
          <span>{label}</span>
          <strong>{value}</strong>
        </Item>
      ))}
    </Section>
  );
}
export default Stats;
