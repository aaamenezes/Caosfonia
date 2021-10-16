import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
    font-size: ${ ({ theme }) => theme.fontSize.font16 };
    color: ${ ({ theme }) => theme.color.white };
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  body {
    background-color: ${ ({ theme }) => theme.color.black };
  }

  h1 {
    font-weight: 700;
    font-size: ${ ({ theme }) => theme.fontSize.font42 };
  }

  h2 {
    text-align: center;
    font-size: ${ ({ theme }) => theme.fontSize.font26 };
  }

  h2, h3, h4, h5, h6 {
    font-weight: 400;
  }

  p {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    color: ${ ({ theme }) => theme.color.yellow };
  }

  input, select, option, textarea {
    font-weight: 700;
  }
`
