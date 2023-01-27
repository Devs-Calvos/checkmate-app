import { Heading, HStack, Spinner, useTheme } from 'native-base'

export function Loading() {
  const { colors } = useTheme()
  return (
    <HStack space={2} justifyContent="center" flex={1} backgroundColor={colors.gray[600]} alignItems="center">
      <Spinner accessibilityLabel="Loading posts" />
      <Heading color="primary.500" fontSize="md">
        Loading
      </Heading>
    </HStack>
  )
}
