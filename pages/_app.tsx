'use client'
import { ChakraProvider, GlobalStyle } from '@chakra-ui/react'

import { theme } from '../theme/theme'
import { Header } from '../components/Header/Header'
import { Wrapper } from '../components/Wrapper/Wrapper'

const MyApp = ({ Component, pageProps }: any) => {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </ChakraProvider>
  )
}

export default MyApp
