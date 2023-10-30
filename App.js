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

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false

export default function App() {



  return (
    <View className="flex-1 items-center justify-center bg-purple-400">
      <Text>Open up App.js orking on your app!</Text>
      <StatusBar style="auto" />
      <RecoilRoot>
        <RecoilCounter />
      </RecoilRoot>
    </View>
  );
}
