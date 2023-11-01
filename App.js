import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import RecoilCounter from './RecoilCounter';
import { RecoilEnv } from 'recoil';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login, Search } from './Pages';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false


const Stack = createNativeStackNavigator();

export default function App() {



  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Search" component={Search} options={{ title: 'Search' }} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View className="flex-1 items-center justify-center bg-purple-400">
    //   <Text>ㅇㅏ니왜안돼</Text>
    //   <Text>Open up App.js orking on your app!</Text>
    //   <StatusBar style="auto" />
    //   <RecoilRoot>
    //     <RecoilCounter />
    //   </RecoilRoot>
    // </View>
  );
}
