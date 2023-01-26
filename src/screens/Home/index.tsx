import logoImg from '@assets/logo.png'
import { Tasks } from '@components/NativeBaseComponents/HomeScreenComponents/tasks'
import { NoHaveTasks } from '@components/NoHaveTasks'
import { Ionicons } from '@expo/vector-icons'
import { useTheme, VStack, Image, Input, Button, Icon, HStack, Text, View } from 'native-base'
import { useState } from 'react'

export function Home() {
  const [tasks, setTasks] = useState<string[]>([])

  const { colors, sizes, fonts } = useTheme()

  return (
    <VStack flex={1} backgroundColor={colors.gray[600]}>
      <VStack height={173} backgroundColor={colors.gray[700]} alignItems="center" justifyContent="center">
        <Image source={logoImg} alt="Alternate Text" />
      </VStack>
      <HStack marginTop={146} position="absolute" alignSelf="center" alignItems="center">
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
        />
        <Button
          size={52}
          marginLeft={1}
          borderRadius={6}
          borderColor={colors.gray[700]}
          backgroundColor={colors.blue.dark}
        >
          <Icon as={Ionicons} name="add-circle-outline" color={colors.gray[100]} size={6} />
        </Button>
      </HStack>
      <HStack marginTop={sizes[14]} alignItems="center" justifyContent="space-around">
        <HStack>
          <Text color={colors.blue.default} fontFamily={fonts.BOLD}>
            Criadas
          </Text>
          <View
            marginLeft={2}
            width={7}
            height={5}
            backgroundColor={colors.gray[400]}
            borderRadius={999}
            alignItems="center"
            alignSelf="center"
          >
            <Text color={colors.gray[100]} fontSize={13}>
              0
            </Text>
          </View>
        </HStack>
        <HStack>
          <Text color={colors.purple.default} fontFamily={fonts.BOLD}>
            Concluidas
          </Text>
          <View
            marginLeft={2}
            width={7}
            height={5}
            backgroundColor={colors.gray[400]}
            borderRadius={999}
            alignItems="center"
            alignSelf="center"
          >
            <Text color={colors.gray[100]} fontWeight="bold" fontSize={13}>
              0
            </Text>
          </View>
        </HStack>
      </HStack>
      {tasks.length > 0 ? <Tasks /> : <NoHaveTasks />}
    </VStack>
  )
}
