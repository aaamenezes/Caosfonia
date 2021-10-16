import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../src/theme/globalStyle'
import { theme } from '../src/theme/theme'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle theme={theme} />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
