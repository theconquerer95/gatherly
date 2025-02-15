import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '../types';

import { Route_Config as routeConfig } from './routeConfig';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator id={undefined}>
        {routeConfig.map(route => (
          <Stack.Screen
            key={route.name}
            name={route.name}
            component={route.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
