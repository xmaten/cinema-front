import { extendTheme } from '@chakra-ui/react'

const colors = {
  styles: {
    global: {
      'html, body': {
        color: 'gray.600',
        lineHeight: 'tall',
      },
      a: {
        color: 'teal.500',
      },
    },
  },
}

export const theme = extendTheme({ colors })
