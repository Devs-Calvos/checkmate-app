import { Alert, HStack, VStack, Text, IconButton, Stack, useTheme, Slide } from 'native-base'
import { useState, useCallback, forwardRef, useImperativeHandle, ForwardRefRenderFunction } from 'react'

// import { Container } from './styles';

type AlertStatus = 'success' | 'error' | 'info' | 'warning'

type AlertProps = {
  status: AlertStatus
  message: string
  title: string
}

export interface AlertHandles {
  openAlert: (alertProps: AlertProps) => void
}

// eslint-disable-next-line @typescript-eslint/ban-types
const DefaultAlert: ForwardRefRenderFunction<AlertHandles> = (_props: {}, ref) => {
  const { colors, fonts } = useTheme()
  const [visible, setVisible] = useState(false)
  const [message, setMessage] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [status, setStatus] = useState<AlertStatus>('success')

  const handleOpenAlert = useCallback((alertProps: AlertProps) => {
    setMessage(alertProps.message)
    setStatus(alertProps.status)
    setTitle(alertProps.title)
    setVisible(true)
    setTimeout(() => {
      setVisible(false)
    }, 2000)
  }, [])

  useImperativeHandle(ref, () => {
    return {
      openAlert: handleOpenAlert
    }
  })

  return (
    <Slide in={visible} placement="bottom">
      <Stack space={3} w="100%" maxW="400" position="absolute" zIndex={999} bottom={0}>
        <Alert w="100%" status={status} variant="left-accent" backgroundColor="#dedec4">
          <VStack space={2} w="100%">
            <HStack flexShrink={1} space={2} justifyContent="space-between">
              <HStack space={2} flexShrink={1} alignItems="center">
                <Alert.Icon size={5} />
                <Text fontSize={15} color="gray.600" fontFamily={fonts.BOLD}>
                  {title}
                </Text>
                <Text fontSize={15} color="gray.600" fontFamily={fonts.REGULAR}>
                  {message}
                </Text>
              </HStack>
              <IconButton
                variant="unstyled"
                marginBottom={2}
                _focus={{
                  borderWidth: 0
                }}
                _icon={{
                  color: 'coolGray.600'
                }}
              />
            </HStack>
          </VStack>
        </Alert>
      </Stack>
    </Slide>
  )
}

export default forwardRef(DefaultAlert)
