import { View } from 'react-native';
import { Button } from '@design/Button';
import OTPInput from '@design/InputOTP';
import { Text } from '@design/Text';

export const Landing = () => {
  const userEmail = 'ayush.tiwari@umassd.edu';
  const handleThemeTogglePress = () => {
    console.log('Theme toggle pressed');
  };
  return (
    <View className="flex-1 justify-end px-4 gap-4 bg-card mb-40 bg-secondary">
      <View className="flex flex-col justify-center gap-4">
        <View className="items-center mb-8 w-full">
          <Text className="text-2xl font-bold mb-2">Enter OTP</Text>
          <View className="flex-row items-center gap-2">
            <Text className="text-sm text-muted-foreground">Sent to</Text>
            <Text className="text-md font-bold text-muted-foreground">
              {userEmail}
            </Text>
          </View>
        </View>
        <OTPInput
          length={6}
          onComplete={(value: string) => console.log(value)}
        />
        <Button className="mt-8" onPress={handleThemeTogglePress}>
          <Text>Log In</Text>
        </Button>
        <Button onPress={handleThemeTogglePress} variant="ghost">
          <Text>Change Email</Text>
        </Button>
      </View>
    </View>
  );
};
