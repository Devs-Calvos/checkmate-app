import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Box, Checkbox, HStack, Icon, useTheme, View, Text } from 'native-base'

type tasksProps = {
  description: string
  onRemove: () => void
  isCompleted: boolean
  completedTask: () => void
}

export function Tasks({ description, onRemove, isCompleted = false, completedTask }: tasksProps) {
  const { colors, fonts } = useTheme()
  return (
    <HStack alignItems="center" alignSelf="center">
      <Box
        width={327}
        height={20}
        bg={colors.gray[500]}
        p="4"
        shadow={2}
        marginTop={5}
        alignItems="center"
        justifyContent="flex-start"
        flexDirection="row"
        borderRadius={8}
      >
        <Checkbox
          isChecked={isCompleted}
          onChange={completedTask}
          value=""
          accessibilityLabel="check"
          marginRight={3}
          borderColor={colors.blue.default}
          bg={colors.gray[500]}
          borderRadius={10}
          width={6}
          height={6}
        />
        <View width={225}>
          <Text fontSize={14} strikeThrough={isCompleted} fontFamily={fonts.REGULAR} color={`${colors.gray[100]}`}>
            {description}
          </Text>
        </View>
        <Icon
          as={MaterialCommunityIcons}
          name="trash-can-outline"
          size={6}
          marginLeft="auto"
          color={colors.gray[300]}
          onPress={onRemove}
        />
      </Box>
    </HStack>
  )
}
