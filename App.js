import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Menu from './screens/Menu';
import Game from './screens/Game';
import Win from './screens/Win';
import Rules from './screens/Rules';
import Settings from './screens/Settings';
import {SettingsContext} from './SettingsContext';

const App = () => {
  const Stack = createNativeStackNavigator();
  const [currLanguage, setCurrLanguage] = useState('en');
  const [level, setLevel] = useState(1);

  return (
    <SettingsContext.Provider
      value={{currLanguage, setCurrLanguage, level, setLevel}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Group>
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Game" component={Game} />
            <Stack.Screen name="Win" component={Win} />
            <Stack.Screen name="Rules" component={Rules} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </SettingsContext.Provider>
  );
};

export default App;
