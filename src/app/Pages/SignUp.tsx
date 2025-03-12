import { FC, useState } from 'react';
import { View } from 'react-native';
import { Button } from '@design/Button';
import { Input } from '@design/Input';
import { Text } from '@design/Text';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../types';

type SignUpProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SignUp'>;
};

export const SignUp: FC<SignUpProps> = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email] = useState('user@example.com'); // Example email, should be passed as a prop or fetched

  const handleContinue = () => {
    // Logic to handle continue action
    console.log('Continuing with:', {
      firstName,
      lastName,
      phoneNumber,
      email,
    });
    navigation.navigate('LoginOTP');
  };

  return (
    <View className="flex-1 bg-card bg-secondary p-4 justify-between">
      <View>
        <Text className="text-start text-2xl font-bold text-muted-foreground mb-6">
          We don't know you, yet. Please fill in your details to get started!
        </Text>
        <Text className="text-lg font-bold mb-4">Sign Up</Text>
        <View className="pb-12 gap-6">
          <Input
            label="First Name"
            required
            className="bg-background"
            placeholder="First Name"
            onChangeText={setFirstName}
          />
          <Input
            label="Last Name"
            required
            className="bg-background"
            placeholder="Last Name"
            onChangeText={setLastName}
          />
          <Input
            label="Email"
            required
            // fetch this value from login screen
            value={email}
            className="bg-background"
            placeholder="Email"
          />
          <View className="w-full">
            <Text className="text-muted-foreground mb-2">
              Phone Number (optional)
            </Text>
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
                onChangeText={setPhoneNumber}
              />
            </View>
          </View>
        </View>
      </View>
      <Button onPress={handleContinue}>
        <Text>Continue</Text>
      </Button>
    </View>
  );
};
