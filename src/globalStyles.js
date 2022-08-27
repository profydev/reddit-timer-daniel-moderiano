import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  /* Normalise CSS styles applied here */
  ${normalize}

  /** Montserrat Regular **/
  @font-face {
    font-family: "Montserrat";
    font-weight: 400;
    font-style: normal;
    src: url("/fonts/MontserratAlternates-Regular.woff2") format("woff2"), url("/fonts/MontserratAlternates-Regular.woff") format("woff");
  }

  /** Montserrat Medium **/
  @font-face {
    font-family: "Montserrat";
    font-weight: 500;
    font-style: normal;
    src: url("/fonts/MontserratAlternates-Medium.woff2") format("woff2"), url("/fonts/MontserratAlternates-Medium.woff") format("woff");
  }

  /** Montserrat SemiBold **/
  @font-face {
    font-family: "Montserrat";
    font-weight: 600;
    font-style: normal;
    src: url("/fonts/MontserratAlternates-SemiBold.woff2") format("woff2"), url("/fonts/MontserratAlternates-SemiBold.woff") format("woff");
  }

  /** Montserrat Bold **/
  @font-face {
    font-family: "Montserrat";
    font-weight: 700;
    font-style: normal;
    src: url("/fonts/MontserratAlternates-Bold.woff2") format("woff2"), url("/fonts/MontserratAlternates-Bold.woff") format("woff");
  }

  /** Bitter Regular **/
  @font-face {
    font-family: "Bitter";
    src: url("/fonts/Bitter-Regular.woff2") format("woff2"), url("/fonts/Bitter-Regular.woff") format("woff");
  }

  body {
    font-family: ${(props) => props.theme.font.family.default};
    font-size: ${(props) => props.theme.font.size.default};
    line-height: ${(props) => props.theme.font.lineHeight.default};
    color: ${(props) => props.theme.color.text};
  }
`;

export default GlobalStyles;
