'use client'
import { ChakraProvider, GlobalStyle } from '@chakra-ui/react'

import { theme } from '../theme/theme'

const MyApp = ({ Component, pageProps }: any) => {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
