'use client'
import { ChakraProvider, GlobalStyle } from '@chakra-ui/react'

import { theme } from '../theme/theme'
import { Header } from '../components/Header/Header'
import { Wrapper } from '../components/Wrapper/Wrapper'
import { useState } from 'react'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const MyApp = ({ Component, pageProps }: any) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ChakraProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
        </ChakraProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
