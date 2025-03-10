import { FC } from 'react';
import { View } from 'react-native';
import { Button } from '@design/Button';
import { Input } from '@design/Input';
import { Text } from '@design/Text';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../types';

type LoginProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

export const Login: FC<LoginProps> = ({ navigation }) => {
  const handleThemeTogglePress = () => {
    navigation.navigate('Landing');
  };

  return (
    <View className="flex-1 justify-end px-4 gap-4 bg-card mb-40 bg-secondary">
      <View className="items-center">
        <Text className="text-2xl font-bold">Gatherly</Text>
      </View>
      <Input
        className=""
        placeholder="Enter your email"
        aria-labelledby="inputLabel"
        aria-errormessage="inputError"
      />
      <Button onPress={handleThemeTogglePress}>
        <Text>Log In</Text>
      </Button>
      <Button onPress={handleThemeTogglePress} variant="ghost">
        <Text>Sign Up</Text>
      </Button>
    </View>
  );
};
