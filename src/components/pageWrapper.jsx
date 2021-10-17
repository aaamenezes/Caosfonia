import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../theme/globalStyle'
import { theme } from '../theme/theme'
import Footer from './Footer'

import Main from './Main'
import PageHeader from './PageHeader'

export default function pageWrapper(PageComponent) {
  return componentProps => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageHeader />
      <Main>
        <PageComponent {...componentProps} />
      </Main>
      <Footer />
    </ThemeProvider>
  )
}
