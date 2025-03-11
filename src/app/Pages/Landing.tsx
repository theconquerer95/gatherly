import { useEffect, useState } from 'react';
import { Text as RNText, View } from 'react-native';
import { Button } from '@design/Button';
import OTPInput from '@design/InputOTP';
import { Text } from '@design/Text';

import { LandingBackground } from './LandingBackground';

export const Landing = () => {
  const userEmail = 'ayush.tiwari@umassd.edu';
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleThemeTogglePress = () => {
    console.log('Theme toggle pressed');
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <View className="flex-1 bg-card bg-secondary">
      <LandingBackground />
      {/* Bottom content */}
      <View className="px-4 pb-12 gap-6">
        <View className="items-center mb-8 w-full">
          <Text className="text-2xl font-bold mb-2">Enter OTP</Text>
          <View className="flex-row items-center gap-2">
            <Text className="text-sm text-muted-foreground">Sent to</Text>
            <Text className="text-md font-bold text-muted-foreground">
              {userEmail}
            </Text>
          </View>
          <RNText className="text-sm text-red-500 mt-2">
            Time left: {formatTime(timeLeft)}
          </RNText>
        </View>
        <OTPInput
          length={6}
          onComplete={(value: string) => console.log(value)}
        />
        <Button onPress={handleThemeTogglePress} variant="ghost">
          <Text>Change Email</Text>
        </Button>
      </View>
    </View>
  );
};
