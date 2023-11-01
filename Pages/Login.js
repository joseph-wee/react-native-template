import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Login = ({ navigation }) => {
  return (
    <View>
      <Text>login</Text>
      <Button title="test" onPress={() => navigation.navigate('Search')} />
    </View>
  )
}

export default Login