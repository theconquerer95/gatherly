import { FC, useState } from 'react';
import { View } from 'react-native';
import { Button } from '@design/Button';
import { SmartphoneIcon } from '@design/Icons';
import { Input } from '@design/Input';
import { Text } from '@design/Text';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../types';

import { LandingBackground } from './LandingBackground';

type LoginProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

export const Login: FC<LoginProps> = ({ navigation }) => {
  const [inputValue, setInputValue] = useState('');

  const handleContinue = () => {
    // TODO: check if user is new or existing
    if (true) {
      // new user
      navigation.navigate('SignUp');
    } else {
      // existing user
      // navigation.navigate('LoginOTP');
    }
  };

  return (
    <View className="flex-1 bg-card bg-secondary">
      <LandingBackground />
      {/* Bottom content */}
      <View className="px-4 pb-12 gap-6">
        <View className="flex-row items-center">
          <View className="flex-1 h-[1px] bg-muted-foreground/20" />
          <Text className="mx-4 text-sm text-muted-foreground">
            Log in or sign up
          </Text>
          <View className="flex-1 h-[1px] bg-muted-foreground/20" />
        </View>
        <Input
          value={inputValue}
          inputMode="email"
          className="bg-background"
          placeholder="example@umassd.edu"
          aria-labelledby="inputLabel"
          aria-errormessage="inputError"
          onChangeText={setInputValue}
        />
        <Button onPress={handleContinue} disabled={!inputValue}>
          <Text>Continue with email</Text>
        </Button>
        <View className="flex-row items-center">
          <View className="flex-1 h-[1px] bg-muted-foreground/20" />
          <Text className="mx-4 text-sm text-muted-foreground">or</Text>
          <View className="flex-1 h-[1px] bg-muted-foreground/20" />
        </View>
        <View className="items-center">
          <Button
            onPress={() => navigation.navigate('LoginViaMobile')}
            variant="outline"
            className="rounded-full w-12 h-12 p-0 justify-center items-center">
            <SmartphoneIcon className="text-muted-foreground" size={20} />
          </Button>
        </View>
        <Text className="text-start text-xs text-muted-foreground">
          By continuing, you agree to our{' '}
          <Text className="text-primary underline">Terms of Service</Text> and{' '}
          <Text className="text-primary underline">Privacy Policy</Text>
        </Text>
      </View>
    </View>
  );
};
