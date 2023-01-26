import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Box, Checkbox, HStack, Icon, useTheme } from 'native-base'

type tasksProps = {
  description: string
}

export function Tasks({ description }: tasksProps) {
  const { colors, fonts } = useTheme()
  return (
    <HStack alignItems="center" alignSelf="center">
      <Box
        width={327}
        height={20}
        bg={colors.gray[500]}
        p="4"
        shadow={2}
        marginTop={10}
        alignItems="center"
        justifyContent="flex-start"
        flexDirection="row"
        borderRadius={8}
        _text={{
          fontSize: 14,
          fontFamily: fonts.REGULAR,
          color: `${colors.gray[100]}`
        }}
      >
        <Checkbox
          marginRight={3}
          borderColor={colors.blue.default}
          bg={colors.gray[500]}
          borderRadius={10}
          width={6}
          height={6}
        />
        {description}
        <Icon
          as={MaterialCommunityIcons}
          name="trash-can-outline"
          size={6}
          marginLeft="auto"
          color={colors.gray[300]}
        />
      </Box>
    </HStack>
  )
}
