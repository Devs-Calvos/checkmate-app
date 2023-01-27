import { Loading } from '@components/Loading'
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'
import { Home } from '@screens/Home'
import { NativeBaseProvider, StatusBar } from 'native-base'

import { theme } from './src/themes/themes'

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold })
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      {fontsLoaded ? <Home /> : <Loading />}
    </NativeBaseProvider>
  )
}
