import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'OldSchoolGroteskCondensed';
    src: url('/src/assets/fonts/oldschoolgroteskcondensedtrial-medium-webfont.woff2') format('woff2'),
         url('/src/assets/fonts/oldschoolgroteskcondensedtrial-medium-webfont.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'OldSchoolGrotesk';
    src: url('/src/assets/fonts/oldschoolgrotesktrial-regular-webfont.woff2') format('woff2'),
         url('/src/assets/fonts/oldschoolgrotesktrial-regular-webfont.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'PPEditorialOld';
    src: url('/src/assets/fonts/ppeditorialold-regular-webfont.woff2') format('woff2'),
         url('/src/assets/fonts/ppeditorialold-regular-webfont.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  :root {
    --main-bg-color: #faf9f6;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'OldSchoolGrotesk', sans-serif;
  }
`;


export default GlobalStyles;
