import { HStack, useTheme, Text, View } from 'native-base'

type infoProps = {
  type?: 'CREATE' | 'DONE'
  count?: number
  title?: string
}

export function Info({ type = 'CREATE', count, title }: infoProps) {
  const { colors, fonts } = useTheme()
  return (
    <HStack>
      <Text color={type === 'CREATE' ? colors.blue.default : colors.purple.default} fontFamily={fonts.BOLD}>
        {title}
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
          {count}
        </Text>
      </View>
    </HStack>
  )
}
