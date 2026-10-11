import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&display=swap');

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; background: ${({ theme }) => theme.colors.background}; color: ${({ theme }) => theme.colors.text}; font-family: ${({ theme }) => theme.fonts.body}; }
  a { -webkit-tap-highlight-color: transparent; }
`;

export default GlobalStyles;
