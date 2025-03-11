import { View } from 'react-native';
import { Text } from '@design/Text';

export const LandingBackground = () => {
  return (
    <View className="flex-1 p-4">
      {/* Floating shapes */}
      <View className="absolute top-16 left-8 w-28 h-28 rotate-12 bg-primary/20 rounded-full animate-float" />
      <View className="absolute top-32 right-12 w-32 h-32 -rotate-6 bg-accent/30 rounded-3xl animate-float-slow" />
      <View className="absolute top-48 left-20 w-24 h-24 rotate-45 bg-secondary-foreground/20 rounded-lg animate-pulse" />

      {/* Event cards with proper layout */}
      <View className="absolute top-64 left-6 w-40 h-24 bg-card/90 rounded-xl shadow-sm animate-slide-right">
        <View className="p-3 h-full justify-between">
          <Text className="text-sm font-medium">Game Night</Text>
          <View className="flex-row items-center">
            <Text className="text-xs text-muted-foreground">
              Tomorrow • 7 PM
            </Text>
          </View>
        </View>
      </View>

      <View className="absolute top-72 right-6 w-40 h-24 bg-card/90 rounded-xl shadow-sm animate-slide-left">
        <View className="p-3 h-full justify-between">
          <Text className="text-sm font-medium">Movie Meetup</Text>
          <View className="flex-row items-center">
            <Text className="text-xs text-muted-foreground">Friday • 8 PM</Text>
          </View>
        </View>
      </View>

      <View className="items-center mt-20">
        <Text className="text-4xl font-bold animate-fade-in">Gatherly</Text>
      </View>
    </View>
  );
};
