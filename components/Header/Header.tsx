import { Box, Flex, List, ListItem, Text } from '@chakra-ui/react'
import Link from 'next/link'

export const Header = () => {
  return (
    <Box as="header" bg="cyan.300" padding="20px">
      <Flex as="nav" justifyContent="space-between" alignItems="center">
        <Link href="/">
          <Text as="span" fontSize="22px" fontWeight="bold">
            MyCinema
          </Text>
        </Link>

        <List display="flex" gap="20px">
          <ListItem>
            <Link href="/movies">Movies</Link>
          </ListItem>
          <ListItem>
            <Link href="/repertoire">Repertoire</Link>
          </ListItem>
        </List>
      </Flex>
    </Box>
  )
}
