import styled from "styled-components";

const Section = styled.section`
  min-height: 580px;
  padding: 88px
    max(32px, calc((100% - ${({ theme }) => theme.layout.maxWidth}) / 2)) 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    width: 740px;
    height: 650px;
    right: -250px;
    top: 0;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      #8b38e8 0,
      rgba(88, 25, 151, 0.58) 35%,
      transparent 68%
    );
    filter: blur(15px);
    opacity: 0.72;
  }
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0.35;
    background-image:
      radial-gradient(#fff 1px, transparent 1.5px),
      radial-gradient(#b479ff 1px, transparent 1.5px);
    background-size:
      115px 115px,
      173px 173px;
    pointer-events: none;
  }
  @media (max-width: 760px) {
    min-height: auto;
    padding: 76px 19px 52px;
  }
`;
const Copy = styled.div`
  max-width: 650px;
  position: relative;
  z-index: 1;
  .eyebrow {
    color: #c69cff;
    font: 500 10px ${({ theme }) => theme.fonts.mono};
    letter-spacing: 0.16em;
    display: flex;
    gap: 9px;
    align-items: center;
  }
  .eyebrow::before {
    content: "";
    width: 24px;
    height: 1px;
    background: currentColor;
  }
  h1 {
    font-size: clamp(49px, 6.2vw, 82px);
    line-height: 0.98;
    letter-spacing: -0.065em;
    margin: 20px 0 23px;
  }
  em {
    font-family: ${({ theme }) => theme.fonts.accent};
    color: ${({ theme }) => theme.colors.violet};
  }
  p {
    max-width: 440px;
    margin: 0;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 15px;
    line-height: 1.72;
  }
  @media (max-width: 760px) {
    h1 {
      font-size: 52px;
    }
    p {
      max-width: 300px;
    }
  }
`;
const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
  margin-top: 34px;
  a {
    font-size: 12px;
    font-weight: 700;
    text-decoration: none;
  }
  a:first-child {
    padding: 15px 20px;
    color: #170522;
    background: #cb9aff;
    box-shadow: 0 12px 35px #9f55eb3b;
  }
  a:last-child {
    color: #eee8fa;
  }
  @media (max-width: 760px) {
    flex-wrap: wrap;
    gap: 20px;
  }
`;
const Orbit = styled.div`
  width: 360px;
  height: 360px;
  margin-right: 36px;
  position: relative;
  flex: 0 0 auto;
  z-index: 1;
  .planet {
    position: absolute;
    inset: 92px;
    z-index: 2;
    display: grid;
    place-content: center;
    text-align: center;
    border-radius: 50%;
    background: radial-gradient(
      circle at 35% 30%,
      #d5b9ff,
      #a04fff 27%,
      #4d188b 62%,
      #1e0837
    );
    box-shadow:
      inset -25px -27px 42px #160322bb,
      0 0 50px #8e3effa3;
    transform: rotate(-8deg);
  }
  .planet span {
    font: 500 15px ${({ theme }) => theme.fonts.mono};
  }
  .planet strong {
    font-size: 43px;
    line-height: 0.9;
    letter-spacing: -0.1em;
  }
  .ring {
    position: absolute;
    border: 1px solid #d2aeff86;
    border-radius: 50%;
    transform: rotate(-25deg);
  }
  .ring.one {
    width: 358px;
    height: 148px;
    top: 105px;
    z-index: 3;
  }
  .ring.two {
    width: 300px;
    height: 335px;
    top: 12px;
    left: 30px;
    border-color: #aa70fa37;
    transform: rotate(28deg);
  }
  @media (max-width: 760px) {
    position: absolute;
    width: 215px;
    height: 215px;
    right: -85px;
    top: 220px;
    opacity: 0.48;
    .planet {
      inset: 55px;
    }
    .planet strong {
      font-size: 28px;
    }
    .planet span {
      font-size: 10px;
    }
    .ring.one {
      width: 215px;
      height: 90px;
      top: 63px;
    }
    .ring.two {
      width: 180px;
      height: 204px;
      top: 5px;
      left: 18px;
    }
  }
`;

function Hero() {
  return (
    <Section id="top">
      <Copy>
        <div className="eyebrow">Солом’янський район · Київ</div>
        <h1>
          Відкриваємо
          <br />
          <em>власний</em> всесвіт знань.
        </h1>
        <p>
          Спеціалізована школа ІІ–ІІІ ступенів №159 з поглибленим вивченням
          англійської мови.
        </p>
        <Actions>
          <a href="#contacts">Зв’язатися зі школою ↗</a>
          <a href="#about">Дізнатися більше ↓</a>
        </Actions>
      </Copy>
    </Section>
  );
}
export default Hero;
