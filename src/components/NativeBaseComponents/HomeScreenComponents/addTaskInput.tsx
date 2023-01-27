import { HStack, Icon, IInputProps, Input, useTheme } from 'native-base'

type addTaskInputProps = IInputProps

export function AddTaskInput({ ...props }: addTaskInputProps) {
  const { colors, fonts } = useTheme()
  return (
    <Input
      size="lg"
      placeholder="Adicione uma tarefa"
      placeholderTextColor={colors.gray[300]}
      color={colors.gray[100]}
      fontSize={16}
      fontFamily={fonts.REGULAR}
      width={271}
      height={54}
      borderRadius={6}
      backgroundColor={colors.gray[600]}
      borderColor={colors.gray[700]}
      autoCorrect={false}
      {...props}
    />
  )
}
