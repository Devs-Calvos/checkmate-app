import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Divider, Icon, useTheme, VStack, Text } from 'native-base'

export function NoHaveTasks() {
  const { colors, sizes, fonts } = useTheme()

  return (
    <VStack width={327} height={208} alignSelf="center" alignItems="center" justifyContent="center">
      <Divider width={80} bg={colors.gray[400]} />
      <Icon marginBottom={4} as={MaterialCommunityIcons} name="clipboard-text" marginTop={12} size={sizes[14]} />
      <Text color={colors.gray[300]} fontFamily={fonts.BOLD}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text color={colors.gray[300]} fontFamily={fonts.REGULAR}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </VStack>
  )
}
