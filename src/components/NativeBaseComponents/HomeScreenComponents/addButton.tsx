import { Ionicons } from '@expo/vector-icons'
import { Button, Icon, IIconButtonProps, useTheme, View } from 'native-base'

type buttonProps = IIconButtonProps

export function AddButton({ ...props }: buttonProps) {
  const { colors } = useTheme()
  return (
    <Button
      size={52}
      marginLeft={1}
      borderRadius={6}
      borderColor={colors.gray[700]}
      backgroundColor={colors.blue.dark}
      {...props}
    >
      <Icon as={Ionicons} name="add-circle-outline" color={colors.gray[100]} size={6} />
    </Button>
  )
}
