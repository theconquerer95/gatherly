import { FC } from 'react';
import { View } from 'react-native';
import { Button } from '@design/Button';
import { Input } from '@design/Input';
import { Text } from '@design/Text';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../types';

import { LandingBackground } from './LandingBackground';

type LoginViaMobileProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'LoginViaMobile'>;
};

export const LoginViaMobile: FC<LoginViaMobileProps> = ({ navigation }) => {
  const handleContinue = () => {
    navigation.navigate('LoginOTP');
  };

  return (
    <View className="flex-1 bg-card bg-secondary">
      <LandingBackground />
      {/* Bottom content */}
      <View className="px-4 pb-12 gap-6">
        <View className="flex-row items-center">
          <View className="flex-1 h-[1px] bg-muted-foreground/20" />
          <Text className="mx-4 text-sm text-muted-foreground">
            Log in via mobile number
          </Text>
          <View className="flex-1 h-[1px] bg-muted-foreground/20" />
        </View>
        <View className="flex-row items-center gap-2">
          <View className="bg-background px-3 py-2 rounded-md">
            <Text>+1</Text>
          </View>
          <Input
            wrapperClassName="flex-1"
            inputMode="numeric"
            className="bg-background"
            placeholder="XXX-XXX-XXXX"
            keyboardType="phone-pad"
          />
        </View>
        <Button onPress={handleContinue}>
          <Text>Get OTP</Text>
        </Button>
        <Text className="text-start text-xs text-muted-foreground">
          By continuing, you agree to our{' '}
          <Text className="text-primary underline">Terms of Service</Text> and{' '}
          <Text className="text-primary underline">Privacy Policy</Text>
        </Text>
      </View>
    </View>
  );
};
