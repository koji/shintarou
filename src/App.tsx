import { Box, Flex, DIRECTION_COLUMN, ALIGN_CENTER, JUSTIFY_CENTER } from './lib'

function App() {
  return (
    <Flex
      width="100vw"
      gridGap="2rem"
      flexDirection={DIRECTION_COLUMN}
      alignItems={ALIGN_CENTER}
      justifyContent={JUSTIFY_CENTER}
    >
      <Box backgroundColor="red" width="20rem" borderRadius="2rem" padding="2rem">
        red
      </Box>
      <Box backgroundColor="green" width="20rem" borderRadius="2rem" padding="2rem">
        blue
      </Box>
      <Box backgroundColor="blue" width="20rem" borderRadius="2rem" padding="2rem">
        blue
      </Box>
    </Flex>
  )
}

export default App
