import {View} from 'react-native';
import {Button} from '@design/Button';
import {Input} from '@design/Input';
import {Text} from '@design/Text';
import {useColorScheme} from 'hooks/useColorScheme';
const Login = () => {
  const {toggleColorScheme} = useColorScheme();
  const handleThemeTogglePress = () => {
    toggleColorScheme();
  };
  return (
    <View className="flex-1 justify-center px-4 gap-4 bg-card">
      <View className="items-center">
        <Text className="text-2xl font-bold">Gatherly</Text>
      </View>
      <Input
        className=""
        placeholder="Username"
        aria-labelledby="inputLabel"
        aria-errormessage="inputError"
      />
      <Input
        className=""
        placeholder="Password"
        aria-labelledby="inputLabel"
        aria-errormessage="inputError"
      />
      <Button onPress={handleThemeTogglePress}>
        <Text>Sign In</Text>
      </Button>
    </View>
  );
};

export default Login;
